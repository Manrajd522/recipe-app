import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

import Recipeitems from "./Recipeitems";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Recipeitems" element={<Recipeitems />} />
      </Routes>
    </>
  );
}

export default App;
