// controllers/paymentController.js
const Payment = require('../models/Payment');

// Controlador para obtener todos los pagos
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos' });
  }
};

// Controlador para crear un nuevo pago
const createPayment = async (req, res) => {
  try {
    const { nombre, monto, monthDay } = req.body;
    const newPayment = await Payment.create({ nombre, monto, monthDay });
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

// Controlador para borrar todos los pagos
const deleteAllPayments = async (req, res) => {
  try {
    await Payment.destroy({ where: {} });
    res.json({ message: 'Todos los pagos han sido eliminados' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar los pagos' });
  }
};

module.exports = {
  getAllPayments,
  createPayment,
  deleteAllPayments,
};