// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(() => {
//   return {
//     build: {
//       outDir: "build",
//     },
//     plugins: [react()],
//     base: "./", // This ensures paths use the current directory during build
//   };
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'activities': resolve(__dirname, 'src/activities'), 
      'app': resolve(__dirname, 'src/app'), 
      'components': resolve(__dirname, 'src/components'), 
      'lib': resolve(__dirname, 'src/lib'), 
    },
  },
  server: {
    port: 3000,
  },
})