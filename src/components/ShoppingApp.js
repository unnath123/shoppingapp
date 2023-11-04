import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {add_to_cart, delete_from_cart, checkout, remove_from_wlist, add_to_wishlist,} from "../redux/counterActions/counterAction";
import { products } from "./data/products";


const ShoppingApp = () => {

  const dispatch = useDispatch();



  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="Allproducts">
        {products.map((ele) => (
          <div className="prod" key={ele.id}>
            <img className="prod-image" src={ele.image}></img>
            <div className="desc">
              <h4>{ele.title}</h4>
              <div className="pr-btn">
                <div>
                    <h5>Price: {ele.price}</h5>
                    <h5>Rating: {ele.rating.rate}</h5>
                </div>
                <div className="btns">
                    <button onClick={()=>dispatch(add_to_cart(ele))}>Add_To_Cart</button>
                    <button onClick={()=>dispatch(add_to_wishlist(ele))}>Add_To_Wlist</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingApp;
