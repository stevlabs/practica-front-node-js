const express = require("express");
const router = express.Router();

/* CONTROLADORES */
const { getIndexPage, getProductos }  = require("../controllers/publicController");

/* RUTAS */
router.get("/", getIndexPage);

router.get("/productos", getProductos);

module.exports = router;