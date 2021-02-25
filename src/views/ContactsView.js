import React, { Component } from "react";
import { connect } from "react-redux";

import Filter from "../components/Filter";

import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";

import contactsOperations from "../redux/contacts/contactsOperations";

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsView);
