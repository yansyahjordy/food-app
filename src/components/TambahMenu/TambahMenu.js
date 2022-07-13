import React from "react";
import { useState } from "react";
import styles from "./TambahMenu.module.css";
import axios from "axios";
import Dropzone from "react-dropzone";

export default function TambahMenu() {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [price, setPrice] = useState("");

  const posturl = "https://api-test.alan.co.id/api/v1/food/add";
  const config = {
    headers: {
      "X-SECRET-TOKEN":
        "$2a$16$TlB6hYDRMSF5HBgxImeaU.itfBOu881/lI4mSPMR0jYRnMXklQKp6",
    },
  };

  function PostData() {
    axios
      .post(
        posturl,
        {
          name: foodName,
          picture: foodImage,
          price,
          satuan: "piring",
        },
        config
      )
      .then((resp) => {
        console.log(resp);
        window.location.href = "/food";
      })
      .catch((err) => console.log(err));
  }

  const uploadImage = async (e) => {
    const file = e[0];
    const base64 = await convertBase64(file);
    setFoodImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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
              <Dropzone onDrop={(acceptedFiles) => uploadImage(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section className={styles.dragDrop}>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Drag and drop some files here, or click</p>
                    </div>
                    {foodImage && (
                      <img
                        src={foodImage}
                        className={styles.dropimage}
                        alt=""
                      ></img>
                    )}
                  </section>
                )}
              </Dropzone>
            </div>
            <div>
              <p>Nama Menu</p>
              <div className={styles.inputRp}>
                <div className={styles.Rp}>Rp.</div>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                ></input>
              </div>
            </div>
            <div className={styles.btn}>
              <button onClick={() => PostData()}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
