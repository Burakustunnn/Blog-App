import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = "http://32181.fullstack.clarusway.com/";

  //   Login -----
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed ");
    }
  };

  //   Logout---
  const Logout = async () => {
    dispatch(fetchStart());

    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed ");
    }
  };

  //   Register
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };

  return { login, Logout, register };
};

export default useAuthCall;
