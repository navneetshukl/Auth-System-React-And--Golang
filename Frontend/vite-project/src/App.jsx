import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav/>
      <Login />
    </>
  );
}

export default App;
