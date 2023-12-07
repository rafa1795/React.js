import React from "react";
import CartWidget from "./cartWidget";
import { Flex, Spacer, Box } from '@chakra-ui/react'
import Container from 'react-bootstrap/Container';

export const NavBar = () => {

    return (

  <Flex style={{backgroundColor: "black", color: "yellowgreen"}}>
    <Box p='4'>
      <div style={{fontSize: "2rem"}}>
        SANTECH
      </div>
    </Box>
    <Spacer />
      <button><a>Consolas</a></button>
      <button style={{marginRight: "3rem", marginLeft: "3rem"}}><a>Juegos</a></button>
      <button><a>Accesorios</a></button>
    <Spacer/>
    <Box p='4'>
      <CartWidget/>
    </Box>
  </Flex>

    )
}

export default NavBar