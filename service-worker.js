var cacheName = 'insighter+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './charts.html',
        './login.html',
        './css/sb-admin-2.min.css',
        './css/sb-admin-2.css',
        './vendor/fontawesome-free/less/_variables.less',
        './vendor/fontawesome-free/css/v4-shims.min.css',
        './vendor/fontawesome-free/css/v4-shims.css',
        './vendor/fontawesome-free/css/fontawesome.min.css',
        './vendor/fontawesome-free/css/fontawesome.css',
        './vendor/fontawesome-free/css/all.min.css',
        './vendor/fontawesome-free/css/all.css',
        //pasta JS
        './js/demo/chart-area-demo.js',
        './js/demo/chart-bar-demo.js',
        './js/demo/chart-pie-demo.js',
        './js/demo/datatables-demo.js',
        './js/sb-admin-2.js',
        './js/sb-admin-2.min.js',

        //pasta vendor/bootstrap
        './vendor/bootstrap/js/bootstrap.bundle.js',
        './vendor/bootstrap/js/bootstrap.bundle.js.map',
        './vendor/bootstrap/js/bootstrap.bundle.min.js',
        './vendor/bootstrap/js/bootstrap.bundle.min.js.map',
        './vendor/bootstrap/js/bootstrap.js',
        './vendor/bootstrap/js/bootstrap.js.map',
        './vendor/bootstrap/js/bootstrap.min.js',
        './vendor/bootstrap/js/bootstrap.min.js.map',

        //pasta vendor/chart
        '/vendor/chart.js/Chart.bundle.js',
        '/vendor/chart.js/Chart.bundle.min.js',
        '/vendor/chart.js/Chart.js',
        '/vendor/chart.js/Chart.min.js',
        

        //pasta vendor/fontawesome


        //pasta

        './img/logo-white.svg',
        './img/undraw_profile.svg'
        // './icon/source/Assets.xcassets/AppIcon.appset/64.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/128.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/144.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/152.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/167.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/180.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/196.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/512.png',
        // './icon/source/Assets.xcassets/AppIcon.appset/1024.png'
      ]))
  );
});
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});