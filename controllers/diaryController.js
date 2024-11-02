// controllers/paymentController.js
const Diary = require('../models/Diary');

// Controlador para obtener todos los pagos
const getAll = async (req, res) => {
  try {
    const rows = await Diary.findAll();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos' });
  }
};

// Controlador para crear un nuevo pago
const create = async (req, res) => {
  try {
    const { account_type,diary_date,amount } = req.body;
    const newRow = await Diary.create({ account_type,diary_date,amount });
    res.status(201).json(newRow);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

// Controlador para borrar todos los pagos
const deleteAll = async (req, res) => {
  try {
    await Diary.destroy({ where: {} });
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