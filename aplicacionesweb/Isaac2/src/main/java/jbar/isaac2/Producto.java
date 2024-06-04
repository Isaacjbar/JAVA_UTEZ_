package jbar.isaac2;

public class Producto {
    private String nombre;
    private int cantidad;
    private String proveedor;
    private double precio;

    // Constructor
    public Producto(String nombre, int cantidad, String proveedor, double precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.proveedor = proveedor;
        this.precio = precio;
    }

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
}

