import React from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { Registered } from "./Components/Registered";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/registered" element={<Registered />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
