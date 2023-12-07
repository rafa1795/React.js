import React from "react";
import { Center } from "@chakra-ui/react";

export const ItemsContainer = ({greeting}) => {


    return (
        <Center  style={{ margin: "5rem"}}>
            {greeting}
        </Center>
    )
}

export default ItemsContainer