import axios from "axios";
import authActions from "./authActions";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => {
      dispatch(authActions.registerError(error));
      NotificationManager.error("Заполните правильно все поля!", "", 1000);
    }
    )
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => {
    
      dispatch(authActions.loginError(error));
      NotificationManager.error("Пользователь не найден!", "", 1000)
    }
    )
    
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => authActions.getCurrentUserError(error));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

export default { register, logOut, logIn, getCurrentUser };
