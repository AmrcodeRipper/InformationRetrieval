'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3520568f4a3900962b4557225ea5f806",
".git/config": "bde5ec37ea83d8c551a17a2e528bd779",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d86231b79435a7f20f492d3e2ba47293",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "01446b73de277fd99e5d7202e0ffc4f8",
".git/logs/refs/heads/main": "f5db185984ed5ad46d5f2d26ba51b1ba",
".git/logs/refs/remotes/origin/main": "dc61c5ede9f6c3112be558370c422e44",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/b6653e62fad2624b1bf9e7a799c50d90477ec7": "eb519328efe11aa78eafb45e77ad3f89",
".git/objects/09/48232915faa0617f11fff1153916c062a56ed3": "9d14b591f3e3f45bdcd64580c397aceb",
".git/objects/09/a14a555b7da25ee7b7b1213ca0b18ec63f1933": "18a3b80b2dc211fcda16bb30ef200d65",
".git/objects/0c/c6e34689b492e7da56bf27c08c09f4381642ed": "3bd3b02158a626996134120c1a8abd20",
".git/objects/0d/3edd99226b359c63e75296a581a2697de161b7": "4faaa099e0efd77dd203c9222276dc5f",
".git/objects/0f/505ec1ac4ed3d12a828bf9370def558dea819f": "a83e130b0edd8458f06608178cfe00fc",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2e/b18e450c7d0dc613f709753489ff3b396a5ab7": "21f0a7fd71c95123b400fee224c48be7",
".git/objects/35/0d28f44dcaadf5f7cdd19caa7ac925312347a6": "ee5f3eefb9a1d3f74295bd729a9f289a",
".git/objects/39/97b9302db6433eb99ffe7eb34bfc0863d51a3d": "4d994d8a83ddd23078daff35c2cc82fc",
".git/objects/41/e908ecca9c1032455c29ef379b03f5f6810e0f": "ed484e37e84365f9108483d347b31e43",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/dea2b209fbd9f4eccdec4baa1d18bfbe9ec53b": "1393e5c240421e6d4bb08a784c06007a",
".git/objects/4c/64c1127560a092e915c5fe36a8a40c915f7d37": "200e9216570966790d2d265be41cf8b2",
".git/objects/4c/9cc6efac938960080312deef27304662c3b9b9": "f332515a354869984bc579e25680b47e",
".git/objects/53/bc27e203fa633b7a00945ff6e22fe8f382937a": "26b764f448d3528e3eaf7f83c4b7b7fa",
".git/objects/54/8c79f0cfea6bc33a511a925cc2743bfaf8b9fc": "cb5a1daf9a28547c1e1b3ebc6468453a",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/0ed7a991c63f720b888a5c98545bc40794ef04": "42779f038659838a8759c6c086f28468",
".git/objects/60/069ae03d12d5f99fd99f9f0489cfbb4ec58d04": "fadd5bd42106cee73eccbf7ac2cb057c",
".git/objects/67/1a4bd421ed1f8b0e64abf6141e36df13775e34": "5af8aea8cf83c7361445e3d5476f6076",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/10edeefe2254b6fd0351b71ab2dc3793d90f42": "b0d70af5d80fc838ee5c347e2813af6d",
".git/objects/76/15a4acf9854f7ca34627ed3164b32dcd96e674": "d675697008363bcc4291328af610b863",
".git/objects/77/cc8eb651e37ef25468fab7a6ae2069d2872564": "72000a40198d94e141d62fa2959fdcba",
".git/objects/79/cbb3720d511f2b70a8767ca75ac4fd13571503": "abd0ba9e7cef160597ed64d9d717cc02",
".git/objects/7d/5fa84bf6cd2248ec8efb01d3f9fceddf9afbf3": "79367024f2edddd6efc47da7a50b1fd2",
".git/objects/7e/8920edbccd38505e45518d5273a3a843198b8b": "728f709ba263b0d3669e0e3fdf4ab8a4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5669f132bbf39b96c4c498ebdd2ba8e235ab22": "2a317d1640863c122df0498aa41088aa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a696a1f11977473ad676999abd1ef1633af518": "cd43dbcb867d58462f225a9eb4f4d08a",
".git/objects/8e/cfc8738e69fa7bc30c410c5691ee494e5803e2": "256c1728c1435eaca4afb2d8b5f2da54",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/0cca3d44702784377d0c95c9c7ef9a3c5a4044": "9af18d881be96dedb01d7d1f0122d84b",
".git/objects/90/5d594fb00c805fd02cca50bc409f0c3f404cfd": "b7f610923e6160c2e30939a94ff1db7b",
".git/objects/93/31ebe211643d6bd1fa291df545e429c08db991": "c0298080551991b024d402934cc42f9a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/c3332ae551764e5a0f46ba5bf4818bc0959c0c": "1d6dfd606f9e7140e80d9afb9daa4994",
".git/objects/9a/a5a44a25c4403e7b5ebe105a9ceab8dfe60f93": "d7e2614ca492180068664d78250d81d2",
".git/objects/a0/abe2a75db574e40da0662e9a53ad8a9e822769": "a4ac2f899ca49a450080c2d09ded320d",
".git/objects/a1/ecd8948ceeb20ff758fd34663d72a7e52a9841": "7c08f5fdc6948d98c983c29fb9e35381",
".git/objects/ab/25923d2b8e33e1dae6503c509628b9902e9406": "efb68006ac6e4d7268a163f0a2c1642c",
".git/objects/ab/e785aea9adfe2745d557d629d24acf35919e68": "66b6e80c2dac54af0aa171a3d0739cc8",
".git/objects/ac/bb82a089a74c98b5d37b096761a6df184b4f34": "8d2d5526495fec067e93c2d7d06e5a64",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/aa75721ba2d64394902b434d6fcf7792c7f441": "e0acf9188e4fdca5f87fbe5384d97510",
".git/objects/b2/998517b7d470c844f66518f999f89cfaf445e5": "95eead7c1621c03614be735b957d7ddb",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a7285fc91a9df1ad443efa6b969125f5fb0228": "4870bb16e52a5a8c96ff87ace00ff2a5",
".git/objects/b9/b2bbff523e44371345b84847507651edd03862": "c776cc12dd61225fe30643d1acc60948",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/ecc6eca2b21b58e7d40f6b9e72ae42e9205313": "4091cd25f065b80b31d899c97f4ad509",
".git/objects/bc/4c86cb48d7d237eaf8fb532bab576087e797fa": "d85b05e26d2ef24ea30872b9236a09c6",
".git/objects/be/3dbf3dbfba4241724229c91a863750dab36065": "1159e8e83037afd38bb0dec60f7c875d",
".git/objects/c3/20ccb88f32211f12038c91075ae672060f8a8d": "617ca84891d7a0c0d278c3aa191ac787",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/c7/dd31ac4ced3ee68a27dfa7652988cc34c2bcdc": "002730d02252b514c87bf2bd1d64def3",
".git/objects/c9/b9495206ccbfe9354ceeee33322c937afd706b": "e1db217839679d5e71e91d556739ad0f",
".git/objects/ca/50a3b12959cb846efa7f35d377cbee00c1b4b8": "b406bcb8267634867387dcac11947c14",
".git/objects/d1/2e8eb537d28a9f5a8fd62db2ab0f1535524c02": "4bd3c0d7eff6d3144139aad88076dbc3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e941b90bdd6589f92bfd5c9a316feace9eb5a1": "b6ec2880aad8098d70fff51f9b7749c9",
".git/objects/d9/e874c1ef8305f16ab7f6fb8cbbe69021addd23": "ce2343656e7511c20fb921264d9766ce",
".git/objects/db/af727e0828102ee409e4758f7b6f8085cf4380": "07c67c25a408572705c35dd6fada5850",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/41644aefe7350b3dd78862c564aae1ba25aa05": "2d5df232018a94d7377cbb493a431473",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/bc69d9fb1a573ea9dc2bbe3f43c614ca8774b7": "0515f9e0f886ed0376d14946945b79a3",
".git/objects/ee/6f5f7815bdfa675cdbc1a9fe329b8fd560ab73": "e3540b750545b9bb6878c34be6d7ba9b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/4cb7b8c3eb8359e8f70b63afa086877eb5d893": "be8b212848620d8e4ccec4cfaa4fced4",
".git/objects/f7/5ea5f25e0fb8cff87bef49ac3b731ac99fa48e": "26716be4c1214581d71968af9c320d83",
".git/objects/f9/315a01deeea8d4c5a9006118b144059ce9ca46": "a1fd339fdc95164d870ea593ae0d630d",
".git/objects/fe/ed67d4ad820e7876ec6f5e8e6ccf3cc934c5c5": "706d28c5ab8fb2c8329c115f26d3de99",
".git/objects/ff/b58c002c76c4126d778057c9326c0f6088e065": "c4e78179833a97b2a40c9cffd91b3858",
".git/refs/heads/main": "d8d9a344a5da7e6eb01378743296be2e",
".git/refs/remotes/origin/main": "d8d9a344a5da7e6eb01378743296be2e",
"assets/AssetManifest.bin": "346e8578ea33dd316ffa048525fe8c14",
"assets/AssetManifest.bin.json": "7a8e3cc5d761daee95d37ea056a3d387",
"assets/AssetManifest.json": "a7e51d614507a2d9d6e0b10290da02be",
"assets/assets/translations/ar.json": "dc0e62354494f9ac956a628c0cb495e6",
"assets/assets/translations/en.json": "4f965d7fb3af6bb29c2b3ba5482c724a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "027b5a46da4aa969ef67c0b707dd47e0",
"assets/NOTICES": "2d0c2c4de9bd9b65f7b6046ade92c4e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "1a8a2377afae2d0a6c49fbd9e449ad5f",
"icons/Icon-512.png": "78aa5769c12d7c28b99af1148ffb84be",
"icons/Icon-maskable-192.png": "1a8a2377afae2d0a6c49fbd9e449ad5f",
"icons/Icon-maskable-512.png": "78aa5769c12d7c28b99af1148ffb84be",
"index.html": "b168b1460de90b61bb6f4c60ddb84d4b",
"/": "b168b1460de90b61bb6f4c60ddb84d4b",
"main.dart.js": "6faaa6630f65728ef783a43f2cbeeece",
"manifest.json": "659ce0078c291978d23b6084de03fac9",
"version.json": "3c3fb51e9795520952d8c39ae843c7ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
