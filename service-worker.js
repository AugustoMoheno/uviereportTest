if(!self.define){let e,o={};const r=(r,s)=>(r=new URL(r+".js",s).href,o[r]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=o,document.head.appendChild(e)}else e=r,importScripts(r),o()})).then((()=>{let e=o[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let l={};const u=e=>r(e,i),n={module:{uri:i},exports:l,require:u};o[i]=Promise.all(s.map((e=>n[e]||u(e)))).then((e=>(t(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"uviereport"}),self.skipWaiting(),e.precacheAndRoute([{url:"/uviereportTest/css/252.30c54482.css",revision:null},{url:"/uviereportTest/css/400.56191d90.css",revision:null},{url:"/uviereportTest/css/449.abbdbf43.css",revision:null},{url:"/uviereportTest/css/60.019d3075.css",revision:null},{url:"/uviereportTest/css/690.3e2b6cfe.css",revision:null},{url:"/uviereportTest/css/893.45d9a737.css",revision:null},{url:"/uviereportTest/css/942.c9feedc8.css",revision:null},{url:"/uviereportTest/css/chunk-vendors.d77038d1.css",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.4f3ab3a1.eot",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.53ae192b.woff2",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.73676d33.ttf",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.86426dd8.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.2eaa390d.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.b25f67ad.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.7dc03ee4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.c8dc6424.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.447291a8.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.fc482e61.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.1b15168e.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.e26ba339.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.0e01b6cd.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.603ca9a5.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.1b5e142f.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.232ef4b2.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.45753203.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.6e1ae5f0.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.872f7060.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.e06fb533.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.475ba9e4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.bcefbfee.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.0668fae6.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.e3a9ebda.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.c13c157c.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.f7a95c9c.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.1111028d.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.b0e084ab.woff2",revision:null},{url:"/uviereportTest/index.html",revision:"9c2695dd9a7688bd4f840d1455267c74"},{url:"/uviereportTest/js/120.e6406902.js",revision:null},{url:"/uviereportTest/js/252.79803315.js",revision:null},{url:"/uviereportTest/js/348.e1388fbd.js",revision:null},{url:"/uviereportTest/js/370.43a799b8.js",revision:null},{url:"/uviereportTest/js/400.51c69223.js",revision:null},{url:"/uviereportTest/js/449.0c814a4a.js",revision:null},{url:"/uviereportTest/js/60.f4c0e54a.js",revision:null},{url:"/uviereportTest/js/690.79901e38.js",revision:null},{url:"/uviereportTest/js/748.6a3f9d0e.js",revision:null},{url:"/uviereportTest/js/856.4df4fd56.js",revision:null},{url:"/uviereportTest/js/893.8732eb7b.js",revision:null},{url:"/uviereportTest/js/939.06cc79fe.js",revision:null},{url:"/uviereportTest/js/942.4844b2a5.js",revision:null},{url:"/uviereportTest/js/app.f058de11.js",revision:null},{url:"/uviereportTest/js/chunk-vendors.82d40baf.js",revision:null},{url:"/uviereportTest/manifest.json",revision:"570a0cb504b3a6376e613a75d9854e82"},{url:"/uviereportTest/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
