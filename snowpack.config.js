/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
  {
    name: '@snowpack/plugin-react-refresh',
    options: {
      // Add this line to disable React Refresh in production
      skipEnvCheck: process.env.NODE_ENV !== 'production',
    },
  },
  '@snowpack/plugin-dotenv',
],
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
