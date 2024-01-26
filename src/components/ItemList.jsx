import React, { useEffect, useState} from 'react'
import Item from './Item'
import Loader from './Loader'

const ItemList = ({ productos }) => {
    
    return (
    <div>    
        {productos.map((p) => {
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
