import { resolveElementInfo } from "./resolve.js";
import { formatStackFrame } from "./utils/format-stack-frame.js";
import type { ElementInfo } from "./types.js";

const STORAGE_KEY = "element-source-overlay";
const OVERLAY_ID = "element-source-overlay";
const HIGHLIGHT_ID = "element-source-highlight";
const LABEL_ID = "element-source-label";

interface OverlayState {
  enabled: boolean;
  x: number;
  y: number;
  logToConsole: boolean;
}

const DEFAULT_STATE: OverlayState = {
  enabled: false,
  x: 16,
  y: 16,
  logToConsole: false,
};

const loadState = (): OverlayState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATE };
  }
};

const saveState = (state: OverlayState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // silent
  }
};

const createStyles = (): HTMLStyleElement => {
  const style = document.createElement("style");
  style.textContent = `
    #${OVERLAY_ID} {
      position: fixed;
      z-index: 2147483647;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 12px;
      user-select: none;
      -webkit-user-select: none;
      pointer-events: auto;
    }

    #${OVERLAY_ID} .es-panel {
      background: #1a1a2e;
      color: #e0e0e0;
      border: 1px solid #333;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      min-width: 220px;
    }

    #${OVERLAY_ID} .es-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px;
      background: #16213e;
      cursor: grab;
      gap: 8px;
    }

    #${OVERLAY_ID} .es-header:active {
      cursor: grabbing;
    }

    #${OVERLAY_ID} .es-title {
      font-weight: 600;
      font-size: 11px;
      color: #a0c4ff;
      white-space: nowrap;
    }

    #${OVERLAY_ID} .es-controls {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    #${OVERLAY_ID} .es-toggle {
      position: relative;
      width: 36px;
      height: 18px;
      background: #444;
      border-radius: 9px;
      cursor: pointer;
      transition: background 0.2s;
      border: none;
      padding: 0;
    }

    #${OVERLAY_ID} .es-toggle.es-on {
      background: #4caf50;
    }

    #${OVERLAY_ID} .es-toggle::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      background: #fff;
      border-radius: 50%;
      transition: transform 0.2s;
    }

    #${OVERLAY_ID} .es-toggle.es-on::after {
      transform: translateX(18px);
    }

    #${OVERLAY_ID} .es-log-btn {
      background: none;
      border: 1px solid #555;
      color: #999;
      border-radius: 4px;
      padding: 1px 5px;
      cursor: pointer;
      font-size: 10px;
      font-family: inherit;
      transition: all 0.15s;
    }

    #${OVERLAY_ID} .es-log-btn.es-on {
      border-color: #ff9800;
      color: #ff9800;
    }

    #${OVERLAY_ID} .es-body {
      padding: 8px 10px;
      max-height: 200px;
      overflow-y: auto;
      line-height: 1.5;
    }

    #${OVERLAY_ID} .es-body:empty::after {
      content: "Hover over elements...";
      color: #666;
      font-style: italic;
    }

    #${OVERLAY_ID} .es-tag {
      color: #ff79c6;
    }

    #${OVERLAY_ID} .es-component {
      color: #50fa7b;
    }

    #${OVERLAY_ID} .es-file {
      color: #8be9fd;
      word-break: break-all;
    }

    #${OVERLAY_ID} .es-line {
      color: #ffb86c;
    }

    #${OVERLAY_ID} .es-separator {
      color: #555;
      margin: 2px 0;
    }

    #${HIGHLIGHT_ID} {
      position: fixed;
      z-index: 2147483646;
      pointer-events: none;
      border: 2px solid #4caf50;
      background: rgba(76, 175, 80, 0.1);
      border-radius: 2px;
      transition: all 0.05s ease-out;
    }

    #${LABEL_ID} {
      position: fixed;
      z-index: 2147483647;
      pointer-events: none;
      background: #1a1a2e;
      color: #e0e0e0;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid #333;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      white-space: nowrap;
    }
  `;
  return style;
};

