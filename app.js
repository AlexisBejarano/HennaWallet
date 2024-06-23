import express from 'express'
import cors from "cors"

//importamos la conexion a la DB
import connection from "./src/database.js"

//importamos nuestro enrutador 
import routes from "./src/Routes.js"

const app = express()

app.use( cors())
app.use(express.json())
app.use('/models', routes)


try {
  await connection.authenticate()
  console.log('conexion exitosa a la DB')
} catch (error) {
  console.log("no se pudo conectar.")
}

/*
app.get('/', (req, res) => {
  res.send("HIII")
})
*/

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto: ${PORT}...`);
});






/*
const express = require('express');
const cors = require('cors');
const app = express();

const mainRouter = require('./src/Routes');

app.use(cors());

// Usar el router principal para /api
app.use('/api', mainRouter);

// Puerto del servidor Express
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto: ${PORT}...`);
});
*/