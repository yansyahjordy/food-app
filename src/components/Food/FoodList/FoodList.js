import React from "react";
import styles from "./FoodList.module.css"

export default function FoodList() {
  return (
    <>
      <p className={styles.ptext}>Tambahkan menu makanan yang ada di resto:</p>
      <div className={styles.container}>
        <button>+ Tambahkan Menu</button>
        <table class={styles.table}>
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
              <td>Sate Ayam</td>
              <td>
                <img src="https://via.placeholder.com/400" alt="food"></img>
              </td>
              <td>Rp.10.000</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>1</td>
              <td>Sate Ayam</td>
              <td>
                <img src="https://via.placeholder.com/400" alt="food"></img>
              </td>
              <td>Rp.10.000</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>1</td>
              <td>Sate Ayam</td>
              <td>
                <img src="https://via.placeholder.com/400" alt="food"></img>
              </td>
              <td>Rp.10.000</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>1</td>
              <td>Sate Ayam</td>
              <td>
                <img src="https://via.placeholder.com/400" alt="food"></img>
              </td>
              <td>Rp.10.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
