import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Food from "./components/Food/Food";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Transaksi from "./components/Transaksi/Transaksi";
import TambahMenu from "./components/Food/TambahMenu/TambahMenu";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Transaksi />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/food/tambahmenu" element={<TambahMenu />}></Route>
      </Routes>
      <div></div>
    </Router>
  );
}

export default App;
