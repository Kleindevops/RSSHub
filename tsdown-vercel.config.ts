import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['./lib/server.ts'],
    outDir: '.',           // 改成根目录（重要！）
    minify: true,
    shims: true,
    clean: true,
    deps: {
        onlyBundle: false,
    },
});
