import React from 'react'
import { ADDTOCART, DELETEFROMCART, CHECKOUT} from '../actions/actionTypes'


const initialState = [];

const CartReducer = (state = initialState , actions) =>{
    switch (actions.type) {
        case ADDTOCART:
            return [...state, actions.payload]
        case DELETEFROMCART:
            return state.filter((ele)=>{
                return ele.id!==actions.payload
            })
        default: return state
    }
}

export default CartReducer;