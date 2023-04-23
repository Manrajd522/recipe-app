import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignUp from "./component/SignUp";

import Recipeitems from "./component/Recipeitems";

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
