import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		ignores: ['dist/**'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			curly: 'error',
			'vue/multi-word-component-names': ['error', { ignores: ['index'] }]
		}
	},
	pluginVue.configs['flat/essential']
])
