import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoadind: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoadind = true;
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.items = [...payload].reverse();
      state.isLoadind = false;
      console.log(payload);
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoadind = false;
    },
    [deleteContact.pending]: state => {
      state.isLoadind = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload.id);
      state.isLoadind = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoadind = false;
    },
    [addContact.pending]: (state, { payload }) => {
      state.isLoadind = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
      state.isLoadind = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoadind = false;
    },

    //   reducers: {
    //     addContact(state, { payload }) {
    //       state.items = [...state.items, payload];
    //     },
    //     deleteContact(state, { payload }) {
    //       state.items = state.items.filter(item => item.id !== payload);
    //     },
    //   },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
