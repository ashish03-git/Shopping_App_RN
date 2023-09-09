import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "products",
    initialState: {
        value: [],
        cart: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.value =[...state.value,...action.payload]
            console.log(state.value)
        },
        addToCart: (state, action) => {
            // console.log(action.payload)
            let newItem = { ...(action.payload).item, qty: 1 };
            // let final  = {newItem,qty:1}
            state.cart = [...state.cart, newItem]
        },
        removeFromCart: (state, action) => {
            const removeItem = action.payload.id;
            state.cart = state.cart.filter((item) => item.id !== removeItem);
        },

        removeBtnFromAllProduct: (state, action) => {
            const removeItem = action.payload.item
            // console.log(removeItem)
            state.cart = state.cart.filter((item) => item.id !== removeItem.id);
        },
        increseQty: (state, action) => {
            const id = action.payload.id;
            // console.log(id)
            const updatedCart = state.cart.map((item) => {
                if (item.id === id) {
                    // Ensure the quantity doesn't go below 1
                    const newQty = item.qty + 1 >= 1 ? item.qty + 1 : 1;
                    return { ...item, qty: newQty };
                }
                return item;
            });

            state.cart = updatedCart;
        },
        decreseQty: (state, action) => {
            const id = action.payload.id;
            // console.log(id)
            const updatedCart = state.cart.map((item) => {
                if (item.id === id) {
                    // Ensure the quantity doesn't go below 1
                    const newQty = item.qty - 1 >= 1 ? item.qty - 1 : 1;
                    return { ...item, qty: newQty };
                }
                return item;
            });

            state.cart = updatedCart;
        }
    }
})

export const { addProduct, addToCart, removeFromCart, increseQty, decreseQty,removeBtnFromAllProduct } = slice.actions;
export default slice.reducer;