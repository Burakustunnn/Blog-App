import axios from "axios";
import { useSelector } from "react-redux";

const baseURl=process.env.REACT_APP_BASE_URL

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosPublic = axios.create({
    baseURL: baseURl,
  });
  const axiosWithToken = axios.create({
    baseURL: baseURl,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosPublic, axiosWithToken };
};

export default useAxios;
