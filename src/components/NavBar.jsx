import React from "react";
import CartWidget from "./cartWidget";
import { Flex, Spacer, Box } from '@chakra-ui/react'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";



export const NavBar = () => {

    return (

  <Flex style={{backgroundColor: "black", color: "yellowgreen"}}>
    <Box p='4'>
      <Link to={"/"}>
      <div style={{fontSize: "2rem"}}>
        SANTECH
      </div>
      </Link>
    </Box>
    <Spacer />
    <Link to={"/items/consolas"}>
      <button className="barra"><a>Consolas</a></button>
      </Link>
      <Link to={"/items/juegos"}>
      <button className="barra" style={{marginRight: "3rem", marginLeft: "3rem"}}><a>Juegos</a></button>
      </Link>
      <Link to={"/items/accesorios"}>
      <button className="barra"><a>Accesorios</a></button>
    </Link>
    <Spacer/>
    <Box p='4'>
      <CartWidget/>
    </Box>
  </Flex>

    )
}

export default NavBar