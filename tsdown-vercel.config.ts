import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['./lib/server.ts'],
    outDir: 'dist',        // ← 改这里
    minify: true,
    shims: true,
    clean: true,
    deps: {
        onlyBundle: false,
    },
});
