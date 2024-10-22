const conexion = async (url, method = "get", body = {}) => {
    try {
        const urlBase = process.env.URL_BASE;
        const opciones = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (method !== "get") opciones.body = JSON.stringify(body);
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