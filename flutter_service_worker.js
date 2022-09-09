'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5693fcbd57566a7a7bead35cf4eca118",
"assets/assets/bw.png": "1c29283ee28fe7613b83a4f745516cc7",
"assets/assets/bwnobg.png": "64322d8a08fe96ca1889e6c797def517",
"assets/assets/cjmlogo.png": "cd9efdc51eb75e0d20e874e625f57ce0",
"assets/assets/desktopapp.png": "a046fa7874f3107131fe5286e3b665ba",
"assets/assets/dev.png": "bd2c203a3a1c17ab95ac960994b4c80f",
"assets/assets/devfoliologo.png": "57a28c1e1f7596eef59bebe3c8714d3b",
"assets/assets/kclogo.png": "3142b703dd99c97351db6506d7531984",
"assets/assets/kim.jpg": "0af079c9792c82a08a27da4ab6ddf7e4",
"assets/assets/kmappbar1.png": "2af12bc6bfca08260c3f2ec639146c2f",
"assets/assets/mobile.png": "f5715461dabacd988b37d4d231630e7b",
"assets/assets/piecexlogo.png": "739ab59d47c38866201815a71453db13",
"assets/assets/Simply_Do.png": "2669e34111ce6419fa37299ed302da80",
"assets/assets/solve.png": "cf87cd16d3e0b8df2cad5aa7d806b105",
"assets/assets/think.png": "fe7a45ec35238e5a463cbced4c9d410c",
"assets/assets/twitter.jpg": "541ac200279e3e92f7749f5cda9aac34",
"assets/assets/Udacitylogo.png": "91d63b125b3d0df793c6386bc1787ae3",
"assets/assets/udemylogo.png": "a9d8fd59cd6c4978838f8754de0b6ea7",
"assets/assets/webapp.png": "0b5586166264e703c00d4557aeb799f8",
"assets/FontManifest.json": "cd139df3fd7f9a8960520b61ae6bc6e0",
"assets/fonts/ArimaMadhurai.ttf": "d14fdcaf9b4664de7a02d84a96fd169b",
"assets/fonts/BrandIcons.ttf": "cb0e7c158789dda48bd7de9e61a1c290",
"assets/fonts/Bree-Serif.ttf": "62d0db6be170a306a0fa4a10d8ab3448",
"assets/fonts/Charm-Bold.ttf": "ad6c4ef34012e291243720e872ca78a6",
"assets/fonts/CinzelDecorative-Bold.ttf": "a388d4f6e855b334da95b975bb30bf4d",
"assets/fonts/Cookie-Regular.ttf": "a7d2f8c19f31471e38c936a06615f64c",
"assets/fonts/Lemon-Regular.ttf": "c914cb8c76aa1bf0c1d29400d31e9aae",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Norican-Regular.ttf": "93dd0dc6dcf88e8bdb86b4fe320b3c14",
"assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/fonts/RampartOne-Regular.ttf": "459b7baa4d08523f7aad964fa507b3c1",
"assets/fonts/Rancho-Regular.ttf": "62ae6cede5a638fee57431d1d7af0eab",
"assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/fonts/Shrikhand-Regular.ttf": "b2142f626983b4a663cb43a84f2e086d",
"assets/fonts/Sriracha-Regular.ttf": "91d60edc23e80c4e174001f69d2ab23e",
"assets/fonts%255CNiconne-Regular.ttf": "992fd4621b19c6d3461d8d56ad40e350",
"assets/NOTICES": "6abcfaf441454aa9ed18b41e61bd3f04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9eb8a7030c1073cc04ae1667e267e9e2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67b62a9f02f68c6c925736def26a4b53",
"/": "67b62a9f02f68c6c925736def26a4b53",
"main.dart.js": "7db81e5c787039c75bdfdb36dacbc6a6",
"manifest.json": "ea39e24e24a3f2528dfe105a00bad704",
"version.json": "9d74f09478c3f9b8296976e9e261adc4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
