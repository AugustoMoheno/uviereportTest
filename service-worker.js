if(!self.define){let e,r={};const s=(s,o)=>(s=new URL(s+".js",o).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let u={};const t=e=>s(e,l),n={module:{uri:l},exports:u,require:t};r[l]=Promise.all(o.map((e=>n[e]||t(e)))).then((e=>(i(...e),u)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"uviereport"}),self.skipWaiting(),e.precacheAndRoute([{url:"/uviereportTest/css/105.a189a5d4.css",revision:null},{url:"/uviereportTest/css/147.12f705ff.css",revision:null},{url:"/uviereportTest/css/287.e7ec0dae.css",revision:null},{url:"/uviereportTest/css/289.af3a4bc6.css",revision:null},{url:"/uviereportTest/css/400.1a30edef.css",revision:null},{url:"/uviereportTest/css/506.bbf6a973.css",revision:null},{url:"/uviereportTest/css/51.8d8335bc.css",revision:null},{url:"/uviereportTest/css/563.94810c30.css",revision:null},{url:"/uviereportTest/css/566.019d3075.css",revision:null},{url:"/uviereportTest/css/60.af3a4bc6.css",revision:null},{url:"/uviereportTest/css/639.56191d90.css",revision:null},{url:"/uviereportTest/css/720.92c9e07c.css",revision:null},{url:"/uviereportTest/css/724.56191d90.css",revision:null},{url:"/uviereportTest/css/737.1d5f53dc.css",revision:null},{url:"/uviereportTest/css/757.b34e1391.css",revision:null},{url:"/uviereportTest/css/787.9c699663.css",revision:null},{url:"/uviereportTest/css/847.45d9a737.css",revision:null},{url:"/uviereportTest/css/864.91f47dc2.css",revision:null},{url:"/uviereportTest/css/922.c9feedc8.css",revision:null},{url:"/uviereportTest/css/97.019d3075.css",revision:null},{url:"/uviereportTest/css/980.fc549d44.css",revision:null},{url:"/uviereportTest/css/chunk-vendors.7a5886f9.css",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.4f3ab3a1.eot",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.53ae192b.woff2",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.73676d33.ttf",revision:null},{url:"/uviereportTest/fonts/MaterialIcons-Regular.86426dd8.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.2eaa390d.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Black.b25f67ad.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.7dc03ee4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BlackItalic.c8dc6424.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.447291a8.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Bold.fc482e61.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.1b15168e.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-BoldItalic.e26ba339.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.0e01b6cd.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Light.603ca9a5.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.1b5e142f.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-LightItalic.232ef4b2.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.45753203.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Medium.6e1ae5f0.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.872f7060.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-MediumItalic.e06fb533.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.475ba9e4.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Regular.bcefbfee.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.0668fae6.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-RegularItalic.e3a9ebda.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.c13c157c.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-Thin.f7a95c9c.woff2",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.1111028d.woff",revision:null},{url:"/uviereportTest/fonts/Roboto-ThinItalic.b0e084ab.woff2",revision:null},{url:"/uviereportTest/index.html",revision:"67931ec2443134d53babc5c005c23baa"},{url:"/uviereportTest/js/105.ffdc64d1.js",revision:null},{url:"/uviereportTest/js/120.e6406902.js",revision:null},{url:"/uviereportTest/js/147.20bc8b23.js",revision:null},{url:"/uviereportTest/js/287.00656a67.js",revision:null},{url:"/uviereportTest/js/289.e8871b37.js",revision:null},{url:"/uviereportTest/js/30.16617607.js",revision:null},{url:"/uviereportTest/js/4.2a8f3f4b.js",revision:null},{url:"/uviereportTest/js/400.14abffab.js",revision:null},{url:"/uviereportTest/js/5.1415c9a9.js",revision:null},{url:"/uviereportTest/js/506.1d3da849.js",revision:null},{url:"/uviereportTest/js/51.a0636275.js",revision:null},{url:"/uviereportTest/js/563.9180cafa.js",revision:null},{url:"/uviereportTest/js/566.52f650d4.js",revision:null},{url:"/uviereportTest/js/60.2e4dba38.js",revision:null},{url:"/uviereportTest/js/610.5c6c8ef9.js",revision:null},{url:"/uviereportTest/js/613.3c48e9a4.js",revision:null},{url:"/uviereportTest/js/639.7f8d1616.js",revision:null},{url:"/uviereportTest/js/720.ad1ccaed.js",revision:null},{url:"/uviereportTest/js/724.af7bb013.js",revision:null},{url:"/uviereportTest/js/731.6993f000.js",revision:null},{url:"/uviereportTest/js/737.6c5f10b8.js",revision:null},{url:"/uviereportTest/js/757.d3f540cb.js",revision:null},{url:"/uviereportTest/js/787.c9b045be.js",revision:null},{url:"/uviereportTest/js/847.ce75b407.js",revision:null},{url:"/uviereportTest/js/856.4df4fd56.js",revision:null},{url:"/uviereportTest/js/864.586bb21a.js",revision:null},{url:"/uviereportTest/js/922.d7613aa1.js",revision:null},{url:"/uviereportTest/js/947.4fc22229.js",revision:null},{url:"/uviereportTest/js/97.6d920e5c.js",revision:null},{url:"/uviereportTest/js/980.37b96ecf.js",revision:null},{url:"/uviereportTest/js/app.5a5d6814.js",revision:null},{url:"/uviereportTest/js/chunk-vendors.dd1f092a.js",revision:null},{url:"/uviereportTest/manifest.json",revision:"0c3dcf9b91b2d00eb6edbdd7f65d71a2"},{url:"/uviereportTest/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
