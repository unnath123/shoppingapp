import React from 'react'
import { add_to_cart,delete_from_cart,checkout } from '../redux/counterActions/counterAction'
import { products } from './data/products'

const ShoppingApp = () =>{
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className='Allproducts'>
                {
                    products.map((ele)=>(
                        <div className='prod' key={ele.id}>
                            <img className='prod-image' src={ele.image}></img>
                            <div className='desc'>
                                <h4>{ele.title}</h4>
                                <h5>{ele.price}</h5>
                                <h5>{ele.rating.rate}</h5>
                            </div>
                        </div>
                    ))
               
                }
               
            </div>
        </div>
    )
}

export default ShoppingApp

