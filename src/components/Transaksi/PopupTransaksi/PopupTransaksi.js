import React from "react";
import { useState } from "react";
import styles from "./PopupTransaksi.module.css";
export default function PopupTransaksi({ click, dataset, setDataset }) {
  const [uangPembeli, setUangPembeli] = useState(0);
  const [uangKembalian, setuangKembalian] = useState("-");
  const [isButtonOkActive, setisButtonOkActive] = useState(false);

  function HitungKembalian(pembeli) {
    let total = 0;
    dataset.map((a) => (total += a.count * a.price));

    if (isNaN(pembeli)) {
      setuangKembalian("tolong isi angka");
    } else if (total > pembeli) {
      setuangKembalian("Uang Tidak Cukup");
    } else {
      setisButtonOkActive(true);
      setuangKembalian(pembeli - total);
    }
  }

  function clearList() {
    setUangPembeli(0);
    setuangKembalian("-");
    setDataset([]);
    setisButtonOkActive(false);
    click();
  }
  return (
    <>
      <p className={styles.textHeader}>Detail Pesanan</p>
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
            {dataset &&
              dataset.map((data, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td>
                    {data.name} X {data.count}
                  </td>
                  <td>
                    <img src={data.picture} alt="food"></img>
                  </td>
                  <td>{data.count * data.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className={styles.line}></div>
        <div className={styles.kembalian}>
          <p>Uang Pembeli (Rp.)</p>
          <input
            onChange={(e) => setUangPembeli(e.target.value)}
            value={uangPembeli}
          ></input>
          <div className={styles.popupButton}>
            <button className={styles.button1} onClick={() => click()}>
              Close
            </button>
            <button
              className={styles.button2}
              onClick={() => HitungKembalian(uangPembeli)}
            >
              Pay!
            </button>
          </div>
          <div className={styles.kembalianText}>
            <p>Kembalian : </p>
            <p id="banyakKembalian">{uangKembalian}</p>
          </div>
          {isButtonOkActive && (
            <button className={styles.button3} onClick={() => clearList()}>
              OK!
            </button>
          )}
        </div>
      </div>
    </>
  );
}
