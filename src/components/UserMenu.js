/*
 * TODO: Подписаться на name и avatar https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg
 * TODO: диспатч операцию logout
 */
import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    {/* <button type="button" onClick={onLogout}> */}
      {/* Logout */}
    {/* </button> */}
    <Button variant="link" onClick={onLogout}>>Logout</Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
