import React from "react";
import ListBlogs from "./components/ListBlogs";
import Button from "./components/Button";
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
const blogsFromAPI = [
  {
    id: "1",
    img: "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg",
    title: "Blog1",
    summary: "dsffdsf dsfsdf dsfdsf fsdfdsfsdf",
    link: "https://medium.com/@emreharman/redux%C4%B1-anlamak-bbe41ee72817",
  },
  {
    id: "2",
    img: "https://static.ticimax.cloud/42449/uploads/urunresimleri/buyuk/doga-manzara-duvar-kagidi-0d4-ab.jpg",
    title: "Blog2",
    summary: "dsffdsf dsfsdf dsfdsf fsdfdsfsdf fgdfg fdgfdg",
    link: "https://stackoverflow.com/questions/7613546/increase-font-size-chrome-console",
  },
  {
    id: "3",
    img: "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg",
    title: "Blog1",
    summary: "dsffdsf dsfsdf dsfdsf fsdfdsfsdf",
    link: "https://medium.com/@emreharman/redux%C4%B1-anlamak-bbe41ee72817",
  },
  {
    id: "4",
    img: "https://static.ticimax.cloud/42449/uploads/urunresimleri/buyuk/doga-manzara-duvar-kagidi-0d4-ab.jpg",
    title: "Blog2",
    summary: "dsffdsf dsfsdf dsfdsf fsdfdsfsdf fgdfg fdgfdg",
    link: "https://stackoverflow.com/questions/7613546/increase-font-size-chrome-console",
  },
  {
    id: "5",
    img: "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg",
    title: "Blog1",
    summary: "dsffdsf dsfsdf dsfdsf fsdfdsfsdf",
    link: "https://medium.com/@emreharman/redux%C4%B1-anlamak-bbe41ee72817",
  },
  {
    id: "6",
    img: "https://static.ticimax.cloud/42449/uploads/urunresimleri/buyuk/doga-manzara-duvar-kagidi-0d4-ab.jpg",
    title: "Blog2",
    summary: "dsffdsf dsfsdf dsfdsf fsdfdsfsdf fgdfg fdgfdg",
    link: "https://stackoverflow.com/questions/7613546/increase-font-size-chrome-console",
  },
];

function App() {
  const girisYapildiMi = true;
  const rol="admin"
  return (
    <div>
      <h1>BLOGS</h1>
      {
        girisYapildiMi === false && (<Button text={"Login"} tip="primary" />)
      }
      {girisYapildiMi === true ? (
        <ListBlogs blogs={blogsFromAPI} />
      ) : (
        <p>Blog yazılarını görebilmek için öncelikle giriş yapmanız lazım</p>
      )}
      {
        rol==="admin" && (<a href="#">Admin Paneline git</a>)
      }
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
