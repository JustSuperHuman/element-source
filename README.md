# element-source overlay

A fork of [element-source](https://github.com/AikidoSec/element-source) with a built-in browser overlay for inspecting DOM elements. Drop in a single `<script>` tag and get a tiny draggable pill that lets you click-to-inspect any element on the page. No install, no config, no build step.

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

## How it works

1. A small **"ES" pill** appears on your page. Drag it anywhere — position is saved in `localStorage`
2. **Click the pill** to enter inspect mode (it turns green)
3. **Hover** over any element — it highlights with a green border and shows the component name, tag, and source file near your cursor
4. **Click an element** to select it — the source location is copied to your clipboard and a toast shows the full info. Inspect mode turns off automatically
5. Press **Escape** to cancel without selecting

## Features

- **One script tag** — no npm install, no imports, no build config
- **Tiny footprint** — just a 32px draggable circle, stays out of your way
- **Click to inspect** — click the pill, hover to find your element, click to select. Done
- **Auto-copies source** — clicking an element copies `file:line` to your clipboard
- **Movable** — drag the pill anywhere, position persists across reloads
- **Escape to cancel** — press Esc to exit inspect mode without selecting
- **Framework support** — works with React, Vue, Svelte, and Solid

## About

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
