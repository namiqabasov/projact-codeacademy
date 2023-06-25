//basget ucun
const wishlist_leng = document.querySelector(".wishlist_leng");
const basget_leng = document.querySelector(".basget_leng");

let basket_arr = [];
let wishlist_arr = [];

//data ucun localstorage
window.onload = function () {
  if (localStorage.getItem("basket") !== null) {
    basket_arr = JSON.parse(localStorage.getItem("basket"));
    basget_leng.innerHTML = basket_arr.length;
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
    wishlist_leng.innerHTML = wishlist_arr.length;
  }
};

//product ucun
const myproduct = document.querySelector(".myproduct");
const hot_product = document.querySelector(".hot_product");

async function product_fetch() {
  const res = await fetch(`https://namiq-myapi.onrender.com/data/post`);
  const data = await res.json();
  data.forEach((element) => {
    product_creat(element);
  });
}

function product_creat(data) {
  const mydiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const aboutdiv = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const a = document.createElement("a");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  //innerText
  img.src = data.img_src;
  a.innerText = data.name;
  h3.innerText = data.price + "$";
  p.innerText = data.command;
  a.href = `itemabout.html#${data.id}`;

  //classlist

  mydiv.classList.add("card");
  imgdiv.classList.add("img_sec");
  aboutdiv.classList.add("about");

  //append
  h2.appendChild(a);
  imgdiv.appendChild(img);
  aboutdiv.append(h2, h3, p);
  mydiv.append(imgdiv, aboutdiv);
  myproduct.appendChild(mydiv);
}

async function hot_product_fetch() {
  const res = await fetch(`https://namiq-myapi.onrender.com/data/post`);
  const data = await res.json();
  data.forEach((element) => {
    if (element.sale === "SALE!") {
      hot_product_creat(element);
    }
  });
}

function hot_product_creat(data) {
  const mydiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const aboutdiv = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const a = document.createElement("a");
  const h3 = document.createElement("h3");

  //innerText
  img.src = data.img_src;
  a.innerText = data.name;
  h3.innerText = data.price + "$";

  a.href = `itemabout.html#${data.id}`;

  const myp = document.createElement("p");
  myp.innerText = "";
  if (data.sale !== "false") {
    myp.innerText = "SALE!";
    myp.classList.add("sale");
  }

  //classlist

  mydiv.classList.add("card");
  imgdiv.classList.add("img_sec");
  aboutdiv.classList.add("about");

  h2.appendChild(a);
  imgdiv.appendChild(img);
  aboutdiv.append(h2, h3, myp);
  mydiv.append(imgdiv, aboutdiv);
  hot_product.appendChild(mydiv);
}

product_fetch();
hot_product_fetch();
