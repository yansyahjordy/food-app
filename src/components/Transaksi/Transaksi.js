import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Transaksi.module.css";
import icon from "../../assets/chef.png";
import TransaksiMenuCard from "./TransaksiMenuCard/TransaksiMenuCard";
import ListPesananCard from "./ListPesananCard/ListPesananCard";
import PopupTransaksi from "./PopupTransaksi/PopupTransaksi";

export default function Transaksi({ dataset }) {
  const [togglePop, setTogglePop] = useState(false);
  const [rawData, setrawData] = useState([]);
  const [listMenuBuy, setlistMenuBuy] = useState("");

  const url = "https://api-test.alan.co.id/api/v1/food";

  useEffect(() => {
    axios
      .get(url)
      .then((x) => {
        let data = x.data.data;
        data = data.map((ef) => {
          return { ...ef, price: 10000, count: 0 };
        });
        setrawData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function DoubleClick(e) {
    rawData.forEach((x) => {
      if (x.food_code === e.target.id) {
        x.count++;
      }
    });
    setlistMenuBuy(rawData.filter((x) => x.count > 0));
  }

  function ResetOrder(e) {
    rawData.forEach((x) => {
      x.count = 0;
    });
    setlistMenuBuy([]);
  }

  function togglePopup() {
    setTogglePop(!togglePop);
  }

  return (
    <div>
      <div className={styles.app}>
        <div className={styles.content}>
          <div className={styles.menu}>
            {rawData &&
              rawData.map((data) => (
                <TransaksiMenuCard
                  key={data.food_code}
                  dataset={data}
                  click={DoubleClick}
                />
              ))}
          </div>
          <div className={styles.pesanan}>
            <div className={styles.logo}>
              <img src={icon} alt="icon"></img>
              <p>Pesanan</p>
            </div>
            <div className={styles.listPesanan}>
              {listMenuBuy.length > 0 &&
                listMenuBuy.map((data) => (
                  <ListPesananCard key={data.food_code} dataset={data} />
                ))}
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>
                <button onClick={() => ResetOrder()}>Clear Cart</button>
              </div>
              <div className={styles.button2}>
                <button onClick={() => alert("Saved")}>Save Bill</button>{" "}
                <button onClick={() => window.print()}>Print Bill</button>
              </div>
              <div className={styles.button3}>
                <button onClick={() => togglePopup()}>Charge Rp 40.000</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          togglePop ? `${styles.popup} ${styles.activePop}` : styles.popup
        }
      >
        <PopupTransaksi click={togglePopup} />
      </div>
      <div
        className={
          togglePop ? `${styles.blackBg} ${styles.activePop}` : styles.blackBg
        }
      ></div>
    </div>
  );
}
