/** @type {import('next').NextConfig} */
// 배포 대상: https://postechair.github.io/event/ (프로젝트 repo "event")
// 루트 사이트로 옮길 때는 BASE_PATH="" 로 빌드하면 된다.
const basePath = process.env.BASE_PATH ?? "/event";

const nextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
