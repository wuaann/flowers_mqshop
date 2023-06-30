import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";


const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
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
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },



        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartItemQuantity } = cartItem;
                    const itemTotal = price * cartItemQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartItemQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartItemQuantity > 1) {
                state.cartItems[itemIndex].cartItemQuantity -= 1;
                toast.info("Decreased product quantity", {
                    position: "bottom-left",
                });
            } else if (state.cartItems[itemIndex].cartItemQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
                toast.error("Product removed from cart", {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );

                    state.cartItems = nextCartItems;

                    toast.error("Product removed from cart", {
                        position: "bottom-left",
                    });
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Cart cleared", { position: "bottom-left" });
        },
    }
})
const {reducer, actions} = cartSlice;
export const {addToCart,getTotals,decreaseCart,removeFromCart,clearCart} = actions
export default reducer;
