/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/07/31/production-scale/index.html",
    "revision": "6f76b85dd6f28ba7ff419a12be487750"
  },
  {
    "url": "2019/08/01/marble-stone-processing-industry/index.html",
    "revision": "251f600fc97a8482bfcfaed497f66cb5"
  },
  {
    "url": "404.html",
    "revision": "9bc6b56e88076cbc0999e59f58115d31"
  },
  {
    "url": "about-us/index.html",
    "revision": "4352581f5f3bbb908df6a45d8b2d9b1c"
  },
  {
    "url": "contact/index.html",
    "revision": "8610f3accf6074ec7eb191aec48ddc22"
  },
  {
    "url": "data-slider/1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "favicon.ico",
    "revision": "e57f27e0c2473b42619139cab7f3b349"
  },
  {
    "url": "feed.xml",
    "revision": "ef136a7794933b93791eec2b2c668a98"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "666d6638938e3524c0f59b9f46d225c8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "d76081f1c7e559e05a0634bdb0c4d10b"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "50e4549767a5d0223ba976d09433b7cb"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "f6240cdcb37de62fd5482cc6388880dc"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "8d7ea3073d8a419eb559d89bf74d1119"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "be7dd2bd89eaca1362910baa445ee341"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "f7f2307ff75f6f04756821ce430bc64a"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "f89ab9897a9966d0f4bb16c0032e51b1"
  },
  {
    "url": "images/products/1-teraso-cetak-1.jpeg",
    "revision": "88f88084823901cf172f33f441a0b8cd"
  },
  {
    "url": "images/products/1-teraso-cetak-2.jpeg",
    "revision": "8d71c73982499c56120692d5cf9aa17a"
  },
  {
    "url": "images/products/1-teraso-cetak-3.jpeg",
    "revision": "92c13eebebe5ab876c0e452f36627071"
  },
  {
    "url": "images/products/1-teraso-cetak.jpeg",
    "revision": "be58fc6ef439bd815b2c122970ae3d98"
  },
  {
    "url": "images/products/2-river-stone-1.jpeg",
    "revision": "1c82142ed784ca536de52900d8869d76"
  },
  {
    "url": "images/products/2-river-stone-2.jpeg",
    "revision": "dd181ab2b85d03f544c6dfb6d0c9f98b"
  },
  {
    "url": "images/products/2-river-stone-3.jpeg",
    "revision": "f3d7ec43eeaed959f5e8010a6337299c"
  },
  {
    "url": "images/products/2-river-stone-4.jpeg",
    "revision": "e73676dc6585320ba14eec3c560e7628"
  },
  {
    "url": "images/products/2-river-stone.jpeg",
    "revision": "10619168863995614e5ecb7d6e8b7216"
  },
  {
    "url": "images/products/3-white-marble-stone-1-1.jpeg",
    "revision": "e52c8c527b00ee4c7fbd9846429d981b"
  },
  {
    "url": "images/products/3-white-marble-stone-1-2.jpeg",
    "revision": "b9d4acae95bd4381a494307ff53aa64a"
  },
  {
    "url": "images/products/3-white-marble-stone-1.jpeg",
    "revision": "77512b7f0b7ec0c79a4ac1f48b422ba9"
  },
  {
    "url": "images/products/3-white-marble-stone-2-1.jpeg",
    "revision": "137ac7b0b006caa484de575e8504b657"
  },
  {
    "url": "images/products/3-white-marble-stone-2.jpeg",
    "revision": "1bcb58745d17df022d5450e5d4fb94e7"
  },
  {
    "url": "images/products/3-white-marble-stone-3-1.jpeg",
    "revision": "f64c9550325bab20945cc73b24ee2377"
  },
  {
    "url": "images/products/3-white-marble-stone-3-2.jpeg",
    "revision": "36581ad49f2a1c2dcb8fdd74af2eb862"
  },
  {
    "url": "images/products/3-white-marble-stone-3.jpeg",
    "revision": "93da1759716ac70fd8652287c322fd8f"
  },
  {
    "url": "images/products/3-white-marble-stone-4-1.jpeg",
    "revision": "b471f647c0aa8361648044f4b31d0277"
  },
  {
    "url": "images/products/3-white-marble-stone-4-2.jpeg",
    "revision": "eacfd702a4280f6e74be2074c89cf39f"
  },
  {
    "url": "images/products/3-white-marble-stone-4.jpeg",
    "revision": "27c6e96c98cc7ce83e830fb2f3b70071"
  },
  {
    "url": "images/products/3-white-marble-stone.jpeg",
    "revision": "1bcb58745d17df022d5450e5d4fb94e7"
  },
  {
    "url": "images/products/a-1200x300.jpeg",
    "revision": "7c636b725127ef6078e00a92f7df4aec"
  },
  {
    "url": "images/products/a.jpeg",
    "revision": "a14bfc4452b6a66726dcd9f3a75baa7b"
  },
  {
    "url": "images/products/b-1200x300.jpeg",
    "revision": "7b55d56e550f3b74dcfe1d426494b44f"
  },
  {
    "url": "images/products/b.jpeg",
    "revision": "8369707649e72d10ed695a1108c7eb55"
  },
  {
    "url": "images/products/c-1200x300.jpeg",
    "revision": "a0c44b92f0466af98542253845a7a6b1"
  },
  {
    "url": "images/products/c.jpeg",
    "revision": "57d9d6d39c332a51df464ba2efcd2f1a"
  },
  {
    "url": "images/products/d.jpeg",
    "revision": "b674f2c052ff46c51f03f7cfd0dc7322"
  },
  {
    "url": "images/products/e.jpeg",
    "revision": "ca8d8e3c8f4a68158f5d889bf272cfed"
  },
  {
    "url": "images/products/f.jpeg",
    "revision": "6a843bf455acfc648b5e2ea9eb9a1856"
  },
  {
    "url": "images/products/g.jpeg",
    "revision": "946c537abfe9edfa08cefe8aa377f0bb"
  },
  {
    "url": "images/products/h.jpeg",
    "revision": "b22802c6952ea9230eae90abec85016c"
  },
  {
    "url": "images/products/i.jpeg",
    "revision": "058688b446f8da53de31aa7905835ed0"
  },
  {
    "url": "images/products/marble-cream.jpeg",
    "revision": "112cd4f6f74781f5e2957f9d107b297c"
  },
  {
    "url": "images/products/marble-grey.jpeg",
    "revision": "3ff24032c7a37edbb5ac1d19124173c4"
  },
  {
    "url": "images/spinner.gif",
    "revision": "aa6c24d78d1883d3d7ebfb01ee5d6691"
  },
  {
    "url": "index.html",
    "revision": "f5c0081a6ed2e4f8607828fac23009b0"
  },
  {
    "url": "inspiration/index.html",
    "revision": "a6040947088111daa95107f3df281a6e"
  },
  {
    "url": "manifest.json",
    "revision": "2f93bb21d552716bda9eac5f6d2ef802"
  },
  {
    "url": "order/index.html",
    "revision": "a2f1cfffc75bb6f839415dbef8336914"
  },
  {
    "url": "product/bathup/index.html",
    "revision": "0154e68bcb02f07da1eb7e100b702556"
  },
  {
    "url": "product/cream-marble/index.html",
    "revision": "5769ab91da3445af4668f141c358203e"
  },
  {
    "url": "product/index.html",
    "revision": "a67610ce7899824c1d12709d70d214ba"
  },
  {
    "url": "product/marble-cream/index.html",
    "revision": "9fbb35be91d6a3159dd5749a9db74ba5"
  },
  {
    "url": "product/marble-grey/index.html",
    "revision": "898039b529526c8d464981364055401a"
  },
  {
    "url": "product/river-stone/index.html",
    "revision": "c9573fe4f13e6f945ec3fc9352869d33"
  },
  {
    "url": "product/terrazo-print/index.html",
    "revision": "9d569695d4f9b059805ab9c3dec364cb"
  },
  {
    "url": "product/white-marble-stone-2/index.html",
    "revision": "1173fd023d25f35d21d0c8b0d67d9d00"
  },
  {
    "url": "product/white-marble-stone-3/index.html",
    "revision": "e344132c78a31f21fc3ef48276ed9519"
  },
  {
    "url": "product/white-marble-stone-4/index.html",
    "revision": "824befca0dc3787ff77b069270391a85"
  },
  {
    "url": "product/white-marble-stone/index.html",
    "revision": "9178a37ae5de11839e310246482397f2"
  },
  {
    "url": "project/index.html",
    "revision": "5a4bbd82e9971b5d5cb03d1d7315c8cb"
  },
  {
    "url": "project/wastafel-1/index.html",
    "revision": "e84446ecc72f6e58e0b2a69aaa03d109"
  },
  {
    "url": "robots.txt",
    "revision": "805b475b193e1da1cfaf48f5ae8cf0fc"
  },
  {
    "url": "sitemap.xml",
    "revision": "a0f4457983b1d469daf824298565aebf"
  },
  {
    "url": "static/app.css",
    "revision": "debfc07302701df251f3a41c0ef24e85"
  },
  {
    "url": "static/app.js",
    "revision": "396bf2cca7670dc6a9b0a36e0eb4aab1"
  },
  {
    "url": "static/images/about-us.png",
    "revision": "5ae3ac9d55fd87ed30f7ccf5a09000fa"
  },
  {
    "url": "static/images/cs.jpg",
    "revision": "1436c44ff6436a14c6836067d936242a"
  },
  {
    "url": "static/images/icons/about-us.png",
    "revision": "7913c8c3777840219c98efced84428d9"
  },
  {
    "url": "static/images/icons/burger.png",
    "revision": "6c06497c2ae9b90b0c887f5909643d37"
  },
  {
    "url": "static/images/icons/facebook.png",
    "revision": "b4b7b22150ef2e1e89e5328439d20673"
  },
  {
    "url": "static/images/icons/instagram.png",
    "revision": "f7238d6f6d3b8a778c460d5b05842852"
  },
  {
    "url": "static/images/icons/twitter.png",
    "revision": "890ef2485986a640b5659ec1e8cb02b8"
  },
  {
    "url": "static/images/icons/youtube.png",
    "revision": "0cd1846c7b0e9ddb6f9286f9e3ff86ec"
  },
  {
    "url": "static/images/klikada-panjang.svg",
    "revision": "86c06de97e2e90dfccfb5ecd9a0073b3"
  },
  {
    "url": "static/images/logo-ellu-gue.png",
    "revision": "46f45d87bb111b2e5a9fa80bf71ee408"
  },
  {
    "url": "static/images/whatsapp.png",
    "revision": "10942b7de51081bd9b70d1cdb4bf043c"
  },
  {
    "url": "static/jquery-3.1.1.min.js",
    "revision": "e071abda8fe61194711cfc2ab99fe104"
  },
  {
    "url": "static/netteAjax/extensions/spinner.ajax.js",
    "revision": "d0b647db56be65fb8260c006e0f7ac12"
  },
  {
    "url": "static/netteAjax/nette.ajax.js",
    "revision": "7d734baf5cdeccb26eea489c5a8604a4"
  },
  {
    "url": "terms-and-conditions/index.html",
    "revision": "aafab8576869f5f9f668d6bbb1da52c5"
  },
  {
    "url": "workbox-config.js",
    "revision": "3544d1a3da42d6e4e259cf24a7906adf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
