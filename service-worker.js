if(!self.define){let e,r={};const s=(s,o)=>(s=new URL(s+".js",o).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let u={};const t=e=>s(e,l),n={module:{uri:l},exports:u,require:t};r[l]=Promise.all(o.map((e=>n[e]||t(e)))).then((e=>(i(...e),u)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"uviereport"}),self.skipWaiting(),e.precacheAndRoute([{url:"/uviereportTest/css/109.b34e1391.css",revision:null},{url:"/uviereportTest/css/232.91e37c69.css",revision:null},{url:"/uviereportTest/css/246.019d3075.css",revision:null},{url:"/uviereportTest/css/248.6382eff7.css",revision:null},{url:"/uviereportTest/css/378.af3a4bc6.css",revision:null},{url:"/uviereportTest/css/477.12888439.css",revision:null},{url:"/uviereportTest/css/499.8155ded5.css",revision:null},{url:"/uviereportTest/css/51.8d8335bc.css",revision:null},{url:"/uviereportTest/css/549.af3a4bc6.css",revision:null},{url:"/uviereportTest/css/563.94810c30.css",revision:null},{url:"/uviereportTest/css/615.019d3075.css",revision:null},{url:"/uviereportTest/css/639.56191d90.css",revision:null},{url:"/uviereportTest/css/724.56191d90.css",revision:null},{url:"/uviereportTest/css/759.2242de04.css",revision:null},{url:"/uviereportTest/css/765.3e2b6cfe.css",revision:null},{url:"/uviereportTest/css/812.c3988445.css",revision:null},{url:"/uviereportTest/css/864.91f47dc2.css",revision:null},{url:"/uviereportTest/css/895.84a46b38.css",revision:null},{url:"/uviereportTest/css/921.bbf6a973.css",revision:null},{url:"/uviereportTest/css/922.c9feedc8.css",revision:null},{url:"/uviereportTest/css/956.45d9a737.css",revision:null},{url:"/uviereportTest/css/chunk-vendors.7a5886f9.css",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.4f3ab3a1.eot",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.53ae192b.woff2",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.73676d33.ttf",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.86426dd8.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.2eaa390d.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.b25f67ad.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.7dc03ee4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.c8dc6424.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.447291a8.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.fc482e61.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.1b15168e.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.e26ba339.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.0e01b6cd.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.603ca9a5.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.1b5e142f.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.232ef4b2.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.45753203.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.6e1ae5f0.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.872f7060.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.e06fb533.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.475ba9e4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.bcefbfee.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.0668fae6.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.e3a9ebda.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.c13c157c.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.f7a95c9c.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.1111028d.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.b0e084ab.woff2",revision:null},{url:"/uviereportTest/index.html",revision:"c9d41a79f2d1843a7346aee8bad61b14"},{url:"/uviereportTest/js/109.05615ca7.js",revision:null},{url:"/uviereportTest/js/120.e6406902.js",revision:null},{url:"/uviereportTest/js/232.a19d42db.js",revision:null},{url:"/uviereportTest/js/246.c1d9d152.js",revision:null},{url:"/uviereportTest/js/248.22f0754f.js",revision:null},{url:"/uviereportTest/js/30.16617607.js",revision:null},{url:"/uviereportTest/js/378.bc5d225e.js",revision:null},{url:"/uviereportTest/js/4.2a8f3f4b.js",revision:null},{url:"/uviereportTest/js/477.b20ca607.js",revision:null},{url:"/uviereportTest/js/499.2382d597.js",revision:null},{url:"/uviereportTest/js/5.208c639a.js",revision:null},{url:"/uviereportTest/js/51.53d3354b.js",revision:null},{url:"/uviereportTest/js/549.58933de6.js",revision:null},{url:"/uviereportTest/js/563.36a2becc.js",revision:null},{url:"/uviereportTest/js/613.3c48e9a4.js",revision:null},{url:"/uviereportTest/js/615.c2e9899a.js",revision:null},{url:"/uviereportTest/js/639.233ee0d8.js",revision:null},{url:"/uviereportTest/js/724.af7bb013.js",revision:null},{url:"/uviereportTest/js/731.6993f000.js",revision:null},{url:"/uviereportTest/js/759.45bae0ba.js",revision:null},{url:"/uviereportTest/js/765.7de467a7.js",revision:null},{url:"/uviereportTest/js/812.c2a56e3d.js",revision:null},{url:"/uviereportTest/js/856.4df4fd56.js",revision:null},{url:"/uviereportTest/js/864.ff3850fa.js",revision:null},{url:"/uviereportTest/js/895.c3162c13.js",revision:null},{url:"/uviereportTest/js/921.ffaea790.js",revision:null},{url:"/uviereportTest/js/922.d7613aa1.js",revision:null},{url:"/uviereportTest/js/956.3721343a.js",revision:null},{url:"/uviereportTest/js/app.b0158df3.js",revision:null},{url:"/uviereportTest/js/chunk-vendors.dd1f092a.js",revision:null},{url:"/uviereportTest/manifest.json",revision:"0c3dcf9b91b2d00eb6edbdd7f65d71a2"},{url:"/uviereportTest/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
