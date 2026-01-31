import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: 'debug', // 기존 Vite 설정과 동일 (short | debug | custom)
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Single-Page Application (SPA) 출력.
  distDir: './dist', // 빌드 출력 디렉터리를 `./dist/`로 변경합니다.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // 상위 폴더 lockfile과 구분해 이 프로젝트를 루트로 사용 (경고 제거)
  outputFileTracingRoot: __dirname,
  // src/pages는 SPA(react-router) 컴포넌트이므로 Pages Router로 검증하지 않도록 비활성화
  typedRoutes: false,
  eslint: {
    // 마이그레이션 단계에서 기존 a11y/훅 규칙으로 빌드 실패하지 않도록 무시 (추후 규칙 수정 후 제거 권장)
    ignoreDuringBuilds: true,
  },
  // 개발환경에서만 API 프록시 설정 (CORS 우회)
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_DEV_BASE_URL}/:path*`,
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
