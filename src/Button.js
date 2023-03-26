/* sayfanın en üstünde importlar yapılır */
/* ardından component yazılır */
/* en altta component export edilir */
import React from "react";

const Button = () => {
  return (
    <div>
      <button onClick={()=>{console.log("butona tıkladın")}}>Ben İlk Component'ım</button>
    </div>
  );
};

/* const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    console.log("butona tıkladın")
}) */

export default Button;
