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
  const [data, setData] = useState([]);

  const url = "https://api-test.alan.co.id/api/v1/food";
  async function getData() {
    try {
      await axios.get(url).then((x) => setData(x.data.data));
    } catch (e) {
      console.log("error: " + e);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  // console.log(data,"data");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Transaksi dataset={data} />}></Route>
        <Route path="/food" element={<Food dataset={data} />}></Route>
        <Route path="/food/tambahmenu" element={<TambahMenu />}></Route>
      </Routes>
      <div></div>
    </Router>
  );
}

export default App;
