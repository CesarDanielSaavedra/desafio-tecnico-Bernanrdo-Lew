
CREATE SCHEMA `desafio_tecnico_lew`;

USE `desafio_tecnico_lew`;

-- creación de la tabla
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2)
);

-- poblado de la tabla
INSERT INTO productos (nombre, precio) VALUES
('Producto1', 5.99),
('Producto2', 15.49),
('Producto3', 25.00),
('Producto4', 8.75),
('Producto5', 12.30),
('Producto6', 9.99),
('Producto7', 11.00),
('Producto8', 18.75),
('Producto9', 3.50),
('Producto10', 21.20);

-- consulta requerida en el ejercicio
SELECT 
	*
FROM productos p
WHERE p.precio > 10;