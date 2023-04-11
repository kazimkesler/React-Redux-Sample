import { createSlice } from '@reduxjs/toolkit'

export const siteSlice = createSlice({
    name: 'site',
    initialState: {
        darkMode: false,
        language: "tr"
    },
    reducers: {
        toggleTheme: state => {
            state.darkMode = !state.darkMode
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})
export const { toggleTheme, setLanguage } = siteSlice.actions
export default siteSlice.reducer