import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Login from "./Login";

const Routing_App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div>Routing App</div>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
      </Routes>
    </>
  );
};

function ProtectedRoute(props) {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  if (isLoggedIn) {
    return <Home setIsLoggedIn={setIsLoggedIn}/>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default Routing_App;
