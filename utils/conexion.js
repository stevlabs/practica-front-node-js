/**
 * Función asincrónica para realizar peticiones a API Mongo.
 * 
 * @param {string} url - Ruta para la petición.
 * @param {string} [method="get"] - Método HTTP a utilizar (por defecto, "get").
 * @param {object} [body={}] - Datos a enviar en caso de que haya (PUT o POST).
 * @returns {Promise<object>} - Respuesta de la API en formato JSON.
 * @throws {Error} - Lanza un error si la petición falla.
 */
const conexion = async (url, method = "get", body = {}) => {
    try {
        const urlBase = process.env.URL_BASE;
        const opciones = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (method === "put" || method === "post") opciones.body = JSON.stringify(body);
        console.log("entrando en conexion")
        const resp = await fetch(`${urlBase}/${url}`, opciones);
        //console.log(resp)
        return await resp.json();
    } catch (error) {
        console.log(error)
        throw error;
    }
};

module.exports = { conexion };