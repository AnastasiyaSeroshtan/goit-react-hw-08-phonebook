import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  // Utility to remove JWT
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

//   POST  ​/users​/signup
//   body: { name, email, password }

 export const register = createAsyncThunk(
   'auth/register',
   async (dataSignUp, thunkAPI) => {
     try {
       const res = await axios.post('/users/signup', dataSignUp);
       setAuthHeader(res.data.token);
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
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST /users/logout

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// GET /users​/current

export const fetchingCurrentUser = createAsyncThunk('/users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  // console.log('persistedToken', persistedToken)

  if (persistedToken === null) {
    // console.log('токена нет')
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  setAuthHeader(persistedToken);
  try {
    const res = await axios.get('/users/current');
    // console.log('res', res)
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
