import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const $publicHost = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const $privateHost = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Це middleware, який перед кожним запитом в поле Authorization
// // в хедерах буде підчіпляти токен користувача з локального хранилища
// const authInterceptor = config => {
//   config.headers['Authorization'] = localStorage.getItem('token');
//   return config;
// };

// $privateHost.interceptors.request.use(authInterceptor);

// /*
// {
//   baseURL: "https://connections-api.herokuapp.com",
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': token...,
//   },
// }
// */

// export const UserAPI = {
//   async register(formData) {
//     const { data } = await $publicHost.post(`users/signup`, formData);
//     return data;
//   },
//   async login(formData) {
//     const { data } = await $publicHost.post(`users/login`, formData);
//     return data;
//   },
//   async getUserDetailsRequest() {
//     const { data } = await $privateHost.get(`/users/current`);
//     return data;
//   },
//   async userLogOutRequest() {
//     const { data } = await $privateHost.post(`/users/logout`);
//     return data;
//   },
// };

// export const ContactsAPI = {
//   async getContacts() {
//     const { data } = await $privateHost.get(`/contacts`);
//     return data;
//   },
//   async addContact(contactData) {
//     const { data } = await $privateHost.post(`/contacts`, contactData);
//     return data;
//   },
//   async deleteContact(contactId) {
//     const { data } = await $privateHost.delete(`/contacts/${contactId}`);
//     return data;
//   },
// };

// export const loginRequest = createAsyncThunk(
//   'user/login',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await UserAPI.login(formData);
//       localStorage.setItem('token', response.token);

//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const registerRequest = createAsyncThunk(
//   'user/register',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await UserAPI.register(formData);
//       localStorage.setItem('token', response.token);

//       return response;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const instance = axios.create({
  baseURL: 'https://63fc93218ef914c5559a7011.mockapi.io',
});

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
      //   console.log(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
