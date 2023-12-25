import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Item = ({ img, nombre, descripcion, precio, id }) => {
    return (
    <div> 
        
        <Card style={{ width: '18rem' }}>
            <Card.Img/>{img}
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