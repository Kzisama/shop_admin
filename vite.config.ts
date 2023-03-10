import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), WindiCSS()],
	server: {
		proxy: {
			"/base": {
				target: "http://127.0.0.1:8081",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/base/, ""),
			},
		},
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "src"),
		},
	},
});
