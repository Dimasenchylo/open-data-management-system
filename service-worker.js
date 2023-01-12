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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ba3a01741c524d57143ecb5f6f260a35"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f28d0a98.css",
    "revision": "98c8e34c6a71690caef5b6522df0e4ec"
  },
  {
    "url": "assets/img/change.e6f51dce.png",
    "revision": "e6f51dce6c4440d73b6aaeec59eb1462"
  },
  {
    "url": "assets/img/delete.5766f430.png",
    "revision": "5766f4302333579b841e774905bf2b77"
  },
  {
    "url": "assets/img/get_addnew.cb725c77.png",
    "revision": "cb725c778123e6b05a9af56bca7bde34"
  },
  {
    "url": "assets/img/get_addold.76bccea5.png",
    "revision": "76bccea538d4c854afee0d6cf33d8456"
  },
  {
    "url": "assets/img/get_all_change.df8318ee.png",
    "revision": "df8318ee93dcbec64dc7e7feb977592e"
  },
  {
    "url": "assets/img/get_all_delete.fdbe4ce9.png",
    "revision": "fdbe4ce9958a7ff391abb2a766d51b0e"
  },
  {
    "url": "assets/img/get_all.cb8c4ab6.png",
    "revision": "cb8c4ab6300c4817ddd12ac1f30d6dca"
  },
  {
    "url": "assets/img/get.f944043a.png",
    "revision": "f944043a456ebd699dab1625930afe6c"
  },
  {
    "url": "assets/img/loading_server.3c515c4e.png",
    "revision": "3c515c4ef9db7c2b378fa7dd9a9591d9"
  },
  {
    "url": "assets/img/relation_model.8c8f8c61.png",
    "revision": "8c8f8c615cc8e05d5dd32635f7650194"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a6c21a97.js",
    "revision": "b8e3188f864090836840b3fe1b375fcc"
  },
  {
    "url": "assets/js/11.a284f07f.js",
    "revision": "cd87a470f598ec096fad4a5644fbd272"
  },
  {
    "url": "assets/js/12.e3a38f6d.js",
    "revision": "05e0ea85866dc0684be14473a3848ff0"
  },
  {
    "url": "assets/js/13.d6af112c.js",
    "revision": "b790a170fe64b46390d38dceac140477"
  },
  {
    "url": "assets/js/14.195427df.js",
    "revision": "c7811f2683d917d136088b419d9b9c27"
  },
  {
    "url": "assets/js/15.68385ae5.js",
    "revision": "76967d1804630746db20807ae134542e"
  },
  {
    "url": "assets/js/16.92083f18.js",
    "revision": "212d9b4bc797a5cd8b18d0d27266f4b9"
  },
  {
    "url": "assets/js/17.37c43fc9.js",
    "revision": "67ef984743f6c1f3667510de327c0c26"
  },
  {
    "url": "assets/js/18.3eff3f6e.js",
    "revision": "2b45c11bdec2782bc92799cc724197fe"
  },
  {
    "url": "assets/js/19.43b27f64.js",
    "revision": "d0cba67f4e11ecd4d0755c218b486cf7"
  },
  {
    "url": "assets/js/2.67a95e80.js",
    "revision": "67f37305111a95c5b68bc61810f0337a"
  },
  {
    "url": "assets/js/20.2d5c0b32.js",
    "revision": "97ee7e1617e52fdb5c32e73c5fee931e"
  },
  {
    "url": "assets/js/21.3818e7e4.js",
    "revision": "e4664bd1b56da2747850a00e4553c0b6"
  },
  {
    "url": "assets/js/22.620220ed.js",
    "revision": "88847f51eda1c945c9b9a4ee782361e1"
  },
  {
    "url": "assets/js/23.9e186cd9.js",
    "revision": "5f0c5a388c138c832fe95f1d499c91f1"
  },
  {
    "url": "assets/js/24.a59d14f2.js",
    "revision": "f66f89ea92f23d1914b28206b41f9cdc"
  },
  {
    "url": "assets/js/26.f8ca1b3b.js",
    "revision": "01a2e3734cc0988ca4494406b0a6a14d"
  },
  {
    "url": "assets/js/3.94293d75.js",
    "revision": "2e09e6bccdd14b2ac58d73be361ca678"
  },
  {
    "url": "assets/js/4.c7d4fb3c.js",
    "revision": "be8e4ff65c68666588cecfedd7231534"
  },
  {
    "url": "assets/js/5.d33e9d9d.js",
    "revision": "45c7975537b488cdc79a124f1a526070"
  },
  {
    "url": "assets/js/6.cd7cb634.js",
    "revision": "8c651b48f7bb2f968c562e642b8bb917"
  },
  {
    "url": "assets/js/7.a5cfaab7.js",
    "revision": "f3ee9e3052c94f2ec853bec322a15ac4"
  },
  {
    "url": "assets/js/8.bbf434fc.js",
    "revision": "a0d5ffac0cf8fc598046172921407767"
  },
  {
    "url": "assets/js/9.1f2bd6d0.js",
    "revision": "57953a06334a32c021868b6c6320eb79"
  },
  {
    "url": "assets/js/app.21a98fc9.js",
    "revision": "91de5a2818f684c30b34c58044272447"
  },
  {
    "url": "conclusion/index.html",
    "revision": "05bae8c5c8e15cd727e35a0c7756d23f"
  },
  {
    "url": "design/index.html",
    "revision": "76670f2f1a3f62a1437f82e3c5793685"
  },
  {
    "url": "index.html",
    "revision": "a1a68059d0a08199ae57d77ad4a1351b"
  },
  {
    "url": "intro/index.html",
    "revision": "a87eb45fced914b1e821c62ed48873ca"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "121b1e302e5d367cead710c2b9b805cc"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6aa902d35dc6a23bcb265a694a781c81"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "af7fba3eefe9292773920a9897f51a23"
  },
  {
    "url": "software/index.html",
    "revision": "02c1d8210dc9553bff388c506055cefa"
  },
  {
    "url": "test/index.html",
    "revision": "a03b9c03a83f722f95954700616dcad6"
  },
  {
    "url": "use cases/index.html",
    "revision": "c89cc031b0e01e95dfa03d75ef3df661"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
