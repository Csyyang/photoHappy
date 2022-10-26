import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type choseType = 'index' | 'find' | 'message' | 'me'

export interface FooterState {
    chose: choseType
}

const initialState: FooterState = {
    chose: 'index'
}

export const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        changeChoose: (state, action: PayloadAction<choseType>) => {
            state.chose = action.payload
        }
    }
})

export const { changeChoose } = footerSlice.actions

export default footerSlice.reducer