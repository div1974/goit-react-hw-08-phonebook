import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "../ContactListItem/ContactListItemContainer";
import { connect } from "react-redux";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import ContactItemFade from "./ContactItemFade.module.css";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul" className={styles.ContactList}>
    {contacts.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames={{ ...ContactItemFade }}>
        <ContactListItem key={id} id={id} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
};

export default connect(mapStateToProps)(ContactList);
