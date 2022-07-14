import React from "react";
import styles from "./FoodList.module.css";

export default function FoodList({ dataset }) {
  return (
    <>
      <p className={styles.ptext}>Tambahkan menu makanan yang ada di resto:</p>
      <div className={styles.container}>
        <button onClick={() => (window.location.href = "/food/tambahmenu")}>
          + Tambahkan Menu
        </button>
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
            {dataset &&
              dataset.map((data, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td>{data.name}</td>
                  <td className={styles.image}>
                    <img src={data.picture} alt="food"></img>
                  </td>
                  <td>Rp.10.000</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
