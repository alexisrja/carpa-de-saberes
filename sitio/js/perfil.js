/* Carpa de Saberes — perfiles y progreso
   Compartido por inicio y estación. Todo vive en el aparato del niño:
   nada de esto sale a ningún servidor. */
(function(){
'use strict';

var K_PERFILES = 'carpa:perfiles';
var K_ACTIVO   = 'carpa:activo';
var K_PROG     = 'carpa:prog:';

var NIVELES = [
  {id:'semillas',     nombre:'Semillas',     edad:'4 a 6 años'},
  {id:'malabaristas', nombre:'Malabaristas', edad:'7 a 8 años'},
  {id:'acrobatas',    nombre:'Acróbatas',    edad:'9 a 11 años'}
];

var CARAS = ['🤹','🎪','🤡','🎩','🦁','🐘','🐧','🦓','🎭','🎠','🪄','🎈','🐴','🦜','⭐','🌟'];

function leer(k, d){
  try{ var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }
  catch(e){ return d; }
}
function guardar(k, v){
  try{ localStorage.setItem(k, JSON.stringify(v)); return true; }
  catch(e){ return false; }
}

function nuevoId(){
  return 'a' + Date.now().toString(36) + Math.floor(Math.random()*1e4).toString(36);
}

function perfiles(){
  var lista = leer(K_PERFILES, []);
  return Array.isArray(lista) ? lista : [];
}
function guardarPerfiles(lista){ return guardar(K_PERFILES, lista); }

function crear(datos){
  var lista = perfiles();
  var p = {
    id: nuevoId(),
    nombre: String(datos.nombre || '').trim().slice(0,18) || 'Artista',
    cara: datos.cara || CARAS[0],
    nivel: nivelValido(datos.nivel) ? datos.nivel : 'malabaristas',
    creado: Date.now()
  };
  lista.push(p);
  guardarPerfiles(lista);
  return p;
}

function actualizar(id, cambios){
  var lista = perfiles();
  for(var i=0;i<lista.length;i++){
    if(lista[i].id === id){
      if(cambios.nombre !== undefined) lista[i].nombre = String(cambios.nombre).trim().slice(0,18) || lista[i].nombre;
      if(cambios.cara   !== undefined) lista[i].cara = cambios.cara;
      if(cambios.nivel  !== undefined && nivelValido(cambios.nivel)) lista[i].nivel = cambios.nivel;
      guardarPerfiles(lista);
      return lista[i];
    }
  }
  return null;
}

function borrar(id){
  guardarPerfiles(perfiles().filter(function(p){ return p.id !== id; }));
  try{ localStorage.removeItem(K_PROG + id); }catch(e){}
  if(leer(K_ACTIVO, '') === id){ try{ localStorage.removeItem(K_ACTIVO); }catch(e){} }
}

function porId(id){
  var f = perfiles().filter(function(p){ return p.id === id; });
  return f.length ? f[0] : null;
}

function activar(id){ guardar(K_ACTIVO, id); }
function activo(){ return porId(leer(K_ACTIVO, '')); }
function salir(){ try{ localStorage.removeItem(K_ACTIVO); }catch(e){} }

function nivelValido(n){
  return NIVELES.some(function(x){ return x.id === n; });
}
function nivelPorId(n){
  var f = NIVELES.filter(function(x){ return x.id === n; });
  return f.length ? f[0] : NIVELES[1];
}

/* ---------- progreso ---------- */
function progreso(id){ return leer(K_PROG + id, {}) || {}; }
function guardarProgreso(id, prog){ return guardar(K_PROG + id, prog); }

function resumen(id){
  var prog = progreso(id), boletos = 0, estrellas = 0, lecciones = 0;
  Object.keys(prog).forEach(function(k){
    boletos   += prog[k].aciertos  || 0;
    estrellas += prog[k].estrellas || 0;
    if((prog[k].estrellas || 0) > 0) lecciones++;
  });
  return {boletos:boletos, estrellas:estrellas, lecciones:lecciones};
}

/* ---------- migración desde la versión de un solo archivo ----------
   Antes había un solo nombre suelto ('carpa:perfil') y el progreso
   colgaba del nombre, no de un id. Se convierte a un perfil de verdad
   para que nadie pierda sus estrellas al actualizar. */
function migrar(){
  var viejoNombre;
  try{ viejoNombre = JSON.parse(localStorage.getItem('carpa:perfil') || 'null'); }
  catch(e){ viejoNombre = null; }
  if(!viejoNombre) return false;

  var yaEsta = perfiles().some(function(p){ return p.nombre === viejoNombre; });
  if(!yaEsta){
    var nivelViejo;
    try{ nivelViejo = JSON.parse(localStorage.getItem('carpa:nivel') || 'null'); }catch(e){}
    var p = crear({nombre: viejoNombre, cara: CARAS[0], nivel: nivelViejo || 'malabaristas'});
    var progViejo = leer('carpa:prog:' + viejoNombre, null);
    if(progViejo && Object.keys(progViejo).length) guardarProgreso(p.id, progViejo);
  }
  try{ localStorage.removeItem('carpa:perfil'); }catch(e){}
  return true;
}

/* ---------- utilidades compartidas ---------- */
function esc(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function estrellasTxt(n){ return '★★★'.slice(0,n) + '☆☆☆'.slice(0, 3-n); }

function banderines(el){
  if(!el) return;
  var cols = ['var(--rojo)','var(--oro)','var(--turquesa)'];
  var n = Math.ceil(innerWidth / 26) + 4, html = '';
  for(var i=0;i<n;i++){ html += '<i style="background:' + cols[i%3] + '"></i>'; }
  el.innerHTML = html;
}

window.Carpa = {
  NIVELES: NIVELES, CARAS: CARAS,
  perfiles: perfiles, crear: crear, actualizar: actualizar, borrar: borrar,
  porId: porId, activar: activar, activo: activo, salir: salir,
  nivelPorId: nivelPorId, nivelValido: nivelValido,
  progreso: progreso, guardarProgreso: guardarProgreso, resumen: resumen,
  migrar: migrar, esc: esc, estrellasTxt: estrellasTxt, banderines: banderines
};

})();
