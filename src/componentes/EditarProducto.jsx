import React, { useState, useEffect, useRef } from 'react';

function EditarProducto({producto, onEditar, onCerrar}){
    const[nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const focusNombreRef = useRef(null);

    useEffect(( ) => {
        if(producto){
            setNombre(producto.nombre);
            setCantidad(producto.cantidad);
            focusNombreRef.current.focus();//enfoca en el input del nombre
        }
    }, [producto]);

    const manejarEdicion = ( ) => {
        if(!nombre.trim()){ //valida que no este vacio el nombre y la cantidad no sea 0 o menos
            alert('Debe ingresar el nombre del producto.');
            return;
        }else if (cantidad <= 0){
            alert('Debe ingresar una cantidad mayor a 0.');
            return;
        }else if (isNaN(cantidad) || cantidad <= 0 ){
            alert('Debe ingresar una cantidad.');
            return;
        }
    const productoEditado = {...producto, nombre, cantidad};
    onEditar(productoEditado);
};
    return (

        <div className="modal">
            <h2>Editar Producto</h2>
            <input
                type='text'
                value={nombre}
                onChange= {(e) => setNombre(e.target.value)}
                placeholder="Nombre producto"
                ref={focusNombreRef} 
            />
            <input
                type='number'
                value={cantidad}
                onChange= {(e) => (setCantidad(parseInt(e.target.value)))}
                
                placeholder="Cantidad"
                min={0}
            />
            <button onClick={manejarEdicion}>Editar</button>
            <button onClick={onCerrar}>Cerrar</button>
        </div>
    );
}
export default EditarProducto;

