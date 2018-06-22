'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '首页',
    titleTemplate: '%s | openAPI',
    meta: [
      { charset: 'utf-8' },
      { name: 'keywords', content: '葫芦娃电子合同' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '葫芦娃电子合同' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  resolve: {
    alias: {
      'src': resolve('src'),
      'common': resolve('src/common')
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        },{
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            include: [resolve('static/icons')],
            options: {
              symbolId: 'icon-[name]'
            }
          })
      }
    }
  },
  plugins: [
    {src:'~/plugins/iview',ssr:true},
    {src:'~/plugins/elementui',ssr:true}
  ],

}
