import React from 'react'


export const CartWidget = ({ cantidad }) => {
  return (
    <div style={{color: "yellowgreen", fontSize: "2rem"}}>
      <i class="bi bi-cart4"> {cantidad} </i>
    </div>
  )
}

export default CartWidget
