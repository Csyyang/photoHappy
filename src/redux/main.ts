import { configureStore } from '@reduxjs/toolkit'
import footerSlice from './footerSlice'

export const store = configureStore({
    reducer: {
        footerChoose: footerSlice
    },
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch