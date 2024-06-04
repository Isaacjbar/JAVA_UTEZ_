<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Producto</title>
</head>
<body>
<h2>Formulario de Producto</h2>
<form action="ProductoServlet" method="POST">
    <div>
        <label for="nombre">Nombre del Producto:</label>
        <input type="text" id="nombre" name="nombre" required>
    </div>
    <div>
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" required>
    </div>
    <div>
        <label for="proveedor">Proveedor:</label>
        <input type="text" id="proveedor" name="proveedor" required>
    </div>
    <div>
        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" step="0.01" required>
    </div>
    <div>
        <button type="submit">Enviar</button>
    </div>
</form>
</body>
</html>
