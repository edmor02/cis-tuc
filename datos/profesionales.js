/* Si hacés doble clic en este archivo, se abre solo en el Bloc de notas para editarlo. */
if (typeof window === "undefined") { new ActiveXObject("WScript.Shell").Run('notepad "' + WScript.ScriptFullName + '"'); WScript.Quit(); }

/* =====================================================================
   C.I.S. · PROFESIONALES
   ---------------------------------------------------------------------
   Cada profesional es un bloque entre llaves { ... } seguido de una coma.
   Para AGREGAR uno: copiá el MODELO de abajo, pegalo antes del corchete
   final  ];  y completá los datos.
   Para QUITAR uno: borrá su bloque completo (desde { hasta },).
   Para OCULTARLO sin borrarlo: poné  mostrar: false

   Reglas para no romper nada:
   · Los textos van siempre entre comillas "así".
   · Cada línea termina en coma, y cada bloque termina en  },
   · Si un texto lleva comillas adentro, usá comillas simples: 'así'.
   · Guardá el archivo y recargá la página (F5) para ver los cambios.

   ------------------------- MODELO PARA COPIAR -------------------------
   {
     nombre: "Lic. Nombre Apellido",
     especialidad: "Psicología",
     descripcion: "Una o dos líneas sobre su forma de trabajo.",
     foto: "fotos/nombre-apellido.jpg",
     horarios: ["Lunes 9:00 a 13:00", "Miércoles 15:00 a 19:00"],
     whatsapp: "381 000 0000",
     mostrar: true
   },
   ---------------------------------------------------------------------
   foto      → nombre del archivo dentro de la carpeta "fotos". Vacío "" = se ven las iniciales.
   horarios  → una línea por día, entre comillas y separadas por coma.
   whatsapp  → código de área + número, SIN 0 y SIN 15. Ej.: "381 223 5701".
               Si lo dejás vacío "", el botón lleva al WhatsApp de recepción.
   especialidad → escribila siempre igual (con tildes) para que los filtros
               agrupen bien a los profesionales.
   ===================================================================== */

window.PROFESIONALES = [

  {
    nombre: "Dra. Gabriela Marchese",
    especialidad: "Homeopatía",
    descripcion: "Médico homeópata. Diplomatura en obesidad. Reseteo intestinal.",
    foto: "fotos/gabriela-marchese.jpg",
    horarios: [],
    whatsapp: "381 567 0271",
    mostrar: true
  },

  {
    nombre: "Lic. Micaela Castro",
    especialidad: "Nutrición",
    descripcion: "Nutricionista · MP1581. Nutrición funcional integrativa. Especialización en nutrición deportiva. Antropometría ISAK 2. Vegetarianos. Asesoría en suplementación.",
    foto: "fotos/micaela-castro.jpg",
    horarios: [],
    whatsapp: "381 240 3660",
    mostrar: true
  },

  {
    nombre: "Lic. Iván Perez",
    especialidad: "Psicología",
    descripcion: "Psicólogo · MP3821. Consulta y asesoría psicológica. Psicoterapia de jóvenes y adultos. Psicodiagnóstico.",
    foto: "fotos/ivan-perez.jpg",
    horarios: [],
    whatsapp: "381 595 8042",
    mostrar: true
  },

  {
    nombre: "Lic. Mirian Oscari",
    especialidad: "Psicología",
    descripcion: "Psicóloga. Atención a jóvenes y adultos.",
    foto: "fotos/mirian-oscari.jpg",
    horarios: [],
    whatsapp: "381 401 6650",
    mostrar: true
  },

  {
    nombre: "Lic. Nicolás Martin Gómez",
    especialidad: "Psicología",
    descripcion: "Psicólogo. Especialista en infanto-juvenil.",
    foto: "fotos/nicolas-martin-gomez.jpg",
    horarios: [],
    whatsapp: "381 519 7145",
    mostrar: true
  },

  {
    nombre: "Lic. Rocío Pacheco",
    especialidad: "Psicología",
    descripcion: "Psicóloga · MP4278. Orientación cognitivo conductual. Modalidad online y presencial.",
    foto: "fotos/rocio-pacheco.jpg",
    horarios: [],
    whatsapp: "381 523 0757",
    mostrar: true
  },

  {
    nombre: "Lic. Belén Serrano",
    especialidad: "Psicología",
    descripcion: "Psicóloga · MP4278. Turnos virtuales y presenciales. Niños, adolescentes y adultos.",
    foto: "fotos/belen-serrano.jpg",
    horarios: [],
    whatsapp: "381 551 0016",
    mostrar: true
  },

  {
    nombre: "Lic. Lucyla Corbalán",
    especialidad: "Psicología",
    descripcion: "Psicóloga · Sexóloga. Sex coach, mediadora. Atención clínica y sexología. Psicoterapia individual. Terapia de pareja. Terapia sexológica.",
    foto: "fotos/lucyla-corbalan.jpg",
    horarios: [],
    whatsapp: "381 589 4702",
    mostrar: true
  },

  {
    nombre: "Lic. Maria Florencia Aragón",
    especialidad: "Psicología",
    descripcion: "Psicóloga. Orientación cognitivo conductual. Adolescentes, jóvenes y adultos.",
    foto: "fotos/maria-florencia-aragon.jpg",
    horarios: [],
    whatsapp: "381 599 8423",
    mostrar: true
  },

  {
    nombre: "Lic. Ale Lucila del Carmen",
    especialidad: "Psicología",
    descripcion: "Psicóloga · MP2198. Especialista en psicología clínica en niños, adolescentes y adultos. Especialista en salud social y comunitaria.",
    foto: "fotos/ale-lucila-del-carmen.jpg",
    horarios: [],
    whatsapp: "381 528 5145",
    mostrar: true
  },

  {
    nombre: "Lic. Silvina Acosta Valencia",
    especialidad: "Fonoaudiología",
    descripcion: "Fonoaudióloga · MP2386. Diplomada en trastornos del neurodesarrollo. Diplomada en T.E.A. Evaluación y tratamiento.",
    foto: "fotos/silvina-acosta-valencia.jpg",
    horarios: [],
    whatsapp: "381 698 3597",
    mostrar: true
  },

  {
    nombre: "Lic. Maria Jose Chasampi",
    especialidad: "Fonoaudiología",
    descripcion: "Fonoaudióloga. Diplomatura en autismo. Lenguaje. Estimulación del lenguaje en edades tempranas.",
    foto: "fotos/maria-jose-chasampi.jpg",
    horarios: [],
    whatsapp: "381 512 8620",
    mostrar: true
  },

  {
    nombre: "Giuliana Rossi",
    especialidad: "Fonoaudiología",
    descripcion: "Fonoaudióloga.",
    foto: "fotos/giuliana-rossi.jpg",
    horarios: [],
    whatsapp: "381 575 2035",
    mostrar: true
  },

  {
    nombre: "Lic. Julieta Moreyra",
    especialidad: "Nutrición",
    descripcion: "Nutricionista.",
    foto: "fotos/julieta-moreyra.jpg",
    horarios: [],
    whatsapp: "3865 63 9476",
    mostrar: true
  },

  {
    nombre: "Lic. Cintia Piquard",
    especialidad: "Fonoaudiología",
    descripcion: "Fonoaudióloga. Especialista en rehabilitación vestibular y en trastorno del lenguaje en niños.",
    foto: "fotos/cintia-piquard.jpg",
    horarios: [],
    whatsapp: "381 418 1932",
    mostrar: true
  },

];
