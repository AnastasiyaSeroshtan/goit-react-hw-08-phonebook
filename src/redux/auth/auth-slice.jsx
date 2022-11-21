import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

//   const handlePending = state => {
//     state.isLoading = true;
// };

const handleRejected = (state, action) => {
    // state.isLoading = false;
    state.error = action.payload;
};

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
          },
        [register.rejected]: handleRejected,
        [login.fulfilled](state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        },
        [logout.fulfilled](state) {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        },
        [getCurrentUser.fulfilled](state, action) {
          state.user = action.payload;
          state.isLoggedIn = true;
        },
    }
  });

  export const authReducer = authSlice.reducer;