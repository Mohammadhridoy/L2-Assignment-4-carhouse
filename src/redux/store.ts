import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./Features/auth/authSlice"
import getAlldataReducer from"./Features/AllCars/getAllCarSlice"
import { baseApi } from './Api/baseApi'
import { persistStore, persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER  } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'auth',
  storage,
}
const persistCarConfig={
  key:'singledata',
  storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)
const persistedSingleData = persistReducer(persistCarConfig, getAlldataReducer)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer,
    auth:persistedAuthReducer ,

    getAlldata:persistedSingleData
 
  },

  middleware: (getDefaultMiddlewares) =>getDefaultMiddlewares(
    {
      serializableCheck:{
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
      }
    }
  ).concat(baseApi.middleware)
})



// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const persistor = persistStore(store)

export type AppStore = typeof store