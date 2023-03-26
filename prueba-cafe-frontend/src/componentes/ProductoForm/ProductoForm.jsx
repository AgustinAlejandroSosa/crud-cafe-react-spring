import React, { useState } from "react";
import CrearProductoBoton from "../CrearProductoBotón/CrearProductoBoton";
import "./ProductoForm.css";

function ProductoForm(){

  const [producto,setProducto] = useState({
    titulo: '', 
    categoría:'', 
    precio:0,
    costo:0
  });

  function completarProducto(e){
    const {name,value} = e.target;
    setProducto({...producto, [name]:value})
    console.log(producto);
  }

  const agregarProducto = async (e) =>{
    e.preventDefault()
    await fetch('http://localhost:8080/api/productos',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(producto),
      mode:"cors",
    }).then(res => res.json()).then(data => {
      window.location.reload();
      setProducto({titulo:'',categoría:'',precio:0,costo:0})
    }).catch(error =>{
      console.error('Error----', error);
    });
  }

  return(
    <form className="form-control text-center">
      <h1>Cargar producto</h1>

      <label className="form-label" htmlFor="titulo">Titulo</label>
      <input name="titulo" value={producto.titulo} id="titulo" className="form-control" onChange={completarProducto}/>

      <label htmlFor="categoría" className="form-label">categoría</label>
      <input name="categoría" value={producto.categoría} id="categoría" className="form-control" onChange={completarProducto}/>

      <label className="form-label" htmlFor="precio">Precio</label>
      <input name="precio" value={producto.precio} id="precio" className="form-control" onChange={completarProducto}/>

      <label className="form-label" htmlFor="costo">Costo</label>
      <input name="costo" value={producto.costo} id="costo" className="form-control" onChange={completarProducto}/>
       
      <div className="mt-2 text-center boton">
      <CrearProductoBoton agregarProducto={agregarProducto}></CrearProductoBoton>
      </div>
    </form>
  );
}

export default ProductoForm;