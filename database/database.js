import Sequelize  from 'sequelize';

// Conexion a la base de datos
export const sequelize = new Sequelize(
    'ServicioVentas',  // Nombre de la bse de datos
    'postgres',  // Nombre del Usuario
    'postgres',  // Contraseña
    {
        host: 'localhost',  // Anfitrion de la base de datos
        dialect: 'postgres'  // Dialecto de la base de datos
    }
);