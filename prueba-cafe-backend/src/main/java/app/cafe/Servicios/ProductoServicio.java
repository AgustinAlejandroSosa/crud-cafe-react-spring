package app.cafe.Servicios;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.cafe.Entidades.Producto;
import app.cafe.Repositorios.ProductoRepositorio;

@Service
public class ProductoServicio {

  @Autowired
  private ProductoRepositorio repository;

  public List<Producto> obtenerProductos() {
    return repository.findAll();
  }

  public Producto obtenerProductoPorId(Long id) {
    try {
      Optional<Producto> respuesta = repository.findById(id);
      if (respuesta.isPresent()) {
        return respuesta.get();
      } else {
        throw new Exception("No se encontró el producto solicitado.");
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return null;
    }
  }

  public Producto crearProducto(Producto producto) {
    try {
      return repository.save(producto);
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return null;
    }
  }

  public void borrarProducto(Long id) {
    try {
      Optional<Producto> respuesta = repository.findById(id);
      if (respuesta.isPresent()) {
        repository.delete(respuesta.get());
      } else {
        throw new Exception("No se encontró el producto solicitado.");
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }

  public Producto modificarProducto(Long id, Producto nuevoProducto) {
    try {
      Optional<Producto> respuesta = repository.findById(id);
      if (respuesta.isPresent()) {
        Producto viejoProducto = respuesta.get();
        nuevoProducto.setId(viejoProducto.getId());
        return repository.save(nuevoProducto);
      } else {
        throw new Exception("No se encontró el producto solicitado.");
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return null;
    }
  }
}
