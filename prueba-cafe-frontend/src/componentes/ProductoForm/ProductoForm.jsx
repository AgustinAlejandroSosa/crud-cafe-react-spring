import React, { useState } from "react";
import axios from "axios";
import "./ProductoForm.css";

function ProductoForm(props) {

  const [producto, setProducto] = useState({
    titulo: '',
    categoría: '',
    precio: 0,
    costo: 0
  });

  function completarProducto(e) {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value })
    console.log(producto);
  }

  const agregarProducto = async (producto) => {

    console.log(producto);

    await axios.post("http://localhost:8080/api/productos", producto)
      .then(res => {
        setProducto({titulo:'',categoría:'',precio:'',costo:''})
        props.getProductos();
      })
      .catch(error => console.log("ERROR---", error));
  }

  return (
    <form className="form-control text-center">
      <h1>Cargar producto</h1>

      <label className="form-label" htmlFor="titulo">Titulo</label>
      <input name="titulo" value={producto.titulo} id="titulo" className="form-control" onChange={completarProducto} />

      <label htmlFor="categoría" className="form-label">categoría</label>
      <input name="categoría" value={producto.categoría} id="categoría" className="form-control" onChange={completarProducto} />

      <label className="form-label" htmlFor="precio">Precio</label>
      <input name="precio" value={producto.precio} id="precio" className="form-control" onChange={completarProducto} />

      <label className="form-label" htmlFor="costo">Costo</label>
      <input name="costo" value={producto.costo} id="costo" className="form-control" onChange={completarProducto} />

      <div className="mt-2 text-center boton">
        <button type="button" onClick={() => agregarProducto(producto)}  className='border-4 border-light bg-gradient rounded-circle shadow btn btn-info'>
          <h1>
            <i className="bi bi-plus-lg">
            </i>
          </h1>
        </button>
      </div>
    </form>
  );
}

export default ProductoForm;