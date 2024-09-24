import React, {useState} from 'react';
import InputProducto from './InputProducto';

function ListaProductos () {

    // Defino los estados para listas de productos:
    const [prodNoComprados, setProdNoComprados] = useState([]); //prodNoComprados -> lista con nombre y cantidad de productos
    const [prodComprados, setProdComprados] = useState([]); //prodComprados -> lista con nombre y cantidad de productos
    //funcion para agregar productos a lista de NoComprados
    function agregarProducto(producto) {
        setProdNoComprados([...prodNoComprados, producto]);
    }
    const cambiarCheckbox = (indiceEliminar, comprado) => {
        if(comprado){
            const prodComprado = prodNoComprados[indiceEliminar];
            setProdComprados([...prodComprados,prodComprado]);
            setProdNoComprados(prodNoComprados.filter((producto,indice) => indice !== indiceEliminar));
    }else{
        const prodNoComprado = prodComprados[indiceEliminar];
        setProdNoComprados([...prodNoComprados,prodNoComprado]);
        setProdComprados(prodComprados.filter((producto,indice) => indice !== indiceEliminar));
    }}
    return(
        <div>
            <h2>Lista Productos</h2>
            <InputProducto onAgregar={agregarProducto} />
                <div>
                    <h3>Lista Productos NO comprados:</h3>
                    <ul>
                        {prodNoComprados.map((producto, indice)=>( 
                            
                            <li key={indice}>
                                <input
                                    type='checkbox'
                                    checked =  {false}
                                    onChange={() => cambiarCheckbox(indice,true)}
                                    />
                                    {producto.cantidad}  {producto.nombre}
                            </li>

                    ))}
                    </ul>
        </div>{/**/}
          {/*funcion map para iterar sobre el array -> y le paso dos parametros producto que ira almacenadno cada objeto del array 
        //e indice que representa el indice de ese objeto dentro del array que estoy iterando</ul>
        //usamos indece para manejar cada elemento de la lista*/} 

                <div>
                    <h3>Lista Productos comprados:</h3>
                        <ul>
                        {prodComprados.map((producto, indice)=>( 
                            
                            <li key={indice}>
                                <input 
                                    type="checkbox"
                                    checked = {true}
                                    onChange={() => cambiarCheckbox(indice,false)}
                                />
                                {producto.cantidad}  {producto.nombre}</li>
                        ))}    
                         </ul> 
                </div>

        </div>
    )
}
export default ListaProductos;