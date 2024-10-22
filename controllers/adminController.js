const { conexion } = require("../utils/conexion");

/**
 * Renderiza la página principal de admin.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getIndexPage = (req, res) => {
    res.render("admin/indexAdmin");
};

/**
 * Obtiene la lista de productos y la renderiza en la vista de admin/productos.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getProductos = async (req, res) => {
    try {
        const productos = await conexion("productos");
        console.log(productos);
        res.render("admin/productos", {
            productos
        });
    } catch (error) {
        console.error(error);
        throw error
    }
};

/**
 * Renderiza la página para crear un nuevo producto.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getCrearProductoPage = (req, res) => {
    res.render("admin/crearProducto");
};

/**
 * Crea un nuevo producto usando los datos del formulario.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const crearProducto = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        await conexion("producto", "post", { nombre, descripcion });
        res.redirect("/admin/productos");
    } catch (error) {
        console.error(error);
        throw error
    }
};

/**
 * Obtiene los datos de un producto usando su id.
 * Renderiza la página de actualizar prodcuto con el producto encontrado.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getActualizarProductoPage = async (req, res) => {
    const productoId = req.params.id;
    try {
        const {producto} = await conexion(`producto/${productoId}`); 
        console.log(producto);
        res.render("admin/actualizarProducto", {
            producto
        }); 
    } catch (error) {
        console.error(error);
        throw error
    }
};

/**
 * Actualiza un producto con los nuevos datos.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const actualizarProducto = async (req, res) => {
    const productoId = req.params.id;
    const { nombre, descripcion } = req.body;
    try {
        await conexion(`producto/${productoId}`, "put", { nombre, descripcion });
        res.redirect("/admin/productos"); 
    } catch (error) {
        console.error(error);
        throw error
    }
};

/**
 * Elimina un producto por su id.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const eliminarProducto = async (req, res) => {
    const productoId = req.params.id;
    try {
        await conexion(`producto/${productoId}`, "delete");
        res.redirect("/admin/productos"); 
    } catch (error) {
        console.error(error);
        throw error
    }
};

module.exports = {
    getIndexPage,
    getProductos,
    getCrearProductoPage,
    crearProducto,
    getActualizarProductoPage,
    actualizarProducto,
    eliminarProducto
}