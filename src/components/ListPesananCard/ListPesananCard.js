import React from "react";
import style from "./ListPesananCard.module.css";
export default function ListPesananCard({ dataset }) {
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.image}>
            <img
              src={
                dataset.picture === ""
                  ? "https://via.placeholder.com/400"
                  : dataset.picture
              }
              alt="food"
            />
          </div>
          <div className={style.food}>{dataset.name}</div>
        </div>
        <div className={style.quantity}>
          <div className={style.uptext}>{dataset.count}x</div>
          <div className={style.downtext}>Rp.{dataset.price}</div>
        </div>
      </div>
    </>
  );
}
