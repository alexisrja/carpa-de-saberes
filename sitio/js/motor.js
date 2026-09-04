/* Carpa de Saberes — motor de la Estación */
function arrancarMotor(){
'use strict';

var C = window.Carpa;
function $(id){ return document.getElementById(id); }

/* ---------- perfil activo ---------- */
var perfil = C.activo();
if(!perfil){ if(!window.CARPA_UNICO) location.replace('index.html'); return; }
var progreso = C.progreso(perfil.id);

/* ---------- catálogo ---------- */
var ORDEN = ['mate','esp','lect','cien','geo','hist'];
var TODOS = [].concat(window.DATOS_A || [], window.DATOS_B || []);
var CURSOS = ORDEN.map(function(id){
  return TODOS.filter(function(c){ return c.id === id; })[0];
}).filter(Boolean);
TODOS.forEach(function(c){ if(CURSOS.indexOf(c) === -1) CURSOS.push(c); });

/* Los ejercicios interactivos se reparten entre las lecciones del nivel,
   uno por lección, para que ninguna quede mucho más larga que la otra. */
(function inyectarInteractivos(){
  var INT = window.DATOS_INT || {};
  Object.keys(INT).forEach(function(clave){
    var partes = clave.split('|');
    var curso = CURSOS.filter(function(c){ return c.id === partes[0]; })[0];
    if(!curso || !curso.niveles || !curso.niveles[partes[1]]) return;
    var lecs = curso.niveles[partes[1]];
    if(!lecs.length) return;
    (INT[clave] || []).forEach(function(ej, i){
      lecs[i % lecs.length].ejercicios.push(ej);
    });
  });
})();

var st = { nivel: perfil.nivel, curso:null, lecIdx:0, idx:0, aciertos:0, respondida:false };

function claveLec(cursoId, nivel, i){ return cursoId + '|' + nivel + '|' + i; }
function leccionesDe(curso, nivel){ return (curso.niveles && curso.niveles[nivel]) || []; }
function leccionActual(){ return leccionesDe(st.curso, st.nivel)[st.lecIdx]; }

/* ---------- comparación de respuestas escritas ---------- */
function normaliza(s){
  return String(s).toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[.,;:!?¡¿"']/g,'')
    .replace(/\s+/g,' ');
}
function tieneLetras(s){ return /[a-z0-9áéíóúñ]/i.test(String(s)); }
// "los lápices" y "lápices" son la misma respuesta para un niño.
function sinArticulo(s){ return String(s).replace(/^(el|la|los|las|un|una|unos|unas) /, ''); }
function aNumero(s){
  var n = parseFloat(String(s).replace(',', '.').replace(/\s/g,''));
  return isNaN(n) ? null : n;
}
function revuelve(arr){
  var a = arr.slice();
  for(var i=a.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
var esc = C.esc;

/* ---------- voz ---------- */
var vozOk = typeof speechSynthesis !== 'undefined';
function hablar(texto){
  if(!vozOk) return;
  try{
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(String(texto).replace(/\s+/g,' ').trim());
    u.lang = 'es-MX'; u.rate = 0.92; u.pitch = 1.05;
    speechSynthesis.speak(u);
  }catch(e){}
}
function callar(){ if(vozOk){ try{ speechSynthesis.cancel(); }catch(e){} } }

/* ---------- confeti ---------- */
var cv = $('confeti'), cx = cv.getContext('2d'), trozos = [], animando = false;
var suave = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function ajustarLienzo(){ cv.width = innerWidth; cv.height = innerHeight; }
ajustarLienzo(); addEventListener('resize', ajustarLienzo);

function lanzarConfeti(){
  if(suave) return;
  var colores = ['#C62828','#E8A317','#0E757E','#337A3D','#F7EDDA'];
  for(var i=0;i<70;i++){
    trozos.push({
      x: innerWidth/2 + (Math.random()-0.5)*220, y: innerHeight*0.42,
      vx: (Math.random()-0.5)*9, vy: -Math.random()*11 - 3,
      g: 0.32 + Math.random()*0.16, an: Math.random()*Math.PI,
      va: (Math.random()-0.5)*0.3, t: 5 + Math.random()*7,
      c: colores[i % colores.length], vida: 90 + Math.random()*40
    });
  }
  if(!animando){ animando = true; requestAnimationFrame(pintar); }
}
function pintar(){
  cx.clearRect(0,0,cv.width,cv.height);
  trozos = trozos.filter(function(p){ return p.vida > 0 && p.y < cv.height + 40; });
  trozos.forEach(function(p){
    p.x += p.vx; p.y += p.vy; p.vy += p.g; p.an += p.va; p.vida--;
    cx.save(); cx.translate(p.x,p.y); cx.rotate(p.an);
    cx.fillStyle = p.c; cx.fillRect(-p.t/2, -p.t/2, p.t, p.t*0.6);
    cx.restore();
  });
  if(trozos.length){ requestAnimationFrame(pintar); }
  else { animando = false; cx.clearRect(0,0,cv.width,cv.height); }
}

C.banderines($('banderinesEstacion') || $('banderines'));

/* ---------- vistas e historial ---------- */
var VISTAS = {
  programa: $('vistaPrograma'), curso: $('vistaCurso'), leccion: $('vistaLeccion'),
  pista: $('vistaPista'), telon: $('vistaTelon')
};
var vistaActual = 'programa';
var ignorarHash = false;

function mostrar(nombre, sinHistorial){
  callar();
  Object.keys(VISTAS).forEach(function(k){ VISTAS[k].hidden = (k !== nombre); });
  vistaActual = nombre;
  window.scrollTo({top:0, behavior: suave ? 'auto' : 'smooth'});
  VISTAS[nombre].focus();
  if(!sinHistorial) apuntarHistorial(nombre);
}
function apuntarHistorial(nombre){
  try{
    if(('#' + nombre) === location.hash) return;
    ignorarHash = true;
    location.hash = nombre;
    setTimeout(function(){ ignorarHash = false; }, 0);
  }catch(e){}
}
function corregirHash(nombre){
  if(('#' + nombre) === location.hash) return;
  ignorarHash = true;
  try{ history.replaceState(null, '', '#' + nombre); }
  catch(e){ try{ location.replace('#' + nombre); }catch(e2){} }
  setTimeout(function(){ ignorarHash = false; }, 0);
}
addEventListener('hashchange', function(){
  if(ignorarHash) return;
  var destino = (location.hash || '#programa').slice(1);
  if(destino === vistaActual) return;
  if(destino === 'programa'){ pintarCursos(); }
  if(destino === 'curso' && st.curso){ abrirCurso(st.curso, true); }
  else if(destino === 'leccion' && st.curso){ abrirLeccion(st.lecIdx, true); }
  else if((destino === 'pista' || destino === 'telon') && st.curso){ abrirLeccion(st.lecIdx, true); corregirHash('leccion'); }
  else { pintarCursos(); mostrar('programa', true); corregirHash('programa'); }
});

/* ---------- cabecera ---------- */
function pintarCabecera(){
  var r = C.resumen(perfil.id);
  $('caraArtista').textContent = perfil.cara;
  $('txtNombre').textContent = perfil.nombre;
  $('chipArtista').href = 'index.html?editar=' + encodeURIComponent(perfil.id);
  $('txtBoletos').textContent = r.boletos;
  $('txtEstrellas').textContent = r.estrellas;
}

/* ---------- programa ---------- */
function pintarCursos(){
  var nv = C.nivelPorId(st.nivel);
  $('rotuloNivel').textContent = 'Nivel ' + nv.nombre + ' · ' + nv.edad;
  $('tituloPrograma').textContent = 'El programa de ' + perfil.nombre;

  var cont = $('rejillaCursos');
  cont.innerHTML = '';
  CURSOS.forEach(function(curso, i){
    var lecs = leccionesDe(curso, st.nivel);
    var hechas = lecs.filter(function(_, j){
      var p = progreso[claveLec(curso.id, st.nivel, j)];
      return p && p.estrellas > 0;
    }).length;
    var pct = lecs.length ? Math.round(hechas / lecs.length * 100) : 0;

    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cartel';
    b.innerHTML =
      '<span class="num">Número ' + ('0' + (i+1)).slice(-2) + '</span>' +
      '<span class="icono" aria-hidden="true">' + curso.icono + '</span>' +
      '<h3>' + esc(curso.nombre) + '</h3>' +
      '<p>' + esc(curso.desc) + '</p>' +
      '<div class="medidor"><i style="width:' + pct + '%"></i></div>' +
      '<div class="pie-cartel"><span>' + hechas + ' de ' + lecs.length + ' lecciones</span><span>' +
        (lecs.length ? (pct === 100 ? '¡completo!' : 'entrar →') : 'pronto') + '</span></div>';
    b.addEventListener('click', function(){ abrirCurso(curso); });
    cont.appendChild(b);
  });
}

/* ---------- curso ---------- */
function abrirCurso(curso, sinHistorial){
  st.curso = curso;
  var nv = C.nivelPorId(st.nivel);
  $('cursoIcono').textContent = curso.icono;
  $('cursoTitulo').textContent = curso.nombre;
  $('cursoNivel').textContent = 'Nivel ' + nv.nombre + ' · ' + nv.edad;
  $('cursoDesc').textContent = curso.desc;

  var lecs = leccionesDe(curso, st.nivel);
  var cont = $('listaLecciones');
  cont.innerHTML = '';
  if(!lecs.length){
    cont.innerHTML = '<p style="color:var(--tinta2)">Todavía no hay lecciones de este curso para este nivel.</p>';
  }
  lecs.forEach(function(lec, j){
    var p = progreso[claveLec(curso.id, st.nivel, j)] || {estrellas:0};
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'leccion-fila';
    b.innerHTML =
      '<span class="orden" aria-hidden="true">' + (j+1) + '</span>' +
      '<span class="cuerpo"><strong>' + esc(lec.titulo) + '</strong>' +
      '<small>' + lec.ejercicios.length + ' ejercicios' + (lec.lectura ? ' · con lectura' : '') + '</small></span>' +
      '<span class="estrellas" style="color:var(--oro)">' + C.estrellasTxt(p.estrellas || 0) + '</span>';
    b.addEventListener('click', function(){ abrirLeccion(j); });
    cont.appendChild(b);
  });
  mostrar('curso', sinHistorial);
}

/* ---------- lección ---------- */
function abrirLeccion(j, sinHistorial){
  st.lecIdx = j;
  var lec = leccionActual();
  $('lecRotulo').textContent = st.curso.nombre + ' · Lección ' + (j+1);
  $('lecTitulo').textContent = lec.titulo;

  var html = '<p>' + esc(lec.intro) + '</p>';
  if(lec.puntos && lec.puntos.length){
    html += '<ul>' + lec.puntos.map(function(p){ return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>';
  }
  if(lec.lectura){
    html += '<div class="lectura"><h3>' + esc(lec.lectura.titulo) + '</h3>' +
      lec.lectura.texto.split('\n\n').map(function(p){ return '<p>' + esc(p) + '</p>'; }).join('') + '</div>';
  }
  if(lec.dato){ html += '<p class="dato"><strong>Dato de circo · </strong>' + esc(lec.dato) + '</p>'; }
  $('lecCuerpo').innerHTML = html;
  $('btnLeer').hidden = !vozOk;
  mostrar('leccion', sinHistorial);
}

function textoLeccion(){
  var lec = leccionActual();
  var t = lec.titulo + '. ' + lec.intro + ' ';
  if(lec.puntos) t += lec.puntos.join('. ') + '. ';
  if(lec.lectura) t += lec.lectura.titulo + '. ' + lec.lectura.texto.replace(/—/g,'');
  return t;
}

/* ---------- ejercicios ---------- */
function empezar(){
  st.idx = 0; st.aciertos = 0;
  mostrar('pista');
  pintarPregunta();
}

function pintarPregunta(){
  var lec = leccionActual();
  var ej = lec.ejercicios[st.idx];
  var total = lec.ejercicios.length;
  st.respondida = false;

  $('pistaPaso').textContent = 'Pregunta ' + (st.idx+1) + ' de ' + total;
  $('rielBarra').style.width = (st.idx / total * 100) + '%';
  $('btnLeerPregunta').hidden = !vozOk;

  var zona = $('zonaPregunta');
  zona.innerHTML = '';

  var h = document.createElement('p');
  h.className = 'pregunta'; h.textContent = ej.p;
  zona.appendChild(h);

  if(ej.emoji && ej.t !== 'conteo'){
    var em = document.createElement('p');
    em.className = 'emojis'; em.textContent = ej.emoji; em.setAttribute('aria-hidden','true');
    zona.appendChild(em);
  }

  switch(ej.t){
    case 'op':     pintarOpciones(zona, ej, ej.o); break;
    case 'vf':     pintarOpciones(zona, ej, ['Verdadero','Falso'], true); break;
    case 'frac':   pintarFraccion(zona, ej); break;
    case 'recta':  pintarRecta(zona, ej); break;
    case 'orden':  pintarOrden(zona, ej); break;
    case 'parear': pintarParear(zona, ej); break;
    case 'conteo': pintarConteo(zona, ej); break;
    default:       pintarCampo(zona, ej);
  }

  if(st.nivel === 'semillas'){ hablar(textoPregunta()); }
}

function textoPregunta(){
  var ej = leccionActual().ejercicios[st.idx];
  var t = ej.p;
  if(ej.t === 'op'){
    t += ej.sinListaVoz ? '. Mira las opciones en la pantalla.' : '. Opciones: ' + ej.o.join(', ') + '.';
  }
  if(ej.t === 'vf')     t += '. ¿Verdadero o falso?';
  if(ej.t === 'frac')   t += '. Toca las partes de la barra para pintarlas.';
  if(ej.t === 'recta')  t += '. Toca el número en la recta.';
  if(ej.t === 'orden')  t += '. Toca las tarjetas en el orden correcto.';
  if(ej.t === 'parear') t += '. Toca uno de la izquierda y luego su pareja de la derecha.';
  if(ej.t === 'conteo') t += '. Toca las figuras para contarlas.';
  return t;
}

/* --- ayuda compartida por los tipos interactivos --- */
function taller(zona, ayuda){
  var caja = document.createElement('div');
  caja.className = 'taller';
  if(ayuda){
    var p = document.createElement('p');
    p.className = 'ayuda-taller';
    p.textContent = ayuda;
    caja.appendChild(p);
  }
  zona.appendChild(caja);
  return caja;
}
function botonRevisar(caja, alRevisar, hayAlgo){
  var acc = document.createElement('div');
  acc.className = 'acciones';
  var b = document.createElement('button');
  b.type = 'button'; b.className = 'btn btn--rojo'; b.textContent = 'Revisar';
  var aviso = document.createElement('p');
  aviso.className = 'ayuda-taller';
  aviso.style.color = 'var(--rojo)';
  aviso.hidden = true;
  b.addEventListener('click', function(){
    if(st.respondida) return;
    // Un toque perdido en Revisar no debe costarle el ejercicio: sin
    // ninguna interaccion previa no se califica, se avisa.
    if(hayAlgo && !hayAlgo()){
      aviso.hidden = false;
      return;
    }
    aviso.hidden = true;
    b.disabled = true;
    alRevisar();
  });
  acc.appendChild(b);
  caja.appendChild(acc);
  caja.appendChild(aviso);
  return {boton:b, aviso:aviso};
}

/* --- opción múltiple y verdadero/falso --- */
function pintarOpciones(zona, ej, etiquetas, esVF){
  var cont = document.createElement('div');
  cont.className = 'opciones' + (etiquetas.length === 2 ? ' dos' : '');
  var letras = ['A','B','C','D'];
  etiquetas.forEach(function(txt, i){
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'op';
    b.innerHTML = '<span class="marca-op" aria-hidden="true">' + letras[i] + '</span><span>' + esc(txt) + '</span>';
    b.addEventListener('click', function(){
      if(st.respondida) return;
      var correcta = esVF ? (ej.r === true ? 0 : 1) : ej.r;
      Array.prototype.forEach.call(cont.children, function(el, k){
        el.disabled = true;
        if(k === correcta) el.classList.add('bien');
        else if(k === i) el.classList.add('mal');
      });
      resolver(i === correcta, ej, etiquetas[correcta]);
    });
    cont.appendChild(b);
  });
  zona.appendChild(cont);
}

/* --- respuesta escrita --- */
function pintarCampo(zona, ej){
  var fila = document.createElement('div');
  fila.className = 'fila-respuesta';
  var inp = document.createElement('input');
  inp.type = 'text';
  inp.inputMode = (ej.t === 'num') ? 'decimal' : 'text';
  inp.autocomplete = 'off';
  inp.setAttribute('aria-label','Tu respuesta');
  inp.placeholder = (ej.t === 'num') ? 'Tu número' : 'Tu respuesta';
  var b = document.createElement('button');
  b.type = 'button'; b.className = 'btn btn--rojo'; b.textContent = 'Revisar';

  function revisar(){
    if(st.respondida) return;
    var v = inp.value.trim();
    if(!v){ inp.focus(); return; }
    var bien, esperada;
    if(ej.t === 'num'){
      var n = aNumero(v);
      bien = (n !== null && Math.abs(n - ej.r) < 1e-9);
      esperada = String(ej.r);
    } else {
      esperada = ej.r[0];
      var dado = normaliza(v), pelado = sinArticulo(dado);
      bien = ej.r.some(function(r){
        if(!tieneLetras(r)) return String(r).trim() === v;
        var e2 = normaliza(r);
        return e2 === dado || sinArticulo(e2) === pelado;
      });
    }
    inp.disabled = true; b.disabled = true;
    inp.style.borderColor = bien ? 'var(--verde)' : 'var(--rojo)';
    resolver(bien, ej, esperada);
  }
  b.addEventListener('click', revisar);
  inp.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); revisar(); } });
  fila.appendChild(inp); fila.appendChild(b);
  zona.appendChild(fila);
  setTimeout(function(){ inp.focus(); }, 60);
}

/* --- 1. pintar fracciones --- */
function pintarFraccion(zona, ej){
  var caja = taller(zona, 'Toca las partes para pintarlas. Vuelve a tocar para despintar.');
  var pintadas = [];
  var barra = document.createElement('div');
  barra.className = 'barra-frac';
  barra.setAttribute('role','group');
  barra.setAttribute('aria-label','Barra de ' + ej.partes + ' partes');

  var cuenta = document.createElement('p');
  cuenta.className = 'cuenta-frac';

  function actualizar(){
    var n = pintadas.filter(Boolean).length;
    cuenta.innerHTML = '<small>llevas pintado</small>' + n + ' de ' + ej.partes;
  }

  for(var i=0;i<ej.partes;i++){
    (function(k){
      pintadas[k] = false;
      var c = document.createElement('button');
      c.type = 'button'; c.className = 'celda';
      c.setAttribute('aria-pressed','false');
      c.setAttribute('aria-label','Parte ' + (k+1));
      c.addEventListener('click', function(){
        if(st.respondida) return;
        pintadas[k] = !pintadas[k];
        c.setAttribute('aria-pressed', String(pintadas[k]));
        actualizar();
      });
      barra.appendChild(c);
    })(i);
  }
  caja.appendChild(barra);
  caja.appendChild(cuenta);
  actualizar();

  var rev = botonRevisar(caja, function(){
    var n = pintadas.filter(Boolean).length;
    var bien = (n === ej.pinta);
    barra.classList.add(bien ? 'bien' : 'mal');
    Array.prototype.forEach.call(barra.children, function(c){ c.disabled = true; });
    resolver(bien, ej, ej.pinta + ' de ' + ej.partes + ' partes');
  }, function(){ return pintadas.some(Boolean); });
  rev.aviso.textContent = 'Primero pinta las partes que te piden.';
}

/* --- 2. recta numérica --- */
function pintarRecta(zona, ej){
  var caja = taller(zona, 'Toca la marca donde va el número. Si la recta es larga, arrástrala de lado.');
  var cont = document.createElement('div');
  cont.className = 'recta';
  var linea = document.createElement('div');
  linea.className = 'recta-linea';
  cont.appendChild(linea);

  var elegido = null, marcas = [];
  var pasos = Math.round((ej.max - ej.min) / ej.paso);
  var decimales = (String(ej.paso).split('.')[1] || '').length;
  // Cada marca necesita su espacio o los numeros se enciman.
  linea.style.minWidth = Math.max(240, pasos * 46) + 'px';

  for(var i=0;i<=pasos;i++){
    (function(k){
      var valor = +(ej.min + k * ej.paso).toFixed(decimales);
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'recta-marca';
      b.style.left = (k / pasos * 100) + '%';
      b.setAttribute('aria-pressed','false');
      b.innerHTML = '<i></i><span>' + valor + '</span>';
      b.addEventListener('click', function(){
        if(st.respondida) return;
        elegido = valor;
        marcas.forEach(function(m){ m.setAttribute('aria-pressed', String(m === b)); });
      });
      marcas.push(b);
      linea.appendChild(b);
    })(i);
  }
  caja.appendChild(cont);

  var rev = botonRevisar(caja, function(){
    var bien = (elegido !== null && Math.abs(elegido - ej.r) < 1e-9);
    marcas.forEach(function(m){
      m.disabled = true;
      var v = parseFloat(m.querySelector('span').textContent);
      if(Math.abs(v - ej.r) < 1e-9) m.classList.add('bien');
      else if(elegido !== null && Math.abs(v - elegido) < 1e-9) m.classList.add('mal');
    });
    resolver(bien, ej, String(ej.r));
  }, function(){ return elegido !== null; });
  rev.aviso.textContent = 'Primero toca una marca de la recta.';

  // Aviso de que la recta sigue mas alla del borde.
  requestAnimationFrame(function(){
    if(cont.scrollWidth > cont.clientWidth + 4) cont.classList.add('desliza');
  });
}

/* --- 3. ordenar --- */
function pintarOrden(zona, ej){
  var caja = taller(zona, 'Toca las tarjetas en el orden correcto. Si te equivocas, usa Deshacer.');
  var huecos = document.createElement('div');
  huecos.className = 'orden-huecos';
  var banco = document.createElement('div');
  banco.className = 'orden-banco';
  var puestos = [];

  function fichaBanco(txt){
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'ficha';
    b.textContent = txt;
    b.addEventListener('click', function(){
      if(st.respondida) return;
      b.remove();
      puestos.push(txt);
      repintarHuecos();
    });
    return b;
  }
  function repintarHuecos(){
    huecos.innerHTML = '';
    puestos.forEach(function(txt, i){
      var f = document.createElement('span');
      f.className = 'ficha';
      f.innerHTML = '<span class="pos">' + (i+1) + '</span>' + esc(txt);
      huecos.appendChild(f);
    });
    btnDeshacer.disabled = (puestos.length === 0) || st.respondida;
  }

  revuelve(ej.items).forEach(function(txt){ banco.appendChild(fichaBanco(txt)); });
  caja.appendChild(huecos);
  caja.appendChild(banco);

  var acc = document.createElement('div');
  acc.className = 'acciones';
  var btnDeshacer = document.createElement('button');
  btnDeshacer.type = 'button'; btnDeshacer.className = 'btn'; btnDeshacer.textContent = '↩ Deshacer';
  btnDeshacer.addEventListener('click', function(){
    if(st.respondida || !puestos.length) return;
    banco.appendChild(fichaBanco(puestos.pop()));
    repintarHuecos();
  });
  var btnRev = document.createElement('button');
  btnRev.type = 'button'; btnRev.className = 'btn btn--rojo'; btnRev.textContent = 'Revisar';
  btnRev.addEventListener('click', function(){
    if(st.respondida) return;
    if(puestos.length < ej.items.length){ return; }   // faltan tarjetas
    btnRev.disabled = true; btnDeshacer.disabled = true;
    var bien = puestos.every(function(txt, i){ return txt === ej.items[i]; });
    Array.prototype.forEach.call(huecos.children, function(f, i){
      f.classList.add(puestos[i] === ej.items[i] ? 'bien' : 'mal');
    });
    Array.prototype.forEach.call(banco.children, function(f){ f.disabled = true; });
    resolver(bien, ej, ej.items.join(' → '));
  });
  acc.appendChild(btnDeshacer); acc.appendChild(btnRev);
  caja.appendChild(acc);
  repintarHuecos();
}

/* --- 4. unir dos columnas --- */
function pintarParear(zona, ej){
  var caja = taller(zona, 'Toca uno de la izquierda y luego su pareja de la derecha.');
  var rejilla = document.createElement('div');
  rejilla.className = 'parejas';
  var colA = document.createElement('div'); colA.className = 'columna';
  var colB = document.createElement('div'); colB.className = 'columna';
  rejilla.appendChild(colA); rejilla.appendChild(colB);

  var seleccionA = null, unidos = 0, fallos = 0;

  function boton(txt, lado, idx){
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'par';
    b.textContent = txt;
    b.dataset.idx = String(idx);
    b.setAttribute('aria-pressed','false');
    b.addEventListener('click', function(){
      if(st.respondida || b.classList.contains('unido')) return;
      if(lado === 'a'){
        if(seleccionA) seleccionA.setAttribute('aria-pressed','false');
        seleccionA = (seleccionA === b) ? null : b;
        b.setAttribute('aria-pressed', String(seleccionA === b));
        return;
      }
      if(!seleccionA) return;
      if(seleccionA.dataset.idx === b.dataset.idx){
        seleccionA.classList.add('unido'); seleccionA.setAttribute('aria-pressed','false');
        b.classList.add('unido');
        seleccionA.disabled = true; b.disabled = true;
        seleccionA = null;
        unidos++;
        if(unidos === ej.pares.length) terminarPareo();
      } else {
        fallos++;
        var malA = seleccionA;
        malA.classList.add('fallo'); b.classList.add('fallo');
        setTimeout(function(){
          malA.classList.remove('fallo'); b.classList.remove('fallo');
          malA.setAttribute('aria-pressed','false');
        }, 700);
        seleccionA = null;
      }
    });
    return b;
  }

  function terminarPareo(){
    // Con 3 o 4 parejas, exigir cero equivocaciones convierte la estrella
    // en puntería en vez de saber, y la mitad de estos ejercicios son de
    // ninos de 4 a 6. Se tolera una equivocacion por cada dos parejas.
    var tolerancia = Math.floor(ej.pares.length / 2);
    var bien = (fallos <= tolerancia);
    var nota;
    if(fallos === 0) nota = null;
    else if(bien) nota = '¡Las uniste todas! Te tomó ' + fallos +
      (fallos === 1 ? ' intento de más.' : ' intentos de más.');
    else nota = 'Las uniste todas, pero te tomó ' + fallos + ' intentos de más.';
    resolver(bien, ej, ej.pares.map(function(p){ return p[0] + ' con ' + p[1]; }).join('; '), nota);
  }

  var izq = revuelve(ej.pares.map(function(p, i){ return {txt:p[0], i:i}; }));
  var der = revuelve(ej.pares.map(function(p, i){ return {txt:p[1], i:i}; }));
  izq.forEach(function(x){ colA.appendChild(boton(x.txt, 'a', x.i)); });
  der.forEach(function(x){ colB.appendChild(boton(x.txt, 'b', x.i)); });
  caja.appendChild(rejilla);
}

/* --- 5. contar tocando --- */
function pintarConteo(zona, ej){
  var caja = taller(zona, 'Toca las figuras mientras cuentas. Vuelve a tocar para quitar.');
  var rejilla = document.createElement('div');
  rejilla.className = 'conteo';
  var tocadas = [], emoji = ej.emoji || '🔵';

  var cuenta = document.createElement('p');
  cuenta.className = 'cuenta-frac';
  function actualizar(){
    cuenta.innerHTML = '<small>llevas tocadas</small>' + tocadas.filter(Boolean).length;
  }

  for(var i=0;i<ej.total;i++){
    (function(k){
      tocadas[k] = false;
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'pieza';
      b.setAttribute('aria-pressed','false');
      b.setAttribute('aria-label','Figura ' + (k+1));
      b.textContent = emoji;
      b.addEventListener('click', function(){
        if(st.respondida) return;
        tocadas[k] = !tocadas[k];
        b.setAttribute('aria-pressed', String(tocadas[k]));
        actualizar();
      });
      rejilla.appendChild(b);
    })(i);
  }
  caja.appendChild(rejilla);
  caja.appendChild(cuenta);
  actualizar();

  var rev = botonRevisar(caja, function(){
    var n = tocadas.filter(Boolean).length;
    Array.prototype.forEach.call(rejilla.children, function(b){ b.disabled = true; });
    resolver(n === ej.r, ej, String(ej.r));
  }, function(){ return tocadas.some(Boolean); });
  rev.aviso.textContent = 'Primero toca las figuras para contarlas.';
}

/* ---------- veredicto ---------- */
function resolver(bien, ej, esperada, notaExtra){
  st.respondida = true;
  if(bien){ st.aciertos++; lanzarConfeti(); }

  var v = document.createElement('div');
  v.className = 'veredicto ' + (bien ? 'ok' : 'no');
  v.setAttribute('role','status');
  var titulo = bien ? '¡Eso es! 🎉' : (notaExtra || 'Casi. La respuesta era: ' + esperada);
  v.innerHTML = '<strong>' + esc(titulo) + '</strong>' + esc(ej.ex);
  $('zonaPregunta').appendChild(v);

  var lec = leccionActual();
  var ultima = (st.idx === lec.ejercicios.length - 1);
  var acc = document.createElement('div');
  acc.className = 'acciones';
  var sig = document.createElement('button');
  sig.type = 'button'; sig.className = 'btn btn--oro';
  sig.textContent = ultima ? 'Ver mi resultado →' : 'Siguiente →';
  sig.addEventListener('click', function(){
    if(ultima){ terminar(); } else { st.idx++; pintarPregunta(); }
  });
  acc.appendChild(sig);
  $('zonaPregunta').appendChild(acc);
  sig.focus();

  if(st.nivel === 'semillas'){ hablar(titulo + ' ' + ej.ex); }
}

/* ---------- telón ---------- */
function terminar(){
  var lec = leccionActual();
  var total = lec.ejercicios.length;
  var a = st.aciertos;
  var estrellas = a === total ? 3 : (a >= total - 1 ? 2 : (a >= Math.ceil(total/2) ? 1 : 0));

  var k = claveLec(st.curso.id, st.nivel, st.lecIdx);
  var previo = progreso[k] || {estrellas:0, aciertos:0};
  progreso[k] = {
    estrellas: Math.max(previo.estrellas || 0, estrellas),
    aciertos: Math.max(previo.aciertos || 0, a),
    total: total
  };
  C.guardarProgreso(perfil.id, progreso);
  pintarCabecera();

  $('rielBarra').style.width = '100%';
  $('telonEstrellas').textContent = C.estrellasTxt(estrellas);
  $('telonEstrellas').style.color = 'var(--oro)';

  var titulo, texto, emo;
  if(estrellas === 3){ emo='🏆'; titulo='¡Función perfecta!'; texto='Contestaste las ' + total + ' bien. Ese número ya lo dominas: pasa a la siguiente lección.'; }
  else if(estrellas === 2){ emo='🎉'; titulo='¡Muy buen número!'; texto='Acertaste ' + a + ' de ' + total + '. Lee otra vez la parte que falló y las tres estrellas son tuyas.'; }
  else if(estrellas === 1){ emo='💪'; titulo='Vas avanzando'; texto='Acertaste ' + a + ' de ' + total + '. Nadie camina la cuerda a la primera: repasa la lección y vuelve a intentar.'; }
  else { emo='🎪'; titulo='A ensayar otra vez'; texto='Acertaste ' + a + ' de ' + total + '. Vuelve a la lección, léela despacio y regresa. Aquí no se pierde: se ensaya.'; }

  $('telonEmoji').textContent = emo;
  $('telonTitulo').textContent = titulo;
  $('telonTexto').textContent = texto;
  mostrar('telon', true);
  corregirHash('telon');
  if(estrellas >= 2) lanzarConfeti();
  if(st.nivel === 'semillas') hablar(titulo + '. ' + texto);
}

/* ---------- arranque ---------- */
document.querySelectorAll('[data-ir]').forEach(function(b){
  b.addEventListener('click', function(){
    var d = b.getAttribute('data-ir');
    if(d === 'curso' && st.curso){ abrirCurso(st.curso); }
    else if(d === 'leccion' && st.curso){ abrirLeccion(st.lecIdx); }
    else { pintarCursos(); mostrar('programa'); }
  });
});
$('btnEmpezar').addEventListener('click', empezar);
$('btnOtraVez').addEventListener('click', empezar);
$('btnLeer').addEventListener('click', function(){ hablar(textoLeccion()); });
$('btnLeerPregunta').addEventListener('click', function(){ hablar(textoPregunta()); });

pintarCabecera();
pintarCursos();
mostrar('programa');

}

// En el sitio arranca solo. En el archivo suelto lo arranca el
// conmutador de paginas, cuando ya se sabe quien esta jugando.
if(window.CARPA_UNICO){ window.arrancarMotor = arrancarMotor; }
else { arrancarMotor(); }

