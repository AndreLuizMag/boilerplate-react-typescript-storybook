/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import scss from 'rollup-plugin-scss'

export default defineConfig({
	plugins: [react(), scss(), dts({ include: ['src'] })],
	test: {
		globals: true,
		environment: 'jsdom',
	},
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			input: Object.fromEntries(
				glob
					.sync('src/**/*.{ts,tsx}')
					.filter(
						(file) =>
							!file.includes('.test.ts') &&
							!file.includes('.stories.ts') &&
							!file.includes('/assets') &&
							!file.includes('/styles') &&
							!file.includes('App.tsx') &&
							!file.includes('main.tsx')
					)
					.map((file) => [
						relative(
							'src',
							file.slice(
								0,
								file.length - extname(file).length
							)
						),
						fileURLToPath(new URL(file, import.meta.url)),
					])
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
			},
		},
	},
})
