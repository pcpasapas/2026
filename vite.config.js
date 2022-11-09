import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
    server: {
        https: true,
        host: '127.0.0.1',
        hmr: {
            host: 'localhost'
        },
    },
    plugins: [
        basicSsl(),

        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: true,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
