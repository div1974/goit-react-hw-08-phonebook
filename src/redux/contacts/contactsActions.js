import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");
const removeContactRequest = createAction("contact/removeRequest");
const removeContactSuccess = createAction("contact/removeSuccess");
const removeContactError = createAction("contact/removeError");

const changeFilter = createAction("contact/changeFilter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  changeFilter,
};
