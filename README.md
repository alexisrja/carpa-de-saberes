# Carpa de Saberes

Escuela de pista para los niños del circo, de 4 a 11 años. Seis materias con
lecciones y ejercicios, hechas para funcionar sin internet en el aparato que
haya a mano.

## Para quién es

Para los niños que viajan con el circo y para quien los acompaña. Cada niño
escoge o crea su artista (avatar y nivel) en el inicio y de ahí pasa a las
estaciones. El avance se guarda en el `localStorage` del propio aparato: no se
manda nada a ningún servidor, no hay cuentas, ni analíticas, ni servicios
externos.

## Estructura

```
sitio/                     el sitio estático, tal cual se publica
  index.html               inicio: escoger o crear artista
  estacion.html            los cursos
  css/carpa.css
  js/                      perfil.js, inicio.js, motor.js, datos-*.js
  manifest.webmanifest
  sw.js                    service worker: guarda todo para usarlo sin internet
  iconos/                  icono-192.png, icono-512.png

datos-a.js                 fuente: mate / esp / lect
datos-b.js                 fuente: cien / geo / hist
datos-interactivos.js      fuente: ejercicios interactivos
build.py                   arma los entregables
hacer-iconos.py            genera los iconos
Carpa-de-Saberes.html      todo en un archivo, para repartir por USB
```

Los `datos-*.js` de la raíz son la fuente; `build.py` los copia a `sitio/js/`.
Edita siempre los de la raíz.

## Cómo se construye

```
python build.py
```

Hace tres cosas:

1. Copia los `datos-*.js` de la raíz a `sitio/js/`.
2. Recalcula la versión del caché del service worker a partir del contenido real
   de `sitio/`, para que quien ya tenga la app instalada reciba lo nuevo.
3. Arma `Carpa-de-Saberes.html`, las dos páginas en un solo archivo (~140 KB)
   que se abre con doble clic y anda sin internet.

Corre `build.py` antes de cada despliegue.

Para verlo en local:

```
python -m http.server 8791 --directory sitio
```

## Cómo se despliega

En Vercel, como sitio estático: sin framework, sin paso de build. La raíz
publicada es `sitio/`, no la raíz del repo. Eso y las cabeceras están en
`vercel.json`:

- `sw.js` va con `Cache-Control: public, max-age=0, must-revalidate`. Si el
  navegador se queda con el service worker viejo, los niños que ya instalaron la
  app no vuelven a recibir actualizaciones nunca.
- `manifest.webmanifest` va con `Content-Type: application/manifest+json`.
- `cleanUrls` queda apagado a propósito: los enlaces internos y la lista de
  precarga del service worker usan rutas con `.html`, y con `cleanUrls` las
  claves del caché no cuadrarían.

```
python build.py
vercel --prod
```
