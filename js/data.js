/* ============================================================
   MY ENGLISH NOTEBOOK — Datos del curso
   Niveles CEFR: A1, A2, B1, B2
   ============================================================ */

const LEVELS_INFO = [
  { id: "A1", name: "Beginner",         subtitle: "Primeros pasos en inglés",      icon: "🌱", color: "#4CAF7D" },
  { id: "A2", name: "Elementary",       subtitle: "Bases sólidas del día a día",   icon: "🌤️", color: "#4A90D9" },
  { id: "B1", name: "Intermediate",     subtitle: "Comunícate con soltura",        icon: "🚀", color: "#F5B942" },
  { id: "B2", name: "Upper-Intermediate", subtitle: "Domina estructuras avanzadas", icon: "🏆", color: "#E4572E" },
];

const LESSONS_BY_LEVEL = {

  /* ============================================================
     NIVEL A1 — BEGINNER
     ============================================================ */
  A1: [
    {
      id: 1,
      title: "Hello!",
      subtitle: "Saludos, despedidas y presentaciones",
      icon: "👋",
      vocab: [
        { en: "Hello", es: "Hola", emoji: "👋" },
        { en: "Good morning", es: "Buenos días", emoji: "☀️" },
        { en: "Good afternoon", es: "Buenas tardes", emoji: "🌇" },
        { en: "Good night", es: "Buenas noches", emoji: "🌙" },
        { en: "Goodbye", es: "Adiós", emoji: "🙋" },
        { en: "Thank you", es: "Gracias", emoji: "🙏" },
        { en: "Please", es: "Por favor", emoji: "🥺" },
        { en: "My name is...", es: "Me llamo...", emoji: "🧑" },
      ],
      grammar: {
        title: "Presentarse en inglés",
        text: "Para presentarte usas 'My name is' + tu nombre, o simplemente 'I'm' + nombre. 'Hello' se usa a cualquier hora, mientras que 'Good morning/afternoon/evening' dependen de la hora del día. Truco de pronunciación: la 'h' de 'Hello' se pronuncia con un soplo de aire suave, y muchas palabras en inglés NO se leen como se escriben.",
        examples: [
          { en: "— Hello! My name is Anna.", es: "— Hola, me llamo Anna." },
          { en: "— Hi, how are you?", es: "— Hola, ¿cómo estás?" },
          { en: "— I'm fine, thank you!", es: "— Estoy bien, ¡gracias!" },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se dice 'Gracias' en inglés?", options: ["Hello", "Thank you", "Goodbye", "Please"], answer: 1 },
        { type: "fill", question: "— ___ ! My name is Paul. (Hola)", answer: "Hello", hint: "Saludo universal, se usa a cualquier hora" },
        { type: "match", pairs: [
          { en: "Goodbye", es: "Adiós" },
          { en: "Thank you", es: "Gracias" },
          { en: "Please", es: "Por favor" },
          { en: "Good night", es: "Buenas noches" },
        ]},
      ],
    },
    {
      id: 2,
      title: "Numbers 0–20",
      subtitle: "Los números del 0 al 20",
      icon: "🔢",
      vocab: [
        { en: "zero", es: "0", emoji: "0️⃣" },
        { en: "one", es: "1", emoji: "1️⃣" },
        { en: "two", es: "2", emoji: "2️⃣" },
        { en: "three", es: "3", emoji: "3️⃣" },
        { en: "four", es: "4", emoji: "4️⃣" },
        { en: "five", es: "5", emoji: "5️⃣" },
        { en: "ten", es: "10", emoji: "🔟" },
        { en: "fifteen", es: "15", emoji: "🔢" },
        { en: "twenty", es: "20", emoji: "🔢" },
      ],
      grammar: {
        title: "Contar del 0 al 20",
        text: "Del 1 al 12 cada número tiene una palabra única. Del 13 al 19 se añade el sufijo '-teen' (thirteen, fourteen...), parecido a 'diez y...' en español. Ojo con la diferencia entre 'thirteen' (13) y 'thirty' (30): el acento cambia de sílaba.",
        examples: [
          { en: "eleven, twelve, thirteen, fourteen", es: "once, doce, trece, catorce" },
          { en: "seventeen, eighteen, nineteen, twenty", es: "diecisiete, dieciocho, diecinueve, veinte" },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se dice '7' en inglés?", options: ["seven", "nine", "six", "eight"], answer: 0 },
        { type: "fill", question: "9 + 1 = ___ (en inglés, escribe 'ten')", answer: "ten", hint: "Es el número 10" },
        { type: "match", pairs: [
          { en: "five", es: "5" },
          { en: "eight", es: "8" },
          { en: "twelve", es: "12" },
          { en: "twenty", es: "20" },
        ]},
      ],
    },
    {
      id: 3,
      title: "Numbers & Age",
      subtitle: "Números del 21 al 100 y la edad",
      icon: "🎂",
      vocab: [
        { en: "twenty-one", es: "21", emoji: "🔢" },
        { en: "thirty", es: "30", emoji: "🔢" },
        { en: "forty", es: "40", emoji: "🔢" },
        { en: "fifty", es: "50", emoji: "🔢" },
        { en: "sixty", es: "60", emoji: "🔢" },
        { en: "hundred", es: "100", emoji: "💯" },
        { en: "age", es: "la edad", emoji: "🎂" },
        { en: "I am ... years old", es: "Tengo ... años", emoji: "🎉" },
      ],
      grammar: {
        title: "Decenas y la edad",
        text: "Las decenas siguen un patrón regular: thirty (30), forty (40), fifty (50)... A diferencia del español, en inglés se usa el verbo 'to be' (ser/estar) para decir la edad, NO 'to have': 'I am twenty years old' es literalmente 'Yo soy veinte años', no 'Tengo veinte años'.",
        examples: [
          { en: "I am twenty-five years old.", es: "Tengo veinticinco años." },
          { en: "She is thirty years old.", es: "Ella tiene treinta años." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Qué verbo se usa para decir la edad en inglés?", options: ["to have", "to be", "to go", "to do"], answer: 1 },
        { type: "fill", question: "I ___ twenty years old. (soy)", answer: "am", hint: "Primera persona de 'to be'" },
        { type: "match", pairs: [
          { en: "thirty", es: "30" },
          { en: "fifty", es: "50" },
          { en: "hundred", es: "100" },
          { en: "sixty", es: "60" },
        ]},
      ],
    },
    {
      id: 4,
      title: "To Be",
      subtitle: "El verbo ser / estar",
      icon: "🧭",
      vocab: [
        { en: "I am", es: "yo soy/estoy", emoji: "🧍" },
        { en: "you are", es: "tú eres/estás", emoji: "🧍‍♂️" },
        { en: "he/she/it is", es: "él/ella es/está", emoji: "🧑" },
        { en: "we are", es: "nosotros somos/estamos", emoji: "👥" },
        { en: "you are (pl.)", es: "ustedes son/están", emoji: "👥" },
        { en: "they are", es: "ellos/ellas son/están", emoji: "👥" },
      ],
      grammar: {
        title: "Conjugación de 'to be' (ser/estar)",
        text: "'To be' es el verbo más importante en inglés y es irregular, así que hay que memorizarlo. Se usa para describir identidad, nacionalidad, profesión y estados: 'I am a student' (Soy estudiante), 'He is tired' (Está cansado). Fíjate que solo cambia en tercera persona singular: 'is'.",
        examples: [
          { en: "I am Mexican.", es: "Soy mexicano(a)." },
          { en: "We are happy.", es: "Estamos contentos." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se conjuga 'to be' con 'we'?", options: ["are", "is", "am", "be"], answer: 0 },
        { type: "fill", question: "You ___ English? (eres)", answer: "are", hint: "Segunda persona de 'to be'" },
        { type: "match", pairs: [
          { en: "I am", es: "yo soy" },
          { en: "you are (pl.)", es: "ustedes son" },
          { en: "they are", es: "ellos son" },
          { en: "she is", es: "ella es" },
        ]},
      ],
    },
    {
      id: 5,
      title: "To Have",
      subtitle: "El verbo tener",
      icon: "🎒",
      vocab: [
        { en: "I have", es: "yo tengo", emoji: "🎒" },
        { en: "you have", es: "tú tienes", emoji: "🎒" },
        { en: "he/she/it has", es: "él/ella tiene", emoji: "🎒" },
        { en: "we have", es: "nosotros tenemos", emoji: "🎒" },
        { en: "you have (pl.)", es: "ustedes tienen", emoji: "🎒" },
        { en: "they have", es: "ellos/ellas tienen", emoji: "🎒" },
      ],
      grammar: {
        title: "Conjugación de 'to have' (tener)",
        text: "'To have' también es irregular: en tercera persona del singular cambia a 'has' (he has, she has, it has), no 'haves'. Se usa para posesión y también en expresiones fijas como 'have breakfast' (desayunar) o 'have fun' (divertirse).",
        examples: [
          { en: "I have a brother.", es: "Tengo un hermano." },
          { en: "She has a cat.", es: "Ella tiene un gato." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se dice 'ella tiene' en inglés?", options: ["she have", "she has", "she is", "she are"], answer: 1 },
        { type: "fill", question: "They ___ a dog. (tienen)", answer: "have", hint: "Plural, no cambia" },
        { type: "match", pairs: [
          { en: "I have", es: "yo tengo" },
          { en: "he has", es: "él tiene" },
          { en: "we have", es: "nosotros tenemos" },
          { en: "you have", es: "tú tienes" },
        ]},
      ],
    },
    {
      id: 6,
      title: "Family & Possessives",
      subtitle: "La familia, posesivos y negación básica",
      icon: "🏆",
      vocab: [
        { en: "my", es: "mi / mis", emoji: "👉" },
        { en: "your", es: "tu / tus", emoji: "👉" },
        { en: "his / her", es: "su (de él) / su (de ella)", emoji: "👉" },
        { en: "family", es: "familia", emoji: "👨‍👩‍👧" },
        { en: "mother / father", es: "madre / padre", emoji: "👪" },
        { en: "I am not...", es: "no soy/estoy...", emoji: "🚫" },
        { en: "I don't know", es: "no lo sé", emoji: "🤷" },
        { en: "congratulations!", es: "¡felicidades!", emoji: "🎉" },
      ],
      grammar: {
        title: "Adjetivos posesivos y la negación",
        text: "Los posesivos en inglés concuerdan con el dueño, no con el objeto: 'his book' (su libro, de él) y 'her book' (su libro, de ella) usan la misma palabra en español pero distinta en inglés. Para negar con 'to be' se añade 'not': 'I am not English' (No soy inglés). ¡Con esto ya tienes las bases del nivel A1!",
        examples: [
          { en: "This is my mother.", es: "Esta es mi madre." },
          { en: "It's not my bag, it's her bag.", es: "No es mi bolso, es su bolso (de ella)." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se dice 'No hablo inglés' correctamente?", options: ["I not speak English", "I don't speak English", "Not I speak English", "I speak not English"], answer: 1 },
        { type: "fill", question: "This is ___ book (de ella).", answer: "her", hint: "Posesivo femenino" },
        { type: "match", pairs: [
          { en: "my", es: "mi" },
          { en: "your", es: "tu" },
          { en: "his", es: "su (de él)" },
          { en: "family", es: "familia" },
        ]},
      ],
    },
  ],

  /* ============================================================
     NIVEL A2 — ELEMENTARY
     ============================================================ */
  A2: [
    {
      id: 1,
      title: "Daily Routines",
      subtitle: "Presente simple y rutinas diarias",
      icon: "⏰",
      vocab: [
        { en: "to wake up", es: "despertarse", emoji: "⏰" },
        { en: "to get up", es: "levantarse", emoji: "🛏️" },
        { en: "to have breakfast", es: "desayunar", emoji: "🍳" },
        { en: "to go to work", es: "ir al trabajo", emoji: "💼" },
        { en: "to have lunch", es: "almorzar", emoji: "🍽️" },
        { en: "to go to bed", es: "irse a la cama", emoji: "🌙" },
        { en: "every day", es: "todos los días", emoji: "📅" },
        { en: "usually", es: "usualmente", emoji: "🔁" },
      ],
      grammar: {
        title: "Presente simple con rutinas",
        text: "El presente simple describe hábitos y rutinas. En tercera persona (he/she/it) se añade '-s' o '-es' al verbo: 'she works', 'he watches'. Se usa con adverbios de frecuencia como 'usually', 'always' o 'every day', que van antes del verbo principal (pero después de 'to be').",
        examples: [
          { en: "I wake up at seven o'clock.", es: "Me despierto a las siete." },
          { en: "She usually has breakfast at home.", es: "Ella usualmente desayuna en casa." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es la forma correcta con 'he'?", options: ["he work", "he works", "he working", "he to work"], answer: 1 },
        { type: "fill", question: "I ___ up at 7 am every day. (me despierto)", answer: "wake", hint: "wake up = despertarse" },
        { type: "match", pairs: [
          { en: "to have breakfast", es: "desayunar" },
          { en: "to go to bed", es: "irse a la cama" },
          { en: "every day", es: "todos los días" },
          { en: "to get up", es: "levantarse" },
        ]},
      ],
    },
    {
      id: 2,
      title: "Food & There is/are",
      subtitle: "Comida, bebidas y 'there is/there are'",
      icon: "🍎",
      vocab: [
        { en: "bread", es: "pan", emoji: "🍞" },
        { en: "cheese", es: "queso", emoji: "🧀" },
        { en: "water", es: "agua", emoji: "💧" },
        { en: "coffee", es: "café", emoji: "☕" },
        { en: "meat", es: "carne", emoji: "🍖" },
        { en: "vegetables", es: "verduras", emoji: "🥦" },
        { en: "there is", es: "hay (singular)", emoji: "➕" },
        { en: "there are", es: "hay (plural)", emoji: "➕" },
      ],
      grammar: {
        title: "'There is' / 'There are' (hay)",
        text: "En español 'hay' no cambia, pero en inglés se usa 'there is' con sustantivos singulares o incontables ('there is water') y 'there are' con plurales ('there are vegetables'). Para negar: 'there isn't / there aren't'; para preguntar: 'Is there...? / Are there...?'",
        examples: [
          { en: "There is some bread on the table.", es: "Hay pan en la mesa." },
          { en: "There are vegetables in the fridge.", es: "Hay verduras en el refrigerador." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es correcta con 'vegetables'?", options: ["There is vegetables", "There are vegetables", "There be vegetables", "Is there vegetables"], answer: 1 },
        { type: "fill", question: "___ a coffee on the table. (Hay, singular)", answer: "There is", hint: "Se usa con sustantivos singulares" },
        { type: "match", pairs: [
          { en: "bread", es: "pan" },
          { en: "cheese", es: "queso" },
          { en: "meat", es: "carne" },
          { en: "vegetables", es: "verduras" },
        ]},
      ],
    },
    {
      id: 3,
      title: "Colors & Clothes",
      subtitle: "Colores, ropa y orden de adjetivos",
      icon: "👕",
      vocab: [
        { en: "red / blue / green", es: "rojo / azul / verde", emoji: "🎨" },
        { en: "shirt", es: "camisa", emoji: "👕" },
        { en: "shoes", es: "zapatos", emoji: "👟" },
        { en: "jacket", es: "chaqueta", emoji: "🧥" },
        { en: "big / small", es: "grande / pequeño", emoji: "📏" },
        { en: "old / new", es: "viejo / nuevo", emoji: "🆕" },
      ],
      grammar: {
        title: "Orden de los adjetivos",
        text: "En inglés el adjetivo va ANTES del sustantivo, al revés que en español: 'a red shirt' (una camisa roja), no 'a shirt red'. Cuando hay varios adjetivos, siguen un orden: opinión, tamaño, edad, color + sustantivo. Ejemplo: 'a nice, small, new blue jacket'.",
        examples: [
          { en: "I have a blue jacket.", es: "Tengo una chaqueta azul." },
          { en: "She has new white shoes.", es: "Ella tiene zapatos blancos nuevos." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es el orden correcto?", options: ["a shirt red", "a red shirt", "red a shirt", "shirt a red"], answer: 1 },
        { type: "fill", question: "I have a ___ jacket. (nueva)", answer: "new", hint: "Adjetivo de edad/estado" },
        { type: "match", pairs: [
          { en: "shirt", es: "camisa" },
          { en: "shoes", es: "zapatos" },
          { en: "big", es: "grande" },
          { en: "old", es: "viejo" },
        ]},
      ],
    },
    {
      id: 4,
      title: "Time & Days",
      subtitle: "La hora y los días de la semana",
      icon: "🕐",
      vocab: [
        { en: "Monday", es: "lunes", emoji: "📅" },
        { en: "Friday", es: "viernes", emoji: "📅" },
        { en: "Sunday", es: "domingo", emoji: "📅" },
        { en: "o'clock", es: "en punto", emoji: "🕐" },
        { en: "half past", es: "y media", emoji: "🕜" },
        { en: "quarter to", es: "menos cuarto", emoji: "🕒" },
        { en: "What time is it?", es: "¿Qué hora es?", emoji: "❓" },
      ],
      grammar: {
        title: "Decir la hora",
        text: "Para decir la hora en punto se usa 'o'clock': 'It's three o'clock' (Son las tres). Para la media hora: 'half past three' (las tres y media). Para los cuartos: 'quarter past' (y cuarto) y 'quarter to' (menos cuarto). Los días de la semana siempre se escriben con mayúscula inicial.",
        examples: [
          { en: "It's half past seven.", es: "Son las siete y media." },
          { en: "The meeting is on Monday.", es: "La reunión es el lunes." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se dice 'las tres en punto'?", options: ["three half", "three o'clock", "quarter three", "three past"], answer: 1 },
        { type: "fill", question: "Today is ___. (lunes)", answer: "Monday", hint: "Primer día de la semana laboral" },
        { type: "match", pairs: [
          { en: "Friday", es: "viernes" },
          { en: "Sunday", es: "domingo" },
          { en: "half past", es: "y media" },
          { en: "quarter to", es: "menos cuarto" },
        ]},
      ],
    },
    {
      id: 5,
      title: "Weather & Seasons",
      subtitle: "El clima y las estaciones del año",
      icon: "🌦️",
      vocab: [
        { en: "sunny", es: "soleado", emoji: "☀️" },
        { en: "rainy", es: "lluvioso", emoji: "🌧️" },
        { en: "cold / hot", es: "frío / calor", emoji: "🥶" },
        { en: "windy", es: "ventoso", emoji: "💨" },
        { en: "summer / winter", es: "verano / invierno", emoji: "🍂" },
        { en: "It's raining", es: "Está lloviendo", emoji: "☔" },
      ],
      grammar: {
        title: "Hablar del clima con 'it'",
        text: "Para hablar del clima siempre se usa el sujeto 'it': 'It's sunny' (Está soleado), 'It's raining' (Está lloviendo). No se omite el sujeto como a veces se hace en español ('Llueve' vs 'It rains/It's raining'). El presente continuo ('It's raining') se usa para lo que pasa ahora mismo.",
        examples: [
          { en: "It's cold today.", es: "Hoy hace frío." },
          { en: "It's going to rain tomorrow.", es: "Va a llover mañana." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se dice 'está lloviendo'?", options: ["It's snowing", "It's raining", "It's windy", "It's sunny"], answer: 1 },
        { type: "fill", question: "It's very ___ in summer. (calor)", answer: "hot", hint: "Lo contrario de 'cold'" },
        { type: "match", pairs: [
          { en: "sunny", es: "soleado" },
          { en: "windy", es: "ventoso" },
          { en: "summer", es: "verano" },
          { en: "winter", es: "invierno" },
        ]},
      ],
    },
    {
      id: 6,
      title: "Prepositions & Directions",
      subtitle: "Preposiciones de lugar y direcciones",
      icon: "🧭",
      vocab: [
        { en: "in / on / under", es: "en/dentro / sobre / debajo", emoji: "📦" },
        { en: "next to", es: "al lado de", emoji: "↔️" },
        { en: "in front of", es: "enfrente de", emoji: "👀" },
        { en: "turn left / right", es: "gira a la izquierda / derecha", emoji: "↩️" },
        { en: "go straight", es: "sigue derecho", emoji: "⬆️" },
        { en: "between", es: "entre", emoji: "↔️" },
      ],
      grammar: {
        title: "Preposiciones de lugar",
        text: "'In' se usa para estar dentro de algo (in the box), 'on' para estar sobre una superficie (on the table) y 'under' para estar debajo (under the chair). Para dar direcciones: 'turn left/right' (gira a la izquierda/derecha) y 'go straight' (sigue derecho).",
        examples: [
          { en: "The bank is next to the school.", es: "El banco está al lado de la escuela." },
          { en: "Turn left and go straight.", es: "Gira a la izquierda y sigue derecho." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cómo se dice 'debajo de'?", options: ["on", "under", "in", "between"], answer: 1 },
        { type: "fill", question: "The cat is ___ the table. (sobre)", answer: "on", hint: "Preposición de superficie" },
        { type: "match", pairs: [
          { en: "next to", es: "al lado de" },
          { en: "in front of", es: "enfrente de" },
          { en: "between", es: "entre" },
          { en: "go straight", es: "sigue derecho" },
        ]},
      ],
    },
  ],

  /* ============================================================
     NIVEL B1 — INTERMEDIATE
     ============================================================ */
  B1: [
    {
      id: 1,
      title: "Past Simple",
      subtitle: "Verbos regulares e irregulares en pasado",
      icon: "🕰️",
      vocab: [
        { en: "yesterday", es: "ayer", emoji: "📆" },
        { en: "last week", es: "la semana pasada", emoji: "📆" },
        { en: "went (go)", es: "fui/fue (ir)", emoji: "🚶" },
        { en: "saw (see)", es: "vi/vio (ver)", emoji: "👀" },
        { en: "ate (eat)", es: "comí/comió (comer)", emoji: "🍽️" },
        { en: "worked (work)", es: "trabajé/trabajó (trabajar)", emoji: "💼" },
      ],
      grammar: {
        title: "Pasado simple: regulares e irregulares",
        text: "Los verbos regulares añaden '-ed' en pasado: 'work → worked'. Los irregulares cambian de forma y hay que memorizarlos: 'go → went', 'see → saw', 'eat → ate'. La forma negativa usa 'did not (didn't) + verbo base': 'I didn't go'. Las preguntas usan 'Did...?': 'Did you go?'",
        examples: [
          { en: "I went to the cinema yesterday.", es: "Fui al cine ayer." },
          { en: "She didn't work last week.", es: "Ella no trabajó la semana pasada." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es el pasado de 'go'?", options: ["goed", "went", "gone", "going"], answer: 1 },
        { type: "fill", question: "I ___ pizza last night. (comí)", answer: "ate", hint: "Pasado irregular de 'eat'" },
        { type: "match", pairs: [
          { en: "went", es: "fui (ir)" },
          { en: "saw", es: "vi (ver)" },
          { en: "worked", es: "trabajé" },
          { en: "yesterday", es: "ayer" },
        ]},
      ],
    },
    {
      id: 2,
      title: "Future: going to / will",
      subtitle: "Planes e intenciones futuras",
      icon: "🔮",
      vocab: [
        { en: "going to", es: "voy a / va a", emoji: "➡️" },
        { en: "will", es: "(futuro simple)", emoji: "🔮" },
        { en: "tomorrow", es: "mañana", emoji: "📅" },
        { en: "next year", es: "el próximo año", emoji: "📅" },
        { en: "plan", es: "plan", emoji: "🗒️" },
        { en: "prediction", es: "predicción", emoji: "🔮" },
      ],
      grammar: {
        title: "'Going to' vs 'will'",
        text: "'Going to' se usa para planes ya decididos: 'I'm going to study tonight' (Voy a estudiar esta noche). 'Will' se usa para decisiones espontáneas y predicciones sin evidencia clara: 'I think it will rain' (Creo que lloverá). Con evidencia visible ('Look at those clouds!') se prefiere 'going to'.",
        examples: [
          { en: "I'm going to visit my parents this weekend.", es: "Voy a visitar a mis padres este fin de semana." },
          { en: "I think she will like the gift.", es: "Creo que a ella le gustará el regalo." },
        ],
      },
      exercises: [
        { type: "mcq", question: "Para un plan ya decidido usamos:", options: ["will", "going to", "did", "was"], answer: 1 },
        { type: "fill", question: "I ___ study tonight. (voy a, plan decidido)", answer: "am going to", hint: "Estructura: am/is/are + going to" },
        { type: "match", pairs: [
          { en: "tomorrow", es: "mañana" },
          { en: "next year", es: "el próximo año" },
          { en: "plan", es: "plan" },
          { en: "prediction", es: "predicción" },
        ]},
      ],
    },
    {
      id: 3,
      title: "Comparatives & Superlatives",
      subtitle: "Comparar personas y cosas",
      icon: "⚖️",
      vocab: [
        { en: "bigger / biggest", es: "más grande / el más grande", emoji: "📏" },
        { en: "faster / fastest", es: "más rápido / el más rápido", emoji: "⚡" },
        { en: "more expensive", es: "más caro", emoji: "💰" },
        { en: "the most beautiful", es: "el más hermoso", emoji: "✨" },
        { en: "as ... as", es: "tan ... como", emoji: "🟰" },
        { en: "than", es: "que (comparación)", emoji: "↔️" },
      ],
      grammar: {
        title: "Comparativos y superlativos",
        text: "Adjetivos cortos añaden '-er' / 'the -est': 'fast → faster → the fastest'. Adjetivos largos usan 'more' / 'the most': 'expensive → more expensive → the most expensive'. Para igualdad se usa 'as + adjetivo + as': 'as tall as' (tan alto como).",
        examples: [
          { en: "This car is faster than that one.", es: "Este carro es más rápido que ese." },
          { en: "She is the most intelligent student in the class.", es: "Ella es la estudiante más inteligente de la clase." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es el superlativo de 'big'?", options: ["more big", "biggest", "bigger", "the most big"], answer: 1 },
        { type: "fill", question: "This phone is ___ expensive than that one. (más)", answer: "more", hint: "Adjetivo largo → 'more'" },
        { type: "match", pairs: [
          { en: "faster", es: "más rápido" },
          { en: "the most beautiful", es: "el más hermoso" },
          { en: "than", es: "que" },
          { en: "as ... as", es: "tan ... como" },
        ]},
      ],
    },
    {
      id: 4,
      title: "Modal Verbs",
      subtitle: "Can, must, should",
      icon: "🛡️",
      vocab: [
        { en: "can", es: "poder / saber (habilidad)", emoji: "💪" },
        { en: "must", es: "deber (obligación)", emoji: "❗" },
        { en: "should", es: "deberías (consejo)", emoji: "💡" },
        { en: "have to", es: "tener que", emoji: "📌" },
        { en: "can't", es: "no puedo", emoji: "🚫" },
        { en: "advice", es: "consejo", emoji: "🗣️" },
      ],
      grammar: {
        title: "Verbos modales: can, must, should",
        text: "'Can' expresa habilidad o permiso: 'I can swim' (Sé nadar). 'Must' expresa obligación fuerte: 'You must wear a seatbelt'. 'Should' da un consejo, más suave que 'must': 'You should sleep more'. Los modales nunca llevan '-s' en tercera persona ni van seguidos de 'to': 'she can go', no 'she cans to go'.",
        examples: [
          { en: "You should study for the exam.", es: "Deberías estudiar para el examen." },
          { en: "We must arrive on time.", es: "Debemos llegar a tiempo." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál expresa un consejo suave?", options: ["must", "should", "can", "have"], answer: 1 },
        { type: "fill", question: "You ___ smoke here. It's not allowed. (no puedes)", answer: "can't", hint: "Prohibición" },
        { type: "match", pairs: [
          { en: "can", es: "poder" },
          { en: "must", es: "deber (obligación)" },
          { en: "should", es: "deberías" },
          { en: "advice", es: "consejo" },
        ]},
      ],
    },
    {
      id: 5,
      title: "Present Continuous",
      subtitle: "Presente continuo vs presente simple",
      icon: "🎬",
      vocab: [
        { en: "right now", es: "ahora mismo", emoji: "⏱️" },
        { en: "at the moment", es: "en este momento", emoji: "⏱️" },
        { en: "I am working", es: "estoy trabajando", emoji: "💻" },
        { en: "she is studying", es: "ella está estudiando", emoji: "📚" },
        { en: "still", es: "todavía", emoji: "⏳" },
        { en: "these days", es: "en estos días", emoji: "📆" },
      ],
      grammar: {
        title: "Presente continuo vs presente simple",
        text: "El presente continuo (am/is/are + verbo-ing) describe acciones que ocurren ahora mismo: 'I am reading' (Estoy leyendo). El presente simple describe hábitos: 'I read every day' (Leo todos los días). Ojo: algunos verbos de estado (like, know, want) casi nunca se usan en continuo.",
        examples: [
          { en: "She is studying right now.", es: "Ella está estudiando ahora mismo." },
          { en: "I usually study in the evening, but today I'm studying in the morning.", es: "Usualmente estudio de noche, pero hoy estoy estudiando en la mañana." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál describe una acción en curso ahora?", options: ["I work", "I am working", "I worked", "I will work"], answer: 1 },
        { type: "fill", question: "Look! It ___ raining. (está)", answer: "is", hint: "am/is/are + verbo-ing" },
        { type: "match", pairs: [
          { en: "right now", es: "ahora mismo" },
          { en: "still", es: "todavía" },
          { en: "these days", es: "en estos días" },
          { en: "at the moment", es: "en este momento" },
        ]},
      ],
    },
    {
      id: 6,
      title: "Travel & Plans",
      subtitle: "Vocabulario de viajes y hacer planes",
      icon: "✈️",
      vocab: [
        { en: "airport", es: "aeropuerto", emoji: "🛫" },
        { en: "ticket", es: "boleto", emoji: "🎫" },
        { en: "luggage", es: "equipaje", emoji: "🧳" },
        { en: "reservation", es: "reservación", emoji: "📋" },
        { en: "How much does it cost?", es: "¿Cuánto cuesta?", emoji: "💵" },
        { en: "Could you help me?", es: "¿Podría ayudarme?", emoji: "🙋" },
      ],
      grammar: {
        title: "Peticiones corteses con 'could'",
        text: "'Could' se usa para hacer peticiones corteses, más formal que 'can': 'Could you help me, please?' (¿Podría ayudarme, por favor?). Es muy útil viajando: en el aeropuerto, hoteles o restaurantes. También sirve para pedir información: 'Could you tell me where the airport is?'",
        examples: [
          { en: "Could you help me with my luggage?", es: "¿Podría ayudarme con mi equipaje?" },
          { en: "I'd like to make a reservation.", es: "Me gustaría hacer una reservación." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es la forma más cortés de pedir ayuda?", options: ["Help me!", "You help me.", "Could you help me?", "Helping me?"], answer: 2 },
        { type: "fill", question: "How much does the ___ cost? (boleto)", answer: "ticket", hint: "Lo necesitas para viajar" },
        { type: "match", pairs: [
          { en: "airport", es: "aeropuerto" },
          { en: "luggage", es: "equipaje" },
          { en: "reservation", es: "reservación" },
          { en: "ticket", es: "boleto" },
        ]},
      ],
    },
  ],

  /* ============================================================
     NIVEL B2 — UPPER-INTERMEDIATE
     ============================================================ */
  B2: [
    {
      id: 1,
      title: "Present Perfect",
      subtitle: "Experiencias y acciones sin tiempo específico",
      icon: "🧩",
      vocab: [
        { en: "I have been", es: "he estado / he sido", emoji: "🧳" },
        { en: "have you ever...?", es: "¿alguna vez has...?", emoji: "❓" },
        { en: "already", es: "ya", emoji: "✅" },
        { en: "not yet", es: "todavía no", emoji: "⏳" },
        { en: "since / for", es: "desde / durante", emoji: "🕰️" },
        { en: "experience", es: "experiencia", emoji: "🌍" },
      ],
      grammar: {
        title: "Present perfect: have/has + participio",
        text: "El present perfect (have/has + participio pasado) conecta el pasado con el presente. Se usa para experiencias sin decir cuándo ('I have visited Paris'), acciones recientes con 'already/just', y con 'since' (desde un punto) o 'for' (durante un período): 'I have lived here for five years'.",
        examples: [
          { en: "Have you ever been to London?", es: "¿Alguna vez has estado en Londres?" },
          { en: "I have already finished my homework.", es: "Ya terminé mi tarea." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál usamos para 'desde 2020'?", options: ["for 2020", "since 2020", "in 2020", "at 2020"], answer: 1 },
        { type: "fill", question: "I have ___ finished the report. (ya)", answer: "already", hint: "Se coloca antes del participio" },
        { type: "match", pairs: [
          { en: "already", es: "ya" },
          { en: "not yet", es: "todavía no" },
          { en: "experience", es: "experiencia" },
          { en: "since", es: "desde" },
        ]},
      ],
    },
    {
      id: 2,
      title: "Conditionals",
      subtitle: "Primer y segundo condicional",
      icon: "🔀",
      vocab: [
        { en: "if", es: "si", emoji: "❓" },
        { en: "would", es: "(condicional)", emoji: "🌀" },
        { en: "real possibility", es: "posibilidad real", emoji: "✅" },
        { en: "hypothetical", es: "hipotético", emoji: "💭" },
        { en: "unless", es: "a menos que", emoji: "🚫" },
        { en: "imagine", es: "imaginar", emoji: "🎨" },
      ],
      grammar: {
        title: "Primer y segundo condicional",
        text: "El primer condicional habla de situaciones reales/posibles en el futuro: 'If it rains, I will stay home' (presente + will). El segundo condicional habla de situaciones hipotéticas o improbables: 'If I won the lottery, I would travel the world' (pasado simple + would), no implica que sea probable.",
        examples: [
          { en: "If I have time, I will call you.", es: "Si tengo tiempo, te llamaré." },
          { en: "If I were rich, I would buy a house.", es: "Si fuera rico, compraría una casa." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es una situación hipotética/improbable?", options: ["If it rains, I'll stay home.", "If I won the lottery, I would travel.", "If you study, you'll pass.", "If I have time, I'll help."], answer: 1 },
        { type: "fill", question: "If I ___ you, I would apologize. (fuera)", answer: "were", hint: "Segundo condicional usa pasado de 'to be'" },
        { type: "match", pairs: [
          { en: "unless", es: "a menos que" },
          { en: "hypothetical", es: "hipotético" },
          { en: "real possibility", es: "posibilidad real" },
          { en: "imagine", es: "imaginar" },
        ]},
      ],
    },
    {
      id: 3,
      title: "Passive Voice",
      subtitle: "La voz pasiva",
      icon: "🔄",
      vocab: [
        { en: "was made", es: "fue hecho", emoji: "🏭" },
        { en: "is built", es: "es construido", emoji: "🏗️" },
        { en: "by", es: "por (agente)", emoji: "👤" },
        { en: "was written", es: "fue escrito", emoji: "✍️" },
        { en: "to be discovered", es: "ser descubierto", emoji: "🔍" },
        { en: "product", es: "producto", emoji: "📦" },
      ],
      grammar: {
        title: "Formar la voz pasiva",
        text: "La voz pasiva se forma con 'to be' + participio pasado y se usa cuando el foco está en la acción o el objeto, no en quién la hace: 'The book was written by Cervantes' (El libro fue escrito por Cervantes). Es muy común en noticias, ciencia y descripciones de procesos.",
        examples: [
          { en: "This phone was made in China.", es: "Este teléfono fue hecho en China." },
          { en: "The Mona Lisa was painted by Leonardo da Vinci.", es: "La Mona Lisa fue pintada por Leonardo da Vinci." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál es la voz pasiva de 'They built the house'?", options: ["The house built them.", "The house was built by them.", "They was built the house.", "The house is building them."], answer: 1 },
        { type: "fill", question: "This car was ___ in Germany. (hecho)", answer: "made", hint: "Participio pasado de 'make'" },
        { type: "match", pairs: [
          { en: "was written", es: "fue escrito" },
          { en: "is built", es: "es construido" },
          { en: "by", es: "por" },
          { en: "product", es: "producto" },
        ]},
      ],
    },
    {
      id: 4,
      title: "Reported Speech",
      subtitle: "Estilo indirecto",
      icon: "🗣️",
      vocab: [
        { en: "he said that...", es: "él dijo que...", emoji: "💬" },
        { en: "she told me...", es: "ella me dijo...", emoji: "💬" },
        { en: "asked if", es: "preguntó si", emoji: "❓" },
        { en: "explained", es: "explicó", emoji: "🗒️" },
        { en: "the day before", es: "el día anterior", emoji: "📆" },
        { en: "reported", es: "reportó / informó", emoji: "📰" },
      ],
      grammar: {
        title: "Estilo indirecto (reported speech)",
        text: "Al reportar lo que alguien dijo, los tiempos verbales 'retroceden' un paso: presente simple → pasado simple; 'will' → 'would'. También cambian las referencias de tiempo: 'today' → 'that day', 'tomorrow' → 'the next day'. Ejemplo: 'I am tired' → 'She said (that) she was tired'.",
        examples: [
          { en: "He said, 'I am hungry.' → He said (that) he was hungry.", es: "Él dijo: 'Tengo hambre.' → Él dijo que tenía hambre." },
          { en: "She said she would call me the next day.", es: "Ella dijo que me llamaría al día siguiente." },
        ],
      },
      exercises: [
        { type: "mcq", question: "'I am tired' en estilo indirecto es:", options: ["He said he is tired.", "He said he was tired.", "He say he was tired.", "He said he tired."], answer: 1 },
        { type: "fill", question: "She said she ___ come tomorrow → the ___ day. (would / next)", answer: "next", hint: "'tomorrow' cambia a 'the next day'" },
        { type: "match", pairs: [
          { en: "asked if", es: "preguntó si" },
          { en: "explained", es: "explicó" },
          { en: "reported", es: "reportó" },
          { en: "the day before", es: "el día anterior" },
        ]},
      ],
    },
    {
      id: 5,
      title: "Phrasal Verbs",
      subtitle: "Verbos con partícula muy comunes",
      icon: "🧷",
      vocab: [
        { en: "give up", es: "rendirse", emoji: "🏳️" },
        { en: "look for", es: "buscar", emoji: "🔍" },
        { en: "find out", es: "descubrir/averiguar", emoji: "💡" },
        { en: "put off", es: "posponer", emoji: "⏸️" },
        { en: "run out of", es: "quedarse sin", emoji: "🚫" },
        { en: "get along with", es: "llevarse bien con", emoji: "🤝" },
      ],
      grammar: {
        title: "Verbos frasales (phrasal verbs)",
        text: "Los phrasal verbs combinan un verbo + una partícula (up, off, out...) y cambian totalmente el significado del verbo original: 'give' (dar) vs 'give up' (rendirse). Son extremadamente comunes en inglés hablado y no siempre se pueden traducir literalmente, así que conviene aprenderlos como bloques completos.",
        examples: [
          { en: "Don't give up! You can do it.", es: "¡No te rindas! Puedes hacerlo." },
          { en: "We ran out of milk.", es: "Nos quedamos sin leche." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Qué significa 'put off'?", options: ["apagar", "posponer", "vestirse", "encender"], answer: 1 },
        { type: "fill", question: "I need to ___ for my keys. (buscar)", answer: "look", hint: "look for = buscar" },
        { type: "match", pairs: [
          { en: "give up", es: "rendirse" },
          { en: "find out", es: "descubrir" },
          { en: "run out of", es: "quedarse sin" },
          { en: "get along with", es: "llevarse bien con" },
        ]},
      ],
    },
    {
      id: 6,
      title: "Opinions & Connectors",
      subtitle: "Dar opiniones y conectores avanzados",
      icon: "💬",
      vocab: [
        { en: "in my opinion", es: "en mi opinión", emoji: "💭" },
        { en: "however", es: "sin embargo", emoji: "↩️" },
        { en: "moreover", es: "además", emoji: "➕" },
        { en: "on the other hand", es: "por otro lado", emoji: "↔️" },
        { en: "as a result", es: "como resultado", emoji: "➡️" },
        { en: "although", es: "aunque", emoji: "🔀" },
      ],
      grammar: {
        title: "Conectores para argumentar",
        text: "Estos conectores dan cohesión a un texto o discurso avanzado. 'However' y 'on the other hand' introducen contraste; 'moreover' añade información; 'as a result' expresa consecuencia; 'although' introduce una idea contraria dentro de la misma oración: 'Although it was raining, we went out.'",
        examples: [
          { en: "In my opinion, the movie was excellent. However, it was too long.", es: "En mi opinión, la película fue excelente. Sin embargo, fue demasiado larga." },
          { en: "Although he was tired, he finished the project.", es: "Aunque estaba cansado, terminó el proyecto." },
        ],
      },
      exercises: [
        { type: "mcq", question: "¿Cuál conector introduce contraste?", options: ["moreover", "as a result", "however", "and"], answer: 2 },
        { type: "fill", question: "___ it was raining, we went out. (Aunque)", answer: "Although", hint: "Introduce una idea contraria en la misma oración" },
        { type: "match", pairs: [
          { en: "moreover", es: "además" },
          { en: "as a result", es: "como resultado" },
          { en: "on the other hand", es: "por otro lado" },
          { en: "in my opinion", es: "en mi opinión" },
        ]},
      ],
    },
  ],
};

/* ============================================================
   Insignias / logros (independientes del nivel)
   ============================================================ */
const MILESTONE_BADGES = [
  { id: "first_step", icon: "🌱", title: "Primeros pasos", desc: "Completa tu primera lección", check: (p) => totalCompleted(p) >= 1 },
  { id: "perfectionist", icon: "⭐", title: "Perfeccionista", desc: "Termina una lección sin errores", check: (p) => totalPerfect(p) >= 1 },
  { id: "streak_3", icon: "🔥", title: "Constancia", desc: "3 días seguidos estudiando", check: (p) => p.streak >= 3 },
  { id: "streak_7", icon: "🔥🔥", title: "Racha de fuego", desc: "7 días seguidos estudiando", check: (p) => p.streak >= 7 },
  { id: "halfway", icon: "🧗", title: "A mitad de camino", desc: "Completa 12 lecciones en total", check: (p) => totalCompleted(p) >= 12 },
  { id: "a1_complete", icon: "🌱", title: "¡Nivel A1 completado!", desc: "Termina todas las lecciones de Beginner", check: (p) => (p.completedByLevel.A1 || []).length >= LESSONS_BY_LEVEL.A1.length },
  { id: "a2_complete", icon: "🌤️", title: "¡Nivel A2 completado!", desc: "Termina todas las lecciones de Elementary", check: (p) => (p.completedByLevel.A2 || []).length >= LESSONS_BY_LEVEL.A2.length },
  { id: "b1_complete", icon: "🚀", title: "¡Nivel B1 completado!", desc: "Termina todas las lecciones de Intermediate", check: (p) => (p.completedByLevel.B1 || []).length >= LESSONS_BY_LEVEL.B1.length },
  { id: "b2_complete", icon: "🏆", title: "¡Nivel B2 completado!", desc: "Termina todas las lecciones de Upper-Intermediate", check: (p) => (p.completedByLevel.B2 || []).length >= LESSONS_BY_LEVEL.B2.length },
  { id: "polyglot", icon: "🌍", title: "¡Políglota en camino!", desc: "Completa las 24 lecciones del curso", check: (p) => totalCompleted(p) >= totalLessonsCount() },
];

function totalLessonsCount() {
  return Object.values(LESSONS_BY_LEVEL).reduce((sum, lessons) => sum + lessons.length, 0);
}
function totalCompleted(p) {
  return Object.values(p.completedByLevel || {}).reduce((sum, arr) => sum + arr.length, 0);
}
function totalPerfect(p) {
  return Object.values(p.perfectByLevel || {}).reduce((sum, arr) => sum + arr.length, 0);
}
