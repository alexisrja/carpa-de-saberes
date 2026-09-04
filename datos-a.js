window.DATOS_A = [
{
  id:"mate", nombre:"Matemáticas", icono:"🤹",
  desc:"Contar, sumar, repartir y medir con todo lo que hay bajo la carpa.",
  niveles:{
  semillas:[
    { titulo:"Contar en la pista", intro:"En el circo todo se cuenta: los aros, las pelotas, los boletos. Vamos a contar juntos hasta 10.",
      puntos:["Cada cosa que señalas vale un número y solo uno.","Contamos siempre en el mismo orden: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.","El último número que dices es cuántas cosas hay.","Si agregas una cosa más, el número crece; si quitas, el número baja."],
      dato:"Un malabarista experto puede tener 5 pelotas en el aire y solo 1 en la mano.",
      lectura:null,
      ejercicios:[
        {t:"op", p:"¿Cuántos aros ves?", emoji:"🔴🔴🔴", o:["3","2","4"], r:0, ex:"Señala uno por uno: 1, 2, 3. Son 3 aros."},
        {t:"op", p:"¿Cuántas pelotas hay?", emoji:"🟡🟡🟡🟡🟡", o:["4","5","6"], r:1, ex:"Contando: 1, 2, 3, 4, 5. Son 5 pelotas."},
        {t:"op", p:"¿Qué número va después del 6?", o:["5","9","7"], r:2, ex:"El orden es 5, 6, 7. Después del 6 siempre viene el 7."},
        {t:"op", p:"Hay 2 elefantes y llega 1 más. ¿Cuántos hay?", emoji:"🐘🐘 ➕ 🐘", o:["3","2","4"], r:0, ex:"2 y 1 más son 3. Cuando llega uno más, el número sube uno."},
        {t:"vf", p:"Hay más globos que pelotas: 🎈🎈🎈🎈 y 🟡🟡", r:true, ex:"Cuenta: 4 globos y 2 pelotas. 4 es más que 2."}
      ]},
    { titulo:"Las formas del circo", intro:"La carpa, los aros y la pista tienen formas. Si aprendes sus nombres, las vas a ver por todos lados.",
      puntos:["El círculo es redondo y no tiene esquinas.","El triángulo tiene 3 lados y 3 puntas.","El cuadrado tiene 4 lados iguales.","La pista donde salen los artistas es un círculo grande."],
      dato:"La pista de circo mide casi siempre 13 metros de ancho, porque es la distancia justa para que un caballo corra en círculo.",
      lectura:null,
      ejercicios:[
        {t:"op", p:"¿Qué forma tiene un aro?", emoji:"⭕", o:["Cuadrado","Círculo","Triángulo"], r:1, ex:"El aro es redondo y no tiene esquinas: es un círculo."},
        {t:"op", p:"¿Cuántos lados tiene un cuadrado?", emoji:"🟦", o:["3","5","4"], r:2, ex:"Cuenta las orillas del cuadrado: son 4 y todas del mismo tamaño."},
        {t:"op", p:"La punta de la carpa se parece a un…", emoji:"⛺", o:["Triángulo","Círculo","Cuadrado"], r:0, ex:"La punta de la carpa sube y hace 3 lados: es un triángulo."},
        {t:"vf", p:"Un círculo tiene esquinas.", r:false, ex:"No. El círculo es todo redondito y no tiene ninguna esquina."},
        {t:"op", p:"¿Cuál de estas cosas es redonda?", o:["Una caja","Una pelota","Un libro"], r:1, ex:"La pelota rueda porque es redonda. La caja y el libro tienen esquinas."}
      ]}
  ],
  malabaristas:[
    { titulo:"Sumas y restas de la función", intro:"Vender boletos, contar palomitas y acomodar sillas: todo el día se suma y se resta en el circo.",
      puntos:["Sumar es juntar: los dos grupos se vuelven uno más grande.","Restar es quitar: buscas cuánto queda.","Si llevas más de 10, puedes separar en decenas y unidades: 12 es 10 + 2.","Para comprobar una resta, súmala al revés: si 25 − 18 = 7, entonces 7 + 18 debe dar 25."],
      dato:"Antes de cada función, la taquilla cuenta los boletos dos veces: una al venderlos y otra al terminar.",
      lectura:null,
      ejercicios:[
        {t:"num", p:"Se vendieron 12 boletos en la mañana y 9 en la tarde. ¿Cuántos en total?", r:21, ex:"12 + 9 = 21. Puedes hacerlo así: 12 + 8 = 20, y falta 1 más, 21."},
        {t:"num", p:"Había 30 bolsas de palomitas y se vendieron 14. ¿Cuántas quedan?", r:16, ex:"30 − 14 = 16. Quita primero 10 (quedan 20) y luego 4 más (quedan 16)."},
        {t:"op", p:"¿Cuál es el doble de 8?", o:["12","18","16"], r:2, ex:"El doble es sumar el número consigo mismo: 8 + 8 = 16."},
        {t:"num", p:"En la carpa hay 25 sillas y se sientan 18 personas. ¿Cuántas sillas quedan vacías?", r:7, ex:"25 − 18 = 7. Comprueba: 7 + 18 = 25."},
        {t:"vf", p:"Si sumas 0 a un número, el número no cambia.", r:true, ex:"Verdadero. Sumar cero es no agregar nada: 14 + 0 = 14."}
      ]},
    { titulo:"Multiplicar y repartir", intro:"Cuando algo se repite muchas veces, multiplicar es más rápido que sumar.",
      puntos:["Multiplicar es sumar grupos iguales: 3 × 4 es 4 + 4 + 4.","Dividir es repartir en partes iguales.","Multiplicar y dividir son operaciones contrarias: si 6 × 7 = 42, entonces 42 ÷ 7 = 6.","La mitad de un número es dividirlo entre 2."],
      dato:"Los trapecistas ensayan un salto entre 200 y 300 veces antes de hacerlo frente al público.",
      lectura:null,
      ejercicios:[
        {t:"num", p:"3 payasos traen 4 globos cada uno. ¿Cuántos globos hay?", emoji:"🤡🤡🤡", r:12, ex:"3 × 4 = 12. Es lo mismo que 4 + 4 + 4."},
        {t:"num", p:"¿Cuánto es 6 × 7?", r:42, ex:"6 × 7 = 42. Truco: 6 × 7 es lo mismo que 7 × 6."},
        {t:"num", p:"Hay 24 pelotas de malabares para 4 artistas, en partes iguales. ¿Cuántas le tocan a cada uno?", r:6, ex:"24 ÷ 4 = 6, porque 4 × 6 = 24."},
        {t:"op", p:"¿Cuál es la mitad de 18?", o:["9","8","10"], r:0, ex:"La mitad es dividir entre 2: 18 ÷ 2 = 9, porque 9 + 9 = 18."},
        {t:"txt", p:"9 trapecistas se acomodan en filas de 3. ¿Cuántas filas se forman? Escribe el número.", r:["3","tres"], ex:"9 ÷ 3 = 3 filas, porque 3 × 3 = 9."}
      ]}
  ],
  acrobatas:[
    { titulo:"Fracciones bajo la carpa", intro:"Media pizza, tres cuartos de hora, la mitad del público. Las fracciones sirven para hablar de partes de algo.",
      puntos:["En una fracción, el número de abajo dice en cuántas partes iguales se partió el entero.","El número de arriba dice cuántas de esas partes tomas.","Fracciones distintas pueden valer lo mismo: 2/4 es igual a 1/2.","Un porcentaje es una fracción de 100: 60 % significa 60 de cada 100."],
      dato:"Cuando dos fracciones tienen el mismo número de arriba, es más grande la que tiene el número de abajo más chico: 1/2 es mayor que 1/8.",
      lectura:null,
      ejercicios:[
        {t:"num", p:"La carpa tiene 40 lugares y se ocupó 1/2. ¿Cuántas personas entraron?", r:20, ex:"1/2 de 40 es 40 ÷ 2 = 20."},
        {t:"op", p:"¿Cuál cantidad es mayor?", o:["1/2 de un pastel","3/4 de un pastel","Las dos son iguales"], r:1, ex:"1/2 son 2 cuartos y 3/4 son 3 cuartos. 3 cuartos es más."},
        {t:"op", p:"¿Qué fracción vale lo mismo que 2/4?", o:["1/4","2/3","1/2"], r:2, ex:"Si divides arriba y abajo entre 2: 2÷2 = 1 y 4÷2 = 2. Queda 1/2."},
        {t:"num", p:"Escribe 3/4 como decimal usando punto (por ejemplo 0.5).", r:0.75, ex:"3 ÷ 4 = 0.75. Es lo mismo que 75 %."},
        {t:"num", p:"Se imprimieron 150 boletos y se vendió el 60 %. ¿Cuántos boletos se vendieron?", r:90, ex:"10 % de 150 es 15. Como 60 % son seis veces 10 %: 15 × 6 = 90."}
      ]},
    { titulo:"Medir la pista y el reloj", intro:"Para armar una carpa hay que medir. Para no pasarse de la función, hay que calcular el tiempo.",
      puntos:["El perímetro es lo que mide el contorno: se suman todos los lados.","El área es la superficie que cubre: en un rectángulo es base × altura.","Una hora tiene 60 minutos, así que 1 h 45 min son 105 minutos.","El promedio se saca sumando todos los datos y dividiendo entre cuántos son."],
      dato:"Una carpa mediana de circo puede pesar 6 toneladas y necesita 20 personas para levantarla.",
      lectura:null,
      ejercicios:[
        {t:"num", p:"La pista es un cuadrado de 12 m por lado. ¿Cuánto mide su perímetro en metros?", r:48, ex:"Perímetro = 12 + 12 + 12 + 12 = 48 m. También 12 × 4."},
        {t:"num", p:"El escenario es un rectángulo de 8 m por 5 m. ¿Cuál es su área en metros cuadrados?", r:40, ex:"Área = base × altura = 8 × 5 = 40 m²."},
        {t:"num", p:"La función dura 1 hora y 45 minutos. ¿Cuántos minutos son?", r:105, ex:"1 hora son 60 minutos. 60 + 45 = 105 minutos."},
        {t:"num", p:"Tres funciones tuvieron 8, 10 y 12 artistas. ¿Cuál es el promedio?", r:10, ex:"8 + 10 + 12 = 30, y 30 ÷ 3 = 10 artistas en promedio."},
        {t:"vf", p:"Dos figuras con el mismo perímetro siempre tienen la misma área.", r:false, ex:"Falso. Un cuadrado de 4×4 y un rectángulo de 6×2 miden 16 de perímetro, pero sus áreas son 16 y 12."}
      ]}
  ]
  }
},
{
  id:"esp", nombre:"Español", icono:"✍️",
  desc:"Letras, palabras y reglas para escribir lo que quieras decir.",
  niveles:{
  semillas:[
    { titulo:"Las vocales del circo", intro:"Solo hay cinco vocales y con ellas empieza casi todo. Vamos a buscarlas.",
      puntos:["Las vocales son a, e, i, o, u. Son cinco.","Toda palabra lleva por lo menos una vocal.","Las demás letras se llaman consonantes.","Si dices la palabra despacito, oyes con qué letra empieza."],
      dato:"La palabra \"murciélago\" es famosa porque tiene las cinco vocales, una sola vez cada una.",
      lectura:null,
      ejercicios:[
        {t:"op", p:"¿Con qué vocal empieza \"elefante\"?", emoji:"🐘", o:["e","a","i"], r:0, ex:"E-le-fan-te. Empieza con la letra e."},
        {t:"op", p:"¿Con qué vocal empieza \"aro\"?", emoji:"⭕", o:["o","a","u"], r:1, ex:"A-ro. La primera letra es la a."},
        {t:"op", p:"¿Cuántas vocales hay en total?", o:["3","7","5"], r:2, ex:"Son cinco: a, e, i, o, u."},
        {t:"op", p:"¿Cuál palabra empieza con la letra o?", o:["oso","pato","silla"], r:0, ex:"O-so empieza con o. Pato empieza con p y silla con s."},
        {t:"vf", p:"La letra p es una vocal.", r:false, ex:"No. La p es consonante. Las vocales son a, e, i, o, u."}
      ]},
    { titulo:"Palmas y sílabas", intro:"Cada palabra se puede aplaudir por pedacitos. Esos pedacitos se llaman sílabas.",
      puntos:["Una sílaba es un golpe de voz: pa-ya-so son tres palmas.","Las palabras cortas tienen pocas sílabas; las largas, muchas.","Para contarlas, di la palabra despacio y aplaude en cada pedazo.","Todas las sílabas llevan una vocal."],
      dato:"La palabra más corta del español tiene una sola letra: la y, que sirve para juntar cosas.",
      lectura:null,
      ejercicios:[
        {t:"op", p:"¿Cuántas palmas tiene pa-ya-so?", emoji:"🤡", o:["2","3","4"], r:1, ex:"Pa (1), ya (2), so (3). Son 3 sílabas."},
        {t:"op", p:"¿Cuántas palmas tiene cir-co?", emoji:"🎪", o:["3","4","2"], r:2, ex:"Cir (1), co (2). Son 2 sílabas."},
        {t:"op", p:"¿Cuántas palmas tiene ma-la-ba-res?", o:["4","3","5"], r:0, ex:"Ma, la, ba, res. Son 4 sílabas."},
        {t:"op", p:"¿Cuál palabra es más larga?", o:["sol","trapecista"], r:1, ex:"Sol tiene 1 sílaba y trapecista tiene 4: tra-pe-cis-ta."},
        {t:"vf", p:"La palabra \"pan\" se aplaude una sola vez.", r:true, ex:"Verdadero. Pan es una sola sílaba, un solo golpe de voz."}
      ]}
  ],
  malabaristas:[
    { titulo:"Cosas, acciones y cómo son", intro:"En cada oración hay algo que nombra, algo que hace y algo que describe. Vamos a separarlos.",
      puntos:["El sustantivo nombra cosas, personas, animales o lugares: carpa, payaso, león.","El verbo dice la acción: salta, corre, aplaude.","El adjetivo dice cómo es algo: grande, valiente, roja.","En \"El payaso salta alto\", payaso es sustantivo y salta es verbo."],
      dato:"En español el adjetivo casi siempre va después: decimos \"carpa roja\", no \"roja carpa\".",
      lectura:null,
      ejercicios:[
        {t:"op", p:"En \"El payaso salta\", ¿cuál es el verbo?", o:["El","payaso","salta"], r:2, ex:"El verbo es la acción. Lo que se hace es saltar, entonces es \"salta\"."},
        {t:"op", p:"En \"la carpa grande\", ¿cuál palabra es el adjetivo?", o:["grande","la","carpa"], r:0, ex:"Grande dice cómo es la carpa, así que es el adjetivo."},
        {t:"op", p:"¿Cuál de estas palabras es un sustantivo?", o:["correr","trapecio","rápido"], r:1, ex:"Trapecio nombra una cosa. Correr es verbo y rápido es adjetivo."},
        {t:"vf", p:"\"Nosotros saltamos\" está escrito en plural.", r:true, ex:"Verdadero. Nosotros son varias personas, por eso el verbo termina en -mos."},
        {t:"txt", p:"Escribe el femenino de \"león\".", r:["leona","la leona"], ex:"El femenino de león es leona. A muchos animales se les agrega una -a al final."}
      ]},
    { titulo:"Mayúsculas, comas y signos", intro:"Los signos son las señales del texto: dicen dónde parar, dónde preguntar y dónde gritar.",
      puntos:["Se escribe mayúscula al empezar y después de un punto.","Los nombres propios llevan mayúscula: Lucía, México, Circo Atayde.","La coma separa los elementos de una lista.","En español la pregunta se abre con ¿ y se cierra con ?; la exclamación con ¡ y !"],
      dato:"El español es de los poquísimos idiomas que abren la pregunta con un signo al revés. Se hizo así para saber desde el principio cómo entonar la frase.",
      lectura:null,
      ejercicios:[
        {t:"op", p:"¿Cuál oración está bien escrita?", sinListaVoz:true, o:["vamos al circo.","Vamos al circo","Vamos al circo."], r:2, ex:"Empieza con mayúscula y termina con punto. Las dos cosas son necesarias."},
        {t:"txt", p:"Escribe el signo que se pone al INICIO de una pregunta.", r:["¿"], ex:"En español la pregunta se abre con ¿ y se cierra con ?"},
        {t:"vf", p:"Los nombres propios se escriben con mayúscula.", r:true, ex:"Verdadero. Lucía, Puebla y Circo Atayde llevan mayúscula porque son nombres propios."},
        {t:"op", p:"¿Qué le falta a esta oración? \"Compré palomitas manzanas y agua\"", o:["Comas","Un acento","Nada"], r:0, ex:"Debe ser \"palomitas, manzanas y agua\". La coma separa la lista."},
        {t:"op", p:"¿Cuál está bien escrita?", sinListaVoz:true, o:["Qué función!","¡Qué función!","¡Qué función"], r:1, ex:"La exclamación se abre con ¡ y se cierra con !, las dos."}
      ]}
  ],
  acrobatas:[
    { titulo:"Ortografía que no se cae", intro:"Hay palabras que suenan igual y se escriben distinto. Si sabes qué significan, no te equivocas.",
      puntos:["\"A ver\" son dos palabras y significa mirar: voy a ver la función.","\"Haber\" es verbo: tiene que haber boletos.","\"Hubo\" no cambia aunque haya muchas cosas: hubo muchos aplausos, nunca \"hubieron\".","Las palabras agudas llevan tilde si terminan en n, s o vocal: camión, además, café."],
      dato:"Cambiar una tilde cambia todo: \"él canto\" y \"él cantó\" no significan lo mismo.",
      lectura:null,
      ejercicios:[
        {t:"op", p:"¿Cuál es correcta? \"Voy ___ la función.\"", o:["haber","aver","a ver"], r:2, ex:"Son dos palabras: vas a mirar algo. \"Haber\" es otro verbo distinto."},
        {t:"op", p:"¿Cuál es correcta?", o:["Hubieron muchos aplausos","Hubo muchos aplausos"], r:1, ex:"Cuando \"haber\" dice que algo existe, siempre va en singular: hubo."},
        {t:"op", p:"¿Cuál de estas palabras está bien escrita?", sinListaVoz:true, o:["camion","camión","cámion"], r:1, ex:"Es aguda (la fuerza va en la última sílaba) y termina en n, así que lleva tilde en la o: camión."},
        {t:"txt", p:"Escribe el plural de \"lápiz\".", r:["lapices","lápices"], ex:"La z se cambia por c y se agrega -es: lápices."},
        {t:"vf", p:"Todas las palabras agudas llevan tilde.", r:false, ex:"Falso. Solo llevan tilde si terminan en n, s o vocal. \"Reloj\" es aguda y no lleva."}
      ]},
    { titulo:"Armar un texto que se entienda", intro:"Escribir no es soltar frases sueltas. Un buen texto tiene orden y las piezas se amarran entre sí.",
      puntos:["La introducción presenta el tema, el desarrollo lo explica y el cierre lo concluye.","Cada párrafo trata una sola idea principal.","Los conectores amarran las ideas: porque (causa), además (suma), luego (tiempo), pero (contraste).","Los sinónimos evitan repetir la misma palabra todo el tiempo."],
      dato:"Un truco de escritores: si un párrafo no se puede resumir en una frase, seguramente traía dos ideas y hay que partirlo.",
      lectura:null,
      ejercicios:[
        {t:"op", p:"¿Cómo se llama la parte del texto que presenta el tema?", o:["Conclusión","Desarrollo","Introducción"], r:2, ex:"La introducción va primero y dice de qué se va a hablar."},
        {t:"op", p:"¿Qué conector sirve para dar una causa? \"No hubo función ___ llovió.\"", o:["porque","además","luego"], r:0, ex:"\"Porque\" explica la razón. \"Además\" suma y \"luego\" habla del tiempo."},
        {t:"vf", p:"Un párrafo debe tratar una sola idea principal.", r:true, ex:"Verdadero. Si mezclas dos ideas, conviene partirlo en dos párrafos."},
        {t:"op", p:"¿Cuál es sinónimo de \"asombroso\"?", o:["aburrido","increíble","pequeño"], r:1, ex:"Sinónimo es una palabra con significado parecido. Increíble y asombroso lo son."},
        {t:"txt", p:"Escribe el antónimo de \"valiente\".", r:["cobarde","miedoso","temeroso"], ex:"Antónimo es lo contrario. Lo contrario de valiente es cobarde o miedoso."}
      ]}
  ]
  }
},
{
  id:"lect", nombre:"Español Lecturas", icono:"📖",
  desc:"Historias para leer y preguntas para entender lo que dicen y lo que no dicen.",
  niveles:{
  semillas:[
    { titulo:"Fito busca su nariz", intro:"Vamos a leer un cuento muy cortito. Escúchalo o léelo y después contesta.",
      puntos:["Leer con calma y volver a leer si algo no se entendió.","Fijarse en quién es el personaje y qué le pasa."],
      dato:"La nariz roja del payaso es el disfraz más pequeño del mundo.",
      lectura:{ titulo:"Fito busca su nariz", texto:"Fito es un payaso. Fito tiene una nariz roja. Hoy la nariz no está. Fito busca en la caja. Busca en el sombrero. Busca en el zapato. ¡La nariz estaba en su bolsillo! Fito se ríe y sale a la pista." },
      ejercicios:[
        {t:"op", p:"¿Quién es Fito?", emoji:"🤡", o:["Un león","Un niño","Un payaso"], r:2, ex:"En la primera línea dice: \"Fito es un payaso\"."},
        {t:"op", p:"¿De qué color es su nariz?", o:["Roja","Azul","Verde"], r:0, ex:"El cuento dice que Fito tiene una nariz roja."},
        {t:"op", p:"¿Dónde estaba la nariz?", o:["En la caja","En su bolsillo","En el zapato"], r:1, ex:"Al final dice: \"¡La nariz estaba en su bolsillo!\"."},
        {t:"vf", p:"Fito se puso triste al final.", r:false, ex:"No. El cuento dice que Fito se ríe y sale a la pista."},
        {t:"op", p:"¿En cuál de estos lugares NO buscó Fito?", o:["En el sombrero","En el zapato","En la cama"], r:2, ex:"Buscó en la caja, en el sombrero y en el zapato. La cama nunca se menciona."}
      ]},
    { titulo:"La pelota que se fue", intro:"Otro cuento cortito. Pon atención al orden en que pasan las cosas.",
      puntos:["En un cuento las cosas pasan en orden: primero, después, al final.","El final resuelve el problema del personaje."],
      dato:"Los perros de circo aprenden trucos con juegos, nunca con castigos.",
      lectura:{ titulo:"La pelota que se fue", texto:"Ana juega con su pelota azul. La pelota rueda y rueda. Sale de la carpa. Ana corre atrás de la pelota. Un perro atrapa la pelota. El perro se la lleva a Ana. Ana le da las gracias. Ahora juegan los dos." },
      ejercicios:[
        {t:"op", p:"¿De qué color es la pelota?", emoji:"🔵", o:["Azul","Roja","Amarilla"], r:0, ex:"El cuento dice \"su pelota azul\"."},
        {t:"op", p:"¿Quién atrapa la pelota?", emoji:"🐶", o:["Ana","Un perro","Un payaso"], r:1, ex:"Dice: \"Un perro atrapa la pelota\"."},
        {t:"op", p:"¿Qué pasa primero?", o:["La pelota sale de la carpa","El perro atrapa la pelota"], r:0, ex:"Primero la pelota rueda y sale. Después el perro la atrapa."},
        {t:"vf", p:"Al final Ana y el perro juegan juntos.", r:true, ex:"Verdadero. La última línea dice: \"Ahora juegan los dos\"."},
        {t:"op", p:"¿Cómo se siente Ana con el perro?", o:["Agradecida","Enojada","Asustada"], r:0, ex:"Ana le da las gracias, así que está agradecida."}
      ]}
  ],
  malabaristas:[
    { titulo:"El primer día en la cuerda floja", intro:"Una lectura más larga. Después de leerla vas a decir de qué se trataba y qué sintieron los personajes.",
      puntos:["La idea principal es de qué trata todo el texto, no un detalle suelto.","Los sentimientos casi nunca se dicen con la palabra exacta: se adivinan por lo que hace el personaje.","Si una palabra es nueva, la frase de alrededor suele dar una pista."],
      dato:"La cuerda de los equilibristas no está floja de verdad: se tensa tanto que suena como una cuerda de guitarra.",
      lectura:{ titulo:"El primer día en la cuerda floja", texto:"A Marisol le sudaban las manos. La cuerda estaba a dos metros del suelo y se veía delgadísima, como un hilo. Don Beto, su maestro, le puso una mano en el hombro.\n\n—No mires tus pies —le dijo—. Mira el poste del otro lado y camina hacia él.\n\nMarisol subió. El primer paso fue horrible: la cuerda se movía como si tuviera vida propia. Se detuvo. Respiró. Levantó la vista y buscó el poste. Entonces dio el segundo paso, y el tercero, y de pronto ya estaba a la mitad.\n\nCuando llegó al otro lado, se dio cuenta de que llevaba un rato sin respirar. Abajo, Don Beto no aplaudía. Solo sonreía, con los brazos cruzados.\n\n—Mañana subimos un metro más —dijo." },
      ejercicios:[
        {t:"op", p:"¿De qué trata principalmente el texto?", o:["De cómo se construye una cuerda floja","Del primer intento de Marisol caminando en la cuerda","De la vida de Don Beto"], r:1, ex:"Todo el texto sigue a Marisol en su primer intento. Lo demás son detalles."},
        {t:"op", p:"Al principio, ¿cómo se sentía Marisol?", o:["Aburrida","Enojada","Nerviosa"], r:2, ex:"Le sudaban las manos y el primer paso fue horrible: son señales de nervios. El texto nunca usa la palabra \"nerviosa\"."},
        {t:"op", p:"¿Qué consejo le dio Don Beto?", o:["Que mirara el poste del otro lado","Que mirara sus pies","Que caminara rápido"], r:0, ex:"Le dijo: \"No mires tus pies. Mira el poste del otro lado\"."},
        {t:"op", p:"¿Por qué Don Beto sonríe pero no aplaude?", o:["Porque no le gustó","Porque está contento pero sabe que apenas empieza","Porque no estaba viendo"], r:1, ex:"Está contento (sonríe) y al final propone subir un metro más: para él esto es solo el principio."},
        {t:"txt", p:"En el texto, \"delgadísima\" quiere decir muy… Escribe la palabra.", r:["delgada","flaca","fina","delgadita"], ex:"La terminación -ísima significa \"muy\". Delgadísima es muy delgada, por eso la compara con un hilo."}
      ]},
    { titulo:"La carta del domador", intro:"Este texto es una carta. Las cartas se leen distinto: hay alguien que escribe y alguien que recibe.",
      puntos:["En una carta hay que identificar quién escribe y a quién.","El propósito es para qué se escribió: informar, pedir, agradecer o convencer.","Un dato es algo comprobable; una opinión es lo que alguien piensa."],
      dato:"Los circos modernos en México ya no pueden presentar animales silvestres: la ley lo prohíbe desde 2015.",
      lectura:{ titulo:"Carta a los vecinos de San Andrés", texto:"Queridos vecinos:\n\nMe llamo Ernesto y trabajo en el Circo Estrella. Durante quince años cuidé animales; hoy me dedico a los caballos y a los perros que viven con nosotros y viajan en el mismo camión que yo.\n\nEsta semana instalamos la carpa en su terreno baldío. Sé que el ruido molesta y quiero pedirles algo: si algo les incomoda, vengan a decírmelo a mí antes que a nadie. Estoy todas las mañanas junto al portón azul.\n\nCreo que un circo se vuelve del pueblo donde se para. Por eso el jueves la entrada es gratis para todos los niños de San Andrés.\n\nCon respeto,\nErnesto Salgado" },
      ejercicios:[
        {t:"op", p:"¿Cuál es el propósito principal de la carta?", o:["Vender boletos caros","Explicar cómo se entrena a un caballo","Presentarse y abrir un canal para las quejas"], r:2, ex:"Ernesto se presenta y pide que le lleven las molestias a él directamente. Eso es lo que sostiene toda la carta."},
        {t:"op", p:"¿A quién va dirigida?", o:["A los vecinos de San Andrés","A los otros artistas","A las autoridades"], r:0, ex:"Empieza con \"Queridos vecinos\" y menciona a los niños de San Andrés."},
        {t:"op", p:"¿Cuál de estas frases es una OPINIÓN?", o:["Durante quince años cuidé animales","Creo que un circo se vuelve del pueblo donde se para","El jueves la entrada es gratis"], r:1, ex:"Empieza con \"creo que\": es lo que él piensa. Las otras dos se pueden comprobar."},
        {t:"vf", p:"Ernesto ofrece entrada gratis a todos los adultos del pueblo.", r:false, ex:"Falso. La entrada gratis del jueves es para los niños de San Andrés."},
        {t:"op", p:"En el texto, un \"terreno baldío\" es un terreno…", o:["lleno de casas","dentro de la ciudad grande","vacío y sin construir"], r:2, ex:"Se puede deducir: ahí instalaron una carpa entera, así que estaba vacío."}
      ]}
  ],
  acrobatas:[
    { titulo:"El circo que llegó al pueblo", intro:"Un relato con más capas. Aquí no basta con encontrar datos: hay que inferir lo que el texto sugiere sin decirlo.",
      puntos:["Inferir es concluir algo que el texto no dice con todas sus letras, usando pistas.","El narrador puede ser un personaje (dice \"yo\") o alguien de fuera.","El conflicto es el problema que mueve la historia.","El tono es la actitud del texto: nostálgico, alegre, tenso."],
      dato:"El circo tradicional mexicano tiene más de 200 años; la familia Atayde lleva desde 1888 en el oficio.",
      lectura:{ titulo:"El circo que llegó al pueblo", texto:"Nunca pasaba nada en Tepetongo. Por eso, cuando aparecieron los camiones amarillos por la carretera, mi abuela salió a la puerta secándose las manos en el delantal y se quedó ahí parada, mirando, hasta que el último camión entró al llano.\n\nMe dijo que cuando ella era niña también había llegado un circo. Que su papá no la dejó ir. Que se subió al techo del gallinero y desde ahí vio, muy chiquitos, a los trapecistas.\n\nEsa tarde ayudamos a levantar la carpa. Un señor con las manos llenas de callos me enseñó a tensar una cuerda: hay que jalar con el peso del cuerpo, no con los brazos. Trabajamos hasta que oscureció.\n\nCuando terminamos, mi abuela le preguntó al señor cuánto costaba la entrada.\n\n—Ustedes ya pagaron —dijo él, y le dio dos boletos.\n\nMi abuela los guardó en el delantal y no los soltó en toda la noche." },
      ejercicios:[
        {t:"op", p:"¿Quién narra la historia?", o:["Un nieto o nieta que estuvo ahí","La abuela","El señor del circo"], r:0, ex:"Usa \"mi abuela\" y \"me dijo\": narra alguien que participó en los hechos, en primera persona."},
        {t:"op", p:"¿Por qué la abuela guardó los boletos y no los soltó en toda la noche?", o:["Porque tenía miedo de perderlos","Porque de niña se quedó sin ver el circo y esto le importaba mucho","Porque valían mucho dinero"], r:1, ex:"El texto cuenta antes que su papá no la dejó ir y tuvo que verlo desde un gallinero. El boleto vale por esa espera, no por el dinero. Eso es inferir."},
        {t:"op", p:"¿Qué quiso decir el señor con \"Ustedes ya pagaron\"?", o:["Que pagaron con dinero antes","Que se equivocó de personas","Que su trabajo levantando la carpa fue el pago"], r:2, ex:"Habían trabajado toda la tarde tensando cuerdas. El pago fue el trabajo."},
        {t:"op", p:"¿Cuál es el tono general del texto?", o:["Nostálgico y cálido","Tenso y de miedo","Burlón"], r:0, ex:"Recuerda el pasado con cariño: la abuela, el delantal, el circo de su infancia. Eso es nostalgia."},
        {t:"txt", p:"Las manos del señor estaban \"llenas de callos\". Eso indica que era alguien que trabajaba mucho con las… Escribe la palabra.", r:["manos"], ex:"Los callos salen de trabajar con las manos. El detalle nos dice que es un trabajador manual, sin decirlo directamente."}
      ]},
    { titulo:"Dos textos, un mismo tema", intro:"Cuando dos textos hablan de lo mismo pero no dicen lo mismo, comparar es la manera de entender de verdad.",
      puntos:["Un texto informativo da datos; uno de opinión defiende una postura.","Comparar es buscar en qué coinciden y en qué se separan dos textos.","El argumento es la razón que alguien da para sostener su idea.","Que dos fuentes se contradigan no significa que una mienta: pueden mirar cosas distintas."],
      dato:"Al comparar fuentes, la pregunta más útil no es \"¿quién tiene razón?\", sino \"¿qué información tiene cada uno que al otro le falta?\".",
      lectura:{ titulo:"Dos voces sobre el circo", texto:"TEXTO A (nota informativa). En 2015 entró en vigor en México una reforma que prohíbe el uso de animales silvestres en circos. Según la Asociación Nacional de Empresarios de Circo, la medida afectó a cerca de 50 compañías. Desde entonces, varios circos cambiaron su espectáculo por números de acrobacia, teatro y luces.\n\nTEXTO B (columna de opinión). Me alegra que ya no haya tigres en las carpas, pero me preocupa que hayamos confundido dos cosas. El problema nunca fue el circo: fueron las jaulas. Un circo sin animales sigue siendo circo, y las familias que llevan cinco generaciones en el oficio merecen apoyo para reinventarse, no que las tratemos como si fueran el enemigo." },
      ejercicios:[
        {t:"op", p:"¿Cuál de los dos textos es informativo?", o:["El texto B","El texto A","Los dos"], r:1, ex:"El A da fechas, leyes y cifras de una asociación. El B dice \"me alegra\" y \"me preocupa\": es opinión."},
        {t:"op", p:"¿En qué coinciden los dos textos?", o:["En que la ley fue un error","En que los circos desaparecieron","En que ya no hay animales silvestres en los circos mexicanos"], r:2, ex:"Los dos parten del mismo hecho: la prohibición existe y se aplicó. Difieren en lo que opinan sobre sus efectos."},
        {t:"op", p:"¿Cuál es el argumento central del texto B?", o:["Que el problema eran las jaulas, no el circo, y las familias circenses merecen apoyo","Que hay que devolver los animales a los circos","Que la acrobacia es aburrida"], r:0, ex:"Lo dice casi textual: separa \"el circo\" de \"las jaulas\" y pide apoyo para reinventarse."},
        {t:"vf", p:"El texto B está en contra de la prohibición de animales silvestres.", r:false, ex:"Falso. Empieza diciendo \"me alegra que ya no haya tigres\". Su preocupación es otra: cómo se trató a las familias circenses."},
        {t:"op", p:"¿Qué dato aporta el texto A que al B le falta?", o:["Una opinión sobre las jaulas","Una cifra de cuántas compañías se vieron afectadas","Una historia familiar"], r:1, ex:"El A trae el número (cerca de 50 compañías) y la fecha. El B no da cifras: da postura."}
      ]}
  ]
  }
}
];
