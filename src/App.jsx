import React from 'react'
import NavBar from './components/NavBar'
import ItemsContainer from './components/ItemListContainer'



export const App = () => {
  return (
      <div>

        <NavBar/>

        <ItemsContainer greeting={"Nuestros productos destacados!"}/>
      </div>
  )
}


export default App
