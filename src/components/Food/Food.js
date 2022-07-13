import React, { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "../Navbar/Navbar";
import styles from "./Food.module.css";
import FoodList from "./FoodList/FoodList";
import TambahMenu from "./TambahMenu/TambahMenu";
export default function Food() {
  const url = "https://api-test.alan.co.id/api/v1/food";
  const [rawData, setrawData] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((x) => {
        setrawData(x.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log("rawData",rawData)
  return (
    <div>
      <div className={styles.app}>
        <div className={styles.content}>
          {rawData && <FoodList dataset={rawData} />}
          {/* <TambahMenu/> */}
        </div>
      </div>
    </div>
  );
}
