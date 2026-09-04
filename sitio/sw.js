/* Carpa de Saberes — service worker
   Guarda todo el sitio en el aparato la primera vez que entra, para que
   funcione sin internet. Los datos de los niños NUNCA pasan por aquí:
   viven en localStorage y no salen del aparato. */

const VERSION = 'carpa-90d3d3ffed';
const ESENCIALES = [
  './',
  'index.html',
  'estacion.html',
  'css/carpa.css',
  'js/perfil.js',
  'js/inicio.js',
  'js/motor.js',
  'js/datos-a.js',
  'js/datos-b.js',
  'js/datos-interactivos.js',
  'manifest.webmanifest',
  'iconos/icono-192.png',
  'iconos/icono-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    // addAll falla entero si un archivo falla; se guardan uno por uno
    // para que un solo recurso ausente no deje al niño sin app.
    await Promise.all(ESENCIALES.map(async (url) => {
      try { await cache.add(new Request(url, {cache: 'reload'})); }
      catch (err) { /* ese archivo se pedirá a la red cuando toque */ }
    }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const nombres = await caches.keys();
    await Promise.all(nombres.map((n) => n === VERSION ? null : caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Las tipografías de Google: si ya se vieron, se sirven de la caché.
  // Si no hay internet y nunca se vieron, la página usa sus respaldos.
  if (url.origin !== self.location.origin) {
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      const guardada = await cache.match(req);
      if (guardada) return guardada;
      try {
        const res = await fetch(req);
        // Una respuesta opaca trae status 0, asi que res.ok es false aunque
        // haya llegado bien. Sin esto, la hoja de Google Fonts no se
        // guardaba nunca y offline el sitio se quedaba sin tipografias.
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      } catch (err) {
        return guardada || Response.error();
      }
    })());
    return;
  }

  // Lo propio del sitio: primero la caché, y de fondo se refresca.
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const guardada = await cache.match(req, {ignoreSearch: true});
    const red = fetch(req).then((res) => {
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    }).catch(() => null);

    if (guardada) { red; return guardada; }

    const res = await red;
    if (res) return res;

    // Sin caché y sin red: si pedía una página, se le da el inicio.
    if (req.mode === 'navigate') {
      const inicio = await cache.match('index.html');
      if (inicio) return inicio;
    }
    return new Response('Sin conexión y sin copia guardada.', {
      status: 503,
      headers: {'Content-Type': 'text/plain; charset=utf-8'}
    });
  })());
});
