/* Carpa de Saberes — página de inicio: escoger o crear artista */
(function(){
'use strict';

var C = window.Carpa;
function $(id){ return document.getElementById(id); }

C.migrar();
C.banderines($('banderines'));

var editando = null;              // id del perfil que se edita, o null si es alta
var caraElegida = C.CARAS[0];
var nivelElegido = 'malabaristas';

/* ---------- lista de artistas ---------- */
function pintarArtistas(){
  var cont = $('rejillaArtistas');
  var lista = C.perfiles();
  cont.innerHTML = '';

  lista.forEach(function(p){
    var r = C.resumen(p.id);
    var nv = C.nivelPorId(p.nivel);
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'artista';
    b.innerHTML =
      '<span class="cara" aria-hidden="true">' + p.cara + '</span>' +
      '<span class="nombre">' + C.esc(p.nombre) + '</span>' +
      '<span class="detalle">' + C.esc(nv.nombre) + '</span>' +
      '<span class="marcador"><span>⭐ ' + r.estrellas + '</span><span>🎟️ ' + r.boletos + '</span></span>';
    b.addEventListener('click', function(){ entrar(p.id); });
    cont.appendChild(b);
  });

  var nuevo = document.createElement('button');
  nuevo.type = 'button';
  nuevo.className = 'artista artista--nuevo';
  nuevo.innerHTML =
    '<span class="cara" aria-hidden="true">＋</span>' +
    '<span class="nombre">Nuevo artista</span>' +
    '<span class="detalle">' + (lista.length ? 'Otro más' : 'Empieza aquí') + '</span>';
  nuevo.addEventListener('click', function(){ abrirAlta(null); });
  cont.appendChild(nuevo);

  if(lista.length){
    var ayuda = document.createElement('p');
    ayuda.style.cssText = 'color:var(--tinta2);font-size:14px;margin:18px 0 0';
    ayuda.textContent = 'Para cambiar tu cara o tu nivel, entra y usa el botón de tu nombre.';
    cont.parentNode.insertBefore(ayuda, cont.nextSibling);
  }
}

function entrar(id){
  C.activar(id);
  // En el archivo suelto no hay a donde navegar: se recarga y el
  // conmutador muestra la Estacion con el artista ya elegido.
  if(window.CARPA_UNICO) location.reload();
  else location.href = 'estacion.html';
}

/* ---------- alta y edición ---------- */
function pintarCaras(){
  var cont = $('listaCaras');
  cont.innerHTML = '';
  C.CARAS.forEach(function(cara){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'cara-op';
    b.setAttribute('aria-pressed', String(cara === caraElegida));
    b.setAttribute('aria-label', 'Cara ' + cara);
    b.textContent = cara;
    b.addEventListener('click', function(){
      caraElegida = cara;
      pintarCaras();
    });
    cont.appendChild(b);
  });
}

function pintarNiveles(){
  var cont = $('listaNiveles');
  cont.innerHTML = '';
  C.NIVELES.forEach(function(nv){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nivel';
    b.setAttribute('aria-pressed', String(nv.id === nivelElegido));
    b.innerHTML = '<strong>' + C.esc(nv.nombre) + '</strong><span>' + C.esc(nv.edad) + '</span>';
    b.addEventListener('click', function(){
      nivelElegido = nv.id;
      pintarNiveles();
    });
    cont.appendChild(b);
  });
}

function abrirAlta(id){
  editando = id;
  var p = id ? C.porId(id) : null;
  caraElegida = p ? p.cara : C.CARAS[0];
  nivelElegido = p ? p.nivel : 'malabaristas';

  $('campoNombre').value = p ? p.nombre : '';
  $('rotuloAlta').textContent = p ? 'Editar artista' : 'Nuevo artista';
  $('tituloAlta').textContent = p ? 'Cambia lo que quieras' : 'Crea tu artista';
  $('btnGuardar').textContent = p ? 'Guardar cambios' : 'Entrar a la Estación →';
  $('btnBorrar').hidden = !p;
  $('errorNombre').hidden = true;
  $('campoNombre').style.borderColor = '';

  pintarCaras();
  pintarNiveles();
  $('vistaArtistas').hidden = true;
  $('vistaAlta').hidden = false;
  setTimeout(function(){ $('campoNombre').focus(); }, 60);
}

function cerrarAlta(){
  $('vistaAlta').hidden = true;
  $('vistaArtistas').hidden = false;
  pintarArtistas();
}

function guardar(){
  var campo = $('campoNombre');
  var nombre = campo.value.trim();
  if(!nombre){
    campo.style.borderColor = 'var(--rojo)';
    $('errorNombre').textContent = 'Escribe tu nombre para poder guardar tus estrellas.';
    $('errorNombre').hidden = false;
    campo.focus();
    return;
  }
  campo.style.borderColor = '';
  $('errorNombre').hidden = true;

  if(editando){
    C.actualizar(editando, {nombre:nombre, cara:caraElegida, nivel:nivelElegido});
    entrar(editando);
  } else {
    var p = C.crear({nombre:nombre, cara:caraElegida, nivel:nivelElegido});
    entrar(p.id);
  }
}

function borrar(){
  if(!editando) return;
  var p = C.porId(editando);
  if(!p) return;
  var r = C.resumen(editando);
  var aviso = r.estrellas
    ? 'Se van a borrar ' + p.nombre + ' y sus ' + r.estrellas + ' estrellas. Esto no se puede deshacer.'
    : 'Se va a borrar ' + p.nombre + '. Esto no se puede deshacer.';
  if(!confirm(aviso)) return;
  C.borrar(editando);
  editando = null;
  cerrarAlta();
}

/* ---------- conexión e instalación ---------- */
var eventoInstalar = null;

function pintarEstadoLinea(){
  var aviso = $('avisoLinea'), texto = $('textoAviso'), estado = $('estadoOffline');
  if(!navigator.onLine){
    texto.textContent = '📴 Sin internet, pero la Carpa sigue abierta.';
    aviso.hidden = false;
    if(estado) estado.textContent = 'Trabajando sin conexión';
  } else if(eventoInstalar){
    texto.textContent = '📲 Guárdala en este aparato y ábrela aunque no haya internet.';
    aviso.hidden = false;
    if(estado) estado.textContent = 'En línea';
  } else {
    aviso.hidden = true;
    if(estado) estado.textContent = 'En línea';
  }
}

addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  eventoInstalar = e;
  $('btnInstalar').hidden = false;
  pintarEstadoLinea();
});
addEventListener('appinstalled', function(){
  eventoInstalar = null;
  $('btnInstalar').hidden = true;
  pintarEstadoLinea();
});
addEventListener('online',  pintarEstadoLinea);
addEventListener('offline', pintarEstadoLinea);

$('btnInstalar').addEventListener('click', function(){
  if(!eventoInstalar) return;
  eventoInstalar.prompt();
  eventoInstalar.userChoice.then(function(){
    eventoInstalar = null;
    $('btnInstalar').hidden = true;
    pintarEstadoLinea();
  });
});

/* ---------- arranque ---------- */
$('btnGuardar').addEventListener('click', guardar);
$('btnCancelar').addEventListener('click', cerrarAlta);
$('btnBorrar').addEventListener('click', borrar);
$('campoNombre').addEventListener('keydown', function(e){
  if(e.key === 'Enter'){ e.preventDefault(); guardar(); }
});

pintarArtistas();
pintarEstadoLinea();

// Si llega con ?editar=<id> desde la estación, abre la edición directo.
var m = /[?&]editar=([^&]+)/.exec(location.search);
if(m && C.porId(decodeURIComponent(m[1]))) abrirAlta(decodeURIComponent(m[1]));

})();
