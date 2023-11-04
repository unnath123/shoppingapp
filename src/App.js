import React from 'react'
import style from "./style.css"
import ShoppingApp from './components/ShoppingApp'
import ShoppingCart from './components/ShoppingCart'

const App = () =>{
    return (
        <div>
            <ShoppingApp/>
            <ShoppingCart/>
        </div>
    )
    
}

export default App