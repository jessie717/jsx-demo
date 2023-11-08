import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ElementPlus from 'unplugin-element-plus/vite'

import { compress } from './plugins/compress'

export default defineConfig(async ({ mode }) => {
	return {
		plugins: [vue(), vueJsx(), ElementPlus({}), mode === 'production' && compress && compress()],
		server: {
			open: true,
			port: 3003
		},
		build: {
			rollupOptions: {
				output: {
					entryFileNames: `assets/js/[name].[hash].js`,
					chunkFileNames: `assets/js/[name].[hash].js`,
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
					manualChunks: {
						vue: ['vue'],
						'vue-router': ['vue-router'],
						pinia: ['pinia'],
						axios: ['axios'],
						'element-plus': ['element-plus']
					}
				}
			}
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
})
