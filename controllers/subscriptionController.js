// controllers/paymentController.js
const Subscription = require('../models/Subscription');

// Controlador para obtener todos los pagos
const getAll = async (req, res) => {
  try {
    const rows = await Subscription.findAll();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos' });
  }
};

// Controlador para crear un nuevo pago
const create = async (req, res) => {
  try {
    const {Tipo,Nombre,MonthDay,Monto,Moneda,Estatus,Creado,Cancelado} = req.body;
    const newRow = await Subscription.create({Tipo,Nombre,MonthDay,Monto,Moneda,Estatus,Creado,Cancelado});
    res.status(201).json(newRow);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

// Controlador para borrar todos los pagos
const deleteAll = async (req, res) => {
  try {
    await Subscription.destroy({ where: {} });
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