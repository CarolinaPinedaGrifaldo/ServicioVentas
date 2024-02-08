import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Proveedores } from "./proveedor.js";
import { Clientes } from "./cliente.js";

// Definir el modelo de la tabla Direcciones
export const Direcciones = sequelize.define('direcciones',{

    // Columna "id" para un identificador unico
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna "calle" para especificar el nombre de la calle del domicilio del cliente
    calle: {
        type: DataTypes.STRING
    },
    // Columna "numero_ext" para especificar el numero exterior del domicilio del cliente
    numero_ext: {
        type: DataTypes.STRING
    },
    // Columna "ciudad" para espicificar la ciudad del domicio del cliente
    ciudad: {
        type: DataTypes.STRING
    },
    // Columna "delegacion" para especificar la delegacion del domicilio del cliente
    delegacion:{
        type: DataTypes.STRING
    },
    // Columna "cp" para especificar el codigo portal de la delegacion del cliente
    cp: {
        type: DataTypes.CHAR
    }
}, {
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});

// Relacion de uno a uno
Direcciones.hasOne(Proveedores,{
    foreignKey: 'direccion_id'
});

