import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './auth-operations';

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
    }
  });

  export const authReducer = authSlice.reducer;