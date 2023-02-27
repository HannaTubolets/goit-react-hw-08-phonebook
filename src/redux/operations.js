import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63fc93218ef914c5559a7011.mockapi.io',
});

export const getContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await instance.get('/contacts');
  return data;
  //   console.log(data);
});

export const addContact = createAsyncThunk('contacts/add', async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
});
