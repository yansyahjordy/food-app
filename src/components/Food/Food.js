import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Food.module.css";
import FoodList from "../FoodList/FoodList";
export default function Food() {
  const [rawData, setrawData] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URI + "/food")
      .then((x) => {
        setrawData(x.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        {rawData && <FoodList dataset={rawData} />}
      </div>
    </div>
  );
}
