import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../pages/Home'

type CartState = {
  items: Dish[]
  opened: boolean
}

const initialState: CartState = {
  items: [],
  opened: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.opened = true
    },
    close: (state) => {
      state.opened = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
