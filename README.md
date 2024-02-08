# Servicio de Ventas (Base de datos)

El servicio de ventas utiliza Sequelize, una biblioteca de Node.js, para interactuar con la base de datos relacional.

## Entidades

### proveedores **(Entidad Datos)**
- RUT **(PK): clave primaria.** 
- nombre: **(nombre del proveedor)**
- direccion_id **(FK): clave foránea que hace referencia a la entidad direcciones.**
- telefono: **(UQ): numero de teléfono del proveedor**
- pagina_web: **(pagina web del proveedor)**

### clientes **(Entidad Datos)**
- RUT **(PK): clave primaria.**
- nombre: **(nombre del cliente)**
- direccion_id **(FK): clave foránea que hace referencia a la entidad direcciones.**

### telefonos_clientes **(Entidad Datos)**
- id **(PK): clave primaria.**
- telefono **(numero de teléfono del cliente)**
- cliente_id **(FK): clave foránea que hace referencia a la entidad clientes.**

### direcciones **(Entidad Datos)**
- id **(PK): clave primaria**
- calle **(nombre de la calle del domicilio)**
- numero_ext **(numero externo del domicilio)**
- delegacion **(delegación o alcaldía del domicilio)**
- ciudad **(ciudad del domicilio)**
- cp **(codigo postal del domicilio)**

### productos **(Entidad Catalogo/Entidad Pivote)**
- id **(PK): clave primaria**
- nombre **(nombre del producto)**
- precio_actual **(precio actual del producto)**
- stock **(cantidad de productos existentes)**
- proveedor_RUT **(FK): clave foránea hace referencia a la entidad proveedores.**
- descripcion **(información sobre el producto)**
- categoria_id **(FK): clave foránea hace referencia a la entidad categorías.**

### categorias **(Entidad Catalogo)**
- id **(PK): clave primaria**
- nombre **(nombre de la categoría)**

### ventas **(Entidad Datos/Entidad Pivote)**
- id **(PK): clave primaria**
- fecha **(fecha en que se realizo la venta)**
- monto_final **(total de la compra)**
- cliente_RUT **(FK): clave foránea hace referencia a la entidad clientes.**
- detalles_ventas_id **(FK): clave foránea hace referencia a la entidad detalles_ventas.**

### detalles_ventas **(Entidad Datos)**
- id **(PK): clave primaria**
- cantidad_vendida **(cantidad de los productos vendidos)**
- producto_id **(FK): clave foránea hace referencia a la entidad productos.**


## DIAGRAMAS
### DIAGRAMA ENTIDAD RELACIÓN
![Diagrama Entidad Relación](/db_diagrams/Diagrama%20E-R.drawio.png)

# MODELO RELACIONAL A LA BASE DE DATOS
![Modelo Relacional de la base de datos](/db_diagrams/ModeloRelacionaBD.drawio.png)

## REGLAS DE NEGOCIO

### proveedores
- Crear un proveedor
- Leer todos los proveedores
- Leer un proveedor por medio de su RUT
- Eliminar un proveedor por medio de su RUT
- Actualizar un proveedor por medio de su RUT

### clientes
- Crear un cliente
- Leer todos los clientes
- Leer un cliente por medio de su RUT
- Eliminar un cliente por medio de su RUT
- Actualizar un cliente por medio de su RUT

### productos
- Crear un producto 
- Leer todos los productos
- Leer un producto por medio de su id
- Leer todos los productos por medio de su categoría
- Eliminar un producto por medio de su id
- Actualizar un producto por medio de su id
- Cada que se realice una venta restarle al stock el numero de productos vendidos
- Aplicarle el descuento a cada uno de los productos

### ventas
- Crear una venta
- Leer todas las ventas
- Leer una venta por medio de su id
- Leer todas las ventas de un cliente
- Actualizar una venta por medio de su id
- Eliminar una venta por medio de su id
### categorias
- Crear una categoría
- Leer todas las categorías
- Leer una categoría por su id
- Actualizar una categoría
- Eliminar una categoría

 