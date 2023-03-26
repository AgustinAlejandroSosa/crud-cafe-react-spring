package app.cafe.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.cafe.Entidades.Producto;
import app.cafe.Servicios.ProductoServicio;

@RestController
@RequestMapping("/api")
public class ProductoControlador {

  @Autowired
  private ProductoServicio servicio;
  
  @GetMapping("/productos")
  public ResponseEntity<List<Producto>> obtenerProductos(){
    List<Producto> productos = servicio.obtenerProductos();
    return new ResponseEntity<List<Producto>>(productos, HttpStatus.OK);
  }

  @GetMapping("/productos/{id}")
  public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable Long id){
    Producto producto = servicio.obtenerProductoPorId(id);
    return new ResponseEntity<Producto>(producto, HttpStatus.OK);
  }

  @PostMapping("/productos")
  public ResponseEntity<Producto> crearProducto(@RequestBody Producto nuevoProducto){
    Producto producto = servicio.crearProducto(nuevoProducto);
    return new ResponseEntity<Producto>(producto, HttpStatus.CREATED);
  }

  @PutMapping("/productos/{id}")
  public ResponseEntity<Producto> modificarProducto(@PathVariable Long id,@RequestBody Producto producto){
    Producto productoModificado = servicio.modificarProducto(id, producto);
    return new ResponseEntity<Producto>(productoModificado,HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @DeleteMapping("/productos/{id}")
  public ResponseEntity<HttpStatus> eliminarProducto(@PathVariable Long id){
    servicio.borrarProducto(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
