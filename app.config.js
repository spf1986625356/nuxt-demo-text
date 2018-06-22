/**
 * @desc App Config
 *
 */

'use strict'

const isProd = process.env.NODE_ENV === 'production'

const baseApiUrl = isProd ? 'http://114.215.139.164:2333/' : 'http://114.215.139.164:2333/'

export default {
  baseApiUrl,
  service: {
    url: '/',
    method: 'get',
    baseURL: baseApiUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer '
    },
    timeout: 12000,
    responseType: 'json'
  },
  codeMap: {
    FAILED: -1,
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    SERVER_ERROR: 500,
    PARAMS_ERROR: 10001
  },
  constant: {
    menus: [
      { key: 'index', title: '首页', icon: 'home' },
      { key: 'archive', title: '归档', icon: 'archive' },
      { key: 'guestbook', title: '留言墙', icon: 'guestbook' },
      { key: 'about', title: '关于', icon: 'about' }
    ]
  }
}
