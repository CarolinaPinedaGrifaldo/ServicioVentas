import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Categorias } from "./categoria.js";

// Definir el modelo de la tabla Productos
export const Productos = sequelize.define('productos', {

    // Columna "id" para un identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna "nombre" para el nombre del producto
    nombre: {
        type: DataTypes.STRING
    },
    // Columna "precio_actual" para el precio de un producto sin descuento
    precio_actual: {
        type: DataTypes.DOUBLE
    },
    // Columna "stock" para saber la cantidad de productos existentes
    stock: {
        type: DataTypes.INTEGER
    },
    // Columna "descripcion" para especificar que es el producto 
    descripcion: {
        type: DataTypes.STRING
    },
    // Columna "descuento" par saber el descuento que se le va a aplicar al producto
    descuento: {
        type: DataTypes.INTEGER
    }
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});

// Relacion de uno a muchos
Categorias.hasMany(Productos,{
    foreignKey: 'categoria_id'
});

