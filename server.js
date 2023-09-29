const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Configuración de CORS
app.use((req, res, next) => {
<<<<<<< HEAD
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
=======
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
>>>>>>> 05b3c296c9aa447acce242111c6f4f5483ca488d
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/uf', async (req, res) => {
  try {
    const response = await axios.get('https://mindicador.cl/api');
    const ufValue = response.data.uf.valor;
    res.send('El valor actual de la UF es $' + ufValue + ' CLP.');
  } catch (error) {
    res.status(500).send('Error al obtener el valor de la UF');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
