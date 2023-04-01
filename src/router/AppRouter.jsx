import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import CssBaseline from '@mui/material/CssBaseline';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <CssBaseline/>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="newblog" element={<NewBlog/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
