/* sayfanın en üstünde importlar yapılır */
/* ardından component yazılır */
/* en altta component export edilir */

/* 
  PROPS Mantığı:
  1. Componentlar arası veri alışverişi için kullanılır
  2. İhtiyacımıza göre özelleştirmek istediğimiz durumlarda kullanılır
  3. Props aşağıdan yukarıya GÖNDERİLEMEZ, hiyerarşik olarak
  yukarıdan aşağıya GÖNDERİLEBİLİR
  4. Prop olarak string,number, array, object, function gibi bütün veri
  türleri gönderilebilir.
*/
import React from "react";

import styles from "../assets/styles/button.module.css";

const Button = (props) => {
  console.log(props);

  if (props.isLink === true) {
    return (
      <a className={props.tip} href={props.link}>
        {props.text}
      </a>
    );
  }

  return (
    <button className={props.tip} onClick={props.tiklandiginda}>
      {props.text}
    </button>
  );
};

/* const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    console.log("butona tıkladın")
}) */

export default Button;
