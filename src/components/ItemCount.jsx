import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const ItemCount = () => {
    const [contador, setContador] = useState(0)


    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }
    return (
    <div>
        <Button className='bagregar' onClick={restar}>
            -
        </Button>
        <Button className='bagregar'>
            Agregar al carrito {contador}
        </Button>
        <Button className='bagregar' onClick={() => setContador(contador + 1)}>
            +
        </Button>
    </div>
    )
}

export default ItemCount