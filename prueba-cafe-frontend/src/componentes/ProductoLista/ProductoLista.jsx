import React, { useEffect, useState } from "react";
import BorrarProductoBotón from "../BorrarProductoBotón.jsx/BorrarProductoBotón";
import EditarProductoBotón from "../EditarProductoBotón.jsx/EditarProductoBotón";
import Producto from "../Producto/Producto";
import "./ProductoLista.css";

function ProductoLista() {
  const [productos, setProductos] = useState([]);

  const borrarProducto = async (id) => {
    await fetch("http://localhost:8080/api/productos/" + id,{
      method:"DELETE",
      headers:{ "Content-Type" : "application/json"},
      mode: "cors",
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log("ERROR---",error))
  };

  const getProductos = async () => {
    try {
      await fetch("http://localhost:8080/api/productos", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => setProductos(result));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(productos);

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <ul>
      {productos.map((producto) => (
        <li className="text-center">
          <div className="d-flex flex-row-reverse botones">
              <BorrarProductoBotón productoId={producto.id} borrarProducto={() => borrarProducto}/>
              <EditarProductoBotón productoId={producto.id} />
          </div>
          <Producto
            producto={producto}
            key={producto.id}
          ></Producto>
        </li>
      ))}
    </ul>
  );
}

export default ProductoLista;
