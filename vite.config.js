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
// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';

// Define __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 'activities': resolve(__dirname, 'src/activities'), 
      // 'app': resolve(__dirname, 'src/app'), 
      // 'components': resolve(__dirname, 'src/components'), 
      // 'lib': resolve(__dirname, 'src/lib'), 
      activities: '/src/activities', 
      app: '/src/app', 
      authentication: '/src/authentication', 
      clubs: '/src/clubs', 
      comments: '/src/comments', 
      components: '/src/components', 
      Directions: '/src/Directions', 
      groups: '/src/groups', 
      images: '/src/images', 
      jsonFetches: '/src/jsonFetches', 
      lib: 'src/lib',
      links: 'src/links',
      locales: 'src/locales',
      memberPerspective: 'src/memberPerspective',
      members: 'src/members',
      messages: 'src/messages',
      microsoftLogin: 'src/microsoftLogin',
      paymentMethods: 'src/paymentMethods',
      payments: 'src/payments',
      pendings: 'src/pendings',
      postcodes: 'src/postcodes',
      posts: 'src/posts',
      scenes: 'src/scenes',
      signup: 'src/signup',
      sponsors: 'src/sponsors',
      user: 'src/user',
    },
  },
  server: {
    port: 3000,
  },
})