// controllers/paymentController.js
const PaymentType = require('../models/Subscription_type');

// Controlador para obtener todos los pagos
const getAllSubscriptionTypes = async (req, res) => {
  try {
    const types = await PaymentType.findAll();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos' });
  }
};

// Controlador para crear un nuevo pago
const createPaymentType = async (req, res) => {
  try {
    const { Nombre } = req.body;
    const newPaymenType = await PaymentType.create({ Nombre });
    res.status(201).json(newPaymenType);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

// Controlador para crear un nuevo pago
const deletePaymentType = async (req, res) => {
  try {
    await PaymentType.destroy({ where: {}, truncate: true });
    res.status(201).json({ message: 'All payment types deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};


module.exports = {
  getAllSubscriptionTypes,
  createPaymentType,
  deletePaymentType
};