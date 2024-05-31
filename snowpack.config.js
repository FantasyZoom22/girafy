/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
   async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    process.env.NODE_ENV === 'development' && '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv'
  ].filter(Boolean), // Filters out false values
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
