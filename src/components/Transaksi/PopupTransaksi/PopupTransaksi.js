import React from "react";
import styles from "./PopupTransaksi.module.css"
export default function PopupTransaksi() {
  return (
    <>
      <p>Detail Pesanan</p>
      <div className={styles.popupContent}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "45%", textAlign: "left" }}>Nama</th>
              <th style={{ width: "15%", textAlign: "left" }}>Foto</th>
              <th style={{ width: "30%", textAlign: "left" }}>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>1</td>
              <td>asdasd</td>
              <td>
                <img src="" alt="food"></img>
              </td>
              <td>Rp.10.000</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.line}></div>
        <div className={styles.kembalian}>
          <p>Uang Pembeli (Rp.)</p>
          <input></input>
          <div className={styles.popupButton}>
            <button>Close</button>
            <button>Pay!</button>
          </div>
          <p>Kembalian : </p>
        </div>
      </div>
    </>
  );
}
