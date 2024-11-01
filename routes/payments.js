const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Ruta para obtener todos los pagos
router.get('/', (req, res) => {
    paymentController.getAllPayments(req, res);
});

// Ruta para crear un nuevo pago
router.post('/', (req, res) => {
    paymentController.createPayment(req, res);
});

// Ruta para borrar todos los pagos
router.delete('/', (req, res) => {
    paymentController.deleteAllPayments(req, res);
});

module.exports = router;