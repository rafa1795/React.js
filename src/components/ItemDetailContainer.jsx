import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import { CartContext } from '../context/ShoppingCartContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Center } from '@chakra-ui/react';



const ItemDetailContainer = ({ firebaseApp }) => {
    const [contador, setContador] = useState(1);
    const [producto, setProducto] = useState(null);
    const { cart, setCart, setCantidadTotal } = useContext(CartContext);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducto = async () => {
            if (!id) {
            return;
            }

        const db = getFirestore(firebaseApp);

            try {
                const productoDoc = await getDoc(doc(db, 'productos', id));

            if (productoDoc.exists()) {
                setProducto({ id: productoDoc.id, ...productoDoc.data() });
            }
            } catch (error) {}
        };

        fetchProducto();
        }, [firebaseApp, id, setProducto]);
    
        const agregarItem = (cantidad) => {
            if (producto) {
                const precioTotalItem = contador * parseFloat(producto.precio.replace('U$D ', ''));
                const productoExistente = cart.find(item => item.producto.id === producto.id);

            if (productoExistente) {
                const nuevoCart = cart.map(item =>
                item.producto.id === producto.id
                ? { ...item, cantidad: item.cantidad + contador, precioTotal: item.precioTotal + precioTotalItem }
                : item
                );
                setCart(nuevoCart);
            } else {
                const nuevoItem = {
                producto,
                cantidad: contador,
                precioTotal: precioTotalItem,
            };
                setCart(prevCart => [...prevCart, nuevoItem]);
            }
            
            const nuevaCantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);
            setCantidadTotal(nuevaCantidadTotal);

            setContador(1);
            }
        };
    
        return (
            <Center>
                {producto && (
                <>
                <ItemDetail producto={producto} />
                <ItemCount contador={contador} setContador={setContador} onAgregarItem={agregarItem} />
                </>
                )}
            </Center>
        );
    };
    
    export default ItemDetailContainer;