import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: "",
  password: "",
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action: { payload: { email: string; password: string } }) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      localStorage.setItem("user-info", JSON.stringify(action.payload));
    },
    setIsLoading(state, action: { payload: boolean }) {
      state.isLoading = action.payload;
    },
    setError(state, action: { payload: string | null }) {
      state.error = action.payload;
    },
  },
});

export const { loginUser, setIsLoading, setError } = authSlice.actions;

export default authSlice.reducer;
