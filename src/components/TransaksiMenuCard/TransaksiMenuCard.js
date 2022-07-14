import React from "react";
import style from "./TransaksiMenuCard.module.css";
export default function TransaksiMenuCard({ dataset, click }) {
  return (
    <div className={style.container} onClick={() => click(dataset.food_code)}>
      <img
        src={
          (dataset.picture = ""
            ? "https://via.placeholder.com/400"
            : dataset.picture)
        }
        alt="food"
      />
      <div className={style.text}>
        <p className={style.uptext}>{dataset.name}</p>
        <p className={style.downtext}>Rp.10.000</p>
      </div>
    </div>
  );
}
