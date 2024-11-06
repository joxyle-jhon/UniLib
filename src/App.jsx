import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/custom/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Welcome to the Library Management System</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
