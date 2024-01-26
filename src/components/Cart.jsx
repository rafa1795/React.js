import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  

  const calcularPrecioTotal = () => {
    return cart.reduce((total, item) => total + item.precioTotal, 0);

};

  const vaciarCarrito = () => {
    setCart([]);
};


  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>{item.producto.nombre}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p> U$D {item.precioTotal.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <p>Total de la Compra: U$D {calcularPrecioTotal().toFixed(2)}</p>
      <Button onClick={vaciarCarrito}>vaciar</Button>
      <Link to={cart.length > 0 ? "/form" : "#"}>
        <Button disabled={cart.length === 0}>Comprar</Button>
      </Link>
    </div>
  )
}

export default Cart