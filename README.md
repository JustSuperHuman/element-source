# element-source overlay

A fork of [element-source](https://github.com/AikidoSec/element-source) with a built-in browser overlay for inspecting DOM elements. Drop in a single `<script>` tag and get a draggable, collapsible panel that shows you the source file, component name, and line number of any element you hover over. No install, no config, no build step.

https://github.com/user-attachments/assets/demo.mp4

## Usage

Add the script to your page. That's it.

```html
<script src="https://cdn.jsdelivr.net/gh/JustSuperHuman/element-source@main/packages/element-source/dist/overlay.global.js"></script>
```

### Next.js

Use alongside [react-scan](https://github.com/aidenybai/react-scan) for full dev-mode inspection. Only load in development:

```tsx
import Script from "next/script";

const isDevelopment = process.env.NODE_ENV === "development";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {isDevelopment && (
            <Script
              async
              crossOrigin="anonymous"
              src="//cdn.jsdelivr.net/gh/JustSuperHuman/element-source@main/packages/element-source/dist/overlay.global.js"
              strategy="afterInteractive"
            />
        )}
        {children}
      </body>
    </html>
  );
}
```

### Plain HTML

```html
<script src="https://cdn.jsdelivr.net/gh/JustSuperHuman/element-source@main/packages/element-source/dist/overlay.global.js"></script>
```

### Vite / Webpack / Any bundler

```ts
import "element-source/overlay";
```

## Features

- **One script tag** — no npm install, no imports, no build config
- **Draggable panel** — move it anywhere on screen, position is remembered
- **Collapse to edge** — click the `x` button or drag the panel to the left/right edge to dock it as a slim tab. Click the tab to expand
- **Toggle inspection** — flip the switch to enable/disable element highlighting
- **Hover to inspect** — highlights the element under your cursor with a green border and shows its tag name, component, source file, and line number
- **Click to copy** — click any element while inspecting to copy its source location to your clipboard
- **Console logging** — toggle the `log` button to also output element info to your browser console with collapsible details
- **Persistent state** — enabled/disabled, panel position, dock side, and log toggle are all saved in `localStorage`
- **Framework support** — works with React, Vue, Svelte, and Solid

## How it works

This is a fork of [element-source](https://github.com/AikidoSec/element-source) which resolves source file locations for DOM elements across React, Vue, Svelte, and Solid. This fork adds a self-contained browser overlay (`overlay.global.js`) that bundles the entire library into a single IIFE script. It auto-initializes on page load — no API calls needed.

## Building from source

```bash
pnpm install
cd packages/element-source
pnpm tsup
```

Output: `packages/element-source/dist/overlay.global.js`

## API

The full programmatic API from the original library is still available if you need it:

```ts
import { resolveElementInfo, resolveSource, resolveStack, resolveComponentName } from "element-source";

const info = await resolveElementInfo(element);
// {
//   tagName: "button",
//   componentName: "Counter",
//   source: { filePath: "src/Counter.tsx", lineNumber: 12, columnNumber: 5, componentName: "Counter" },
//   stack: [...]
// }
```

See the [original README](https://github.com/AikidoSec/element-source) for the full API reference.

## License

MIT
