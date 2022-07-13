import React from "react";
import style from "./ModalSaved.module.css"

export default function ModalSaved({click}) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.interior}>
            <p>Your Data is Saved!</p>
            <button onClick={()=>click()}>Okey</button>
        </div>
      </div>
    </div>
  );
}
