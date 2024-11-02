'use strict'
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Asegúrate de que la ruta sea correcta

class Subscription extends Model {}

Subscription.init({
    id_subscription: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    MonthDay: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    Monto: {
        allowNull: false,
        type: DataTypes.FLOAT,
    },
    Moneda: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Estatus: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Creado: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    Cancelado: {
        allowNull: true,
        type: DataTypes.DATE,
    },
    
}, {
    sequelize,
    modelName: 'Subscription',
    tableName: 'subscriptions',
    timestamps: false
});

module.exports = Subscription;