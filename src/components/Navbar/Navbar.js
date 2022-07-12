import React from "react";
import styles from "./Navbar.module.css";
import icon from "../../assets/fast-food.png";
export default function Navbar() {
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
            <div className={styles.nav}>
              <a href="/">Food</a>
            </div>
            <div className={styles.nav}>
              <a href="/">Transaksi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
