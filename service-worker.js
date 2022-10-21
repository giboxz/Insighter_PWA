var cacheName = 'insighter+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './cadastro_maquinas.html',
        './editar_maquinas.html',
        './home.html',
        './lista_de_maquinas.html',
        './login.html',
        './maquina_dash.html',
        './notificacoes.html',
        './perfil.html',
        './recuperar_senha.html',
        './seguranca.html',
        './termosde_uso.html',

        //pasta JS
        './js/api_call.js',
        './js/chart_script.js',
        './js/home.js',
        './js/script.js',

        //Imagens
        './assets/images/add_button.svg',
        './assets/images/Bell.svg',
        './assets/images/delete_button.svg',
        './assets/images/edit_button.svg',
        './assets/images/Emergency Exit.svg',
        './assets/images/Info.svg',
        './assets/images/Lock.svg',
        './assets/images/logo_insighter.svg',
        './assets/images/logo-login.png',
        './assets/images/profile_pic.png',
       
        './icon/source/Assets.xcassets/AppIcon.appset/64.png',
        './icon/source/Assets.xcassets/AppIcon.appset/128.png',
        './icon/source/Assets.xcassets/AppIcon.appset/144.png',
        './icon/source/Assets.xcassets/AppIcon.appset/152.png',
        './icon/source/Assets.xcassets/AppIcon.appset/167.png',
        './icon/source/Assets.xcassets/AppIcon.appset/180.png',
        './icon/source/Assets.xcassets/AppIcon.appset/196.png',
        './icon/source/Assets.xcassets/AppIcon.appset/512.png',
        './icon/source/Assets.xcassets/AppIcon.appset/1024.png'
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