/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,

  /** ServerSide에서 StyledComponents가 작동하게 함 */
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
