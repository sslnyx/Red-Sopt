module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "~@/assets/scss/app.scss";
          `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/redsopt/'
    : '/'
}
