const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Ruta para obtener todos los pagos
router.get('/', (req, res) => {
    paymentController.getAllPayments(req, res);
    res.send('Obteniendo todos los pagos');
});

// Ruta para crear un nuevo pago
router.post('/', (req, res) => {
    paymentController.createPayment(req, res);
    res.send('Creando un nuevo pago');
});

module.exports = router;