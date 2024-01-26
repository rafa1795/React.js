import React from 'react'
import NavBar from './components/NavBar'
import ItemsContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ShoppingCartContecxt, { ShoppingCartProvaider } from './context/ShoppingCartContext';
import Form from './components/Form';


export const App = () => {
  return (
      <ShoppingCartProvaider>
        <BrowserRouter>

          <NavBar/>

          <Routes>

            <Route exact path='/' element={<ItemsContainer/>} />
            <Route exact path='/producto/:id/' element={<ItemDetailContainer/>} />
            <Route exact path='/items/:categoria' element={<ItemsContainer/>} />
            <Route exact path='/cart' element={<Cart/>} />
            <Route exact path='/form' element={<Form/>} />

          </Routes>

        </BrowserRouter>
      </ShoppingCartProvaider>
  )
}


export default App
