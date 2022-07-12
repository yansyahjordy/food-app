import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Transaksi.module.css";
import icon from "../../assets/chef.png";
import TransaksiMenuCard from "./TransaksiMenuCard/TransaksiMenuCard";
import ListPesananCard from "./ListPesananCard/ListPesananCard";

export default function Transaksi() {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <div className={styles.content}>
          <div className={styles.menu}>
            <TransaksiMenuCard/>
            <TransaksiMenuCard/>
            <TransaksiMenuCard/>
            <TransaksiMenuCard/>
            <TransaksiMenuCard/>
            <TransaksiMenuCard/>
            <TransaksiMenuCard/>
          </div>
          <div className={styles.pesanan}>
            <div className={styles.logo}>
              <img src={icon} alt="icon"></img>
              <p>Pesanan</p>
            </div>
            <div className={styles.listPesanan}>
            <ListPesananCard/>
            <ListPesananCard/>
            <ListPesananCard/>
            <ListPesananCard/>
            <ListPesananCard/>
            <ListPesananCard/>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>
                <button>Clear Cart</button>
              </div>
              <div className={styles.button2}>
                <button>Save Bill</button> <button>Print Bill</button>
              </div>
              <div className={styles.button3}>
                <button>Charge Rp 40.000</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
