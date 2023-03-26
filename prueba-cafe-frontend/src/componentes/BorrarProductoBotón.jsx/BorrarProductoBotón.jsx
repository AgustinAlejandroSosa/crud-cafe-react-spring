import React from 'react'

function BorrarProductoBotón(props) {
  return (
    <div>
      <button onClick={props.borrarProducto(props.productoId)} className='m-2 btn btn-danger rounded-circle'><i className="bi bi-x-lg"></i></button>
    </div>
  )
}

export default BorrarProductoBotón