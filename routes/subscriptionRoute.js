const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Ruta para obtener todos los pagos
router.get('/', (req, res) => {
    subscriptionController.getAll(req, res);
});

// Ruta para crear un nuevo pago
router.post('/', (req, res) => {
    subscriptionController.create(req, res);
});

// Ruta para borrar todos los pagos
router.delete('/', (req, res) => {
    subscriptionController.deleteAll(req, res);
});

module.exports = router;