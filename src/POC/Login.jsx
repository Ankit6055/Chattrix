import React from "react";
import { useNavigate } from "react-router";

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    // alert("handleLogin");
    navigate("/");
  };

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login With Google</button>
    </>
  );
};

export default Login;
