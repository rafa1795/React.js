import React from 'react'
import Item from './Item'


const ItemList = ({ productos }) => {
    
console.log(productos)

    return (
    <div>    
        {
        productos.map((p) => {
            return (
                <Item
                    img={p.img}
                    nombre={p.nombre}
                    precio={p.precio}
                    id={p.id}
                />
            )
        })
        }
    </div>
    )
}

export default ItemList