const escapeHtml = (str: string): string =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const formatInfo = (info: ElementInfo): string => {
  const parts: string[] = [];

  parts.push(`<span class="es-tag">&lt;${escapeHtml(info.tagName)}&gt;</span>`);

  if (info.componentName) {
    parts.push(`<span class="es-component">${escapeHtml(info.componentName)}</span>`);
  }

  if (info.source) {
    const loc = info.source.lineNumber
      ? `<span class="es-file">${escapeHtml(info.source.filePath)}</span>:<span class="es-line">${info.source.lineNumber}</span>`
      : `<span class="es-file">${escapeHtml(info.source.filePath)}</span>`;
    parts.push(loc);
  }

  return parts.join("<br>");
};

const formatShortLabel = (info: ElementInfo): string => {
  const tag = `<${info.tagName}>`;
  if (info.componentName) return `${info.componentName} ${tag}`;
  return tag;
};

const init = (): void => {
  if (typeof document === "undefined") return;
  if (document.getElementById(OVERLAY_ID)) return;

  const state = loadState();

  // Create highlight element
  const highlight = document.createElement("div");
  highlight.id = HIGHLIGHT_ID;
  highlight.style.display = "none";
  document.body.appendChild(highlight);

  // Create floating label near cursor
  const label = document.createElement("div");
  label.id = LABEL_ID;
  label.style.display = "none";
  document.body.appendChild(label);

  // Create overlay panel
  const overlay = document.createElement("div");
  overlay.id = OVERLAY_ID;
  overlay.style.left = `${state.x}px`;
  overlay.style.top = `${state.y}px`;

  overlay.innerHTML = `
    <div class="es-panel">
      <div class="es-header">
        <span class="es-title">element-source</span>
        <div class="es-controls">
          <button class="es-log-btn ${state.logToConsole ? "es-on" : ""}" title="Log to console">log</button>
          <button class="es-toggle ${state.enabled ? "es-on" : ""}" title="Toggle inspection"></button>
        </div>
      </div>
      <div class="es-body"></div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.head.appendChild(createStyles());

  const header = overlay.querySelector(".es-header") as HTMLElement;
  const toggle = overlay.querySelector(".es-toggle") as HTMLButtonElement;
  const logBtn = overlay.querySelector(".es-log-btn") as HTMLButtonElement;
  const body = overlay.querySelector(".es-body") as HTMLElement;

  // Drag logic
  let dragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  const onMouseDown = (event: MouseEvent): void => {
    if (event.target === toggle || event.target === logBtn) return;
    dragging = true;
    dragOffsetX = event.clientX - overlay.offsetLeft;
    dragOffsetY = event.clientY - overlay.offsetTop;
    event.preventDefault();
  };

  const onMouseMove = (event: MouseEvent): void => {
    if (!dragging) return;
    const x = Math.max(0, Math.min(window.innerWidth - 100, event.clientX - dragOffsetX));
    const y = Math.max(0, Math.min(window.innerHeight - 40, event.clientY - dragOffsetY));
    overlay.style.left = `${x}px`;
    overlay.style.top = `${y}px`;
    state.x = x;
    state.y = y;
    saveState(state);
  };

  const onMouseUp = (): void => {
    dragging = false;
  };

  header.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  // Toggle
  toggle.addEventListener("click", () => {
    state.enabled = !state.enabled;
    toggle.classList.toggle("es-on", state.enabled);
    saveState(state);
    if (!state.enabled) {
      highlight.style.display = "none";
      label.style.display = "none";
      body.innerHTML = "";
    }
  });

  // Log toggle
  logBtn.addEventListener("click", () => {
    state.logToConsole = !state.logToConsole;
    logBtn.classList.toggle("es-on", state.logToConsole);
    saveState(state);
  });

  // Hover inspection
  let pendingResolve: number | null = null;
  let lastTarget: Element | null = null;

  const isOverlayElement = (element: Element): boolean =>
    element.id === OVERLAY_ID ||
    element.id === HIGHLIGHT_ID ||
    element.id === LABEL_ID ||
    element.closest(`#${OVERLAY_ID}`) !== null;

  const updateHighlight = (target: Element): void => {
    const rect = target.getBoundingClientRect();
    highlight.style.display = "block";
    highlight.style.left = `${rect.left}px`;
    highlight.style.top = `${rect.top}px`;
    highlight.style.width = `${rect.width}px`;
    highlight.style.height = `${rect.height}px`;
  };

  const updateLabel = (target: Element, text: string, mouseX: number, mouseY: number): void => {
    label.textContent = text;
    label.style.display = "block";

    const labelRect = label.getBoundingClientRect();
    let labelX = mouseX + 12;
    let labelY = mouseY - labelRect.height - 8;

    if (labelX + labelRect.width > window.innerWidth) {
      labelX = mouseX - labelRect.width - 12;
    }
    if (labelY < 0) {
      labelY = mouseY + 20;
    }

    label.style.left = `${labelX}px`;
    label.style.top = `${labelY}px`;
  };

  document.addEventListener(
    "mousemove",
    (event: MouseEvent) => {
      if (!state.enabled || dragging) return;

      const target = document.elementFromPoint(event.clientX, event.clientY);
      if (!target || isOverlayElement(target)) {
        highlight.style.display = "none";
        label.style.display = "none";
        return;
      }

      updateHighlight(target);

      if (target === lastTarget) {
        // Just update label position
        if (label.style.display !== "none") {
          updateLabel(target, label.textContent ?? "", event.clientX, event.clientY);
        }
        return;
      }

      lastTarget = target;

      if (pendingResolve !== null) {
        cancelAnimationFrame(pendingResolve);
      }

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      pendingResolve = requestAnimationFrame(() => {
        pendingResolve = null;
        resolveElementInfo(target).then((info) => {
          if (lastTarget !== target) return;

          body.innerHTML = formatInfo(info);
          updateLabel(target, formatShortLabel(info), mouseX, mouseY);

          if (state.logToConsole) {
            const logParts: string[] = [`<${info.tagName}>`];
            if (info.componentName) logParts.push(`Component: ${info.componentName}`);
            if (info.source) {
              logParts.push(`Source: ${info.source.filePath}:${info.source.lineNumber ?? "?"}`);
            }
            if (info.stack.length > 1) {
              logParts.push(`Stack:${info.stack.map(formatStackFrame).join("")}`);
            }
            console.log(
              `%c[element-source]%c ${logParts.join(" | ")}`,
              "color: #4caf50; font-weight: bold",
              "color: inherit",
            );
            // eslint-disable-next-line no-debugger
            if (typeof console.groupCollapsed === "function") {
              console.groupCollapsed("[element-source] Element details");
              console.log("Element:", target);
              console.log("Info:", info);
              console.groupEnd();
            }
          }
        });
      });
    },
    { passive: true },
  );

  // Click to copy source path
  document.addEventListener("click", (event: MouseEvent) => {
    if (!state.enabled) return;

    const target = document.elementFromPoint(event.clientX, event.clientY);
    if (!target || isOverlayElement(target)) return;

    event.preventDefault();
    event.stopPropagation();

    resolveElementInfo(target).then((info) => {
      if (!info.source) return;

      const location = info.source.lineNumber
        ? `${info.source.filePath}:${info.source.lineNumber}`
        : info.source.filePath;

      navigator.clipboard.writeText(location).then(() => {
        const original = body.innerHTML;
        body.innerHTML = `<span style="color: #4caf50">Copied: ${escapeHtml(location)}</span>`;
        setTimeout(() => {
          body.innerHTML = original;
        }, 1500);
      });
    });
  }, true);
};

// Auto-init when DOM is ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}

export { init };
