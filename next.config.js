module.exports = {
  reactStrictMode: true,
  resolve: {
    fallback: {
        "fs": false
    },
  },
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      }
    ]
  }
    
}
