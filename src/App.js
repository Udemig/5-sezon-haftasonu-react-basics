import React from "react";
import Button from "./Button";
/* 
  React için Component
  1. Biz function component kullanacağız. Bu yüzden component'larımız fonksiyon
  olacak.
  2. Yazdığımız fonksiyonun component olabilmesi için bir kaç kural vardır:
    -> fonksiyonun ismi büyük harfle başlamalıdır
    -> component'lar MUTLAKA bir RETURN satırına sahip olmalıdır.
    Yani component ekrana ne basılacaksa (JSX) bunu return etmelidir (döndürmelidir)
*/
/* 
  JSX Syntax
  ->kullanıcılar html yazar gibi kod yazsınlar, biz bunu arka planda 
  js koduna dönüştürelim
  JSX Kurallar:
  -> HTML etiketleri gibi etiketler yazılabilir
  -> html tarafında yazılan attributeler JSX tarafında
  biraz farklılık gösterir (class -> className, for->htmlFor)
  -> JSX içerisinde JS kodu yazılabilir! AMA BU JS KODLARI TEK SATIRLIK
  JS KODLARI OLMALI. JSX içerisine JS kodu yazabilmek için {} süslü
  parantez açılır ve kapatılır
  -> Return satırında döndürülen jsx kodları TEK BİR PARENT'TAN oluşmalıdır
  -> HTML tarafında self closed elementler <img> şeklinde kapanırken
  jsx yazımında <img/> şeklinde kapanır
*/

function App() {
  const myName = "Emre";
  return (
    <div>
      <div className="App">
        {console.log("ben jsx içerisinde js koduyum")}
        <h1>Hello {myName}</h1>
      </div>
      <div>
        <p>fdgdfgdf</p>
      </div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

/* const div=document.createElement("div")
div.classList.add("App")
const h1=document.createElement("h1")
h1.innerHTML="Hello React"
h1.style.color="red"
div.appendChild(h1) */

export default App;

/* const printName=(isim)=>{
  console.log(isim)
}

printName("emre")

const topla=(sayi1,sayi2)=>{
  return sayi1+sayi2
}

const toplam=topla(5,10) */
