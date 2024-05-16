/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [react(), dts({ include: ['src'] })],
	test: {
		globals: true,
		environment: 'jsdom',
	},
})
