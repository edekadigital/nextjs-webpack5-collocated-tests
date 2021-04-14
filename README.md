# Next.js - build fails with collocated-tests when using webpack 5

This repo showcases a Next.js issue (version 10.1.3): Building the application for production fails with collocated tests when using webpack 5.

- Tests are collocated
- `webpack.IgnorePlugin` is used to exclude test files from build
- Webpack 5 usage is enabled

> Both moving tests to a directory outside of `/pages` and disabling webpack 5 option will make it work.

## Reproduce

### 1. Install dependencies

```bash
npm install
```

### 2. Start Next.js in development mode [passes]

```bash
npm run dev
```

### 3. Build the application for production [fails]

```bash
npm run build
```

```bash
> nextjs-webpack5-collocated-tests@1.0.0 build
> next build

info  - Using webpack 5. Reason: future.webpack5 option enabled https://nextjs.org/docs/messages/webpack5
info  - Checking validity of types
info  - Creating an optimized production build
Failed to compile.

HookWebpackError: Cannot read property 'slice' of undefined

> Build error occurred
Error: > Build failed because of webpack errors
    at /Users/rschapka/Playground-Workspace/nextjs-webpack5/node_modules/next/dist/build/index.js:17:924
    at async Span.traceAsyncFn (/Users/rschapka/Playground-Workspace/nextjs-webpack5/node_modules/next/dist/telemetry/trace/trace.js:5:584)
```
