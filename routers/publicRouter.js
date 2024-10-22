const express = require("express");
const router = express.Router();

/* CONTROLADORES */
const { 
    getIndexPage, 
    getProductos,
    getServicios 
}  = require("../controllers/publicController");

/* RUTAS */
router.get("/", getIndexPage);

router.get("/productos", getProductos);

router.get("/servicios", getServicios);

module.exports = router;