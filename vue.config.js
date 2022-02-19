const path = require("path");

module.exports = {
    publicPath: '',

    pluginOptions: {
        i18n: {
            locale: 'da',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
            enableBridge: false
        }
    }
}