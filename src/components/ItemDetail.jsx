import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react';


const ItemDetail = ({ producto }) => {

const {id} = useParams()

return (
    <Center>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={producto.img} alt={producto.nombre} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <h2>{producto.precio}</h2>
                </Card.Body>
            </Card>
        </div>
    </Center>
    )
}

export default ItemDetail