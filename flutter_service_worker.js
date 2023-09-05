'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "99d1f05333d15692ecaee937bb40c4db",
"index.html": "6e5c9186412c32a115576b4076d560c6",
"/": "6e5c9186412c32a115576b4076d560c6",
"vercel.json": "57d7efc068e16a61c7be6a9a4c4d183f",
"loading.json": "c94cda54a517e94f3d2517d6c22b1edd",
"firebase-messaging-sw.js": "d029f89802ff937309a98ecdd5980314",
"main.dart.js": "08d3daee6dbf7b2ced4e82ab365065c9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "f2d9eef5206bdbce8074e014f494e553",
"icons/Icon-192.png": "35b75aefac3ac62a482146d6a37c7f45",
"icons/Icon-maskable-192.png": "35b75aefac3ac62a482146d6a37c7f45",
"icons/Icon-maskable-512.png": "806b45cecb399337f442191c9456ca9c",
"icons/Icon-512.png": "806b45cecb399337f442191c9456ca9c",
"manifest.json": "c4ce5a95e48f0338080c513a72114ef0",
"assets/AssetManifest.json": "b2db73427c1829b140771ccbccad3f6f",
"assets/NOTICES": "9238e5bb3568afaa4010d4ffc4eda3c7",
"assets/FontManifest.json": "74042e9f6ad5eebb75b6d4daa205540f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "34f8a6dd800dc07ef0f82b526e828aac",
"assets/fonts/MaterialIcons-Regular.otf": "1f8ef66d1c432ed1c62a6f403440799c",
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
"assets/assets/icons/svg/Dim-Sum.svg": "8667fad8ab4e6ee90d2dd2cbc2da17ac",
"assets/assets/icons/svg/category-save.svg": "37c39e3875d93075cc75fd933217b71f",
"assets/assets/icons/svg/Croissant.svg": "04d1578fb48b3b61dea816c3a3ec4c6b",
"assets/assets/icons/svg/main-course.svg": "d1c6197e1ca8bd29988aee54c9f2ae17",
"assets/assets/icons/svg/Burrito.svg": "4201eee5d640405b661631d542d77703",
"assets/assets/icons/svg/translate.svg": "46446ee25e969464dc5295d137f46f39",
"assets/assets/icons/svg/Hot-Dog.svg": "9dca3974cc6561558fa56ee9280ab573",
"assets/assets/icons/svg/Milk.svg": "423b38a3c5f44b13c075b6f5821a783c",
"assets/assets/icons/svg/take-away-solid.svg": "fb2496d34b09c612a7d4fd91d6606c50",
"assets/assets/icons/svg/hero.png": "eb5fc44c44a346aafe6b21b917415e08",
"assets/assets/icons/svg/Chiken.svg": "8b1da15c76c2aed3ae66cac04ed5abff",
"assets/assets/icons/svg/Steak.svg": "67cd2d6dc0b05492d104a82414386e2d",
"assets/assets/icons/svg/money-check.svg": "15392806b0064b0263d4c7f8a503c178",
"assets/assets/icons/svg/Cookie.svg": "f1633eb718b977aec8c6f93d476b1e5f",
"assets/assets/icons/svg/empty-menu-2.svg": "52e77f4b334d704fe6441996506038b5",
"assets/assets/icons/svg/Soda.svg": "32ee22a57aca2696d376585c9b1e9731",
"assets/assets/icons/svg/dessert.svg": "b08a86c0cff4f0d9a295eca374706eab",
"assets/assets/icons/svg/Yogurt.svg": "d4bc14240da3a02387e090506e611ddf",
"assets/assets/icons/svg/Pudding.svg": "e75891f7b691eccc3ca17c807ea1256a",
"assets/assets/icons/svg/category-edit.svg": "391665beb7e9c26960eaabde9bfad75e",
"assets/assets/icons/svg/pana.svg": "740cb185351dd224f3ad02be74b47c18",
"assets/assets/icons/svg/all.svg": "1770adbb667d11987cc0d632d4209b5f",
"assets/assets/icons/svg/menu-help.svg": "05181f3e8a1fa43ab65241b381b1b94d",
"assets/assets/icons/svg/print-solid.svg": "b7ee8047ffb1e19feea9862f3b9773fc",
"assets/assets/icons/svg/product-placeholder.svg": "df9aa7456182073ada5a4df200335e38",
"assets/assets/icons/svg/dine-in-solid.svg": "0659f993a62432d3ab6d3cd672a20c55",
"assets/assets/icons/svg/instagram.svg": "3264bbf8b9314d8532dbba3ffa35abc7",
"assets/assets/icons/svg/Noodle.svg": "777f16128978d1a89026054e4f7277e7",
"assets/assets/icons/svg/settings.svg": "2f93d69a741e066d8bd2c59d578fb8ca",
"assets/assets/icons/svg/Bread.svg": "21e55b58f026750ae290164d498a7f72",
"assets/assets/icons/svg/in-progress.svg": "6baafd3bdf8414e66b6e465b8bb0c43a",
"assets/assets/icons/svg/bg_new.svg": "f0248581a7e8bbbb335ecd8eac55415b",
"assets/assets/icons/svg/menu-report-disabled.svg": "3dc4590449fd746ff02c45cf18f5fc20",
"assets/assets/icons/svg/empty-menu.svg": "1b0d7a9a451352cf2115bae5974d99f9",
"assets/assets/icons/svg/cash-solid.svg": "332db542e10f0a7527be366b6181090a",
"assets/assets/icons/svg/wallet.svg": "3545776bf6e9990dfa044cd32753c645",
"assets/assets/icons/svg/receipt-solid.svg": "15625441d50afd223dff27f7e1fabb83",
"assets/assets/icons/svg/menu-report.svg": "8cb7d4e1cd057479b3c750f47221cb77",
"assets/assets/icons/svg/bell.svg": "21c4323329af8397978597aae94de9b9",
"assets/assets/icons/svg/coffee.svg": "5a66576328793a9685ab31217a684a62",
"assets/assets/icons/svg/menu-help-disabled.svg": "181977820fad7656eb7c0f56ca3f3f45",
"assets/assets/icons/svg/wallet-solid.svg": "dab5812e102ab4f9fab89d65a393716b",
"assets/assets/icons/svg/flagpack_us.svg": "4e699a6b0a428e2238a9c9fd1dc7a052",
"assets/assets/icons/svg/appetizer.svg": "9db450e941e0f0edd0cac0ab7eddbf58",
"assets/assets/icons/svg/default-image-profile.svg": "5cee497f580039c54f4987ecaef1826f",
"assets/assets/icons/svg/soup.svg": "ba306990b0d0d07bb184e5223ac49801",
"assets/assets/icons/svg/in-ok.svg": "9f282526906b402ffafb9de5c85225f8",
"assets/assets/icons/svg/copy.svg": "2c121125d686ac329e9b3badc0d2b326",
"assets/assets/icons/svg/Fish.svg": "7ede6d88dd129a3c42de7b6177e79ded",
"assets/assets/icons/svg/Burger.svg": "63cc4ceddafe89baab449fe8dba9b337",
"assets/assets/icons/svg/Pie.svg": "bca6dca99f0cf2719c5ca468ebe515fe",
"assets/assets/icons/svg/menu-menus-disabled.svg": "d880dfcef2c3cad8970a6f9b0cc81e30",
"assets/assets/icons/svg/Wafel.svg": "5f5d6523d585a8fb45aacc3424f2dd04",
"assets/assets/icons/svg/juice.svg": "480e77d4da80f598150d7a0e084388bd",
"assets/assets/icons/svg/shopping-cart-solid.svg": "25af148b77e29c50c74f7a03578a16c6",
"assets/assets/icons/svg/debit.svg": "42bbf166a3f0190617b8fceba61bb1ea",
"assets/assets/icons/svg/dine-in.svg": "ef4a536347e952ad648b915760c7c50b",
"assets/assets/icons/svg/milkshake.svg": "2172e3c6a45872e6eb1a7fa1e9631999",
"assets/assets/icons/svg/Sandwitch.svg": "df86f0efc02fb6f0dfb04d9d29a5da7d",
"assets/assets/icons/svg/daftarmenu.svg": "d01ce30ab9b84875257149c167db8414",
"assets/assets/icons/svg/debit-solid.svg": "daa2ed2a865d29444c88a2d6e01bcfe7",
"assets/assets/icons/svg/CupCake.svg": "54358ab81bf2e9c70eb3d89bb9d98078",
"assets/assets/icons/svg/menu-home-disabled.svg": "a8d16883754007d97e7928b805639a8c",
"assets/assets/icons/svg/logo.png": "a2e527279962c8dc2d1f3f74c64913af",
"assets/assets/icons/svg/Bananan-Split.svg": "88e00cba4a5e1ffd3b92bcf8fe123841",
"assets/assets/icons/svg/whatsapp.svg": "aaa384fa1667a8cdac99e9f68ce1cefe",
"assets/assets/icons/svg/google.svg": "af68e760865faaa32f8d186416c3ee19",
"assets/assets/icons/svg/menu-users-disabled.svg": "af50029a38bac33aa95ca6b74bdc9f79",
"assets/assets/icons/svg/empty-user.svg": "56ed599c17c12a06a23572899a9431e0",
"assets/assets/icons/svg/not-found.svg": "78b0a5135d9969510e8090c15546d3ed",
"assets/assets/icons/svg/empty-category.svg": "9d39b8be06c2cad6c2aec18a870a937d",
"assets/assets/icons/svg/chef-hat.svg": "22a748aa6b506df742e78d715f4a675e",
"assets/assets/icons/svg/Kebab.svg": "551ba75ca1952b4707bed3e09c28daf4",
"assets/assets/icons/svg/Coffe.svg": "c595e6c21c3aba283d112c27a7715273",
"assets/assets/icons/svg/Pizza.svg": "622768c8d29fdceb43525743b41e884c",
"assets/assets/icons/svg/Hot-Chocolate.svg": "551c0bc76ac48c9c2a372e9b02d22e01",
"assets/assets/icons/svg/cash.svg": "95eac2fa4a87b4d1d906950e2738f540",
"assets/assets/icons/svg/menu-home.svg": "e6dd8916855fdbf19ae430c1e8c3dfc8",
"assets/assets/icons/svg/Sushi.svg": "64dda9c0d40b3af7a62c285248d6f247",
"assets/assets/icons/svg/menus2.svg": "84bf8d5b3bca02dff7a78e4caa12c419",
"assets/assets/icons/svg/daftarmenu_logo.png": "57663bca889e5c78521be53c4aa7c38e",
"assets/assets/icons/svg/French-Fries.svg": "ba58cad5720b4708953b5b0c84529647",
"assets/assets/icons/svg/language.svg": "01c1fc193c2a5956db4571eb9b9d4e59",
"assets/assets/icons/svg/qr.svg": "aa26cbe20da3bbea636eb30c0b6d4456",
"assets/assets/icons/svg/daftarmenu_logo.svg": "bb938ae439e7922e23923d38f9fab8ac",
"assets/assets/icons/svg/exit.svg": "955c5af70dab8ea9f2dd591337baa528",
"assets/assets/icons/svg/salad.svg": "95462f48833f3ad5e9b1bf3328d64425",
"assets/assets/icons/svg/call.svg": "9d96a7d0f33568b419394d189a3fb845",
"assets/assets/icons/svg/flagpack_id.svg": "16d2e1bfad0ba4e1621f0ceaf7d2b0b5",
"assets/assets/icons/svg/menu-users.svg": "81614ddb10754875c804cd11db1baffb",
"assets/assets/icons/svg/category-delete.svg": "17b8254d84265b069b9db9a7073ebfb2",
"assets/assets/icons/svg/menu-menus.svg": "6aeffd2d316a76bc02f588af427be0fd",
"assets/assets/icons/svg/money.svg": "d1b452dfc4402bb0e28bd41502d6f4b9",
"assets/assets/icons/svg/Bread-Loaft.svg": "873c066631988603d0e2f1c60758df8d",
"assets/assets/icons/svg/menus-solid.svg": "5e4634579b195ff4c810f73def8bb26c",
"assets/assets/icons/svg/Porridge.svg": "c8142ac762eefed6592d35cf030d0d0c",
"assets/assets/icons/svg/Sausage.svg": "c8d528d6f43e169d9d5ed223ec6a3994",
"assets/assets/icons/svg/Cola.svg": "5bc2331c4959aef15690c7b53a03e1be",
"assets/assets/icons/svg/scanner.svg": "f5580c9ee3a77e4baca64d7aa729f8c1",
"assets/assets/icons/svg/logo.svg": "ae457fc5d834361876aa39cc8d698546",
"assets/assets/icons/svg/Sunny-Egg.svg": "57825e41c73aa1ca1ae56c464ce9c2cd",
"assets/assets/icons/svg/snack.svg": "f1a518ca34353ab49b2e19e4db2ac9f6",
"assets/assets/icons/svg/Doughnat.svg": "c9d0e08482dd2f2b26e66e04de1d9e8c",
"assets/assets/icons/svg/Ice-Cream.svg": "9c7ba0de9d9c93f78b95d2f7c095a404",
"assets/assets/icons/svg/shopping-cart.svg": "b995ff2ca1c1275f0af54889696a5095",
"assets/assets/icons/svg/menus.svg": "cddc718cc989d361cbc6c677896ab216",
"assets/assets/icons/svg/exit-bold.svg": "66c0f479415ba404089877a0c6db0b9c",
"assets/assets/icons/svg/sadigit.svg": "e10a78ca9b1c6415ed98644a1f045ded",
"assets/assets/icons/svg/solar-crown-star-bold-duotone.svg": "2430a97fc7250d62120cceeec75ce7c9",
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
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
