const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
