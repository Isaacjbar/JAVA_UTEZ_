package jbar.isaac2;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/ProductoServlet")
public class ProductoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Obtener los parámetros del formulario
        
        String nombre = request.getParameter("nombre");
        int cantidad = Integer.parseInt(request.getParameter("cantidad"));
        String proveedor = request.getParameter("proveedor");
        double precio = Double.parseDouble(request.getParameter("precio"));

        // Crear una instancia de Producto
        Producto producto = new Producto(nombre, cantidad, proveedor, precio);

        // Aquí puedes procesar el objeto Producto como desees, por ejemplo, guardarlo en una base de datos

        // Para esta demostración, simplemente mostramos los datos en la respuesta
        response.setContentType("text/html;charset=UTF-8");
        response.getWriter().append("<html><body>")
                .append("<h1>Datos del Producto</h1>")
                .append("<p>Nombre: " + producto.getNombre() + "</p>")
                .append("<p>Cantidad: " + producto.getCantidad() + "</p>")
                .append("<p>Proveedor: " + producto.getProveedor() + "</p>")
                .append("<p>Precio: " + producto.getPrecio() + "</p>")
                .append("</body></html>");
    }
}
