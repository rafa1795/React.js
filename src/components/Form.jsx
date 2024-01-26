import React, { useContext, useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/ShoppingCartContext'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart} = useContext(CartContext)
    const db = getFirestore()

    const handleSubmit = (e) => {
      e.preventDefault();
  
      addDoc(ordersCollection, order).then(({ id }) => {
          setOrderId(id);
          alert(`Estimado ${nombre}, en los próximos días estarás recibiendo tu compra en ${domicilio}`);
      });
  };

    const order = {
      clietne: {nombre, domicilio, email }, 
      items: cart, 
      
    }

    const ordersCollection = collection(db, "orden")

  return (
    <div>
        <form onSubmit = {handleSubmit}>
          <Input placeholder='Nombre y Apellido' onChange={(e)=> setNombre(e.target.value)} value={nombre} />
          <Input placeholder='Domicilio' onChange={(e)=> setDomicilio(e.target.value)} value={domicilio}/>
          <Input placeholder='Correo' type='email' onChange={(e)=> setEmail(e.target.value)} value={email}/>
          <Button colorScheme='whatsapp' type='submit'>Enviar</Button>
        </form>
        <Text>{`El codigo de su compra es: ${orderId}`}</Text>
    </div>
  )
}

export default Form