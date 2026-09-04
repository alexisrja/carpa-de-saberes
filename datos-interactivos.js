window.DATOS_INT = {

  // ---------- MATEMÁTICAS ----------
  'mate|semillas':[
    {t:'conteo', p:'Toca 5 pelotas', emoji:'🟡', total:8, r:5, ex:'Cuenta en voz alta mientras tocas y detente al llegar al 5. Si sigues tocando ya son más de 5.'},
    {t:'frac', p:'Pinta la mitad de la barra', partes:2, pinta:1, ex:'La mitad es una de dos partes iguales: queda tanto pintado como sin pintar.'}
  ],
  'mate|malabaristas':[
    {t:'recta', p:'¿Dónde está el 15?', min:0, max:20, paso:1, r:15, ex:'El 15 está cinco marcas después del 10, así que queda más cerca del 20 que del 0.'},
    {t:'frac', p:'Pinta 3/4 de la barra', partes:4, pinta:3, ex:'El número de abajo dice en cuántas partes iguales se partió la barra; el de arriba, cuántas de esas partes pintas.'}
  ],
  'mate|acrobatas':[
    {t:'frac', p:'La carpa tiene 10 filas de asientos. Pinta el 40% de la barra', partes:10, pinta:4, ex:'Un porcentaje son partes de cada 100. El 40% es 40 de cada 100, que equivale a 4 de cada 10.'},
    {t:'recta', p:'¿Dónde está el 0.75?', min:0, max:1, paso:0.25, r:0.75, ex:'Cada marca vale 0.25, o sea un cuarto. El 0.75 son tres cuartos: tres marcas después del cero.'}
  ],

  // ---------- ESPAÑOL ----------
  'esp|semillas':[
    {t:'parear', p:'Une cada dibujo con su palabra', pares:[['🐶','perro'],['🌞','sol'],['🐱','gato']], ex:'Fíjate en el sonido con el que empieza cada palabra: perro empieza con p y gato con g.'},
    {t:'conteo', p:'PA-YA-SO. Toca una palma por cada pedacito de la palabra', emoji:'👏', total:5, r:3, ex:'Cada golpe de voz es una sílaba. En payaso son tres: PA, YA, SO.'}
  ],
  'esp|malabaristas':[
    {t:'orden', p:'Ordena las palabras para armar la oración', items:['El','payaso','pinta','su','cara'], ex:'En una oración se dice primero quién hace la acción, luego cuál es la acción y al final sobre qué cosa se hace.'},
    {t:'parear', p:'Une cada palabra con su sinónimo', pares:[['contento','alegre'],['bonito','hermoso'],['rápido','veloz'],['grande','enorme']], ex:'Los sinónimos son palabras diferentes que significan casi lo mismo, así no repites siempre la misma.'}
  ],
  'esp|acrobatas':[
    {t:'parear', p:'Une cada palabra con el tipo de palabra que es', pares:[['carpa','sustantivo'],['saltar','verbo'],['alto','adjetivo'],['rápidamente','adverbio']], ex:'El sustantivo nombra cosas, el verbo dice la acción, el adjetivo describe cómo es algo y el adverbio dice cómo se hace la acción.'},
    {t:'orden', p:'Ordena estas palabras en orden alfabético', items:['acróbata','carpa','malabar','payaso','trapecio'], ex:'Se compara la primera letra de cada palabra siguiendo el abecedario; solo si se repite hay que mirar la segunda.'}
  ],

  // ---------- LECTURA ----------
  'lect|semillas':[
    {t:'orden', p:'Ordena lo que pasa en el cuento', items:['🤡 El payaso se pinta la cara','🎪 Sale a la pista','😂 Todos se ríen'], ex:'Primero se prepara, luego sale y hasta el final el público reacciona. Nadie se ríe antes de que salga.'},
    {t:'parear', p:'Une a cada artista con lo que usa', pares:[['🤡 El payaso','La nariz roja'],['🎩 El mago','El sombrero'],['🤸 La trapecista','El columpio']], ex:'Piensa qué necesita cada uno para hacer su número: sin columpio no hay trapecio.'}
  ],
  'lect|malabaristas':[
    {t:'orden', p:'Ordena la historia de Lía y el perro', items:['Lía encuentra un perro perdido en la carpa','Le da agua y comida','Pega un cartel afuera del circo','La dueña llega por él'], ex:'Cada paso solo puede pasar después del anterior: la dueña no puede llegar si todavía no hay cartel que avise.'},
    {t:'parear', p:'En la historia de Lía y el perro, une a cada quién con lo que hizo', pares:[['Lía','Encontró al perro'],['El perro','Se perdió dentro de la carpa'],['La dueña','Se llevó al perro a casa']], ex:'Vuelve a contar la historia en tu cabeza y fíjate en quién hace cada acción y a quién le pasa.'}
  ],
  'lect|acrobatas':[
    {t:'parear', p:'Une cada parte del cuento con lo que le toca contar', pares:[['Planteamiento','Presenta a los personajes y el lugar'],['Nudo','Aparece el problema'],['Desenlace','Se resuelve el problema']], ex:'Casi todo cuento sigue esas tres partes en ese orden; lo que cambia es cuánto se alarga cada una.'},
    {t:'orden', p:'Ordena los sucesos del cuento, del primero al último', items:['El circo llega a un pueblo que se quedó sin agua','Los artistas y la gente cavan un pozo','Brota el agua','El pueblo hace una fiesta y el circo regala boletos'], ex:'Cada suceso es la causa del siguiente: sin pozo no hay agua, y sin agua no habría nada que celebrar.'}
  ],

  // ---------- CIENCIAS NATURALES ----------
  'cien|semillas':[
    {t:'parear', p:'Une cada animal con su casa', pares:[['🐦 El pájaro','El nido'],['🐝 La abeja','El panal'],['🐭 El ratón','La madriguera']], ex:'Cada animal hace o busca un lugar distinto para dormir y cuidar a sus crías.'},
    {t:'orden', p:'Ordena cómo crece una planta', items:['🌰 La semilla','🌱 El brote','🌿 La planta','🌻 La flor'], ex:'Todo empieza en la semilla. La flor sale hasta el final, cuando la planta ya creció.'}
  ],
  'cien|malabaristas':[
    {t:'orden', p:'Ordena el ciclo del agua', items:['El sol calienta el agua del mar','El agua sube como vapor','Se forman las nubes','Cae la lluvia'], ex:'El motor del ciclo es el calor del sol: sin evaporación no habría nubes, y sin nubes no habría lluvia.'},
    {t:'parear', p:'Une cada órgano con lo que hace', pares:[['El corazón','Bombea la sangre'],['Los pulmones','Toman el oxígeno del aire'],['El estómago','Deshace la comida'],['El cerebro','Manda las órdenes al cuerpo']], ex:'Cada órgano tiene su tarea y ninguno hace el trabajo del otro; por eso trabajan en equipo.'}
  ],
  'cien|acrobatas':[
    {t:'parear', p:'Une cada animal con su grupo', pares:[['La ballena','Mamífero'],['La rana','Anfibio'],['El águila','Ave'],['La víbora','Reptil']], ex:'El grupo no depende de dónde vive: la ballena nada en el mar, pero respira aire y amamanta a sus crías, así que es mamífero.'},
    {t:'orden', p:'Ordena las etapas de la mariposa', items:['Huevo','Oruga','Crisálida','Mariposa'], ex:'Es una metamorfosis completa: el animal cambia de forma por completo en cada etapa y no puede saltarse ninguna.'}
  ],

  // ---------- GEOGRAFÍA ----------
  'geo|semillas':[
    {t:'orden', p:'Ordena de lo más chico a lo más grande', items:['🏠 Tu casa','🛣️ Tu calle','🏙️ Tu ciudad','🇲🇽 México'], ex:'Cada uno cabe dentro del que sigue: tu casa está en tu calle y tu calle está en tu ciudad.'},
    {t:'parear', p:'Une cada lugar con lo que ves ahí', pares:[['🏖️ La playa','El mar'],['⛰️ La montaña','La nieve en la punta'],['🌳 El bosque','Muchos árboles']], ex:'Cada paisaje tiene algo que casi no se ve en los otros.'}
  ],
  'geo|malabaristas':[
    {t:'parear', p:'Une cada estado con lo que lo hace famoso', pares:[['Yucatán','La ciudad maya de Chichén Itzá'],['Veracruz','Su puerto en el golfo de México'],['Jalisco','El mariachi y el tequila'],['Chiapas','La selva Lacandona']], ex:'Cada estado destaca por algo distinto: unos por su historia, otros por su paisaje o por su música.'},
    {t:'orden', p:'Ordena de lo más chico a lo más grande', items:['Tu ciudad','Tu estado','México','América'], ex:'Cada uno contiene al anterior: tu estado está dentro de México y México está dentro del continente americano.'}
  ],
  'geo|acrobatas':[
    {t:'parear', p:'Une cada país con su continente', pares:[['Brasil','América'],['Japón','Asia'],['Nigeria','África'],['Australia','Oceanía']], ex:'Ninguno de estos países se reparte entre dos continentes, así que cada uno tiene un solo continente posible.'},
    {t:'orden', p:'Ordena las capas de la Tierra, de la superficie hacia el centro', items:['Corteza','Manto','Núcleo externo','Núcleo interno'], ex:'La corteza es la capa delgada donde vivimos. Entre más te acercas al centro, más calor y más presión hay.'}
  ],

  // ---------- HISTORIA ----------
  'hist|semillas':[
    {t:'orden', p:'Ordena de lo más antiguo a lo más nuevo', items:['👵 Tu abuela era niña','👩 Tu mamá era niña','👶 Tú eras bebé','🎒 Tú vas a la escuela'], ex:'Los grandes de tu familia fueron niños mucho antes que tú; por eso van primero.'},
    {t:'parear', p:'Une cada cosa de antes con la que usamos hoy', pares:[['🐴 La carreta','El carro'],['🕯️ La vela','El foco'],['✉️ La carta','El teléfono']], ex:'Cada cosa nueva hace el mismo trabajo que la vieja, pero más rápido o más fácil.'}
  ],
  'hist|malabaristas':[
    {t:'orden', p:'Ordena estos hechos, del más antiguo al más reciente', items:['Los olmecas tallan las cabezas de piedra','Los mexicas fundan Tenochtitlan','Llegan los españoles a estas tierras','México se vuelve un país independiente'], ex:'Los olmecas son la cultura más antigua de la lista. Entre la fundación de Tenochtitlan y la llegada de los españoles pasaron casi doscientos años.'},
    {t:'parear', p:'Une cada personaje con lo que hizo', pares:[['Miguel Hidalgo','Dio el Grito de Dolores en 1810'],['José María Morelos','Siguió la lucha insurgente después de Hidalgo'],['Benito Juárez','Fue presidente y defendió las Leyes de Reforma']], ex:'Los tres lucharon en momentos distintos: Hidalgo y Morelos en la Independencia, y Juárez casi cincuenta años después.'}
  ],
  'hist|acrobatas':[
    {t:'orden', p:'Ordena estos hechos de la historia de México, del más antiguo al más reciente', items:['La fundación de Tenochtitlan','La conquista de Tenochtitlan por los españoles','El inicio de la guerra de Independencia','El inicio de la Revolución Mexicana','La Constitución de 1917'], ex:'Fíjate en los siglos: entre la conquista y el inicio de la Independencia pasaron casi trescientos años de virreinato.'},
    {t:'parear', p:'Une cada personaje de la Revolución con lo que hizo', pares:[['Francisco I. Madero','Llamó a levantarse contra la reelección en 1910'],['Emiliano Zapata','Luchó en el sur por el reparto de la tierra'],['Francisco Villa','Dirigió la División del Norte'],['Porfirio Díaz','Gobernó más de treinta años y renunció en 1911']], ex:'Cada uno tuvo un papel distinto: Madero encendió la Revolución, Zapata y Villa la pelearon en el campo, y Díaz era contra quien iba dirigida.'}
  ]

};
