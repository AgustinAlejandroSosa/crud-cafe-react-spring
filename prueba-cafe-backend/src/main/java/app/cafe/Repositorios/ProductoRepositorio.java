package app.cafe.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.cafe.Entidades.Producto;


@Repository
public interface ProductoRepositorio extends JpaRepository<Producto,Long>{
  
}
