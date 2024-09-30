import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartSlice } from "./slices/cartSlice";
import { baseApi } from "./api/baseApi";

// Persist config for the cart slice
const persistConfig = {
  key: "cart", // Only persist the cart slice
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // Persisted cart reducer
    [baseApi.reducerPath]: baseApi.reducer, // Base API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware), // Add baseApi middleware
});

export const persistor = persistStore(store);

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
