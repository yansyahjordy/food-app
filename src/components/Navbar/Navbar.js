import React from "react";
import { useState } from "react";

import styles from "./Navbar.module.css";
import icon from "../../assets/fast-food.png";
export default function Navbar() {
  const [activeTab, setActiveTab] = useState("food")

  return (
    <div className={styles.fixed}>
      <div className={styles.backgroundBlue}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={icon} alt="" />
            <p>Alan Resto</p>
          </div>
        </div>
      </div>
      <div className={styles.backgroundWhite}>
        <div className={styles.containerNav}>
          <div className={styles.wrapperNav}>
            <div
              className={
                activeTab === "food"
                  ? `${styles.nav} ${styles.active}`
                  : styles.nav
              } onClick={()=>setActiveTab("food")}
            >
              <a href="/food" >Food</a>
            </div>
            <div
              className={
                activeTab === "transaksi"
                  ? `${styles.nav} ${styles.active}`
                  : styles.nav
              } onClick={()=>setActiveTab("transaksi")}
            >
              <a href="/" >Transaksi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
