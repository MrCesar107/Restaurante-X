const CACHE_NAME = "v1"
const cache_urls = ["offline/view.html", "offline/estilos.css",
					"offline/mapa.png"]

self.addEventListener("install", function(e)
{
	caches.open(CACHE_NAME)
		.then(function(cache)
		{
			return cache.addAll(cache_urls)
		})
})

self.addEventListener("activate", function(e)
{
	e.waitUntil(
		caches.keys().then(function(cache_names)
		{
			return Promise.all(
				cache_names.map(function(cache_name)
				{
					if(CACHE_NAME != cache_name)
					{
						return caches.delete(cache_name)
					}
				})
			)
		})
	)
})

self.addEventListener("fetch", function(e)
{
	e.respondWith(
		caches.match(e.request)
			.then(function(response)
			{
				if(response)
				{
					return response
				}

				return fetch(e.request)
			}).catch(function(error)
			{
				if(e.request.mode == "navigate")
				{
					return caches.match("/offline/view.html")
				}
			})
		)
})