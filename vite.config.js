import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    build: {
      outDir: 'public',
      emptyOutDir: true, // also necessary
    },
    // To access env vars here use process.env.TEST_VAR
    plugins: [react()],
  });
}
