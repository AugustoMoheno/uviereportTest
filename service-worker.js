if(!self.define){let e,r={};const o=(o,s)=>(o=new URL(o+".js",s).href,r[o]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=r,document.head.appendChild(e)}else e=o,importScripts(o),r()})).then((()=>{let e=r[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(s,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let l={};const u=e=>o(e,t),n={module:{uri:t},exports:l,require:u};r[t]=Promise.all(s.map((e=>n[e]||u(e)))).then((e=>(i(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"uviereport"}),self.skipWaiting(),e.precacheAndRoute([{url:"/uviereportTest/css/193.56191d90.css",revision:null},{url:"/uviereportTest/css/203.019d3075.css",revision:null},{url:"/uviereportTest/css/345.54975c57.css",revision:null},{url:"/uviereportTest/css/601.45d9a737.css",revision:null},{url:"/uviereportTest/css/624.e573c359.css",revision:null},{url:"/uviereportTest/css/632.1012b468.css",revision:null},{url:"/uviereportTest/css/706.9b6d20a1.css",revision:null},{url:"/uviereportTest/css/81.3e2b6cfe.css",revision:null},{url:"/uviereportTest/css/860.b34e1391.css",revision:null},{url:"/uviereportTest/css/90.af3a4bc6.css",revision:null},{url:"/uviereportTest/css/942.c9feedc8.css",revision:null},{url:"/uviereportTest/css/962.56191d90.css",revision:null},{url:"/uviereportTest/css/chunk-vendors.d77038d1.css",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.4f3ab3a1.eot",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.53ae192b.woff2",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.73676d33.ttf",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.86426dd8.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.2eaa390d.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.b25f67ad.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.7dc03ee4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.c8dc6424.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.447291a8.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.fc482e61.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.1b15168e.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.e26ba339.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.0e01b6cd.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.603ca9a5.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.1b5e142f.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.232ef4b2.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.45753203.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.6e1ae5f0.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.872f7060.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.e06fb533.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.475ba9e4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.bcefbfee.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.0668fae6.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.e3a9ebda.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.c13c157c.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.f7a95c9c.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.1111028d.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.b0e084ab.woff2",revision:null},{url:"/uviereportTest/index.html",revision:"d0bff58f4b10420875cbdefe1d2415eb"},{url:"/uviereportTest/js/120.e6406902.js",revision:null},{url:"/uviereportTest/js/193.0fbeae01.js",revision:null},{url:"/uviereportTest/js/199.adb6edbd.js",revision:null},{url:"/uviereportTest/js/203.4ce49f7d.js",revision:null},{url:"/uviereportTest/js/345.d7609da3.js",revision:null},{url:"/uviereportTest/js/348.e1388fbd.js",revision:null},{url:"/uviereportTest/js/601.80e32d44.js",revision:null},{url:"/uviereportTest/js/624.fb50f384.js",revision:null},{url:"/uviereportTest/js/632.9cedd556.js",revision:null},{url:"/uviereportTest/js/706.ee59daf6.js",revision:null},{url:"/uviereportTest/js/748.6a3f9d0e.js",revision:null},{url:"/uviereportTest/js/81.53080cc8.js",revision:null},{url:"/uviereportTest/js/856.4df4fd56.js",revision:null},{url:"/uviereportTest/js/860.5225d085.js",revision:null},{url:"/uviereportTest/js/90.f28c24d2.js",revision:null},{url:"/uviereportTest/js/928.fcaa785d.js",revision:null},{url:"/uviereportTest/js/939.06cc79fe.js",revision:null},{url:"/uviereportTest/js/942.4844b2a5.js",revision:null},{url:"/uviereportTest/js/962.a9c06838.js",revision:null},{url:"/uviereportTest/js/app.c523c029.js",revision:null},{url:"/uviereportTest/js/chunk-vendors.82d40baf.js",revision:null},{url:"/uviereportTest/manifest.json",revision:"0c3dcf9b91b2d00eb6edbdd7f65d71a2"},{url:"/uviereportTest/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
