import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// or "@vitejs/plugin-react" based on your preference
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // React 플러그인
    svgr({
      svgrOptions: {
        icon: true, // SVG 관련 설정
      },
    }),
    vanillaExtractPlugin({
      identifiers: 'debug', // vanilla-extract 플러그인 설정
    }),
  ],
});
