import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //we are mutating the state here.
            /* state.items.push(action.payload); */
            const item = action.payload;
            const existingItem = state.items.find(
                (items) => items.id === item.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItem: (state,action) => {
            // state.items.pop();
            const {id}=action.payload;
            const existingItem = state.items.find((items) => items.id === id);
            state.items=state.items.filter(item=>item.id !== existingItem.id);
            

        },
        clearCart: (state) => {
            state.items.length = 0;
        },
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
            console.log(id);
            const existingCart = state.items.find((item) => item.id === id);
            if (existingCart) {
                existingCart.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const { id } = action.payload;
            console.log(id);
            const exisitngCart = state.items.find((item) => item.id === id);
            if (exisitngCart) {
                if (exisitngCart.quantity > 1) {
                    exisitngCart.quantity -= 1;
                } else {
                    toast.error("You can't decrease quantity below 1");
                }
            }
        },
    },
});

export const {
    addItem,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    
} = cartSlice.actions;
export default cartSlice.reducer;
