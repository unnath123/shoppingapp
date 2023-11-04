import React from 'react'
import { ADDTOWLIST,REMOVEFROMWLIST } from '../actions/actionTypes';

const initialState = [];

const WishlistReducer = (state = initialState , actions) =>{
    switch (actions.type) {
        case ADDTOWLIST:
            return [...state, actions.payload]
        case REMOVEFROMWLIST:
            return state.filter((ele)=>{
                return ele.id!==actions.payload
            })
        default: return state
    }
}

export default WishlistReducer;