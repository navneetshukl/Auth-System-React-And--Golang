import { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [name, setname] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const resposeData = await response.json();

      setname(resposeData.name);

      console.log(resposeData);
    })();
  });
  return (
    <>
      <BrowserRouter>
        <Nav name={name} setName={setname} />
        <Routes>
          <Route path="/" exact Component={() => <Home name={name} />} />
          <Route path="/login" Component={() => <Login setName={setname} />} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
