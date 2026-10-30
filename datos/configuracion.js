/* Si hacés doble clic en este archivo, se abre solo en el Bloc de notas para editarlo. */
if (typeof window === "undefined") { new ActiveXObject("WScript.Shell").Run('notepad "' + WScript.ScriptFullName + '"'); WScript.Quit(); }

/* =====================================================================
   CIS Tuc · CONFIGURACIÓN GENERAL DEL SITIO
   Cambiá solo lo que está entre comillas. No borres las comas del final.
   ===================================================================== */
window.CONFIG = {

  // WhatsApp de RECEPCIÓN (botón verde flotante, contacto y alquiler).
  // Código de área + número, sin el 0 y sin el 15. Ej.: "381 223 5701"
  whatsappRecepcion: "381 223 5701",

  // Usuario de Instagram, sin la @
  instagram: "centrocistuc",

  direccion: "Laprida 480, San Miguel de Tucumán",

  // Video de fondo de la portada. Poné el archivo en la carpeta "img"
  // y escribí su nombre, ej.: "img/video-portada.mp4". Vacío = se ve la foto.
  videoPortada: "",

  // true = se ven los precios del alquiler · false = se ocultan
  mostrarPrecios: true,

  // Mensajes que aparecen ya escritos al abrir WhatsApp
  mensajeRecepcion: "Hola, quisiera realizar una consulta en CIS Tuc.",
  mensajeAlquiler: "Hola, soy profesional de la salud y quisiera consultar por el alquiler de consultorios en CIS Tuc.",
  // {nombre} se reemplaza por el nombre del profesional
  mensajeTurno: "Hola {nombre}, vi tu perfil en la web de CIS Tuc y quisiera solicitar un turno."

};
