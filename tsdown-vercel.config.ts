import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['./lib/server.ts'],
    outDir: 'dist',
    minify: true,
    shims: true,
    clean: true,
    // ✨ 核心修复：强制包含 patchright-core 和 puppeteer-core 的 json 配置文件
    assets: [
        'node_modules/patchright-core/**/*.json',
        'node_modules/puppeteer-core/**/*.json'
    ],
    deps: {
        onlyBundle: false,
    },
});
