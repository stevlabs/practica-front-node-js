/* IMPORTAR MODULOS */
const express = require("express");
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const publicRouter = require("./routers/publicRouter");
const adminRouter = require("./routers/adminRouter");

/* CORS */
app.use(cors());

/* BODY PARSER */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* MOTOR DE PLANTILLAS */
app.set("view engine", "ejs");
app.set(__dirname + "/views");

/* CARPETA PUBLIC */
app.use(express.static(__dirname + "/public"));

/* ROUTERS */
app.use("/", publicRouter);
app.use("/admin", adminRouter);

/* INICIAR SERVIDOR */
app.listen(port, () => {
    console.log(`APP a la escucha desde http:localhost:${port}`);
});