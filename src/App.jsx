import React from 'react'
import NavBar from './components/NavBar'
import ItemsContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';


export const App = () => {
  return (
      <BrowserRouter>

        <NavBar/>

        <Routes>

          <Route exact path='/' element={<ItemsContainer/>} />
          <Route exact path='/producto/:id/' element={<ItemDetailContainer/>} />
          <Route exact path='/items/:categoriaid' element={<ItemsContainer/>} />
          <Route/>
          <Route/>

        </Routes>

      </BrowserRouter>
  )
}


export default App
