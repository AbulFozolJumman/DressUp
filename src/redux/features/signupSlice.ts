import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  imageUrl: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setImageUrl } =
  signupSlice.actions;

export default signupSlice.reducer;
