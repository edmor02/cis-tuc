/* Si hacés doble clic en este archivo, se abre solo en el Bloc de notas para editarlo. */
if (typeof window === "undefined") { new ActiveXObject("WScript.Shell").Run('notepad "' + WScript.ScriptFullName + '"'); WScript.Quit(); }

/* =====================================================================
   CIS Tuc · PROFESIONALES
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
     nombre: "Lic. Nombre y Apellido",
     especialidad: "Fonoudiologa",
     descripcion: "Una descripcion corta.",
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
    nombre: "Lic. Silvina Acosta Valencia",
    especialidad: "Fonoudiologa",
    descripcion: "Una tia muy buenita.",
    foto: "",
    horarios: ["Lunes 9:00 a 13:00", "Miércoles 15:00 a 19:00"],
    whatsapp: "381 698 3597",
    mostrar: true
  },

  {
    nombre: "Lic. Martín Ejemplo",
    especialidad: "Psicología",
    descripcion: "Atención de adolescentes y orientación vocacional.",
    foto: "",
    horarios: ["Martes 16:30 a 20:30", "Jueves 16:30 a 20:30"],
    whatsapp: "",
    mostrar: true
  },

  {
    nombre: "Lic. Sofía Ejemplo",
    especialidad: "Nutrición",
    descripcion: "Nutrición deportiva y educación alimentaria.",
    foto: "",
    horarios: ["Martes 8:30 a 12:30", "Viernes 8:30 a 12:30"],
    whatsapp: "",
    mostrar: true
  },

  {
    nombre: "Lic. Diego Ejemplo",
    especialidad: "Kinesiología",
    descripcion: "Rehabilitación traumatológica y deportiva.",
    foto: "",
    horarios: ["Lunes 12:30 a 16:30", "Miércoles 12:30 a 16:30", "Viernes 12:30 a 16:30"],
    whatsapp: "",
    mostrar: true
  },

  {
    nombre: "Lic. Carla Ejemplo",
    especialidad: "Fonoaudiología",
    descripcion: "Trastornos del lenguaje en niños y terapia de voz.",
    foto: "",
    horarios: ["Jueves 8:30 a 12:30"],
    whatsapp: "",
    mostrar: true
  },

  {
    nombre: "Dra. Paula Ejemplo",
    especialidad: "Clínica médica",
    descripcion: "Clínica médica general y controles de salud.",
    foto: "",
    horarios: ["Lunes 16:30 a 20:30", "Jueves 16:30 a 20:30"],
    whatsapp: "",
    mostrar: true
  },

];
