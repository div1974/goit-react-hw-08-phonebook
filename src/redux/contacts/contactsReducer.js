import { combineReducers } from "redux";
import contactsActions from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const addContact = (state, action) => {
  return [...state, action.payload];
};

const removeContact = (state, action) => {
  return state.filter((task) => task.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});


export default combineReducers({
  items,
  filter
  
});
