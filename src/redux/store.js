import { createStore, combineReducers  } from "redux";
import CartReducer from "./reducers/CartReducer";
import WishlistReducer from "./reducers/WishlistReducer";

const rootReducer = combineReducers({
    cart: CartReducer,
    wlist: WishlistReducer
})

const store  = createStore(rootReducer)
export default store