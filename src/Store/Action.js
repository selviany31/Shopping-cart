import { createSlice } from "@reduxjs/toolkit"
// import data from "../Data/productList"

const initialState = {
    data: [],
    dataQty: 0,
}

export const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        getDataProduct: (state, action) => {
            state.data = action.payload
        },
        getDecrement: (state, action) => {
            state.data = state.data.map((item) => item.id === action.payload ?  {...item, qty: item.qty - 1} : item)
        },
        getIncrement: (state, action) => {
            state.data = state.data.map((item) => item.id === action.payload ?  {...item, qty: item.qty + 1} : item)
        },
        removeData: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload )
        }
    }
})

export const { getDataProduct, getDecrement, getIncrement, removeData } = contentSlice.actions 

export default contentSlice.reducer