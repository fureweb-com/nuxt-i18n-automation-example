(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{309:function(t,n,e){var content=e(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("1b7833da",content,!0,{sourceMap:!1})},313:function(t,n,e){"use strict";e(309)},314:function(t,n,e){var o=e(101)(!1);o.push([t.i,".mt-1{margin-top:.5rem}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.table{min-width:300px;margin:0 auto}td,th{width:50%;height:40px;line-height:40px}.links{padding-top:15px}",""]),t.exports=o},364:function(t,n,e){"use strict";e.r(n);e(51);var o={name:"Index",computed:{sheetsUrl:function(){return"https://docs.google.com/spreadsheets/d/1TZu5G5VxPRoXeCjY7-OQbHFp09y73wGTiDsyzk6UwPQ/edit#gid=0"},sheetsText:function(){return"".concat(this.$t("common.sheetsPath")," (").concat(this.$t("common.clickHere"),")")}},methods:{changeLanguage:function(t){this.$i18n.setLocale(t)},goToNotExistPage:function(){var t=this.$i18n.locale,n=this.$i18n.defaultLocale,path="/".concat(t===n?"":t,"/weird-path-here");this.$router.push(path)},openRepositoryPage:function(){window.open("https://github.com/fureweb-com/nuxt-i18n-automation-example")}}},c=(e(313),e(64)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("key")]),t._v(" "),e("th",[t._v(t._s(t.$t("common.translateResult")))])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("common.title")]),t._v(" "),e("td",[t._v(t._s(t.$t("common.title")))])]),t._v(" "),e("tr",[e("td",[t._v("common.description")]),t._v(" "),e("td",[t._v(t._s(t.$t("common.description")))])]),t._v(" "),e("tr",[e("td",[t._v("common.button")]),t._v(" "),e("td",[t._v(t._s(t.$t("common.button")))])])])]),t._v(" "),e("div",{staticClass:"description"},[e("a",{attrs:{href:t.sheetsUrl,target:"_blank"},domProps:{textContent:t._s(t.sheetsText)}})]),t._v(" "),e("div",{staticClass:"links"},[e("button",{staticClass:"button button--green",on:{click:function(n){return t.changeLanguage("ko")}}},[t._v("KO")]),t._v(" "),e("button",{staticClass:"button button--green",on:{click:function(n){return t.changeLanguage("en")}}},[t._v("EN")]),t._v(" "),e("button",{staticClass:"button button--green",on:{click:function(n){return t.changeLanguage("ja")}}},[t._v("JA")])]),t._v(" "),e("button",{staticClass:"button button--green mt-1",on:{click:t.goToNotExistPage}},[t._v(t._s(t.$t("common.goToNotExistPage")))]),t._v(" "),e("button",{staticClass:"button button--green mt-1",on:{click:t.openRepositoryPage}},[t._v(t._s(t.$t("common.goToRepository")))])])])}),[],!1,null,null,null);n.default=component.exports}}]);