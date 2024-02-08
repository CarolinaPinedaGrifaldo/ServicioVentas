import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

// Definir el modelo de la tabla Categorias
export const Categorias = sequelize.define('categorias',{

    // Columna "id" para un identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    // Columna "nombre" para el nombre de la categoria
    nombre: {
        type: DataTypes.STRING
    }
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});
