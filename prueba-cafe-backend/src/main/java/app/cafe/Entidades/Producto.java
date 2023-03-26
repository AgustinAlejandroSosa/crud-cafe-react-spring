package app.cafe.Entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class Producto {

  @javax.persistence.Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  
  private String titulo;

  private String categoría;

  private double precio;

  private double costo;
}
