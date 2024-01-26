import React, { useContext } from "react";
import CartWidget from "./cartWidget";
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";



export const NavBar = () => {
  const { cart } = useContext(CartContext);

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
      <Link to={"/cart"}>
      <CartWidget cantidad={cart.reduce((total, item) => total + item.cantidad, 0)} />
      </Link>
    </Box>
  </Flex>

  )
}

export default NavBar