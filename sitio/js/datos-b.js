window.DATOS_B = [
  {
    id:'cien',
    nombre:'Ciencias Naturales',
    icono:'🌱',
    desc:'Descubre cómo funciona tu cuerpo, los animales y las fuerzas que mueven el mundo.',
    niveles:{
      semillas:[
        {
          titulo:'Mi cuerpo se mueve',
          intro:'Tu cuerpo es tu mejor juguete. Con él saltas, giras y bailas.',
          puntos:[
            'Los huesos son duros y sostienen tu cuerpo, como los postes sostienen la carpa.',
            'Los músculos jalan a los huesos para que te muevas.',
            'Las articulaciones, como el codo y la rodilla, doblan tu cuerpo.',
            'Cuando corres, tu corazón late más rápido.'
          ],
          dato:'Tu hueso más pequeño está dentro de tu oído y es del tamaño de un grano de arroz.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Con qué parte doblas la pierna?', emoji:'🦵', o:['El codo','La rodilla','El hombro'], r:1, ex:'La rodilla es la articulación que dobla la pierna. El codo dobla el brazo y el hombro mueve todo el brazo.'},
            {t:'op', p:'¿Qué late rápido cuando corres?', emoji:'❤️', o:['Los pulmones','El estómago','El corazón'], r:2, ex:'El corazón late para mandar sangre a tus músculos. Los pulmones no laten: se llenan de aire.'},
            {t:'vf', p:'Los huesos son duros.', r:true, ex:'Sí. Los huesos son duros y por eso te mantienen de pie.'},
            {t:'vf', p:'Los músculos sirven para ver.', r:false, ex:'Los músculos sirven para moverte. Para ver usas los ojos.'},
            {t:'op', p:'¿Qué juntas para aplaudir?', emoji:'👏', o:['Las manos','Los pies','Los codos'], r:0, ex:'Aplaudes juntando tus dos manos, una contra la otra.'}
          ]
        },
        {
          titulo:'Los animales y lo que comen',
          intro:'No todos los animales comen lo mismo. Vamos a ver qué le gusta a cada uno.',
          puntos:[
            'Unos animales comen plantas: el conejo come zanahoria.',
            'Otros comen carne: el león caza para comer.',
            'Algunos comen de todo, como el cerdo y como tú.',
            'Todos los animales necesitan agua.'
          ],
          dato:'El elefante come casi todo el día porque su cuerpo es muy grande.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Qué come el conejo?', emoji:'🐰', o:['Carne','Zanahorias','Pescado'], r:1, ex:'El conejo come plantas, como la zanahoria. A eso se le dice herbívoro.'},
            {t:'op', p:'¿Cuál de estos come carne?', emoji:'🦁', o:['La vaca','La oveja','El león'], r:2, ex:'El león caza otros animales, por eso es carnívoro. La vaca y la oveja comen pasto.'},
            {t:'vf', p:'Todos los animales necesitan agua.', r:true, ex:'Sí. Sin agua ningún animal puede vivir.'},
            {t:'vf', p:'Las vacas comen carne.', r:false, ex:'Las vacas comen pasto y otras plantas. Son herbívoras.'},
            {t:'op', p:'¿Qué come el elefante?', emoji:'🐘', o:['Hojas y ramas','Ratones','Peces'], r:0, ex:'El elefante come hojas, ramas y frutas. Es herbívoro: no caza a otros animales.'}
          ]
        }
      ],
      malabaristas:[
        {
          titulo:'Los sentidos y el equilibrio',
          intro:'Tienes cinco sentidos para conocer el mundo, y un truco escondido dentro de tu oído.',
          puntos:[
            'Los cinco sentidos son vista, oído, olfato, gusto y tacto.',
            'Cada sentido tiene su órgano: ojos, oídos, nariz, lengua y piel.',
            'Dentro del oído hay unos tubitos con líquido llamados canales semicirculares.',
            'Cuando ese líquido se mueve, le avisa a tu cerebro si estás derecho o de lado.',
            'Por eso te mareas al dar muchas vueltas: el líquido sigue girando aunque tú ya paraste.'
          ],
          dato:'Los equilibristas fijan la vista en un punto que no se mueve, así ayudan a su oído a no confundirse.',
          lectura:null,
          ejercicios:[
            {t:'txt', p:'¿Cuántos sentidos tienes? Escribe el número.', r:['5','cinco'], ex:'Son cinco: vista, oído, olfato, gusto y tacto.'},
            {t:'op', p:'¿Dónde está el órgano del equilibrio?', o:['En los ojos','En el oído','En las piernas'], r:1, ex:'Dentro del oído están los canales semicirculares, que le avisan al cerebro en qué posición estás. Los ojos ayudan, pero el órgano está en el oído.'},
            {t:'txt', p:'¿Con qué órgano saboreas la comida?', r:['lengua','la lengua'], ex:'La lengua tiene papilas que detectan los sabores.'},
            {t:'vf', p:'Te mareas al girar porque el líquido de tu oído sigue moviéndose.', r:true, ex:'Al parar, el líquido sigue girando un ratito y tu cerebro cree que todavía das vueltas.'},
            {t:'op', p:'¿Qué sentido te avisa que la arena está caliente?', o:['La vista','El olfato','El tacto'], r:2, ex:'La piel siente el calor y la textura, y ese sentido es el tacto. Con la vista solo ves el color de la arena.'}
          ]
        },
        {
          titulo:'Los estados de la materia',
          intro:'El agua puede ser dura como piedra, correr en un vaso o volar como vapor. Es la misma agua.',
          puntos:[
            'La materia se presenta en tres estados comunes: sólido, líquido y gas.',
            'Un sólido tiene forma propia, como un cubo de hielo.',
            'Un líquido toma la forma del recipiente, como el agua en un vaso.',
            'Un gas se esparce y llena todo el espacio, como el aire dentro de un globo.',
            'El calor cambia el estado: el hielo se derrite y el agua hierve.'
          ],
          dato:'A nivel del mar el agua se congela a 0 grados y hierve a 100 grados centígrados.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿En qué estado está el agua de un vaso?', o:['Sólido','Líquido','Gas'], r:1, ex:'Toma la forma del vaso y se puede servir, así que está líquida. Sólida sería un hielo.'},
            {t:'txt', p:'¿Cómo se llama el agua en estado sólido?', r:['hielo','el hielo'], ex:'Cuando el agua se enfría hasta 0 grados se convierte en hielo.'},
            {t:'num', p:'¿A cuántos grados hierve el agua a nivel del mar? Escribe la cifra.', r:100, ex:'A 100 grados centígrados el agua líquida se convierte en vapor.'},
            {t:'vf', p:'Un gas siempre conserva la misma forma.', r:false, ex:'El gas no tiene forma propia: se esparce hasta llenar todo el recipiente.'},
            {t:'op', p:'¿Qué le pasa a un hielo si lo dejas al sol?', o:['Se derrite y se vuelve agua','Se pone todavía más duro','Se convierte en vapor sin volverse agua'], r:0, ex:'El calor lo derrite: pasa de sólido a líquido. Solo después, con más calor, el agua puede hacerse vapor.'}
          ]
        }
      ],
      acrobatas:[
        {
          titulo:'Fuerzas, gravedad y centro de gravedad',
          intro:'Nadie se cae por mala suerte. Se cae por física, y la física se puede entender.',
          puntos:[
            'Una fuerza es un jalón o un empujón que cambia el movimiento de algo.',
            'La gravedad es la fuerza con la que la Tierra jala hacia abajo todo lo que tiene masa.',
            'El centro de gravedad es el punto donde se concentra el peso de un cuerpo.',
            'Te mantienes de pie mientras tu centro de gravedad quede sobre tu base de apoyo.',
            'Entre más bajo esté el centro de gravedad y más ancha sea la base, más estable estás.'
          ],
          dato:'La pértiga del equilibrista es larga y pesada en las puntas: eso hace que gire más despacio y le da tiempo de corregir.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Por qué un equilibrista abre los brazos sobre la cuerda?', o:['Porque así pesa menos sobre la cuerda','Para controlar dónde queda su centro de gravedad','Para que el público lo vea mejor'], r:1, ex:'Su peso no cambia por abrir los brazos. Lo que hace es mover el centro de gravedad y mantenerlo justo arriba de la cuerda.'},
            {t:'op', p:'¿Cuál pirámide humana es más estable?', o:['La de base ancha y poca altura','La de base angosta y mucha altura','Las dos igual, si pesan lo mismo'], r:0, ex:'El peso total no decide la estabilidad. Una base ancha y un centro de gravedad bajo hacen mucho más difícil que se venga abajo.'},
            {t:'vf', p:'En el vacío, una pluma y una piedra caen al mismo tiempo.', r:true, ex:'Sin aire que la frene, la gravedad acelera igual a todo. En el aire la pluma cae lento por el rozamiento.'},
            {t:'txt', p:'¿Cómo se llama la fuerza que jala los objetos hacia la Tierra?', r:['gravedad','la gravedad'], ex:'La gravedad es la atracción que la Tierra ejerce sobre todo lo que tiene masa.'},
            {t:'op', p:'Un trapecista suelta la barra en el punto más alto del vuelo. ¿Qué pasa?', o:['Cae en línea recta hacia abajo','Avanza un instante más y luego cae','Se queda un momento detenido en el aire'], r:1, ex:'Conserva la velocidad que traía, así que sigue avanzando hacia adelante mientras la gravedad lo hace bajar.'}
          ]
        },
        {
          titulo:'Los sistemas del cuerpo humano',
          intro:'Tu cuerpo es una compañía completa: cada equipo de órganos tiene su número en la función.',
          puntos:[
            'Varios órganos que trabajan juntos forman un sistema o aparato.',
            'El sistema circulatorio reparte la sangre: el corazón bombea y las arterias y venas la llevan.',
            'El sistema respiratorio toma oxígeno del aire con los pulmones y saca dióxido de carbono.',
            'El sistema digestivo deshace los alimentos para aprovechar sus nutrientes.',
            'Huesos y músculos trabajan juntos para sostenerte y moverte.'
          ],
          dato:'Un adulto tiene 206 huesos, pero un recién nacido tiene cerca de 300: al crecer, varios se van uniendo.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Qué órgano bombea la sangre?', o:['Los pulmones','El hígado','El corazón'], r:2, ex:'El corazón es un músculo que se aprieta y empuja la sangre. Los pulmones le meten oxígeno a esa sangre, pero no la bombean.'},
            {t:'num', p:'¿Cuántos huesos tiene el esqueleto de un adulto? Escribe la cifra.', r:206, ex:'Son 206 en un adulto. De bebé son más y con los años varios se unen.'},
            {t:'txt', p:'¿Qué gas tomas del aire al respirar?', r:['oxigeno','oxígeno','el oxigeno'], ex:'Los pulmones pasan el oxígeno del aire a la sangre para repartirlo por el cuerpo.'},
            {t:'vf', p:'Cuando haces un esfuerzo fuerte, tu respiración se vuelve más lenta.', r:false, ex:'Pasa lo contrario: se acelera, porque los músculos gastan más oxígeno y hay que reponerlo rápido.'},
            {t:'op', p:'¿Qué sistema se encarga de deshacer la comida?', o:['El digestivo','El circulatorio','El respiratorio'], r:0, ex:'El sistema digestivo rompe los alimentos. El circulatorio solo reparte después los nutrientes por la sangre.'}
          ]
        }
      ]
    }
  },
  {
    id:'geo',
    nombre:'Geografía',
    icono:'🗺️',
    desc:'Aprende dónde estás parado, cómo se lee un mapa y cómo es el mundo por el que viaja el circo.',
    niveles:{
      semillas:[
        {
          titulo:'Dónde vivo',
          intro:'Tu casa está en una calle, y tu calle está en una ciudad. Vamos a buscarte en el mapa.',
          puntos:[
            'Tu casa tiene una dirección con nombre de calle y número.',
            'Muchas casas juntas forman una colonia o un barrio.',
            'Muchas colonias juntas forman una ciudad o un pueblo.',
            'Tu ciudad está en un país, y nuestro país se llama México.'
          ],
          dato:'Cuando el circo viaja, la carpa es la casa que se lleva a todos lados.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Cómo se llama nuestro país?', emoji:'🇲🇽', o:['México','América','Guadalajara'], r:0, ex:'Nuestro país es México. América es el continente donde está, y Guadalajara es una de sus ciudades.'},
            {t:'op', p:'¿Qué tiene tu casa para poder encontrarla?', emoji:'🏠', o:['Una llave','Una dirección','Un timbre'], r:1, ex:'La dirección dice el nombre de la calle y el número. La llave la abre y el timbre la anuncia, pero solo la dirección sirve para decirle a alguien dónde está.'},
            {t:'vf', p:'Muchas colonias juntas forman una ciudad.', r:true, ex:'Sí. Primero las casas hacen una colonia, y muchas colonias juntas hacen la ciudad.'},
            {t:'vf', p:'La carpa del circo se queda siempre en el mismo lugar.', r:false, ex:'La carpa se arma y se desarma para viajar a otra ciudad.'},
            {t:'op', p:'¿Dónde está tu calle?', emoji:'🛣️', o:['Dentro de tu casa','En tu ciudad','En otro país'], r:1, ex:'Tu calle está dentro de tu ciudad o de tu pueblo. Tu casa está dentro de la calle, no al revés.'}
          ]
        },
        {
          titulo:'El clima y el cielo',
          intro:'Mira hacia arriba. El cielo te avisa si hoy toca sol, lluvia o viento.',
          puntos:[
            'Cuando hay sol, el día está soleado y hace calor.',
            'Cuando hay nubes grises, puede llover.',
            'En invierno hace frío y te pones suéter.',
            'El viento es aire que se mueve: mueve las hojas y también la lona de la carpa.'
          ],
          dato:'El arcoíris sale cuando el sol brilla mientras todavía está lloviendo.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Qué usas cuando llueve?', emoji:'☂️', o:['Un paraguas','Un sombrero de sol','Unos lentes oscuros'], r:0, ex:'El paraguas te tapa del agua. El sombrero y los lentes son para el sol.'},
            {t:'op', p:'¿Qué ves en el cielo de día?', emoji:'☀️', o:['Las estrellas','La oscuridad','El sol'], r:2, ex:'De día vemos el sol. Las estrellas están ahí, pero la luz del sol no deja verlas. La oscuridad es de noche.'},
            {t:'vf', p:'En invierno hace frío.', r:true, ex:'En invierno baja la temperatura y por eso te abrigas.'},
            {t:'vf', p:'Las nubes grises quieren decir que va a hacer mucho calor.', r:false, ex:'Las nubes grises están cargadas de agua: avisan que puede llover.'},
            {t:'op', p:'¿Qué cosas mueve el viento?', emoji:'🍃', o:['Las hojas de los árboles','Las banquetas','Los postes de luz'], r:0, ex:'El viento empuja las cosas ligeras, como las hojas. Lo pesado y bien clavado no se mueve.'}
          ]
        }
      ],
      malabaristas:[
        {
          titulo:'México y sus estados',
          intro:'El circo va de gira por todo el país. Para no perderte, primero hay que conocerlo.',
          puntos:[
            'México está en América del Norte y su capital es la Ciudad de México.',
            'El país se divide en 32 entidades: 31 estados y la Ciudad de México.',
            'Al norte hacemos frontera con Estados Unidos; al sur, con Guatemala y Belice.',
            'Al oeste está el océano Pacífico y al este el golfo de México.',
            'Cada estado tiene su capital, su comida y sus fiestas.'
          ],
          dato:'La montaña más alta de México es el Pico de Orizaba, un volcán de más de 5600 metros de altura.',
          lectura:null,
          ejercicios:[
            {t:'num', p:'¿Cuántos estados tiene México, sin contar la Ciudad de México? Escribe la cifra.', r:31, ex:'Son 31 estados más la Ciudad de México, o sea 32 entidades en total.'},
            {t:'txt', p:'¿Cuál es la capital de México?', r:['ciudad de mexico','ciudad de méxico','cdmx'], ex:'La capital es la Ciudad de México, donde están los poderes del país.'},
            {t:'op', p:'¿Con qué país hace frontera México al norte?', o:['Guatemala','Belice','Estados Unidos'], r:2, ex:'Al norte está Estados Unidos. Guatemala y Belice también son vecinos, pero quedan al sur.'},
            {t:'vf', p:'México está en el continente americano.', r:true, ex:'Sí, en la parte norte de América.'},
            {t:'op', p:'Si el circo va de Yucatán a Baja California, ¿hacia dónde viaja?', o:['Hacia el sureste','Hacia el noroeste','Hacia el este'], r:1, ex:'Yucatán ya está en el sureste y Baja California está en el noroeste, así que el viaje cruza el país en diagonal hacia allá.'}
          ]
        },
        {
          titulo:'Continentes y océanos',
          intro:'La Tierra es una pelota de agua y tierra. Vamos a ponerle nombre a cada pedazo.',
          puntos:[
            'Los grandes bloques de tierra se llaman continentes: América, Europa, Asia, África, Oceanía y la Antártida.',
            'Hay cinco océanos: Pacífico, Atlántico, Índico, Ártico y Antártico.',
            'El océano Pacífico es el más grande de todos.',
            'Asia es el continente más grande y donde vive más gente.',
            'Casi tres cuartas partes de la superficie de la Tierra están cubiertas de agua.'
          ],
          dato:'En la Antártida no vive nadie de forma permanente: solo científicos que se quedan por temporadas.',
          lectura:null,
          ejercicios:[
            {t:'txt', p:'¿Cuántos océanos hay? Escribe el número.', r:['5','cinco'], ex:'Cinco: Pacífico, Atlántico, Índico, Ártico y Antártico.'},
            {t:'op', p:'¿Cuál es el océano más grande?', o:['El Atlántico','El Índico','El Pacífico'], r:2, ex:'El Pacífico es el más grande y el más profundo. El Atlántico, que separa América de Europa, es el segundo.'},
            {t:'txt', p:'¿En qué continente está México?', r:['america','américa'], ex:'México está en América, entre Estados Unidos y Guatemala.'},
            {t:'vf', p:'La Antártida es el continente más caluroso.', r:false, ex:'Es el más frío: está cubierto de hielo casi todo el año.'},
            {t:'op', p:'Para ir de México a Europa en barco, ¿qué océano tienes que cruzar?', o:['El Pacífico','El Atlántico','El Ártico'], r:1, ex:'Europa queda al este de México, al otro lado del Atlántico. El Pacífico está del lado contrario.'}
          ]
        }
      ],
      acrobatas:[
        {
          titulo:'Mapas, coordenadas y husos horarios',
          intro:'Con dos números puedes decir exactamente en qué punto del planeta está la carpa esta noche.',
          puntos:[
            'Un mapa es una representación del terreno visto desde arriba y hecha a escala.',
            'Las líneas horizontales son los paralelos; el más importante es el ecuador, a 0 grados de latitud.',
            'Las líneas verticales son los meridianos; el de Greenwich marca 0 grados de longitud.',
            'Con la latitud y la longitud puedes ubicar cualquier punto del planeta.',
            'La Tierra se divide en 24 husos horarios porque tarda 24 horas en dar una vuelta sobre sí misma.'
          ],
          dato:'Cada huso horario mide 15 grados de longitud, porque 360 grados entre 24 horas dan 15 grados por hora.',
          lectura:null,
          ejercicios:[
            {t:'num', p:'¿En cuántos husos horarios se divide la Tierra? Escribe la cifra.', r:24, ex:'Uno por cada hora, porque la Tierra da una vuelta completa sobre su eje en 24 horas.'},
            {t:'op', p:'¿Qué mide la latitud?', o:['La distancia al este o al oeste de Greenwich','La altura sobre el nivel del mar','La distancia al norte o al sur del ecuador'], r:2, ex:'La latitud se cuenta desde el ecuador hacia los polos, de 0 a 90 grados. La distancia a Greenwich es la longitud.'},
            {t:'txt', p:'¿Cómo se llama el paralelo que está a 0 grados de latitud?', r:['ecuador','el ecuador'], ex:'El ecuador divide la Tierra en hemisferio norte y hemisferio sur.'},
            {t:'vf', p:'La escala de un mapa sirve para saber cuánto mide en la realidad una distancia dibujada.', r:true, ex:'Si la escala dice 1:100000, un centímetro del mapa equivale a un kilómetro real.'},
            {t:'op', p:'El circo sale de México y viaja al este cruzando varios husos horarios. ¿Qué pasa con la hora?', o:['Hay que adelantar el reloj','Hay que atrasar el reloj','La hora no cambia, solo la fecha'], r:0, ex:'Al ir hacia el este te acercas a donde el sol sale antes, así que el reloj se adelanta. Hacia el oeste se atrasa.'}
          ]
        },
        {
          titulo:'Relieve, ríos y climas del mundo',
          intro:'El mismo planeta tiene desiertos, selvas y hielo. Aquí está la explicación.',
          puntos:[
            'El relieve son las formas del terreno: montañas, mesetas, valles y llanuras.',
            'Las grandes cordilleras se levantan donde chocan las placas de la corteza terrestre.',
            'Un río nace en una zona alta y corre hasta desembocar en un lago o en el mar.',
            'El clima de un lugar depende de su latitud, su altitud y su cercanía al mar.',
            'Entre más alto vives, más frío hace, aunque estés cerca del ecuador.'
          ],
          dato:'El Everest, en Asia, mide 8849 metros: es la montaña más alta del mundo.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Por qué hace más frío en lo alto de una montaña?', o:['Porque el aire es más delgado y retiene menos calor','Porque estás más lejos del Sol','Porque arriba siempre hay nieve'], r:0, ex:'Subir unos kilómetros no te acerca ni te aleja del Sol de manera importante. Lo que cambia es el aire: se vuelve menos denso y guarda menos calor.'},
            {t:'txt', p:'¿Cómo se llama el conjunto de formas del terreno, como montañas y valles?', r:['relieve','el relieve'], ex:'El relieve es el conjunto de formas de la superficie terrestre.'},
            {t:'num', p:'Una montaña mide 5600 metros y otra 8800. ¿Cuántos metros más mide la segunda? Escribe la cifra.', r:3200, ex:'8800 menos 5600 son 3200 metros de diferencia.'},
            {t:'vf', p:'Todos los lugares cercanos al ecuador son calurosos, sin importar su altura.', r:false, ex:'La altitud también cuenta: hay ciudades cerca del ecuador, en lo alto de los Andes, donde hace frío todo el año.'},
            {t:'op', p:'¿Qué es un delta?', o:['El valle que un río excava entre dos montañas','El lugar alto donde nace un río','El terreno que forma un río con la tierra que arrastra al desembocar'], r:2, ex:'El delta se forma en la desembocadura, con la arena y el lodo que el río deja al llegar al mar. Donde nace se llama nacimiento.'}
          ]
        }
      ]
    }
  },
  {
    id:'hist',
    nombre:'Historia',
    icono:'⏳',
    desc:'Viaja al pasado: cómo vivía la gente antes, cómo nació México y cómo nació el circo.',
    niveles:{
      semillas:[
        {
          titulo:'Antes y ahora',
          intro:'Las cosas cambian con el tiempo. Vamos a ver cómo era antes y cómo es hoy.',
          puntos:[
            'Antes es lo que ya pasó. Ahora es lo que está pasando.',
            'Antes no había televisión ni teléfonos como los de hoy.',
            'Antes la gente viajaba en carreta con caballos. Hoy usamos carros.',
            'Las fotos viejas nos enseñan cómo era antes.'
          ],
          dato:'Hace mucho tiempo, el circo viajaba en carretas jaladas por caballos.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Qué usamos hoy para viajar muy lejos y rápido?', emoji:'✈️', o:['La carreta','El avión','El caballo'], r:1, ex:'El avión nos lleva muy lejos en pocas horas. La carreta y el caballo son de antes y van mucho más despacio.'},
            {t:'vf', p:'Antes la gente viajaba en avión de un pueblo a otro.', r:false, ex:'El avión es nuevo. Antes se viajaba en carreta jalada por caballos.'},
            {t:'op', p:'¿Qué nos enseña cómo era antes?', emoji:'📷', o:['Las fotos viejas','La tele de hoy','El periódico de hoy'], r:0, ex:'En las fotos viejas vemos la ropa, las casas y las calles de antes. Lo de hoy nos enseña cómo es ahora.'},
            {t:'vf', p:'Tú eras más chiquito antes que ahora.', r:true, ex:'Todos crecemos. Antes eras bebé y hoy eres más grande.'},
            {t:'op', p:'¿Con qué jalaban las carretas del circo hace mucho?', emoji:'🐴', o:['Con un camión','Con un tractor','Con caballos'], r:2, ex:'Los camiones y los tractores no existían todavía. Las carretas las jalaban los caballos.'}
          ]
        },
        {
          titulo:'Mi familia y el tiempo',
          intro:'En tu familia hay gente que nació antes que tú. Ellos vieron cosas que tú no.',
          puntos:[
            'Tus papás nacieron antes que tú.',
            'Tus abuelos nacieron antes que tus papás.',
            'Cada año cumples años una vez, el día en que naciste.',
            'Los recuerdos de la familia se guardan en fotos y en cuentos.'
          ],
          dato:'Si juntas a tus abuelos, a tus papás y a ti, ya tienes tres generaciones de familia.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Quién nació primero?', emoji:'👵', o:['Tú','Tu mamá','Tu abuela'], r:2, ex:'La abuela nació antes que tu mamá, y tu mamá antes que tú. Los abuelos son los primeros de la familia.'},
            {t:'vf', p:'Tus papás son más grandes que tú.', r:true, ex:'Tus papás nacieron antes, por eso tienen más años.'},
            {t:'op', p:'¿Cuántas veces al año cumples años?', emoji:'🎂', o:['Una','Dos','Doce'], r:0, ex:'Cumples años una sola vez al año, el día en que naciste. Doce son los meses del año.'},
            {t:'vf', p:'Los abuelos son más chicos que los nietos.', r:false, ex:'Al revés: los abuelos nacieron mucho antes, así que son los más grandes.'},
            {t:'op', p:'¿Dónde se guardan los recuerdos de tu familia?', emoji:'📸', o:['En las fotos','En el mapa','En el reloj'], r:0, ex:'Las fotos guardan momentos que ya pasaron. El mapa dice dónde están los lugares y el reloj dice la hora de hoy.'}
          ]
        }
      ],
      malabaristas:[
        {
          titulo:'Culturas antiguas de México',
          intro:'Mucho antes de que existiera México, aquí ya había ciudades enormes con pirámides.',
          puntos:[
            'Antes de la llegada de los españoles, en este territorio vivían muchos pueblos con ciudades y templos.',
            'Los olmecas son de los más antiguos: tallaron cabezas gigantes de piedra.',
            'Los mayas construyeron ciudades como Chichén Itzá y estudiaron el cielo.',
            'Los mexicas fundaron Tenochtitlan sobre una isla del lago de Texcoco.',
            'En Teotihuacán están las pirámides del Sol y de la Luna.'
          ],
          dato:'Los mayas ya escribían un símbolo para el cero cuando en muchas partes del mundo ese número todavía no se usaba.',
          lectura:null,
          ejercicios:[
            {t:'op', p:'¿Quiénes tallaron las cabezas colosales de piedra?', o:['Los mayas','Los olmecas','Los mexicas'], r:1, ex:'Fueron los olmecas, que vivieron en la costa del Golfo y son de los pueblos más antiguos de la región.'},
            {t:'txt', p:'¿Cómo se llamaba la ciudad de los mexicas construida sobre un lago?', r:['tenochtitlan','tenochtitlán','mexico-tenochtitlan'], ex:'Tenochtitlan se levantó sobre una isla del lago de Texcoco. Hoy ahí está la Ciudad de México.'},
            {t:'vf', p:'Los mayas observaban el cielo y hacían calendarios.', r:true, ex:'Estudiaban el Sol, la Luna y las estrellas para medir el tiempo y organizar sus fiestas.'},
            {t:'op', p:'¿Qué hay en Teotihuacán?', o:['Las pirámides del Sol y de la Luna','El Templo Mayor de los mexicas','La pirámide de Chichén Itzá'], r:0, ex:'Teotihuacán es famosa por esas dos pirámides. El Templo Mayor estaba en Tenochtitlan y Chichén Itzá es maya, en Yucatán.'},
            {t:'txt', p:'Los mayas escribían un símbolo para un número que vale nada. ¿Cuál es? Escribe el número.', r:['0','cero'], ex:'El cero. Tenían un símbolo para escribirlo hace más de mil años.'}
          ]
        },
        {
          titulo:'La Independencia',
          intro:'Hubo un tiempo en que México no era México y no se mandaba solo. Así cambió eso.',
          puntos:[
            'Hace más de doscientos años, este territorio era una colonia de España y se llamaba Nueva España.',
            'La madrugada del 16 de septiembre de 1810, el cura Miguel Hidalgo llamó a la gente a luchar en el pueblo de Dolores.',
            'A ese llamado se le conoce como el Grito de Dolores.',
            'Después continuaron la lucha José María Morelos y otros insurgentes.',
            'La guerra terminó en 1821 y México se volvió un país independiente.'
          ],
          dato:'Cada 15 de septiembre por la noche se recuerda el Grito, y el 16 se celebra el Día de la Independencia.',
          lectura:null,
          ejercicios:[
            {t:'num', p:'¿En qué año comenzó la guerra de Independencia de México? Escribe la cifra.', r:1810, ex:'Comenzó el 16 de septiembre de 1810 con el Grito de Dolores.'},
            {t:'op', p:'¿Quién dio el Grito de Dolores?', o:['José María Morelos','Benito Juárez','Miguel Hidalgo'], r:2, ex:'Fue el cura Miguel Hidalgo. Morelos siguió la lucha después de él, y Juárez vivió muchos años más tarde.'},
            {t:'txt', p:'¿De qué país se independizó México?', r:['espana','españa'], ex:'México dejó de ser colonia de España y pasó a gobernarse solo.'},
            {t:'vf', p:'La Independencia se logró en un solo día.', r:false, ex:'La guerra duró once años: empezó en 1810 y terminó en 1821.'},
            {t:'op', p:'¿Cómo se llamaba este territorio cuando era colonia?', o:['Gran Tenochtitlan','Nueva España','Virreinato de América'], r:1, ex:'Se llamaba Nueva España y lo gobernaba un virrey en nombre del rey español.'}
          ]
        }
      ],
      acrobatas:[
        {
          titulo:'La Revolución Mexicana',
          intro:'Un país entero se levantó porque la tierra y el poder estaban en muy pocas manos.',
          puntos:[
            'Porfirio Díaz gobernó México más de treinta años, reeligiéndose una y otra vez.',
            'Había mucha desigualdad: unas cuantas familias tenían enormes haciendas y la mayoría de los campesinos no tenía tierra propia.',
            'En 1910, Francisco I. Madero llamó a levantarse contra la reelección, y el 20 de noviembre inició la Revolución.',
            'Emiliano Zapata luchó en el sur bajo el lema Tierra y Libertad, que venía de los magonistas; Francisco Villa dirigió tropas en el norte.',
            'En 1917 se promulgó una nueva Constitución, la que sigue vigente hoy.'
          ],
          dato:'La Constitución de 1917 fue de las primeras del mundo en escribir derechos de los trabajadores, como la jornada de ocho horas.',
          lectura:null,
          ejercicios:[
            {t:'num', p:'¿En qué año inició la Revolución Mexicana? Escribe la cifra.', r:1910, ex:'El 20 de noviembre de 1910, tras el llamado de Francisco I. Madero.'},
            {t:'op', p:'¿Cuál fue una de las causas principales de la Revolución?', o:['La desigualdad en el reparto de la tierra','La invasión de un ejército extranjero','La falta de ferrocarriles en el país'], r:0, ex:'Pocos dueños concentraban enormes haciendas mientras los campesinos trabajaban sin tierra propia. Ferrocarriles sí se construyeron durante el porfiriato.'},
            {t:'txt', p:'¿Qué lema hizo suyo Emiliano Zapata?', r:['tierra y libertad'], ex:'Tierra y Libertad. El lema nació entre los magonistas, del Partido Liberal Mexicano de Ricardo Flores Magón, y el zapatismo lo adoptó para exigir que la tierra fuera de quien la trabaja.'},
            {t:'vf', p:'Porfirio Díaz siguió gobernando México después de 1911.', r:false, ex:'Díaz renunció en 1911 y salió del país. Poco después Madero llegó a la presidencia.'},
            {t:'op', p:'¿Qué documento importante salió de la Revolución?', o:['La Constitución de 1857','La Constitución de 1917','El Plan de Iguala'], r:1, ex:'La Constitución de 1917 recogió las demandas de tierra, trabajo y educación. La de 1857 es anterior y el Plan de Iguala es de la Independencia.'}
          ]
        },
        {
          titulo:'Historia del circo en el mundo',
          intro:'La pista redonda en la que trabajas tiene más de doscientos años de historia.',
          puntos:[
            'En 1768, en Londres, Philip Astley presentó acrobacias a caballo dentro de una pista circular: ese es el origen del circo moderno.',
            'La pista es redonda para que el caballo galope en curva sin parar y el jinete se recargue hacia adentro sin caerse.',
            'En el siglo XIX el circo empezó a usar carpas de lona, y así pudo viajar de pueblo en pueblo.',
            'Con los años se sumaron trapecistas, malabaristas, equilibristas y payasos.',
            'En México, el Circo Atayde Hermanos se fundó en 1888 y es uno de los más antiguos que siguen activos.'
          ],
          dato:'Hoy muchos circos ya no presentan animales salvajes y se concentran en las habilidades de sus artistas.',
          lectura:null,
          ejercicios:[
            {t:'num', p:'¿En qué año se considera que nació el circo moderno? Escribe la cifra.', r:1768, ex:'En 1768 Philip Astley montó en Londres la primera pista circular con acrobacias a caballo.'},
            {t:'op', p:'¿Por qué la pista del circo es redonda?', o:['Porque así cabe más público sentado','Porque la lona se sostiene mejor en círculo','Para que el caballo galope en curva continua y el jinete se recargue hacia adentro'], r:2, ex:'La forma circular nació por los caballos: pueden correr sin detenerse y el jinete se inclina hacia el centro para no salir despedido.'},
            {t:'txt', p:'¿Cómo se llama la tienda grande de lona donde se hace la función?', r:['carpa','la carpa'], ex:'La carpa permitió que el circo armara su teatro en cualquier terreno y luego se lo llevara.'},
            {t:'vf', p:'El circo moderno nació en México.', r:false, ex:'Nació en Inglaterra en 1768. A México llegó después y aquí crecieron compañías propias, como el Circo Atayde.'},
            {t:'op', p:'¿Qué cambio han hecho muchos circos actuales?', o:['Dejar de viajar entre ciudades','Presentar funciones solo al aire libre','Dejar de presentar animales salvajes'], r:2, ex:'Por el bienestar animal, muchos circos ahora basan su función solo en artistas humanos, pero siguen viajando y usando carpa.'}
          ]
        }
      ]
    }
  }
];
