(function(){
'use strict';

/* ============ datos ============ */
var NIVELES = [
  {id:'semillas',     nombre:'Semillas',     edad:'4 a 6 años'},
  {id:'malabaristas', nombre:'Malabaristas', edad:'7 a 8 años'},
  {id:'acrobatas',    nombre:'Acróbatas',    edad:'9 a 11 años'}
];
var ORDEN = ['mate','esp','lect','cien','geo','hist'];

var TODOS = [].concat(window.DATOS_A || [], window.DATOS_B || []);
var CURSOS = ORDEN.map(function(id){
  return TODOS.filter(function(c){ return c.id === id; })[0];
}).filter(Boolean);
TODOS.forEach(function(c){ if(CURSOS.indexOf(c) === -1) CURSOS.push(c); });

/* ============ estado ============ */
var LS = {
  leer:function(k,d){ try{ var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  guardar:function(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};

var perfil = LS.leer('carpa:perfil', '') || '';
var progreso = {};
var st = { nivel:'malabaristas', curso:null, lecIdx:0, idx:0, aciertos:0, respondida:false };

function clavePro(){ return 'carpa:prog:' + (perfil || '_invitado'); }
function cargarProgreso(){ progreso = LS.leer(clavePro(), {}) || {}; }
function claveLec(cursoId, nivel, i){ return cursoId + '|' + nivel + '|' + i; }

function $(id){ return document.getElementById(id); }

/* ============ utilidades ============ */
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
function esc(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function estrellasTxt(n){ return '★★★'.slice(0,n) + '☆☆☆'.slice(0, 3-n); }

/* ============ voz ============ */
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

/* ============ confeti ============ */
var cv = $('confeti'), cx = cv.getContext('2d'), trozos = [], animando = false;
var suave = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function ajustarLienzo(){ cv.width = innerWidth; cv.height = innerHeight; }
ajustarLienzo(); addEventListener('resize', ajustarLienzo);

function lanzarConfeti(){
  if(suave) return;
  var colores = ['#C62828','#E8A317','#0F7C86','#3B8A46','#F7EDDA'];
  for(var i=0;i<70;i++){
    trozos.push({
      x: innerWidth/2 + (Math.random()-0.5)*220,
      y: innerHeight*0.42,
      vx: (Math.random()-0.5)*9,
      vy: -Math.random()*11 - 3,
      g: 0.32 + Math.random()*0.16,
      an: Math.random()*Math.PI,
      va: (Math.random()-0.5)*0.3,
      t: 5 + Math.random()*7,
      c: colores[i % colores.length],
      vida: 90 + Math.random()*40
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

/* ============ banderines ============ */
(function(){
  var cont = $('banderines');
  var cols = ['var(--rojo)','var(--oro)','var(--turquesa)'];
  var n = Math.ceil(innerWidth / 26) + 4;
  var html = '';
  for(var i=0;i<n;i++){ html += '<i style="background:' + cols[i%3] + '"></i>'; }
  cont.innerHTML = html;
})();

/* ============ vistas ============ */
var VISTAS = {
  programa: $('vistaPrograma'), curso: $('vistaCurso'), leccion: $('vistaLeccion'),
  pista: $('vistaPista'), telon: $('vistaTelon')
};
var vistaActual = 'programa';
function mostrar(nombre, sinHistorial){
  callar();
  Object.keys(VISTAS).forEach(function(k){ VISTAS[k].hidden = (k !== nombre); });
  vistaActual = nombre;
  window.scrollTo({top:0, behavior: suave ? 'auto' : 'smooth'});
  VISTAS[nombre].focus();          // quien va con teclado no vuelve a empezar
  if(!sinHistorial) apuntarHistorial(nombre);
}

/* El boton Atras del navegador debe regresar de vista, no salirse de la app.
   Se usa el hash porque history.pushState truena en file:// */
var ignorarHash = false;
function apuntarHistorial(nombre){
  try{
    if(('#' + nombre) === location.hash) return;
    ignorarHash = true;
    location.hash = nombre;
    setTimeout(function(){ ignorarHash = false; }, 0);
  }catch(e){}
}
// Reescribe el hash sin crear entrada nueva, para que la URL no mienta
// cuando el handler muestra algo distinto de lo que pedia el hash.
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
  if(destino === 'programa'){ pintarCursos(); }   // las estrellas pudieron cambiar
  if(destino === 'curso' && st.curso){ abrirCurso(st.curso, true); }
  else if(destino === 'leccion' && st.curso){ abrirLeccion(st.lecIdx, true); }
  // Volver "hacia adelante" a una serie de ejercicios a medias no tiene
  // sentido: se regresa a la leccion, que es de donde se arranca.
  else if((destino === 'pista' || destino === 'telon') && st.curso){ abrirLeccion(st.lecIdx, true); corregirHash('leccion'); }
  else { pintarCursos(); mostrar('programa', true); corregirHash('programa'); }
});

/* ============ cabecera ============ */
function pintarCabecera(){
  $('txtNombre').textContent = perfil || 'Pon tu nombre';
  var boletos = 0, estrellas = 0;
  Object.keys(progreso).forEach(function(k){
    boletos += progreso[k].aciertos || 0;
    estrellas += progreso[k].estrellas || 0;
  });
  $('txtBoletos').textContent = boletos;
  $('txtEstrellas').textContent = estrellas;
}

/* ============ programa ============ */
function pintarNiveles(){
  var cont = $('listonNiveles');
  cont.innerHTML = '';
  NIVELES.forEach(function(nv){
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nivel';
    b.setAttribute('aria-pressed', String(nv.id === st.nivel));
    b.innerHTML = '<strong>' + esc(nv.nombre) + '</strong><span>' + esc(nv.edad) + '</span>';
    b.addEventListener('click', function(){
      st.nivel = nv.id;
      LS.guardar('carpa:nivel', nv.id);
      pintarNiveles(); pintarCursos();
    });
    cont.appendChild(b);
  });
  var nv = NIVELES.filter(function(n){ return n.id === st.nivel; })[0];
  $('tituloPrograma').textContent = 'Seis números para ' + nv.nombre.toLowerCase();
}

function leccionesDe(curso, nivel){
  return (curso.niveles && curso.niveles[nivel]) || [];
}

function pintarCursos(){
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

/* ============ curso ============ */
function abrirCurso(curso, sinHistorial){
  st.curso = curso;
  var nv = NIVELES.filter(function(n){ return n.id === st.nivel; })[0];
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
      '<span class="estrellas" style="color:var(--oro)">' + estrellasTxt(p.estrellas || 0) + '</span>';
    b.addEventListener('click', function(){ abrirLeccion(j); });
    cont.appendChild(b);
  });
  mostrar('curso', sinHistorial);
}

/* ============ lección ============ */
function leccionActual(){ return leccionesDe(st.curso, st.nivel)[st.lecIdx]; }

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
      lec.lectura.texto.split('\n\n').map(function(p){ return '<p>' + esc(p) + '</p>'; }).join('') +
      '</div>';
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

/* ============ ejercicios ============ */
function empezar(){
  st.idx = 0; st.aciertos = 0;
  mostrar('pista');            // sí entra al historial: Atrás debe volver a la lección
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

  if(ej.emoji){
    var em = document.createElement('p');
    em.className = 'emojis'; em.textContent = ej.emoji; em.setAttribute('aria-hidden','true');
    zona.appendChild(em);
  }

  if(ej.t === 'op'){        pintarOpciones(zona, ej, ej.o); }
  else if(ej.t === 'vf'){   pintarOpciones(zona, ej, ['Verdadero','Falso'], true); }
  else {                    pintarCampo(zona, ej); }

  if(st.nivel === 'semillas'){ hablar(textoPregunta()); }
}

function textoPregunta(){
  var ej = leccionActual().ejercicios[st.idx];
  var t = ej.p;
  if(ej.t === 'op'){
    t += ej.sinListaVoz ? '. Mira las opciones en la pantalla.'   // ortografía: de oído no se distinguen
                        : '. Opciones: ' + ej.o.join(', ') + '.';
  }
  if(ej.t === 'vf'){ t += '. ¿Verdadero o falso?'; }
  return t;
}

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
      var bien = (i === correcta);
      Array.prototype.forEach.call(cont.children, function(el, k){
        el.disabled = true;
        if(k === correcta) el.classList.add('bien');
        else if(k === i) el.classList.add('mal');
      });
      resolver(bien, ej, etiquetas[correcta]);
    });
    cont.appendChild(b);
  });
  zona.appendChild(cont);
}

function pintarCampo(zona, ej){
  var fila = document.createElement('div');
  fila.className = 'fila-respuesta';
  var inp = document.createElement('input');
  inp.type = (ej.t === 'num') ? 'text' : 'text';
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
      var opciones = ej.r;
      esperada = opciones[0];
      var dado = normaliza(v);
      var dadoPelado = sinArticulo(dado);
      bien = opciones.some(function(r){
        if(!tieneLetras(r)) return String(r).trim() === v;   // símbolos: literal
        var esperado = normaliza(r);
        return esperado === dado || sinArticulo(esperado) === dadoPelado;
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

function resolver(bien, ej, esperada){
  st.respondida = true;
  if(bien){ st.aciertos++; lanzarConfeti(); }

  var v = document.createElement('div');
  v.className = 'veredicto ' + (bien ? 'ok' : 'no');
  v.setAttribute('role','status');
  v.innerHTML = '<strong>' + (bien ? '¡Eso es! 🎉' : 'Casi. La respuesta era: ' + esc(esperada)) + '</strong>' + esc(ej.ex);
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

  if(st.nivel === 'semillas'){ hablar((bien ? '¡Eso es!' : 'Casi. La respuesta era ' + esperada + '.') + ' ' + ej.ex); }
}

/* ============ telón ============ */
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
  LS.guardar(clavePro(), progreso);
  pintarCabecera();

  $('rielBarra').style.width = '100%';
  $('telonEstrellas').textContent = estrellasTxt(estrellas);
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
  corregirHash('telon');   // la URL decia #pista mientras se veia el telon
  if(estrellas >= 2) lanzarConfeti();
  if(st.nivel === 'semillas') hablar(titulo + '. ' + texto);
}

/* ============ taquilla ============ */
var focoPrevio = null;
function abrirTaquilla(){
  focoPrevio = document.activeElement;
  $('taquilla').hidden = false;
  $('campoNombre').value = perfil;
  setTimeout(function(){ $('campoNombre').focus(); }, 60);
}
function cerrarTaquilla(){
  var caja = $('taquilla');
  if(caja.hidden) return;
  caja.hidden = true;
  $('campoNombre').style.borderColor = '';
  if(focoPrevio && focoPrevio.focus) focoPrevio.focus();
}
// El foco no debe escaparse por detras de la capa.
$('taquilla').addEventListener('keydown', function(e){
  if(e.key === 'Escape'){ e.preventDefault(); cerrarTaquilla(); return; }
  if(e.key !== 'Tab') return;
  var focos = $('taquilla').querySelectorAll('input, button');
  var primero = focos[0], ultimo = focos[focos.length - 1];
  if(e.shiftKey && document.activeElement === primero){ e.preventDefault(); ultimo.focus(); }
  else if(!e.shiftKey && document.activeElement === ultimo){ e.preventDefault(); primero.focus(); }
});
$('taquilla').addEventListener('mousedown', function(e){
  if(e.target !== $('taquilla')) return;   // clic fuera del boleto
  e.preventDefault();                     // si no, el mousedown roba el foco
  cerrarTaquilla();
});
function guardarNombre(){
  var campo = $('campoNombre');
  var v = campo.value.trim();
  if(!v){                       // sin nombre no hay dónde guardar
    campo.style.borderColor = 'var(--rojo)';
    campo.placeholder = 'Escribe tu nombre aquí';
    campo.focus();
    return;
  }
  campo.style.borderColor = '';
  var eraInvitado = !perfil;
  var pendiente = eraInvitado ? progreso : null;

  perfil = v;
  LS.guardar('carpa:perfil', perfil);
  cargarProgreso();

  // Lo que jugó sin nombre no se pierde: se pasa a su perfil.
  if(pendiente && Object.keys(pendiente).length){
    Object.keys(pendiente).forEach(function(k){
      var yaTiene = progreso[k];
      if(!yaTiene || (pendiente[k].estrellas || 0) > (yaTiene.estrellas || 0)){
        progreso[k] = pendiente[k];
      }
    });
    LS.guardar(clavePro(), progreso);
    LS.guardar('carpa:prog:_invitado', {});
  }

  cerrarTaquilla();
  pintarCabecera(); pintarCursos();
  // si esta viendo un curso, sus estrellas son de OTRO nino: hay que repintarlas
  if(st.curso && !VISTAS.curso.hidden){ abrirCurso(st.curso, true); }
}

/* ============ arranque ============ */
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
$('chipNombre').addEventListener('click', abrirTaquilla);
$('btnGuardarNombre').addEventListener('click', guardarNombre);
$('btnCerrarTaquilla').addEventListener('click', cerrarTaquilla);
$('campoNombre').addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); guardarNombre(); } });

st.nivel = LS.leer('carpa:nivel', 'malabaristas') || 'malabaristas';
if(!NIVELES.some(function(n){ return n.id === st.nivel; })) st.nivel = 'malabaristas';
cargarProgreso();
pintarCabecera();
pintarNiveles();
pintarCursos();
mostrar('programa');

})();
