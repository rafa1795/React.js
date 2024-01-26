import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from './Loader';
import { Center, Grid, GridItem } from "@chakra-ui/react";

export const ItemsContainer = ({ firebaseApp }) => {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore(firebaseApp);
        const fetchData = async () => {
        try {
            const productosSnapshot = await getDocs(collection(db, 'productos'));
            const productosData = productosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            setTimeout(() => {
                setProductos(productosData);
                setLoading(false);
            },);

        } catch (error) {}
        finally {
            setLoading(false); 
        }
        };

        fetchData();
    }, [firebaseApp]);
    
    const productosFiltrados = categoria
    ? productos.filter((producto) => producto.categoria === categoria)
    : productos;


    return (
        <Center>
            {loading ? (
                <Loader />
            ) : (
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    {productosFiltrados.map((producto) => (
                        <GridItem key={producto.id}>
                            <ItemList productos={[producto]} />
                        </GridItem>
                    ))}
                </Grid>
            )}
        </Center>
    );
};


export default ItemsContainer