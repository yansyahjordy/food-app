import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import icon from "../../assets/fast-food.png";
export default function Navbar() {
  const { pathname } = useLocation();

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
        <div className={styles.wrapperNav}>
          <div
            className={
              pathname === "/food"
                ? `${styles.nav} ${styles.active}`
                : styles.nav
            }
          >
            <a href="/food">Food</a>
          </div>
          <div
            className={
              pathname === "/" ? `${styles.nav} ${styles.active}` : styles.nav
            }
          >
            <a href="/">Transaksi</a>
          </div>
        </div>
      </div>
    </div>
  );
}
