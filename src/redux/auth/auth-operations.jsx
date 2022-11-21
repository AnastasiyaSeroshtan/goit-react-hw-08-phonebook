import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  // Utility to remove JWT
//   const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
//   };

//   POST  ​/users​/signup
//   body: { name, email, password }

 export const register = createAsyncThunk(
   'auth/register',
   async (dataSignUp, thunkAPI) => {
     try {
       const res = await axios.post('/users/signup', dataSignUp);
       return res.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );

//  POST ​/users​/login
// body: { email, password }

export const login = createAsyncThunk(
  'auth/login',
  async (dataLogin, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', dataLogin);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
