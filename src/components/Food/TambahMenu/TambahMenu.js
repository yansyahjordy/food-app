import React from "react";
import { useState } from "react";
import styles from "./TambahMenu.module.css";
import axios from "axios";

export default function TambahMenu() {
  const [foodName, setFoodName] = useState("bakso");
  const [foodImage, setFoodImage] = useState(
    "https://api-test.alan.co.id/storage/food/FOOD-2722260709132316395.png"
  );
  const posturl = "https://api-test.alan.co.id/api/v1/food/add";
  async function PostData() {
    let newData = {};
    newData.name = foodName;
    newData.picture = foodImage;
    newData.price = 10000;
    newData.satuan = "piring";
    const config = {
      headers: {
        "X-SECRET-TOKEN":
          "$2a$16$TlB6hYDRMSF5HBgxImeaU.itfBOu881/lI4mSPMR0jYRnMXklQKp6",
      },
    };
    await axios.post(posturl, newData, config);
  }
  function simpanData (){
    PostData();
    window.location.href="/food"
  }

  return (
    <>
      <div className={styles.app}>
        <div className={styles.content}>
          <div className={styles.container}>
            <p className={styles.ptext}>Tambahkan Menu</p>
            <div>
              <p>Nama Menu</p>
              <input
                value={foodName}
                onChange={(e) => {
                  setFoodName(e.target.value);
                }}
              ></input>
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
              <button onClick={()=>simpanData()}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
