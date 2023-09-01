import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "products",
    initialState: {
        value:[],
        cart:[]
    },
    reducers:{
        addProduct:(state,action)=>{
            state.value = action.payload
        },
        addToCart:(state,action)=>{
            // console.log(action.payload)
            let newItem = {...(action.payload).item,qty:1};
            // let final  = {newItem,qty:1}
            state.cart = [...state.cart,newItem]
        },
        removeFromCart:(state,action)=>{
            let removeItem = action.payload
            state.cart=state.cart.filter((ob)=>ob.id!==removeItem.id)
        },
        increseQty:(state,action)=>{
            let quantity= action.payload
            console.log(quantity)
            // state.cart=[...state.cart,]
        },
        decreseQty:(state,action)=>{

        }
    }
})

export const {addProduct,addToCart,removeFromCart,increseQty,decreseQty} = slice.actions;
export default slice.reducer;