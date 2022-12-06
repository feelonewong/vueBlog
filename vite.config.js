import { fileURLToPath, URL } from 'node:url'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [ AntDesignVueResolver() ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: "0.0.0.0",
      port: env.VITE_APP_PORT,
      proxy: {
        "api": {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: true,
          rewrite: (path)=>path.replace(/^\/api/, "")
        }
      }
    }
  }
})