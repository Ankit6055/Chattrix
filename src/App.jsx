import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Whatsapp Clone</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chat/:uniqueId" element={<Chat />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
