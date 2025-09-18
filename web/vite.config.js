import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 参考：https://cn.vitejs.dev/config/
export default defineConfig({
	base: '/',
	resolve: {
		// 配置别名
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	plugins: [vue()],
	server: {
		host: '0.0.0.0',
		port: 3100,
		open: false
	}
})
