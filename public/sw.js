var cacheName = "Pwa OT"; //C'est le nom de mon cache

var filesToCache =[
'/',
//'index.html',
'css/main.css',
//'css/style.css',
'main.58fec847.js',
'sw.js'
]

//J'assigne un écouteur "install" à mon service worker
self.addEventListener("install", function(e){
	// il est installé! :-)
	
	console.log("[ServiceWorker] Install");
	e.waitUntil(
		// Récupération de mon cache du nom de Pwa OT
		
		caches.open(cacheName).then(function(cache){
			//Mise en cache de ma PWA
			
			console.log("[ServiceWorker] Caching app shell");
			return cache.addAll(filesToCache);
			//filesToCache: tableaux contenant les différents path vers les fichiers que je veux stocker.
		})
		);
});

// J'assigne un écouteur 'fetch' à mon service worker
self.addEventListener('fetch', function(e){
	
	//J'intercepte bien une requête x ou y
	console.log('[ServiceWorker] Fetch', e.request.url);
	e.respondWith(
		
		//J'y réponds soit avec une ressource trouvé dans mon cache (responde) soit en renvoyant la requête)
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
		);
});
