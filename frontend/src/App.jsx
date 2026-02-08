import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Home from "./pages/user/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
