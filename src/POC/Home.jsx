import React from "react";

const Home = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logout");
  };
  return (
    <div>
      <h2>Homepage</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
