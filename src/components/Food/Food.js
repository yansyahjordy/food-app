import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Food.module.css";
import FoodList from "./FoodList/FoodList";
import TambahMenu from "./TambahMenu/TambahMenu";
export default function Food() {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <div className={styles.content}>
          <FoodList/>
          <TambahMenu/>
        </div>
      </div>
    </div>
  );
}
