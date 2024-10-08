import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartSlice } from "./features/cartSlice";
import userSlice from "./features/userSlice"; // Import userSlice
import loginSlice from "./features/loginSlice"; // Import loginSlice
import signupSlice from "./features/signupSlice"; // Import signupSlice
import { baseApi } from "./api/baseApi";

// Persist config for the cart slice
const cartPersistConfig = {
  key: "cart", // Only persist the cart slice
  storage,
};

// Persist config for the user slice
const userPersistConfig = {
  key: "user", // Persist the user slice
  storage,
  whitelist: ["user", "token"], // Persist only user and token
};

// Create persisted reducers
const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);
const persistedUserReducer = persistReducer(userPersistConfig, userSlice); // Persist user slice

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // Persisted cart reducer
    user: persistedUserReducer, // Persisted user reducer
    auth: loginSlice, // No need to persist loginSlice
    signup: signupSlice, // No need to persist signupSlice
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
