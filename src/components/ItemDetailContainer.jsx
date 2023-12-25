import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({}) => {

    const productos = [
        {
            nombre: "xbox s", 
            descripcion: "Consola Xbox serie S 500gb de memmoria", 
            precio: "U$D 500", 
            categoria: "consolas",
            img: "../../imagenes/xbox s.jpg",
            id: 1
        },
        {
            nombre: "Play 5", 
            descripcion: "Consola Play Station 5 con 825gb edicion digital y dos controles", 
            precio: "U$D 800", 
            categoria: "consolas",
            img: "../../imagenes/play.jpg",
            id: 2
        },
        {
            nombre: "Nintendo 64",
            descripcion: "Consola Nintendo 64 con un joistick",
            precio: "U$D 400",
            categoria: "consolas",
            img: "../../imagenes/Nintendo 64.jpg",
            id: 3
        },
        {
            nombre: "Auriculares Sony",
            descripcion: "Auriculares sony para play station",
            precio: "U$D 80",
            categoria: "accesorios",
            img: "../../imagenes/auris play.jpg",
            id: 4
        },
        {
            nombre: "Control PS 5",
            descripcion: "Control inalambrico para Play station 5",
            precio: "U$D 115",
            categoria: "accesorios",
            img: "../../imagenes/control play 5.jpg",
            id: 5
        },
        {
            nombre: "Control Xbox X/S",
            descripcion: "Control inalambrico para consolas Xbox series X/S en color azul",
            precio: "U$D 120",
            categoria: "accesorios",
            img: "../../imagenes/control xbox azul.jpg",
            id: 6
        },
        {
            nombre: "Assassins Creed Valhalla",
            descripcion: "Assassins creed valhalla para Xbox X",
            precio: "U$D 90",
            categoria: "juegos",
            img: "../../imagenes/Juego1.jpg",
            id: 7
        },
        {
            nombre: "Call of Duty",
            descripcion: "Call of Duty black ops cold war para Xbox one y X",
            precio: "U$D 90",
            categoria: "juegos",
            img: "../../imagenes/juego4.jpg",
            id: 8
        },
        {
            nombre: "Spider-Man",
            descripcion: "Spider-Man Miles Morales para PS5",
            precio: "U$D 100",
            categoria: "juegos",
            img: "../../imagenes/juego5.jpg",
            id: 9
        },
    ]

    const { id } = useParams()
    console.log(id)

    const productoFiltrado = productos.find((producto) =>  producto.id == id)  

    return (
        
        <div>
            
                <ItemDetail
                producto = {productoFiltrado}
                />
        </div>

        
    )
}

export default ItemDetailContainer