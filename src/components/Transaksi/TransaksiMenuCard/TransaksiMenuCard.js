import React from "react";
import style from "./TransaksiMenuCard.module.css";
export default function TransaksiMenuCard() {
  return (
    <>
      <div className={style.container}>
        <img src="https://via.placeholder.com/400" alt="food" />
        <div className={style.text}>
          <p className={style.uptext}>Sate</p>
          <p className={style.downtext}>Rp.10.000</p>
        </div>
      </div>
    </>
  );
}
