import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import siteReducer from './slices/siteSlice' 
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        site: siteReducer
    },
})