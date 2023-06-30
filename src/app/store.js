import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import cartReducer, {getTotals} from "../features/Home/cartSlice"
const rootReducer = {
    auths: authReducer,
    carts: cartReducer,
}


const  store = configureStore({
    reducer: rootReducer,

})
store.dispatch(getTotals())

export default store;
