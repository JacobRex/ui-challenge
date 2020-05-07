const path = require('path');

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            'vue-loader',
            {
              loader: 'markdown-to-vue-loader',
              options: {
              }
            }
          ]
        },
      );

      // Setup Aliases
      config.resolve.alias = {
        'vue$': 'vue/dist/vue.esm.js',
        Assets: path.resolve(__dirname, 'assets'),
        Components: path.resolve(__dirname, 'components'),
        Static: path.resolve(__dirname, 'static'),
        Utils: path.resolve(__dirname, 'components/Utils'),
        DocComponents: path.resolve(__dirname, 'components/Documentation'),
        DocUtils: path.resolve(__dirname, 'components/Documentation/utils'),
      };

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-import': {
          resolve(id) {
            const aliases = {
              Vars: path.resolve(__dirname, 'assets/styles/vars.css'),
            };

            for (let alias in aliases) {
              if (id === alias) {
                id = aliases[alias];
              }
            }

            return id;
          },
        },
        'postcss-nesting': {},
        'postcss-custom-media': {},
        'postcss-preset-env': {
          browsers: 'last 2 versions',
        },
        cssnano: {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
        },
      },
    },
  }
};
