import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  accessToken: string | null;
  program?: string | null;
  userId: number | null;
  // isLoggedIn: boolean;       // true if user is fully logged in
}

const initialState: AuthState = {
  email: null,
  firstName: null,
  lastName: null,
  accessToken: null,
  program: null,
  userId: null,
  // isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Can be used after registration or login
    setCredentials: (
      state,
      action: PayloadAction<{
        email: string;
        firstName?: string;
        lastName?: string;
        accessToken?: string;
        program?: string;
        userId?: number ;
      }>
    ) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName || null;
      state.lastName = action.payload.lastName || null;
      state.accessToken = action.payload.accessToken || null;
      state.program = action.payload.program || null;
      state.userId = action.payload.userId || null;
      // state.isLoggedIn = !!action.payload.firstName; // true only if user has firstName (i.e., logged in)
    },

    // Clears all credentials (logout)
    clearCredentials: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.accessToken = null;
      state.program = null;
      state.userId = null;
      // state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;

