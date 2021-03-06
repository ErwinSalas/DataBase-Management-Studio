/**
 * common.js
 * Código común.
 */


var closeSideBar=function () {
  var $window = $(window);
  console.log($window.width());
  if($window.width()<=1000){
    var $body = $('body');
    var $overlay = $('.overlay');
    $body.toggleClass('overlay-open');
    if ($body.hasClass('overlay-open')) { $overlay.fadeIn(); } else { $overlay.fadeOut(); }
  }

}
// ===== CONSTANTES ========================================

/**
 * Meses del calendario gregoriano en español.
 * @type {string[]} Meses.
 */
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
/**
 * URL raíz de la base de datos.
 * @type {string}
 */
const FIREBASE_PATH = "https://sideappprueba.firebaseio.com";
/**
 * Clave de encriptación.
 * @type {string}
 */
const ENCRYPTION_KEY = "AB82A2D2-B032-41A7-A87F-0AFBD55E4339";
/**
 * Última actualización local de mensajes.
 * @type {string} Identificador de elemento de almacenamiento local.
 */
const LS_LOCAL_LAST_UPDATE = "messages.localLastUpdate";
/**
 * Mensajes almacenados localmente.
 * @type {string} Identificador de elemento de almacenamiento local.
 */
const LS_LOCAL_MESSAGES = "messages.all";

/**
 * Recordar sesión.
 * @type {string} Determina si se debe recordar la sesión.
 */
const LS_REMEMBER_SESSION = "rememberSession";

// =========================================================

/**
 * Dirección raíz del API.
 * @type {string}
 */
const API_ROOT = "http://172.24.98.53:8090";

/**
 * Formatea una cadena de texto en base a los parámetros proporcionados.
 * Tomado de: http://stackoverflow.com/a/4256130/3288599
 * @returns {String} Cadena de texto con formato aplicado.
 */
String.prototype.format = function() {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp('\\{' + i + '\\}', 'gi');
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

/**
 * Aplica formato a una fecha.
 * @param dt Fecha.
 * @returns {String} Fecha con formato aplicado.
 */
function getTotalUsage(groups) {
  var size=0;
  for (var i = 0; i < groups.length; i++) {
    size+=parseInt(groups[i].tamano);
  }
  return size
}

/**
 * Convierte una fecha a formato para enviar solicitud al servidor.
 * @param datetime Objeto de fecha y hora.
 * @returns {String} Fecha formateada.
 */
function dateToUrlParameter(datetime) {
    return "{0}-{1}-{2}-{3}-{4}".format(
        datetime.getFullYear(),
        datetime.getMonth() + 1,
        datetime.getDate(),
        datetime.getHours(),
        datetime.getMinutes());
}

function datetimeToUrlParameter(date, time) {
    console.log(time);
    return "{0}-{1}".format(date, time.replace(':', '-'));
}

/**
 * Genera una fecha en formato ISO8601 a partir de una fecha y una hora.
 * @param date Fecha.
 * @param time Hora.
 * @returns {String} Fecha y hora fusionada en formato ISO8601.
 */
function datetimeToISO8601(date, time) {
  return "{0}T{1}".format(date, time);
}
function signOut(){
  localStorage.removeItem("session.user");
  localStorage.removeItem("session.token");
  window.location.href = ('../index.html');

}
