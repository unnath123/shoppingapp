import React from 'react'
import { ADDTOCART, DELETEFROMCART, CHECKOUT, ADDTOWLIST, REMOVEFROMWLIST } from '../actions/actionTypes'

export const add_to_cart = (product) =>{
    return {
        type:ADDTOCART,
        payload: product
    }
}

export const delete_from_cart = (product_id) => {
    return {
        type: DELETEFROMCART,
        payload: product_id
    }
}

export const checkout = () =>{
    return {
        type:CHECKOUT
    }
}

export const add_to_wishlist = (product) =>{
    return {
        type:ADDTOWLIST,
        payload:product
    }
}

export const remove_from_wlist = (product_id) =>{
    return {
        type:REMOVEFROMWLIST,
        payload: product_id
    }
}