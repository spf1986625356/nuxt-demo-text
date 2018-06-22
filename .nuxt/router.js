import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3cb0e661 = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _0d5e67b1 = () => import('../pages/helpcenter.vue' /* webpackChunkName: "pages/helpcenter" */).then(m => m.default || m)
const _dfaf0148 = () => import('../pages/helpcenter/sdk.vue' /* webpackChunkName: "pages/helpcenter/sdk" */).then(m => m.default || m)
const _0c0e929e = () => import('../pages/helpcenter/guide.vue' /* webpackChunkName: "pages/helpcenter/guide" */).then(m => m.default || m)
const _6d64ebd4 = () => import('../pages/helpcenter/apiprotocol.vue' /* webpackChunkName: "pages/helpcenter/apiprotocol" */).then(m => m.default || m)
const _2db37caf = () => import('../pages/helpcenter/apidocuments/index.vue' /* webpackChunkName: "pages/helpcenter/apidocuments/index" */).then(m => m.default || m)
const _50df053b = () => import('../pages/helpcenter/company-introduction/index.vue' /* webpackChunkName: "pages/helpcenter/company-introduction/index" */).then(m => m.default || m)
const _3486a0d9 = () => import('../pages/helpcenter/helptitle.vue' /* webpackChunkName: "pages/helpcenter/helptitle" */).then(m => m.default || m)
const _dad54fcc = () => import('../pages/helpcenter/apidocuments/sealapi.vue' /* webpackChunkName: "pages/helpcenter/apidocuments/sealapi" */).then(m => m.default || m)
const _5f706284 = () => import('../pages/helpcenter/apidocuments/remotelyapi.vue' /* webpackChunkName: "pages/helpcenter/apidocuments/remotelyapi" */).then(m => m.default || m)
const _d7b4b64c = () => import('../pages/helpcenter/apidocuments/standardapi.vue' /* webpackChunkName: "pages/helpcenter/apidocuments/standardapi" */).then(m => m.default || m)
const _7612947e = () => import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */).then(m => m.default || m)
const _b1d75e52 = () => import('../pages/verify/index.vue' /* webpackChunkName: "pages/verify/index" */).then(m => m.default || m)
const _418bc44a = () => import('../pages/verify/companyaccount.vue' /* webpackChunkName: "pages/verify/companyaccount" */).then(m => m.default || m)
const _3fb17952 = () => import('../pages/verify/step.vue' /* webpackChunkName: "pages/verify/step" */).then(m => m.default || m)
const _7ac5b9c6 = () => import('../pages/register/stup.vue' /* webpackChunkName: "pages/register/stup" */).then(m => m.default || m)
const _6000f8b1 = () => import('../pages/verify/companysuccess.vue' /* webpackChunkName: "pages/verify/companysuccess" */).then(m => m.default || m)
const _2e4427db = () => import('../pages/register/information.vue' /* webpackChunkName: "pages/register/information" */).then(m => m.default || m)
const _004818ff = () => import('../pages/register/accountregister.vue' /* webpackChunkName: "pages/register/accountregister" */).then(m => m.default || m)
const _ff47f264 = () => import('../pages/register/accout.vue' /* webpackChunkName: "pages/register/accout" */).then(m => m.default || m)
const _06536870 = () => import('../pages/verify/companyinfo.vue' /* webpackChunkName: "pages/verify/companyinfo" */).then(m => m.default || m)
const _5286c2c8 = () => import('../pages/verify/companychecking.vue' /* webpackChunkName: "pages/verify/companychecking" */).then(m => m.default || m)
const _7a817b47 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _3cb0e661,
			name: "login"
		},
		{
			path: "/helpcenter",
			component: _0d5e67b1,
			name: "helpcenter",
			children: [
				{
					path: "sdk",
					component: _dfaf0148,
					name: "helpcenter-sdk"
				},
				{
					path: "guide",
					component: _0c0e929e,
					name: "helpcenter-guide"
				},
				{
					path: "apiprotocol",
					component: _6d64ebd4,
					name: "helpcenter-apiprotocol"
				},
				{
					path: "apidocuments",
					component: _2db37caf,
					name: "helpcenter-apidocuments"
				},
				{
					path: "company-introduction",
					component: _50df053b,
					name: "helpcenter-company-introduction"
				},
				{
					path: "helptitle",
					component: _3486a0d9,
					name: "helpcenter-helptitle"
				},
				{
					path: "apidocuments/sealapi",
					component: _dad54fcc,
					name: "helpcenter-apidocuments-sealapi"
				},
				{
					path: "apidocuments/remotelyapi",
					component: _5f706284,
					name: "helpcenter-apidocuments-remotelyapi"
				},
				{
					path: "apidocuments/standardapi",
					component: _d7b4b64c,
					name: "helpcenter-apidocuments-standardapi"
				}
			]
		},
		{
			path: "/register",
			component: _7612947e,
			name: "register"
		},
		{
			path: "/verify",
			component: _b1d75e52,
			name: "verify"
		},
		{
			path: "/verify/companyaccount",
			component: _418bc44a,
			name: "verify-companyaccount"
		},
		{
			path: "/verify/step",
			component: _3fb17952,
			name: "verify-step"
		},
		{
			path: "/register/stup",
			component: _7ac5b9c6,
			name: "register-stup"
		},
		{
			path: "/verify/companysuccess",
			component: _6000f8b1,
			name: "verify-companysuccess"
		},
		{
			path: "/register/information",
			component: _2e4427db,
			name: "register-information"
		},
		{
			path: "/register/accountregister",
			component: _004818ff,
			name: "register-accountregister"
		},
		{
			path: "/register/accout",
			component: _ff47f264,
			name: "register-accout"
		},
		{
			path: "/verify/companyinfo",
			component: _06536870,
			name: "verify-companyinfo"
		},
		{
			path: "/verify/companychecking",
			component: _5286c2c8,
			name: "verify-companychecking"
		},
		{
			path: "/",
			component: _7a817b47,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
