import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({ img, nombre, precio, id }) => {
    return (
    <div className='catalogo'> 
        
        <Card style={{ width: '18rem' }}>
        <Card.Img src={img} />
            <Card.Body>
                <Card.Title> 
                    {nombre} 
                </Card.Title>
                <h2> {precio} </h2>
                <Link to={`/producto/${id}`}>
                    <Button className='bdetalles'>Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        
    </div>
    )
}

export default Item