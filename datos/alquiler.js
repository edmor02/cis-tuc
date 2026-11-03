/* Si hacés doble clic en este archivo, se abre solo en el Bloc de notas para editarlo. */
if (typeof window === "undefined") { new ActiveXObject("WScript.Shell").Run('notepad "' + WScript.ScriptFullName + '"'); WScript.Quit(); }

/* =====================================================================
   C.I.S. · ALQUILER DE CONSULTORIOS
   Cambiá solo lo que está entre comillas. No borres comas ni corchetes.
   Los precios NO se muestran en la web (se consultan por WhatsApp), por eso no se cargan acá.
   ===================================================================== */
window.ALQUILER = {

  modalidades: [
    {
      etiqueta: "Más elegido",
      nombre: "Módulo de 4 hs semanales",
      detalles: ["Lunes a viernes", "Un día fijo por semana", "3 horarios: 8:30–12:30 · 12:30–16:30 · 16:30–20:30"],
      nota: "",
      destacada: true
    },
    {
      etiqueta: "Flexible",
      nombre: "Alquiler por hora",
      detalles: ["Ideal para empezar o sumar horas", "Sujeto a disponibilidad"],
      nota: "",
      destacada: false
    },
    {
      etiqueta: "Exclusivo",
      nombre: "Uso exclusivo L a V",
      detalles: ["El consultorio es solo tuyo, de lunes a viernes"],
      nota: "Consultá por el descuento de esta modalidad.",
      destacada: false
    },
  ],

  // Horarios de los módulos (las filas de la grilla)
  franjas: ["8:30 a 12:30", "12:30 a 16:30", "16:30 a 20:30"],

  // Lista "Todo lo que necesitás"
  incluye: [
    "Consultorio equipado y decorado",
    "Recepcionista",
    "Escritorio y sillas",
    "Espacio para guardar pertenencias",
    "Vanitory",
    "Camilla según especialidad",
    "Aire frío/calor",
    "Wi-Fi",
    "Difusión de tu perfil en nuestras redes y en esta web",
  ],

};
