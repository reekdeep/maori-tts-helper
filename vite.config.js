import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/maori-tts-helper/',  // matches your repo name
  plugins: [react()],
})
// This config sets the base path for your app to work correctly on GitHub Pages
// and includes the React plugin for Vite.
// Make sure to run `npm run build` before deploying to GitHub Pages
// to generate the static files in the `dist` directory.
// You can then push the contents of `dist` to the `gh-pages` branch of your repo.
// If you need to deploy to a different branch or directory, adjust the `base` option accordingly.
// For example, if you deploy to a subdirectory like `docs`, change `base: '/maori-tts-helper/'` to `base: '/docs/'`.
// If you want to use a custom domain, you can set the `base` option to your domain.
// For more details on Vite configuration, see: https://vitejs.dev/config/
// For deploying to GitHub Pages, you can use the `gh-pages` npm package:
// npm install gh-pages --save-dev