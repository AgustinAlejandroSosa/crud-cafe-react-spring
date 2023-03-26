import React from 'react'

function CrearProductoBoton(props) {
  return (
    <button onClick={props.agregarProducto} className='border-4 border-light bg-gradient rounded-circle shadow btn btn-info'>
      <h1>
        <i className="bi bi-plus-lg">
        </i>
      </h1>
    </button>
  )
}

export default CrearProductoBoton