import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



const ItemDetail = ({ producto }) => {

const {id} = useParams()
console.log(id)



    return (
    <div>        
        <Card style={{ width: '18rem' }}>
            <Card.Img/>{producto.img}
            <Card.Body>
                <Card.Title> 
                    {producto.nombre} 
                </Card.Title>
                <Card.Text>
                    {producto.descripcion}
                </Card.Text>
                <h2> {producto.precio} </h2>
            <ItemCount/>
            </Card.Body>
        </Card>
    </div>
    )
}

export default ItemDetail