import React, {useState, useRef} from 'react';
import InputProducto from './InputProducto';
import EditarProducto from './EditarProducto';

function ListaProductos () {
 
    // Defino los estados para listas de productos:
    const [prodNoComprados, setProdNoComprados] = useState([]); //prodNoComprados -> lista con nombre y cantidad de productos
    const [prodComprados, setProdComprados] = useState([]); //prodComprados -> lista con nombre y cantidad de productos
    const [prodAEditar, setProdAEditar] = useState(null); 
    const idContador = useRef(1); //useRef para que no cambie el id y lo inicio en 1

    //funcion para agregar productos a lista de NoComprados
    function agregarProducto(producto) {
        const nuevoProd = {...producto, id: idContador.current};
        setProdNoComprados([...prodNoComprados, nuevoProd]);
        idContador.current++;
        console.log('Productos agregados:', prodNoComprados );
    };
    const cambiarCheckbox = (indiceEliminar, comprado) => {
        if(comprado){
            const prodComprado = prodNoComprados[indiceEliminar];
            setProdComprados([...prodComprados,prodComprado]);
            setProdNoComprados(prodNoComprados.filter((producto,indice) => indice !== indiceEliminar));
            console.log('Productos Comprados:', prodComprados );
        }else{
        const prodNoComprado = prodComprados[indiceEliminar];
        setProdNoComprados([...prodNoComprados,prodNoComprado]);
        setProdComprados(prodComprados.filter((producto,indice) => indice !== indiceEliminar));
        console.log('Productos NO  Comprados:', prodNoComprados );
        }
    };
    const eliminarItem = (indiceEliminar, lista) => {
        if(lista){
            setProdComprados(prodComprados.filter((producto,indice) => indice !== indiceEliminar));
            console.log("Lista Comprados:", prodComprados);
        }else{
            setProdNoComprados(prodNoComprados.filter((producto,indice) => indice!== indiceEliminar));
            console.log("Lista No Comprados:", prodNoComprados);
        }};
      // Abrir editor del producto  
    const manejarEdicionProd = (productoEditado) => {
        if(productoEditado.lista) {
            setProdComprados(prodComprados.map(producto =>
                producto.id === productoEditado.id ? {...producto, nombre: productoEditado.nombre, cantidad: productoEditado.cantidad}:producto));
        }else{
            setProdNoComprados(prodNoComprados.map(producto =>
                producto.id === productoEditado.id ? {...producto, nombre: productoEditado.nombre, cantidad: productoEditado.cantidad}:producto
            ));
        }
         setProdAEditar(null);
    };
    const abrirEditor = (producto, lista) => {
        setProdAEditar({...producto, lista});
    };
    const cerrarEditor = ( ) => {
        setProdAEditar(null);
    };

    return(
        <div>
            <h2>Lista Productos</h2>
            <InputProducto onAgregar={agregarProducto} />
                <div>
                    <h4>Productos NO comprados:</h4>
                    <ul>
                        {prodNoComprados.map((producto, indice)=>( 
                            <li key={producto.id}>
                                <label>
                                    <input
                                    type='checkbox'
                                    checked =  {false}
                                    onChange={() => cambiarCheckbox(indice,true)}
                                    />
                                    {producto.cantidad}  {producto.nombre}
                                </label>
                                    <button onClick={() => abrirEditor(producto, false)}>Editar</button>
                                    <button onClick={() => eliminarItem(indice, false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>
                                    </button>
                                   
                            </li>

                    ))}
                    </ul>
        </div>{/**/}
          {/*funcion map para iterar sobre el array -> y le paso dos parametros producto que ira almacenadno cada objeto del array 
        //e indice que representa el indice de ese objeto dentro del array que estoy iterando</ul>
        //usamos indece para manejar cada elemento de la lista*/} 

                <div>
                    <h4>Productos comprados:</h4>
                        <ul>
                        {prodComprados.map((producto, indice)=>( 
                            
                            <li key={producto.id} className='tachado'>
                                <label>
                                    <input 
                                        type="checkbox"
                                        checked = {true}
                                        onChange={() => cambiarCheckbox(indice,false)}
                                    />
                                    {producto.cantidad}  {producto.nombre}
                                </label>
                                <button onClick={() => abrirEditor(producto, true)}>Editar</button>
                                <button onClick={() => eliminarItem(indice, true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>
                                    </button>

                                </li>
                            ))}    
                        </ul> 
                </div>
                {prodAEditar && (
                    <EditarProducto
                        producto={prodAEditar}
                        onEditar={manejarEdicionProd}
                        onCerrar={cerrarEditor}
                    />
                )}
        </div>
    )}
export default ListaProductos;