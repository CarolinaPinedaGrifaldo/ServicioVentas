import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Clientes } from "./cliente.js";
import { DetallesVentas } from "./detalle_venta.js";

// Definir el modelo de la tabla Ventas 
export const Ventas = sequelize.define('ventas', {

    // Columna "id" para identificador unico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Columna "fecha" para saber el dia en que se realizo la venta
    fecha: {
        type: DataTypes.DATE
    },
    // Columna "monto_final" para saber el precio total de los productos
    monto_final: {
        type: DataTypes.DOUBLE
    }
},{
    // Deshabilita las marcas de tiempo predeterminadas 'createdAt' y 'updatedAt'
    timestamps: false
});

// Relacion de uno a muchos
Clientes.hasMany(Ventas,{
    foreignKey: 'cliente_RFC'
});

// Relacio de uno a uno 
Ventas.belongsTo(DetallesVentas,{
    foreignKey: 'detalle_venta_id'
});
