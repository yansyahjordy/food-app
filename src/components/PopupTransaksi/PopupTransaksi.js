import React from "react";
import { useState } from "react";
import styles from "./PopupTransaksi.module.css";
export default function PopupTransaksi({
  click,
  dataset,
  setDataset,
  rawData,
}) {
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
    rawData.forEach((x) => {
      x.count = 0;
    });
    setDataset([]);
    setisButtonOkActive(false);
    click();
  }

  return (
    <>
      <p className={styles.textHeader}>Detail Pesanan</p>
      <div className={styles.popupContent}>
        <div className={styles.tableWrapper}>
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
              {dataset ? (
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
                ))
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.line}></div>
        <div className={styles.kembalian}>
          <div className={styles.text}>Uang Pembeli (Rp)</div>
          <input
            type={"text"}
            onChange={(e) => setUangPembeli(e.target.value)}
            value={uangPembeli}
          />
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
            <div className={styles.buttonWrapper}>
              <button className={styles.button3} onClick={() => clearList()}>
                OK!
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
