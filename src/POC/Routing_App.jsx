import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Login from "./Login";

const Routing_App = () => {
  return (
    <>
    <div>Routing App</div>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
    </Routes>
    </>
  );
};

export default Routing_App;
