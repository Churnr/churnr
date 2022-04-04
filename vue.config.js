const path = require("path");
const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [{
        path: '/',
        lastmod: '2022-03-24',
        priority: 1.0,
        changefreq: 'yearly'
    },
    {
        path: '/solution',
        lastmod: '2022-03-24',
        priority: 0.9,
        changefreq: 'yearly'
    },
    {
        path: '/about',
        lastmod: '2022-03-24',
        priority: 0.9,
        changefreq: 'yearly'
    },
    {
        path: '/contact',
        lastmod: '2022-03-24',
        priority: 0.9,
        changefreq: 'yearly'
    },{
        path: '/privacyPolicy',
        lastmod: '2022-03-24',
        priority: 0.8,
        changefreq: 'yearly'
    },{
        path: '/cookies',
        lastmod: '2022-03-24',
        priority: 0.8,
        changefreq: 'yearly'
    }
]

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({
                base: 'https://churnr.dk',
                paths
            })
        ]
    },

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