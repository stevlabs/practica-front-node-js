const { conexion } = require("../utils/conexion");

/**
 * Renderiza la página principal.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getIndexPage = (req, res) => {
    res.render("index");
};

/**
 * Obtiene la lista de productos y lo renderiza en la vista de indexProductos.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getProductos = async (req, res) => {
    try {
        const productos = await conexion("productos");
        console.log(productos);
        res.render("indexProductos", {
            productos
        });
    } catch (error) {
        throw error
    }
};

/**
 * Obtiene la lista de servicios y la renderiza en la vista indexServicios.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getServicios = async (req, res) => {
    try {
        const servicios = await conexion("servicios");
        console.log(servicios);
        res.render("indexServicios", {
            servicios
        });
    } catch (error) {
        throw error
    }
};

module.exports = {
    getIndexPage,
    getProductos,
    getServicios
}