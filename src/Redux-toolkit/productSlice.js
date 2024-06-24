import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [
        {ref:7, nom: "PC HP", categorie: "informatique"},
        {ref:8, nom: "SKYWORTH", categorie: "TV"},
    ]
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add_produit: (state, action) => {
            state.products.push(action.payload)
        },

        delete_produit: (state, action) => {
            state.products = state.products.filter(n=> n.ref !== action.payload)
        },

        update_produit: (state, action) => {
            state.products = state.products.map(n=> n.ref === action.payload.ref ? action.payload : n)
        },

        
    },
})

export const { add_produit, delete_produit, update_produit } = productSlice.actions;
export default productSlice.reducer;