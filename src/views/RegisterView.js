import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { NotificationContainer } from "react-notifications";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
};

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              autoComplete="username"
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              autoComplete="current-password"
              onChange={this.handleChange}
            />
          </label>

          {/* <button type="submit">Register</button> */}
          <Button as="input" type="submit" value="Register" />
          {""}
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView
);
