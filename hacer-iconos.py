# -*- coding: utf-8 -*-
"""Genera los iconos PNG de la app sin depender de librerias de imagen.

Dibuja la carpa: fondo rojo, lona color arena con rayas, suelo dorado y
banderin arriba. Se mantiene dentro del circulo central para que el icono
'maskable' de Android no le corte la punta.
"""
import io, os, struct, zlib

BASE = os.path.dirname(os.path.abspath(__file__))
DESTINO = os.path.join(BASE, "sitio", "iconos")

ROJO  = (0xC6, 0x28, 0x28)
ARENA = (0xFB, 0xF3, 0xE2)
ORO   = (0xE8, 0xA3, 0x17)
TINTA = (0x2A, 0x1B, 0x3D)


def dibujar(n):
    """Devuelve una lista de filas; cada fila es una lista de (r,g,b)."""
    e = n / 512.0                      # escala respecto al diseño base
    cx = n / 2.0
    apice_y   = 150 * e
    base_y    = 372 * e
    media     = 132 * e                # medio ancho de la lona en la base
    suelo_y0  = base_y
    suelo_y1  = base_y + 26 * e
    suelo_x0  = cx - 150 * e
    suelo_x1  = cx + 150 * e
    mastil_y0 = 96 * e

    filas = []
    for y in range(n):
        fila = []
        for x in range(n):
            c = ROJO

            # lona: triangulo con la punta arriba
            if apice_y <= y <= base_y:
                t = (y - apice_y) / (base_y - apice_y)
                mitad = media * t
                if abs(x - cx) <= mitad:
                    c = ARENA
                    # rayas verticales que salen de la punta
                    if mitad > 0:
                        franja = (x - cx) / mitad          # -1 a 1
                        if int(abs(franja) * 5) % 2 == 1:
                            c = ROJO
                    # borde de la lona
                    if mitad - abs(x - cx) < 3 * e:
                        c = TINTA

            # suelo dorado
            if suelo_y0 <= y <= suelo_y1 and suelo_x0 <= x <= suelo_x1:
                c = ORO
                if y > suelo_y1 - 2 * e or x < suelo_x0 + 2 * e or x > suelo_x1 - 2 * e:
                    c = TINTA

            # mastil y banderin
            if mastil_y0 <= y <= apice_y and abs(x - cx) <= 2.5 * e:
                c = TINTA
            if mastil_y0 <= y <= mastil_y0 + 26 * e:
                t = (y - mastil_y0) / (26 * e)
                if 2.5 * e < (x - cx) <= 2.5 * e + 34 * e * (1 - t):
                    c = ORO

            fila.append(c)
        filas.append(fila)
    return filas


def escribir_png(ruta, filas):
    n = len(filas)
    crudo = bytearray()
    for fila in filas:
        crudo.append(0)                       # filtro "none" por linea
        for (r, g, b) in fila:
            crudo += bytes((r, g, b))

    def trozo(tipo, datos):
        c = struct.pack(">I", len(datos)) + tipo + datos
        return c + struct.pack(">I", zlib.crc32(tipo + datos) & 0xFFFFFFFF)

    png = b"\x89PNG\r\n\x1a\n"
    png += trozo(b"IHDR", struct.pack(">IIBBBBB", n, n, 8, 2, 0, 0, 0))
    png += trozo(b"IDAT", zlib.compress(bytes(crudo), 9))
    png += trozo(b"IEND", b"")

    with open(ruta, "wb") as f:
        f.write(png)
    return len(png)


if not os.path.isdir(DESTINO):
    os.makedirs(DESTINO)

for n in (192, 512):
    ruta = os.path.join(DESTINO, "icono-%d.png" % n)
    peso = escribir_png(ruta, dibujar(n))
    print("icono-%d.png  %d bytes" % (n, peso))
