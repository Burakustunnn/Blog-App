import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../components/Footer";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/Register";
import MyBlogs from "../pages/MyBlogs";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
