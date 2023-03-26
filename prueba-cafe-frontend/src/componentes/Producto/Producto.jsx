import React from 'react'

function Producto(props) {
  return (
    <div className='border border-5 border-top-0 border-start-0 shadow '>
      <h4>Titulo : {props.producto.titulo}</h4>
      <p>Categoria : {props.producto.categoría}</p>
      <p>Precio: $ {props.producto.precio}</p>
      <p>Costo: $ {props.producto.costo}</p>
    </div>
  );
}

export default Producto