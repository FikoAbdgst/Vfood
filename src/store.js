import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/shop/cartSlice'

export default configureStore({
    reducer: {
        cart: cartSlice
    }
})

