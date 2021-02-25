import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import fadeStyles from "./fade.module.css";
import styles from "./ContactForm.module.css";
import Notification from "../Notification";
import NotificationFade from "../Notification/NotificationFade.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    mess: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name } = this.state;

    const checkName = this.props.items.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      this.setState({ mess: true });
    } else {
      this.props.onAddContact(this.state);

      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
        <div className={styles.ContactFormMessage}>
          <div>
            <CSSTransition
              in={true}
              appear={true}
              classNames={{ ...fadeStyles }}
              timeout={500}
              unmountOnExit
            >
              {(state) => <h2>Phonebook</h2>}
            </CSSTransition>
          </div>

          <CSSTransition
            in={this.state.mess}
            appear={true}
            classNames={{ ...NotificationFade }}
            timeout={1500}
            onEntered={() => {
              this.setState({ mess: false });
            }}
            unmountOnExit
          >
            <Notification name={this.state.name} />
          </CSSTransition>
        </div>

        <label className={styles.ContactFormLabel}>
          Name
          <input
            className={styles.ContactFormInput}
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label className={styles.ContactFormLabel}>
          Phone
          <input
            className={styles.ContactFormInput}
            type="text"
            value={number}
            onChange={this.handleChange}
            name="number"
          />
        </label>

        <button type="submit" className={styles.ContactFormButton}>
          Добавить контакт
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
