import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";


const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartItemQuantity += 1
                toast.info(`da tang so luong cua ${state.cartItems[itemIndex].name} thanh ${state.cartItems[itemIndex].cartItemQuantity}`,{
                    position: "top-right"
                })
            } else {
                const temProduct = {...action.payload, cartItemQuantity: 1}
                state.cartItems.push(temProduct);
                toast.success(`${action.payload.name} da them san pham vao gio hang`, {
                    position: "top-right"
                })
            }
        }
    }
})
const {reducer, actions} = cartSlice;
export const {addToCart} = actions
export default reducer;
