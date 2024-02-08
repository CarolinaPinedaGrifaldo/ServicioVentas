import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

// Definir el modelo de la tabla Telefonos Clientes
export const TelefonosClientes = sequelize.define('telefonos_clientes', {
    
    // Columna "id" para un identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna telefono para el numero de celular de los clientes
    telefono: {
        type: DataTypes.STRING
    }
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
}); 


