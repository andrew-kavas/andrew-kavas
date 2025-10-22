// frontend/vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// import config from '#src/config.js';

const { process } = globalThis;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const define = {
    'process.env.VERSION': JSON.stringify(env.VITE_VERSION),
    // todo: conditionally set these based on the environment
    'process.env.ANDREWKAVAS_API_URL': JSON.stringify(
      env.VITE_ANDREWKAVAS_API_URL
    ),
    'process.env.ANDREWKAVAS_APP_URL': JSON.stringify(
      env.VITE_ANDREWKAVAS_APP_URL
    )
  };

  return {
    // add env to process for react
    define,
    server: {
      host: '0.0.0.0',
      // todo: revisit this
      port: env.VITE_VERSION === 'development' ? 3000 : 80, // Ensure this is consistent with your Docker Compose setup
      allowedHosts: [
        'akavas.com',
        'app.akavas.com',
        'www.akavas.com',
        'andrew-kavas.fly.dev'
        // 'www.akavas.com',
        // 'andrewkavas.com',
        // 'localhost'
      ],
      strictPort: true // Ensures Vite will only start if the port is available
    },
    plugins: [react()]
  };
});
