import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['./lib/server.ts'],
    outDir: 'dist',
    minify: true,
    shims: true,
    clean: true,
    deps: {
        onlyBundle: false,
    },
});
