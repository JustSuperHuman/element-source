import { resolveElementInfo } from "./resolve.js";
import type { ElementInfo } from "./types.js";

const STORAGE_KEY = "element-source-overlay";
const PILL_ID = "element-source-pill";
const HIGHLIGHT_ID = "element-source-highlight";
const LABEL_ID = "element-source-label";
const TOAST_ID = "element-source-toast";

interface OverlayState {
  x: number;
  y: number;
}

const DEFAULT_STATE: OverlayState = {
  x: 16,
  y: 16,
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
    #${PILL_ID} {
      position: fixed;
      z-index: 2147483647;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #16213e;
      border: 1.5px solid #333;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
      cursor: grab;
      user-select: none;
      -webkit-user-select: none;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      font-weight: 700;
      color: #a0c4ff;
      transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
      pointer-events: auto;
    }

    #${PILL_ID}:hover {
      background: #1a1a2e;
      border-color: #555;
    }

    #${PILL_ID}:active {
      cursor: grabbing;
    }

    #${PILL_ID}.es-active {
      background: #1b3a1b;
      border-color: #4caf50;
      color: #4caf50;
      box-shadow: 0 0 12px rgba(76, 175, 80, 0.3);
      cursor: crosshair;
    }

    #${HIGHLIGHT_ID} {
      position: fixed;
      z-index: 2147483646;
      pointer-events: none;
      border: 2px solid #4caf50;
      background: rgba(76, 175, 80, 0.08);
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
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid #333;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      white-space: nowrap;
      max-width: 500px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #${TOAST_ID} {
      position: fixed;
      z-index: 2147483647;
      pointer-events: none;
      background: #1a1a2e;
      color: #e0e0e0;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 11px;
      line-height: 1.5;
      padding: 8px 14px;
      border-radius: 8px;
      border: 1px solid #333;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      max-width: 420px;
      word-break: break-all;
      opacity: 0;
      transform: translateY(4px);
      transition: opacity 0.2s, transform 0.2s;
    }

    #${TOAST_ID}.es-visible {
      opacity: 1;
      transform: translateY(0);
    }

    #${TOAST_ID} .es-tag { color: #ff79c6; }
    #${TOAST_ID} .es-component { color: #50fa7b; }
    #${TOAST_ID} .es-file { color: #8be9fd; }
    #${TOAST_ID} .es-line { color: #ffb86c; }
    #${TOAST_ID} .es-copied { color: #4caf50; font-size: 10px; margin-top: 2px; }
  `;
  return style;
};

const escapeHtml = (str: string): string =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const formatToast = (info: ElementInfo, copied: string | null): string => {
  const lines: string[] = [];
  lines.push(`<span class="es-tag">&lt;${escapeHtml(info.tagName)}&gt;</span>`);
  if (info.componentName) {
    lines.push(`<span class="es-component">${escapeHtml(info.componentName)}</span>`);
  }
  if (info.source) {
    const loc = info.source.lineNumber
      ? `<span class="es-file">${escapeHtml(info.source.filePath)}</span>:<span class="es-line">${info.source.lineNumber}</span>`
      : `<span class="es-file">${escapeHtml(info.source.filePath)}</span>`;
    lines.push(loc);
  }
  if (copied) {
    lines.push(`<span class="es-copied">copied to clipboard</span>`);
  }
  return lines.join("<br>");
};

const formatShortLabel = (info: ElementInfo): string => {
  const parts: string[] = [];
  if (info.componentName) parts.push(info.componentName);
  parts.push(`<${info.tagName}>`);
  if (info.source) {
    const file = info.source.filePath.split("/").pop() ?? info.source.filePath;
    parts.push(info.source.lineNumber ? `${file}:${info.source.lineNumber}` : file);
  }
  return parts.join(" ");
};

const init = (): void => {
  if (typeof document === "undefined") return;
  if (document.getElementById(PILL_ID)) return;

  const state = loadState();
  let inspecting = false;

  // Highlight box
  const highlight = document.createElement("div");
  highlight.id = HIGHLIGHT_ID;
  highlight.style.display = "none";
  document.body.appendChild(highlight);

  // Label near cursor
  const label = document.createElement("div");
  label.id = LABEL_ID;
  label.style.display = "none";
  document.body.appendChild(label);

  // Toast for showing result after click
  const toast = document.createElement("div");
  toast.id = TOAST_ID;
  document.body.appendChild(toast);

  // Pill button
  const pill = document.createElement("div");
  pill.id = PILL_ID;
  pill.textContent = "ES";
  pill.style.left = `${state.x}px`;
  pill.style.top = `${state.y}px`;
  document.body.appendChild(pill);

  document.head.appendChild(createStyles());

  // --- State helpers ---

  let toastTimer: ReturnType<typeof setTimeout> | null = null;

  const activate = (): void => {
    inspecting = true;
    pill.classList.add("es-active");
  };

  const deactivate = (): void => {
    inspecting = false;
    pill.classList.remove("es-active");
    highlight.style.display = "none";
    label.style.display = "none";
    lastTarget = null;
  };

  const showToast = (html: string, nearX: number, nearY: number): void => {
    toast.innerHTML = html;
    toast.classList.remove("es-visible");

    // Position near the click
    toast.style.left = `${nearX + 16}px`;
    toast.style.top = `${nearY + 16}px`;

    // Force reflow then show
    void toast.offsetHeight;
    toast.classList.add("es-visible");

    // Clamp to viewport
    const rect = toast.getBoundingClientRect();
    if (rect.right > window.innerWidth - 8) {
      toast.style.left = `${nearX - rect.width - 8}px`;
    }
    if (rect.bottom > window.innerHeight - 8) {
      toast.style.top = `${nearY - rect.height - 8}px`;
    }

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("es-visible");
    }, 2500);
  };

  // --- Drag logic ---

  let dragging = false;
  let didDrag = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  pill.addEventListener("mousedown", (event: MouseEvent) => {
    dragging = true;
    didDrag = false;
    dragOffsetX = event.clientX - pill.offsetLeft;
    dragOffsetY = event.clientY - pill.offsetTop;
    event.preventDefault();
  });

  document.addEventListener("mousemove", (event: MouseEvent) => {
    if (!dragging) return;
    didDrag = true;
    const x = Math.max(0, Math.min(window.innerWidth - 36, event.clientX - dragOffsetX));
    const y = Math.max(0, Math.min(window.innerHeight - 36, event.clientY - dragOffsetY));
    pill.style.left = `${x}px`;
    pill.style.top = `${y}px`;
    state.x = x;
    state.y = y;
    saveState(state);
  });

  document.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
  });

  // Click pill to toggle inspect mode (only if not dragged)
  pill.addEventListener("click", () => {
    if (didDrag) return;
    if (inspecting) {
      deactivate();
    } else {
      activate();
    }
  });

  // --- Hover inspection ---

  let pendingResolve: number | null = null;
  let lastTarget: Element | null = null;

  const isOwnElement = (element: Element): boolean =>
    element.id === PILL_ID ||
    element.id === HIGHLIGHT_ID ||
    element.id === LABEL_ID ||
    element.id === TOAST_ID;

  const updateHighlight = (target: Element): void => {
    const rect = target.getBoundingClientRect();
    highlight.style.display = "block";
    highlight.style.left = `${rect.left}px`;
    highlight.style.top = `${rect.top}px`;
    highlight.style.width = `${rect.width}px`;
    highlight.style.height = `${rect.height}px`;
  };

  const updateLabel = (text: string, mouseX: number, mouseY: number): void => {
    label.textContent = text;
    label.style.display = "block";

    const rect = label.getBoundingClientRect();
    let x = mouseX + 14;
    let y = mouseY - rect.height - 10;

    if (x + rect.width > window.innerWidth - 8) x = mouseX - rect.width - 14;
    if (y < 8) y = mouseY + 22;

    label.style.left = `${x}px`;
    label.style.top = `${y}px`;
  };

  document.addEventListener(
    "mousemove",
    (event: MouseEvent) => {
      if (!inspecting || dragging) return;

      const target = document.elementFromPoint(event.clientX, event.clientY);
      if (!target || isOwnElement(target)) {
        highlight.style.display = "none";
        label.style.display = "none";
        return;
      }

      updateHighlight(target);

      if (target === lastTarget) {
        if (label.style.display !== "none") {
          updateLabel(label.textContent ?? "", event.clientX, event.clientY);
        }
        return;
      }

      lastTarget = target;
      if (pendingResolve !== null) cancelAnimationFrame(pendingResolve);

      const mx = event.clientX;
      const my = event.clientY;

      pendingResolve = requestAnimationFrame(() => {
        pendingResolve = null;
        resolveElementInfo(target).then((info) => {
          if (lastTarget !== target) return;
          updateLabel(formatShortLabel(info), mx, my);
        });
      });
    },
    { passive: true },
  );

  // --- Click to select element ---

  document.addEventListener(
    "click",
    (event: MouseEvent) => {
      if (!inspecting) return;

      const target = document.elementFromPoint(event.clientX, event.clientY);
      if (!target || isOwnElement(target)) return;

      event.preventDefault();
      event.stopPropagation();

      const clickX = event.clientX;
      const clickY = event.clientY;

      deactivate();

      resolveElementInfo(target).then((info) => {
        let copied: string | null = null;
        if (info.source) {
          copied = info.source.lineNumber
            ? `${info.source.filePath}:${info.source.lineNumber}`
            : info.source.filePath;
          navigator.clipboard.writeText(copied).catch(() => {});
        }
        showToast(formatToast(info, copied), clickX, clickY);
      });
    },
    true,
  );

  // Escape to cancel
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && inspecting) {
      deactivate();
    }
  });
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
