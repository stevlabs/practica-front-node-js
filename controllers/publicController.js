const { conexion } = require("../utils/conexion");

const getIndexPage = (req, res) => {
    res.render("index");
};

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

module.exports = {
    getIndexPage,
    getProductos
}