import "./App.css";
import ProductoForm from "./componentes/ProductoForm/ProductoForm";
import ProductoLista from "./componentes/ProductoLista/ProductoLista";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <ProductoForm></ProductoForm>
        </div>
        <div className="col">
        <ProductoLista></ProductoLista>
        </div>
      </div>
    </div>
  );
}

export default App;
