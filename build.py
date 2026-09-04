# -*- coding: utf-8 -*-
"""Arma los entregables de Carpa de Saberes.

Fuentes:
  sitio/                 el sitio estático tal cual se publica (raíz de Vercel)
  datos-a.js             contenido de mate / esp / lect
  datos-b.js             contenido de cien / geo / hist
  datos-interactivos.js  ejercicios interactivos

Salidas:
  sitio/js/datos-*.js    copias de los datos, que es lo que el sitio carga
  Carpa-de-Saberes.html  las dos páginas en un solo archivo, para USB
"""
import io, os, re, shutil

BASE = os.path.dirname(os.path.abspath(__file__))
SITIO = os.path.join(BASE, "sitio")
JS = os.path.join(SITIO, "js")

DATOS = ["datos-a.js", "datos-b.js", "datos-interactivos.js"]
VACIOS = {"datos-interactivos.js": u"window.DATOS_INT = {};\n"}


def leer(ruta):
    return io.open(ruta, encoding="utf-8").read()


def escribir(ruta, texto):
    io.open(ruta, "w", encoding="utf-8").write(texto)


# ---------- 1. los datos viajan al sitio ----------
if not os.path.isdir(JS):
    os.makedirs(JS)

for nombre in DATOS:
    origen = os.path.join(BASE, nombre)
    destino = os.path.join(JS, nombre)
    if os.path.exists(origen):
        shutil.copyfile(origen, destino)
    elif not os.path.exists(destino):
        escribir(destino, VACIOS.get(nombre, u"/* pendiente */\n"))
        print("  (aviso) falta %s; se generó un archivo vacío para no romper la carga" % nombre)


# ---------- 2. la version del cache ----------
# El service worker sirve primero desde el cache. Si la version no cambia,
# quien ya tenga la app instalada se queda con la copia vieja para siempre.
# Se deriva de lo que de verdad se publica, asi que cambia sola.
import hashlib

def huella():
    h = hashlib.sha1()
    for raiz, _, archivos in sorted(os.walk(SITIO)):
        for nombre in sorted(archivos):
            if nombre == "sw.js":
                continue
            with open(os.path.join(raiz, nombre), "rb") as f:
                h.update(nombre.encode("utf-8"))
                h.update(f.read())
    return h.hexdigest()[:10]

sw_ruta = os.path.join(SITIO, "sw.js")
sw = leer(sw_ruta)
version = huella()
sw_nuevo = re.sub(r"const VERSION = '[^']*';",
                  "const VERSION = 'carpa-%s';" % version, sw, count=1)
if sw_nuevo != sw:
    escribir(sw_ruta, sw_nuevo)
print("  version del cache: carpa-%s" % version)


# ---------- 3. el archivo suelto ----------
def cuerpo(nombre):
    """Saca lo de dentro de <body>, sin los bloques que solo sirven en web."""
    html = leer(os.path.join(SITIO, nombre))
    m = re.search(r"<body[^>]*>(.*)</body>", html, re.S)
    if not m:
        raise SystemExit("no encontré el <body> de " + nombre)
    txt = m.group(1)
    txt = re.sub(r"<!--solo-web-->.*?<!--/solo-web-->", "", txt, flags=re.S)
    txt = re.sub(r'\s*<script src="[^"]*"></script>', "", txt)
    return txt.strip()


css = leer(os.path.join(SITIO, "css", "carpa.css"))
guiones = [leer(os.path.join(JS, n)) for n in
           ["perfil.js"] + DATOS + ["inicio.js", "motor.js"]]

CONMUTADOR = u"""
/* Conmutador del archivo suelto: aquí no hay dos páginas que visitar,
   así que se muestra una u otra según haya artista activo. */
(function(){
  var C = window.Carpa;
  var ini = document.getElementById('paginaInicio');
  var est = document.getElementById('paginaEstacion');
  var hay = !!C.activo();
  ini.hidden = hay;
  est.hidden = !hay;
  if(hay && window.arrancarMotor) window.arrancarMotor();

  // Los enlaces que en el sitio van al inicio, aquí sueltan al artista.
  document.querySelectorAll('a[href^="index.html"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      C.salir();
      location.reload();
    });
  });
})();
"""

partes = [
    u'<!doctype html>',
    u'<html lang="es">',
    u'<head>',
    u'<meta charset="utf-8">',
    u'<meta name="viewport" content="width=device-width, initial-scale=1">',
    u'<meta name="color-scheme" content="light dark">',
    u'<meta name="description" content="Escuela de pista para los ninos del circo: seis materias con lecciones y ejercicios.">',
    u'<title>Carpa de Saberes</title>',
    u'<link rel="preconnect" href="https://fonts.googleapis.com">',
    u'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    u'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Nunito:ital,wght@0,400;0,700;0,900;1,400&family=Rye&display=swap">',
    u'<style>\n' + css + u'\n</style>',
    u'</head>',
    u'<body>',
    u'<script>window.CARPA_UNICO = true;</script>',
    u'<div id="paginaInicio">',
    cuerpo("index.html"),
    u'</div>',
    u'<div id="paginaEstacion" hidden>',
    cuerpo("estacion.html"),
    u'</div>',
]
for g in guiones:
    partes.append(u'<script>\n' + g + u'\n</script>')
partes.append(u'<script>' + CONMUTADOR + u'</script>')
partes.append(u'</body>\n</html>\n')

suelto = u"\n".join(partes)
escribir(os.path.join(BASE, "Carpa-de-Saberes.html"), suelto)

kb = len(suelto.encode("utf-8")) / 1024.0
archivos = sum(len(f) for _, _, f in os.walk(SITIO))
print("listo:")
print("  sitio/                 %d archivos (raíz para Vercel)" % archivos)
print("  Carpa-de-Saberes.html  %.0f KB (un solo archivo, para USB)" % kb)
