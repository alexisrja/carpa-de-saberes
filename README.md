# Carpa de Saberes

Escuela de pista para los niños del circo, de 4 a 11 años. Seis materias, 36
lecciones y 216 ejercicios que se califican solos, hechos para funcionar sin
internet en el aparato que haya a mano.

## Para quién es

Para los niños que viajan con el circo y para quien los acompaña. Cada niño
escoge o crea su artista (nombre, cara y nivel) en el inicio y de ahí pasa a las
estaciones. Hay tres niveles: Semillas (4 a 6 años), Malabaristas (7 a 8) y
Acróbatas (9 a 11).

El avance se guarda en el `localStorage` del propio aparato, en dos llaves:
`carpa:perfiles` y `carpa:activo`. No se manda nada a ningún servidor: no hay
cuentas, ni analíticas, ni servicios externos.

## Qué tiene dentro

| | |
|---|---|
| Materias | 6: Matemáticas, Español, Español Lecturas, Ciencias Naturales, Geografía, Historia |
| Lecciones | 36 (6 materias × 3 niveles × 2 lecciones) |
| Ejercicios de texto | 180 |
| Ejercicios interactivos | 36 |
| **Total de ejercicios** | **216** |

## Estructura

```
sitio/                     el sitio estático, tal cual se publica
  index.html               inicio: escoger o crear artista
  estacion.html            los cursos
  css/carpa.css
  js/perfil.js             artistas y progreso en localStorage
  js/inicio.js             pantalla de inicio
  js/motor.js              lecciones, ejercicios y calificación
  js/datos-*.js            copias que hace build.py (no las edites aquí)
  manifest.webmanifest
  sw.js                    service worker: guarda todo para usarlo sin internet
  iconos/                  icono-192.png, icono-512.png

datos-a.js                 fuente: mate / esp / lect
datos-b.js                 fuente: cien / geo / hist
datos-interactivos.js      fuente: los 36 ejercicios interactivos
build.py                   arma los entregables
hacer-iconos.py            dibuja los iconos PNG
vercel.json                configuración del despliegue
Carpa-de-Saberes.html      todo en un archivo, para repartir por USB
```

Los `datos-*.js` de la raíz son la fuente. `build.py` los copia a `sitio/js/`,
y esas copias también se versionan a propósito: el despliegue no corre
`build.py`, así que sin ellas el sitio se publicaría sin contenido.

## Cómo se construye

```
python build.py
```

Hace tres cosas:

1. Copia los `datos-*.js` de la raíz a `sitio/js/`.
2. Recalcula la versión del caché del service worker a partir del contenido real
   de `sitio/`. Sin esto, quien ya tenga la app instalada se queda con la copia
   vieja para siempre.
3. Arma `Carpa-de-Saberes.html`: las dos páginas en un solo archivo (~140 KB)
   que se abre con doble clic y anda sin internet. Ahí no hay dos páginas que
   visitar, así que un conmutador muestra el inicio o la estación según haya
   artista activo.

Corre `build.py` antes de cada despliegue.

Los iconos se generan aparte, y solo hace falta si cambia el dibujo:

```
python hacer-iconos.py
```

Escribe los PNG a mano con `struct` y `zlib`, sin librerías de imagen, así que
no hay nada que instalar.

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

El repo está conectado a Vercel, así que cada push a `main` despliega. Para
soltarlo a mano:

```
python build.py
vercel --prod
```
