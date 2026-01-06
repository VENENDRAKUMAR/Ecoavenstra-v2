import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    isLogin: true,
  },
  reducers: {
    toggleLogin: (state) => {
      state.isLogin = false;
    },
    toggleLogout: (state) => {
      state.isLogin = true;
    },
  },
});

export const { toggleLogin, toggleLogout } = LoginSlice.actions;
export default LoginSlice.reducer;
