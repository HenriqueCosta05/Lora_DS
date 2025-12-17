import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts', './src/styles/globals.css'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    tsconfig: './tsconfig.build.json',
    external: ['react', 'react-dom', 'next', '@iconify-icon/react'],
    loader: {
        '.css': 'copy'
    },
    outDir: 'dist',
    esbuildOptions(options) {
        options.banner = {
            js: '"use client";'
        };
    }
});
