import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
