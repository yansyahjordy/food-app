import React from 'react'
import style from "./ListPesananCard.module.css"
export default function ListPesananCard() {
  return (
    <>
    <div className={style.container}>
      <div className={style.image}>
        <img src="https://via.placeholder.com/400" alt="food"></img>
      </div>
      <div className={style.food}>
        Sate Ayam
      </div>
      <div className={style.quantity}>
        <div className={style.uptext}>x1</div>
        <div className={style.downtext}>Rp.10.000</div>
      </div>
    </div>
    </>
  )
}
