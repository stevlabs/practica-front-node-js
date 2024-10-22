const express = require("express");
const router = express.Router();

/* CONTROLADORES */
const { 
    getIndexPage,
    getProductos,
    getCrearProductoPage,
    crearProducto,
    getActualizarProductoPage,
    actualizarProducto,
    eliminarProducto
}  = require("../controllers/adminController");

/* RUTAS */
router.get("/", getIndexPage);
// obtener todos los productos
router.get("/productos", getProductos);

// crear un producto
router.get("/crearProducto", getCrearProductoPage);
router.post("/crearProducto", crearProducto);

// actualizar un producto
router.get("/actualizarProducto/:id", getActualizarProductoPage);
router.post("/actualizarProducto/:id", actualizarProducto);

// eliminar un producto
router.post("/eliminarProducto/:id", eliminarProducto);

module.exports = router;