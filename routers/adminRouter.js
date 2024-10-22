const express = require("express");
const router = express.Router();

/* CONTROLADORES */
const { getIndexPage, getProductos }  = require("../controllers/adminController");

/* RUTAS */
router.get("/", getIndexPage);

//outer.get("/productos", getProductos);

module.exports = router;