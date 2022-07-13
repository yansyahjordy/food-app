import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
import styles from "./Transaksi.module.css";
import icon from "../../assets/chef.png";
import TransaksiMenuCard from "./TransaksiMenuCard/TransaksiMenuCard";
import ListPesananCard from "./ListPesananCard/ListPesananCard";

export default function Transaksi({dataset}) {
  function DoubleClick (e){
    // console.log(e.target.id)
    dataNew.forEach(x => {
      if (x.food_code === e.target.id){
        x.count ++
        console.log (x.count)
      }
    });
  }
  let dataNewFiltered
  let dataNew 
  dataNew = dataset.map(x => {return{...x, price :10000,count : 1}} );
  dataNewFiltered = dataNew.filter(x => x.count > 0);

  // useEffect(() => {
  // }, [])
  
  // useEffect(() => {
  //   }
  // , [dataNew])
  
  console.log(dataNewFiltered)
 
  // console.log(dataNew,"newdata")
  // console.log(dataset)
  return (
    <div>
      <div className={styles.app}>
        <div className={styles.content}>
          <div className={styles.menu}>
            {dataset.map((data)=>(
              <TransaksiMenuCard dataset={data} click={DoubleClick}/>
            ))}
          </div>
          <div className={styles.pesanan}>
            <div className={styles.logo}>
              <img src={icon} alt="icon"></img>
              <p>Pesanan</p>
            </div>
            <div className={styles.listPesanan}>
            {dataNewFiltered.map((data)=>(
              <ListPesananCard dataset={data}/>
            ))}
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
