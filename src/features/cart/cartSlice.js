import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      if (!state.cartItems.find(item => item.id === action.payload.id)) {
        state.cartItems.push(action.payload)
      }
    },
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
    }
  }
})

export default cartSlice.reducer;
export const { addCartItem, deleteCartItem } = cartSlice.actions