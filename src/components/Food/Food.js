import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Food.module.css";
import FoodList from "../FoodList/FoodList";
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
  return (
    <div>
      <div className={styles.app}>
        <div className={styles.content}>
          {rawData && <FoodList dataset={rawData} />}
        </div>
      </div>
    </div>
  );
}
