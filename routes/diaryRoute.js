const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diaryController');

// Ruta para obtener todos los pagos
router.get('/', (req, res) => {
    diaryController.getAll(req, res);
});

// Ruta para crear un nuevo pago
router.post('/', (req, res) => {
    diaryController.create(req, res);
});

// Ruta para borrar todos los pagos
router.delete('/', (req, res) => {
    diaryController.deleteAll(req, res);
});

module.exports = router;