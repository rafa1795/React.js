import React from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({ contador, setContador, onAgregarItem }) => {
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const AgregarItem = () => {
        onAgregarItem(contador);
    };

    return (
        <div>
            <Button className='bagregar' onClick={restar}>
                -
            </Button>
            <Button className='bagregar' onClick={AgregarItem}>
                Agregar al carrito {contador}
            </Button>
            <Button className='bagregar' onClick={() => setContador(contador + 1)}>
                +
            </Button>
        </div>
    );
};

export default ItemCount