'use strict'
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Asegúrate de que la ruta sea correcta

class Subscription extends Model {}

Subscription.init({
    id_subscription: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Nombre: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    MonthDay: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    Monto: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },
    Moneda: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    Estatus: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    Creado: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    Cancelado: {
        allowNull: true,
        type: Sequelize.DATE,
    },
    
}, {
    sequelize,
    modelName: 'Subscription',
    tableName: 'subscriptions',
    timestamps: false
});

module.exports = Subscription;