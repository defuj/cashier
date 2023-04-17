'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4c160d9e4e853de055c14963db092b3d",
"index.html": "160ab54a708c4a1c89a073236b228e98",
"/": "160ab54a708c4a1c89a073236b228e98",
"loading.json": "c94cda54a517e94f3d2517d6c22b1edd",
"firebase-messaging-sw.js": "d029f89802ff937309a98ecdd5980314",
"main.dart.js": "bf884a8a40343e4ef73074e6ef0acd1e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "f2d9eef5206bdbce8074e014f494e553",
"icons/Icon-192.png": "35b75aefac3ac62a482146d6a37c7f45",
"icons/Icon-maskable-192.png": "35b75aefac3ac62a482146d6a37c7f45",
"icons/Icon-maskable-512.png": "806b45cecb399337f442191c9456ca9c",
"icons/Icon-512.png": "806b45cecb399337f442191c9456ca9c",
"manifest.json": "1a92037af6fb1215603ca7c3a553d2be",
"assets/AssetManifest.json": "9aa99bb85867d51b0e4e9457d177e483",
"assets/NOTICES": "bc7d18aeceaa5d8c3b5ed41da3a0980a",
"assets/FontManifest.json": "918b51099f2ca3b571c85b79a0dd3145",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/icon.png": "55ca3551ca08e8b9782332edd5b0a539",
"assets/assets/images/hero.png": "eb5fc44c44a346aafe6b21b917415e08",
"assets/assets/images/logo.png": "a2e527279962c8dc2d1f3f74c64913af",
"assets/assets/images/daftarmenu_logo.png": "57663bca889e5c78521be53c4aa7c38e",
"assets/assets/images/daftarmenu_logo.svg": "bb938ae439e7922e23923d38f9fab8ac",
"assets/assets/images/image_error.jpeg": "bd6fda97bec67e2e13dad0be4f701260",
"assets/assets/images/bg.png": "146babf6805761d7cf2e193e225f5c2d",
"assets/assets/icons/svg/shopping-cart-bold.svg": "0d778e498982993e8f8821251d78475e",
"assets/assets/icons/svg/drink.svg": "559976754577eb2156166812f0212401",
"assets/assets/icons/svg/take-away.svg": "4a3fd50c19b8a5b0997909b198f5d4fd",
"assets/assets/icons/svg/receipt.svg": "3c40dbbb3d589ca04dab9bf392e08b5b",
"assets/assets/icons/svg/main-course.svg": "d1c6197e1ca8bd29988aee54c9f2ae17",
"assets/assets/icons/svg/take-away-solid.svg": "fb2496d34b09c612a7d4fd91d6606c50",
"assets/assets/icons/svg/hero.png": "eb5fc44c44a346aafe6b21b917415e08",
"assets/assets/icons/svg/money-check.svg": "15392806b0064b0263d4c7f8a503c178",
"assets/assets/icons/svg/dessert.svg": "b08a86c0cff4f0d9a295eca374706eab",
"assets/assets/icons/svg/all.svg": "1770adbb667d11987cc0d632d4209b5f",
"assets/assets/icons/svg/print-solid.svg": "b7ee8047ffb1e19feea9862f3b9773fc",
"assets/assets/icons/svg/product-placeholder.svg": "df9aa7456182073ada5a4df200335e38",
"assets/assets/icons/svg/dine-in-solid.svg": "0659f993a62432d3ab6d3cd672a20c55",
"assets/assets/icons/svg/settings.svg": "2f93d69a741e066d8bd2c59d578fb8ca",
"assets/assets/icons/svg/in-progress.svg": "6baafd3bdf8414e66b6e465b8bb0c43a",
"assets/assets/icons/svg/bg_new.svg": "f0248581a7e8bbbb335ecd8eac55415b",
"assets/assets/icons/svg/empty-menu.svg": "1b0d7a9a451352cf2115bae5974d99f9",
"assets/assets/icons/svg/cash-solid.svg": "332db542e10f0a7527be366b6181090a",
"assets/assets/icons/svg/wallet.svg": "3545776bf6e9990dfa044cd32753c645",
"assets/assets/icons/svg/receipt-solid.svg": "15625441d50afd223dff27f7e1fabb83",
"assets/assets/icons/svg/coffee.svg": "5a66576328793a9685ab31217a684a62",
"assets/assets/icons/svg/wallet-solid.svg": "dab5812e102ab4f9fab89d65a393716b",
"assets/assets/icons/svg/appetizer.svg": "9db450e941e0f0edd0cac0ab7eddbf58",
"assets/assets/icons/svg/default-image-profile.svg": "5cee497f580039c54f4987ecaef1826f",
"assets/assets/icons/svg/soup.svg": "ba306990b0d0d07bb184e5223ac49801",
"assets/assets/icons/svg/in-ok.svg": "9f282526906b402ffafb9de5c85225f8",
"assets/assets/icons/svg/juice.svg": "480e77d4da80f598150d7a0e084388bd",
"assets/assets/icons/svg/shopping-cart-solid.svg": "25af148b77e29c50c74f7a03578a16c6",
"assets/assets/icons/svg/debit.svg": "42bbf166a3f0190617b8fceba61bb1ea",
"assets/assets/icons/svg/dine-in.svg": "ef4a536347e952ad648b915760c7c50b",
"assets/assets/icons/svg/milkshake.svg": "2172e3c6a45872e6eb1a7fa1e9631999",
"assets/assets/icons/svg/debit-solid.svg": "daa2ed2a865d29444c88a2d6e01bcfe7",
"assets/assets/icons/svg/logo.png": "a2e527279962c8dc2d1f3f74c64913af",
"assets/assets/icons/svg/google.svg": "af68e760865faaa32f8d186416c3ee19",
"assets/assets/icons/svg/not-found.svg": "78b0a5135d9969510e8090c15546d3ed",
"assets/assets/icons/svg/cash.svg": "95eac2fa4a87b4d1d906950e2738f540",
"assets/assets/icons/svg/menus2.svg": "84bf8d5b3bca02dff7a78e4caa12c419",
"assets/assets/icons/svg/daftarmenu_logo.png": "57663bca889e5c78521be53c4aa7c38e",
"assets/assets/icons/svg/daftarmenu_logo.svg": "bb938ae439e7922e23923d38f9fab8ac",
"assets/assets/icons/svg/exit.svg": "955c5af70dab8ea9f2dd591337baa528",
"assets/assets/icons/svg/salad.svg": "95462f48833f3ad5e9b1bf3328d64425",
"assets/assets/icons/svg/menus-solid.svg": "5e4634579b195ff4c810f73def8bb26c",
"assets/assets/icons/svg/logo.svg": "ae457fc5d834361876aa39cc8d698546",
"assets/assets/icons/svg/snack.svg": "f1a518ca34353ab49b2e19e4db2ac9f6",
"assets/assets/icons/svg/shopping-cart.svg": "b995ff2ca1c1275f0af54889696a5095",
"assets/assets/icons/svg/menus.svg": "cddc718cc989d361cbc6c677896ab216",
"assets/assets/icons/svg/exit-bold.svg": "66c0f479415ba404089877a0c6db0b9c",
"assets/assets/icons/svg/sadigit.svg": "e10a78ca9b1c6415ed98644a1f045ded",
"assets/assets/icons/svg/print2.svg": "0d66dd053be609c07c25d1e57786cced",
"assets/assets/icons/svg/print.svg": "aeec4bfc8b84272e3f6e6f7832aeff67",
"assets/assets/icons/svg/money-check-solid.svg": "3ca2fa17cbaea8d06433f60abe227522",
"assets/assets/icons/svg/bg.png": "146babf6805761d7cf2e193e225f5c2d",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/animations/error.json": "bf0cd8f12e555da600f5eab63da1a9f2",
"assets/assets/animations/loading.json": "c94cda54a517e94f3d2517d6c22b1edd",
"assets/assets/animations/success.json": "d3a3b2badde7086f7a8e9ffd503b4466",
"assets/assets/animations/warning.json": "8096041b04b3ee425bdb9e4f90392c4e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
