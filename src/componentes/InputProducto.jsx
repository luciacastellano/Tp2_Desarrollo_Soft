import React, {useState} from 'react';

function InputProducto({ onAgregar }){

    //* useState -> función que devuelve nombreProducto y una función para actualizar el nombre*/}
    const [nombreProducto, setNombreProducto] = useState(''); 
    const [cantidad, setCantidad] = useState(0);
    const [checkbox, setCheckbox] = useState(false); 

// Manejo las funciones de los cambios 
    const CambioNombreProducto = (e) => {
        setNombreProducto(e.target.value); // se actualiza el nombre del producto con el nuevo valor escrito por el usuario.
        // el e_target_value es el valor actual del input mientras esta escribiendo el producto
    }
    const CambioCantProducto = (e) => {
        setCantidad(Number(e.target.value)); // para convertir el valor a nro
    }
    const AgregarProducto = () => { //lo llamo cuando el usuario hace click en 'Agregar'
        console.log(onAgregar)

        if(nombreProducto !== '' && cantidad > 0){
            const nuevoProducto = {nombre: nombreProducto, cantidad: cantidad, estado: false}
            onAgregar(nuevoProducto);
            setNombreProducto(''); // reseteo el nombre
            setCantidad(0); // reseteo la cantidad al agregar un nuevo producto
        }else{
            alert('Debe ingresar un nombre de producto y una cantidad mayor a 0');        }          
    };
   


    return (
    <div>
        {/* // es todo lo que se muestra en pantalla*/}
        <div>
            {/* Campo texto  */}
                <input
                type = "text"
                value = {nombreProducto}
                onChange= {CambioNombreProducto} 
                placeholder='Producto' 
            />
        {/* tipo de input -> texto*/}
        {/*// el valor del input -> viene del estado del nombreProducto.*/}
        {/*// se ejecuta cuando el usuario escribe algo*/}
        {/*// se muestra cuando el input esta vacio*/}
        </div>
        <div>
            {/* Campo cantidad */}
            <input
                type="number"
                value={cantidad}
                onChange={CambioCantProducto} 
                min={0} 
            />
            {/*// pongo el minimo valor*/}
        </div>
            
        <div>
            {/* Botón Agregar*/}
            <button onClick={AgregarProducto}>Agregar</button>
        </div>
    </div>
    );
}

export default InputProducto;
/* // exporto el componenete para que se pueda usar en otros archivos*/
