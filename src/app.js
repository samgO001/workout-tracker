const express = require("express"); // Import express
const { port } = require("./config/env"); // Importar la configuración
const app = express(); // Create an instance of express

// Inicializacion del servidor y primera ruta
app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

// Iniciar el servidor usando el puerto de la configuración
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});