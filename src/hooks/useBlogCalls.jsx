import { useDispatch } from "react-redux";
import {
  fetchStart,
  getSuccess,
  fetchFail,
  getDetailSuccess,
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { axiosPublic, axiosWithToken } = useAxios();
  // const  currentUserID  = useSelector((state) => state.auth.currentUser.id);

  //Blogs
  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      if (!url.includes("/")) {
        const { data } = await axiosPublic(`api/${url}/`);
        dispatch(getSuccess({ data, url }));
      } else {
        const { data } = await axiosWithToken(`api/${url}`);
        url = "myBlogs";
        dispatch(getSuccess({ data, url }));
      }

      //url.includes('/') && dispatch(getDetailSuccess({data}))
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  // const controlUrl = url.includes("/")
  //   controlUrl
  //     ? dispatch(getDetailSuccess({ data }))
  //     : dispatch(getSuccess({ data, url }))

  // url.includes('/') || dispatch(getSuccess({data, url}))
  // url.includes('/') && dispatch(getDetailSuccess({data}))

  // Details
  const getDetailData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/${url}/`);
      dispatch(getDetailSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  // post BLog
  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);
      getBlogData(url);
      toastSuccessNotify(`${url} successfuly posted`);
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };

  // LİKE POST

  const addLike = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${id}/`);
      toastSuccessNotify(`successfully`);
      getBlogData("blogs");
      getDetailData(`blogs/${id}`);
    } catch (error) {
      toastErrorNotify(`Error`);
    }
  };

  //DELETE BLOG

  const deleteBlog = async (url) => {
    try {
      await axiosWithToken.delete(`api/${url}`);
      navigate("/");
      toastSuccessNotify("Blog successfuly deleted");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  //EDİT
  const putBlogData = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`api/${url}/${id}/`, info);
      getDetailData(`${url}/${id}`);
      toastSuccessNotify(`${url} successfuly updated`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be update`);
    }
  };

  //COMMENT
  const addComment = async (url, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, data);
      getDetailData(`blogs/${data.post}`);
      toastSuccessNotify("Comment is successfuly added");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Comment can not be added");
    }
  };

  return {
    getBlogData,
    postBlogData,
    addLike,
    deleteBlog,
    putBlogData,
    addComment,
    getDetailData,
  };
};
export default useBlogCalls;
