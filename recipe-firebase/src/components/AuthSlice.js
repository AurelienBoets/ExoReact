import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    authMode: "Se connecter",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    setAuthMode: (state, action) => {
      state.authMode = action.payload;
    },
  },
});

export const { setUser, removeUser, setAuthMode } = AuthSlice.actions;
export default AuthSlice.reducer;
