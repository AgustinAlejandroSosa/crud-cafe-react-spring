import React, { useEffect, useState } from "react";
import BorrarProductoBotón from "../BorrarProductoBotón.jsx/BorrarProductoBotón";
import EditarProductoBotón from "../EditarProductoBotón.jsx/EditarProductoBotón";
import Producto from "../Producto/Producto";
import axios from "axios";
import "./ProductoLista.css";
import ProductoForm from "../ProductoForm/ProductoForm";

function ProductoLista() {
  const [productos, setProductos] = useState([]);

  const borrarProducto = async (id) => {
    await axios.delete("http://localhost:8080/api/borrar-productos/" + id)
    .then(res => console.log(res))
    .catch(error => console.log("ERROR ASDF",error));
    getProductos();
  };
 
  const getProductos = async () => {
    try {
      await axios.get("http://localhost:8080/api/productos")
        .then((res) => setProductos(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const modificarProducto = async (producto) => {
     
  }

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ProductoForm getProductos={getProductos} />
        </div>
        <div className="col">
          <ul>
            {productos.map((producto) => (
              <li key={producto.id} className="text-center">
                <div className="d-flex flex-row-reverse botones">
                  <BorrarProductoBotón productoId={producto.id} borrarProducto={borrarProducto} />
                  <EditarProductoBotón productoId={producto.id} />
                </div>
                <Producto
                  producto={producto}
                ></Producto>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductoLista;
