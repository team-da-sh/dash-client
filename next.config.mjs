/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Single-Page Application (SPA) 출력.
  distDir: './dist', // 빌드 출력 디렉터리를 `./dist/`로 변경합니다.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
