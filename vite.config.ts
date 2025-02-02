import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
	base: "",
	plugins: [
		solid({
			hot: false,
		}),
	],
	server: {
		port: 8080,
	},
})
