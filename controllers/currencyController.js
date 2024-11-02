// controllers/paymentController.js
const Currency = require('../models/Currency');

// Controlador para obtener todos los pagos
const getAll = async (req, res) => {
  try {
    const row = await Currency.findAll();
    res.json(row);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos' });
  }
};

// Controlador para crear un nuevo pago
const create = async (req, res) => {
  try {
    const { name, currency } = req.body;
    const newRow = await Currency.create({ name, currency });
    res.status(201).json(newRow);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

// Controlador para borrar todos los pagos
const deleteAll = async (req, res) => {
  try {
    await Currency.destroy({ where: {} });
    res.json({ message: 'Todos los pagos han sido eliminados' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar los pagos' });
  }
};

module.exports = {
    getAll,
    create,
    deleteAll,
};