import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { delete_from_cart } from '../redux/counterActions/counterAction';


const ShoppingCart = () =>{
    const cartArr = useSelector(state=>state.cart)
    const dispatch = useDispatch();
    return (
        <div className='Allproducts'>
            <h1>Hello</h1>
        {cartArr.map((ele) => (
          <div className="prod" >
            <img className="prod-image" src={ele.image}></img>
            <div className="desc">
              <h4>{ele.title}</h4>
              <div className="pr-btn">
                <div>
                    <h5>Price: {ele.price}</h5>
                    <h5>Rating: {ele.rating.rate}</h5>
                </div>
                <div className="btns">
                    <button onClick={()=>dispatch(delete_from_cart(ele.id))}>Remove</button>
                </div>
              </div>
             </div>
          </div>
        ))}
        </div>
    )
}

export default ShoppingCart