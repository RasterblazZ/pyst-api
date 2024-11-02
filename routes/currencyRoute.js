const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

// Ruta para obtener todos los pagos
router.get('/', (req, res) => {
    currencyController.getAll(req, res);
});

// Ruta para crear un nuevo pago
router.post('/', (req, res) => {
    currencyController.create(req, res);
});

// Ruta para borrar todos los pagos
router.delete('/', (req, res) => {
    currencyController.deleteAll(req, res);
});

module.exports = router;