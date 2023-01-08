import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import { filterReducer } from './filter/filter-reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
