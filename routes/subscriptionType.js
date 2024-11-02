const express = require('express');
const router = express.Router();
const subscriptionTypeController = require('../controllers/subscriptionTypeController');

// Ruta para obtener todos los pagos
router.get('/', (req, res) => {
    subscriptionTypeController.getAllSubscriptionTypes(req, res);
});

// Ruta para crear un nuevo pago
router.post('/', (req, res) => {
    subscriptionTypeController.createPaymentType(req, res);
});

// Ruta para eliminar todos los pagos
router.delete('/', (req, res) => {
    subscriptionTypeController.deletePaymentType(req, res);
});

module.exports = router;