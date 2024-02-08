import 'dotenv/config';
import express from "express";
import cors from "cors"
import { sequelize } from './database/database.js';

// Importamos los modelos a utilizar
import './models/cliente.js';
import './models/proveedor.js';
import './models/direccion.js';
import './models/telefono_cliente.js';
import './models/producto.js';
import './models/categoria.js';
import './models/venta.js';
import './models/detalle_venta.js';

// Importamos las rutas a utilizar
import productoRoutes from './routes/producto.js';

// Creacion de una inatancia de la aplicacion express
const app = express();

// Middlewares para analizar las solicitudes entrantes en formato JSON y URL
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Definir el puerto
const port = process.env.PORT;

// Configuracion de opciones cors
const corsOption = {
    origin: 'http://localhost:8080'
}

// Utilizamos el cors
app.use(cors(corsOption));

// Utilizamos las rutas
app.use(productoRoutes);

async function main() {
    try {
        // Sincronizacion a la base de datos
        await sequelize.sync({force: false})

        // Comprobar la conexion a la base de datos 
        await sequelize.authenticate();
        console.log('La conexion a la base de datos se a establecido correctamente');

        // Ocupar el puerto 
        app.listen(port, () => {
            console.log('El servicio esta corriendo en el puerto', port)
        });

        
        
    } catch (error) {
        console.error('No se puede conectar a la base de datos:', error)
    }
}

main();
