import React from "react";
import styles from './TambahMenu.module.css'

export default function TambahMenu() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.ptext}>Tambahkan Menu</p>
        <div>
          <p>Nama Menu</p>
          <input></input>
        </div>
        <div>
          <p>Nama Menu</p>
          <input></input>
        </div>
        <div>
          <p>Nama Menu</p>
          <div className={styles.inputRp}>
            <div className={styles.Rp}>Rp.</div>
            <input></input>
          </div>
        </div>
        <div className={styles.btn}>
          <button>Simpan</button>
        </div>
      </div>
    </>
  );
}
