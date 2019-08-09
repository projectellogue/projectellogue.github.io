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
    "revision": "f0dae160bb91f552b4889ea090696dc5"
  },
  {
    "url": "2019/08/01/marble-stone-processing-industry/index.html",
    "revision": "031b66b1d05fad1498097dd0d9c4032a"
  },
  {
    "url": "404.html",
    "revision": "9bc6b56e88076cbc0999e59f58115d31"
  },
  {
    "url": "about-us/index.html",
    "revision": "601760e51ce9c27783d3be16eb13d314"
  },
  {
    "url": "contact/index.html",
    "revision": "08054f0357c4c5ecc1aa490268aa0bb5"
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
    "revision": "c10abe9fdf9b648ebf5c8195b86da0f8"
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
    "revision": "d20b4d5f0b37cef9b8e4ca99c52f75a1"
  },
  {
    "url": "images/products/1-teraso-cetak-2.jpeg",
    "revision": "8ebc7e6e02020345c6667212c67706d5"
  },
  {
    "url": "images/products/1-teraso-cetak-3.jpeg",
    "revision": "a4700e06ec6bbab566786fb6c010ed07"
  },
  {
    "url": "images/products/1-teraso-cetak.jpeg",
    "revision": "a0d082d26bf5bf59c7001b34bb7cd0f7"
  },
  {
    "url": "images/products/2-river-stone-1.jpeg",
    "revision": "431eaa35e92b0ad0f6d986c7abc3fd7d"
  },
  {
    "url": "images/products/2-river-stone-2.jpeg",
    "revision": "01aa98c5f705e92026548a46edfce718"
  },
  {
    "url": "images/products/2-river-stone-3.jpeg",
    "revision": "df50632c61fdf0a008799de842fe5ad0"
  },
  {
    "url": "images/products/2-river-stone-4.jpeg",
    "revision": "68da15d687998c2d706a6dbba9756bd4"
  },
  {
    "url": "images/products/2-river-stone.jpeg",
    "revision": "bab36018196cdffd9c85050d55aec79b"
  },
  {
    "url": "images/products/3-white-marble-stone-1-1.jpeg",
    "revision": "9f55e46d2730c50e5db79970d3cde5fe"
  },
  {
    "url": "images/products/3-white-marble-stone-1-2.jpeg",
    "revision": "e11d7aede3c4c638174ca06008a797ba"
  },
  {
    "url": "images/products/3-white-marble-stone-1.jpeg",
    "revision": "c44321397aa8e422fc74f3582b8827be"
  },
  {
    "url": "images/products/3-white-marble-stone-2-1.jpeg",
    "revision": "91529b6c0d75aaa1d852002c2fdb5b77"
  },
  {
    "url": "images/products/3-white-marble-stone-2.jpeg",
    "revision": "294a98cae08c339afad14cd7e9fa98aa"
  },
  {
    "url": "images/products/3-white-marble-stone-3-1.jpeg",
    "revision": "a2ec76937c797b74494166eb88173cec"
  },
  {
    "url": "images/products/3-white-marble-stone-3-2.jpeg",
    "revision": "e7bbc285bfbf77ca0f0b12fb14289977"
  },
  {
    "url": "images/products/3-white-marble-stone-3.jpeg",
    "revision": "4ec4df9838e8bc1a54e850a79007de78"
  },
  {
    "url": "images/products/3-white-marble-stone-4-1.jpeg",
    "revision": "f634562f18b204767411048b51621b0f"
  },
  {
    "url": "images/products/3-white-marble-stone-4-2.jpeg",
    "revision": "39ad8a3647dc6973ffb9213d66a2b052"
  },
  {
    "url": "images/products/3-white-marble-stone-4.jpeg",
    "revision": "3e325b226b04ffcff24ea20840332855"
  },
  {
    "url": "images/products/3-white-marble-stone.jpeg",
    "revision": "294a98cae08c339afad14cd7e9fa98aa"
  },
  {
    "url": "images/products/a-1200x300.jpeg",
    "revision": "2bbe1622644ce18942bd28e19a68e75d"
  },
  {
    "url": "images/products/a.jpeg",
    "revision": "2adcaf3a2c4574e2a7bd08d8b3639433"
  },
  {
    "url": "images/products/b-1200x300.jpeg",
    "revision": "6b659151fc7ee93baa88f225a1fc0592"
  },
  {
    "url": "images/products/b.jpeg",
    "revision": "be6ef2289a2570717dc6ec7e723a9821"
  },
  {
    "url": "images/products/c-1200x300.jpeg",
    "revision": "7f91258922a757fe87f7865ef37969d6"
  },
  {
    "url": "images/products/c.jpeg",
    "revision": "92cd367a4fb1a2b25ff765340f46389c"
  },
  {
    "url": "images/products/d.jpeg",
    "revision": "7a82d8cd19e85f9705424154f71b6126"
  },
  {
    "url": "images/products/e.jpeg",
    "revision": "7fd484a91844248e3885dc6f7b3f6894"
  },
  {
    "url": "images/products/f.jpeg",
    "revision": "c76d04cd59c50fc7591bd29ab49bd6d0"
  },
  {
    "url": "images/products/g.jpeg",
    "revision": "946c537abfe9edfa08cefe8aa377f0bb"
  },
  {
    "url": "images/products/h.jpeg",
    "revision": "07b7b834e3ff5ad7be3155a8f1282788"
  },
  {
    "url": "images/products/i.jpeg",
    "revision": "7bbb853abcb20eb8c6d5bc1720ef35f2"
  },
  {
    "url": "images/products/marble-cream.jpeg",
    "revision": "40c29cd42257a6ea9b14f5497c711137"
  },
  {
    "url": "images/products/marble-grey.jpeg",
    "revision": "de9362224c503fc9aa8cc3b9eaf27429"
  },
  {
    "url": "images/spinner.gif",
    "revision": "aa6c24d78d1883d3d7ebfb01ee5d6691"
  },
  {
    "url": "index.html",
    "revision": "6e044035362640dd236be54595f2ba49"
  },
  {
    "url": "inspiration/index.html",
    "revision": "ee0f789e4d2f36927e7dd34654b26b81"
  },
  {
    "url": "manifest.json",
    "revision": "2f93bb21d552716bda9eac5f6d2ef802"
  },
  {
    "url": "product/bathup/index.html",
    "revision": "d83bd861959b271c1a1ebb8671365747"
  },
  {
    "url": "product/cream-marble/index.html",
    "revision": "51582f8b2a72c754088d2a8cf90a4dd7"
  },
  {
    "url": "product/index.html",
    "revision": "05e8346ae0ce795bcb1e42205242c4de"
  },
  {
    "url": "product/marble-cream/index.html",
    "revision": "8d93a398c759a64c3aba9f4d19a3ba54"
  },
  {
    "url": "product/marble-grey/index.html",
    "revision": "3159ea8453b62962330370c8413ee163"
  },
  {
    "url": "product/river-stone/index.html",
    "revision": "a712e2e0fbf837bb4f485db1cbc159f8"
  },
  {
    "url": "product/terrazo-print/index.html",
    "revision": "b7686eb9886140f4b500a646159d437d"
  },
  {
    "url": "product/white-marble-stone-2/index.html",
    "revision": "39fa5646f4452d1066514817b96b0823"
  },
  {
    "url": "product/white-marble-stone-3/index.html",
    "revision": "a7c7f792666e9aeb24178a2f55696e81"
  },
  {
    "url": "product/white-marble-stone-4/index.html",
    "revision": "97c6c8ffa6667f2a886eea214c0928a9"
  },
  {
    "url": "product/white-marble-stone/index.html",
    "revision": "cb29f0777d772701e1b1babe08f10284"
  },
  {
    "url": "project/index.html",
    "revision": "dab33f058c3a00d333bd5a91e651a244"
  },
  {
    "url": "project/wastafel-1/index.html",
    "revision": "cdb7bc2ed33fac5bf4738afa7de79cfe"
  },
  {
    "url": "robots.txt",
    "revision": "805b475b193e1da1cfaf48f5ae8cf0fc"
  },
  {
    "url": "sitemap.xml",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "revision": "8f8637d3a8bf4800566c653a4333cf30"
  },
  {
    "url": "workbox-config.js",
    "revision": "3544d1a3da42d6e4e259cf24a7906adf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
