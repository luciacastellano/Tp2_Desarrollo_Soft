import React from 'react';
import './App.css';
//import  InputProducto  from './componentes/InputProducto.jsx'; // aca importo el componenete
import ListaProductos from './componentes/ListaProductos.jsx';


function App() {
  return (
    <div className="App">
      <h1> Lista de Compras </h1>
      <ListaProductos />
    </div>
  )
};
export default App;



