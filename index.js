const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Importar rutas
const indexRoutes = require('./routes/index');
const paymentRoutes = require('./routes/payments');
const SubscriptionTypeRoutes = require('./routes/subscriptionType');
const CurrencyRoutes = require('./routes/currencyRoute');
const SubscriptionRoutes = require('./routes/subscriptionRoute');
const diaryRoutes = require('./routes/diaryRoute');

// Usar rutas
app.use('/', indexRoutes);
app.use('/payments', paymentRoutes);
app.use('/paymentType', SubscriptionTypeRoutes);
app.use('/currency', CurrencyRoutes);
app.use('/subscription', SubscriptionRoutes);
app.use('/diary', diaryRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});