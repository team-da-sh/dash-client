import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// or "@vitejs/plugin-react" based on your preference
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // React 플러그인
    react(),
    // tsconfig.json 경로 설정
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        // SVG 관련 설정
        icon: true,
      },
    }),
    vanillaExtractPlugin({
      // vanilla-extract 플러그인 설정
      identifiers: 'debug',
    }),
  ],
});
