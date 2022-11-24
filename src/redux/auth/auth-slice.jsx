import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchingCurrentUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
  };

const handleRejected = (state, action) => {
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
        [fetchingCurrentUser.pending](state) {
          state.isFetchingCurrentUser = true;
        },
        [fetchingCurrentUser.fulfilled](state, action) {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isFetchingCurrentUser = false;
        },
        [fetchingCurrentUser.rejected](state) {
          state.isFetchingCurrentUser = false;
        },
    }
  });

  export const authReducer = authSlice.reducer;