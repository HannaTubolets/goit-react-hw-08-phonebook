import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const getIsLoading = state => state.contacts.isLoading;
export const selectStatus = state => state.user.status;
export const selectUserData = state => state.user.userData;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectAuthError = state => state.user.error;
