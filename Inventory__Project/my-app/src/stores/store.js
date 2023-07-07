import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { PostApi } from '../services/PostApi.js'

export const store = configureStore({
    reducer: {
        [PostApi.reducerPath]: PostApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PostApi.middleware),
})

setupListeners(store.dispatch)