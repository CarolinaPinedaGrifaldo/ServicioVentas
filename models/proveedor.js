import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Productos } from "./producto.js";

// Definir el modelo de la tabla Proveedores
export const Proveedores = sequelize.define('proveedores', {

    // Columna "id" para un identificador unico
    RFC:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    // Columna "nombre" para el nombre del proveedor
    nombre: {
        type: DataTypes.STRING
    },
    // Columna "telefono" para el numero de celular de un proveedor
    telefono: {
        type: DataTypes.STRING,
        unique: true
    },
    // Columna "pagina_web" para la url de la pagina del proveedor
    pagina_web: {
        type: DataTypes.STRING,
    }
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});

// Relacion de muchos a muchos
Productos.belongsToMany(Proveedores,{
    through:'producto_proveedor',
    as: 'proveedores',
    foreignKey: 'producto_id'
});

Proveedores.belongsToMany(Productos,{
    through:'producto_proveedor',
    as: 'productos',
    foreignKey: 'proveedor_RFC'
});

