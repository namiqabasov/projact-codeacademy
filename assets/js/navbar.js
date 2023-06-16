const myul = document.querySelector(".myul");
const bars = document.querySelector(".bars");
const remove = document.querySelector(".remove");
const hamburger = document.querySelector(".hamburger");
const searchinput = document.querySelector(".search-input");

bars.addEventListener("click", function () {
  myul.classList.add("activebar");
  hamburger.classList.add("is-active");
});
remove.addEventListener("click", function () {
  myul.classList.remove("activebar");
  hamburger.classList.remove("is-active");
});

// nav position

const navbar = document.querySelector("nav");
function navscrol() {
  let myscrol = window.scrollY;
  if (myscrol < 300) {
    navbar.classList.remove("navbox");
  } else {
    navbar.classList.add("navbox");
  }
  if (myscrol > 300) {
    myinput.classList.remove("activinput");
    searchinput.value = "";
    input_item.innerHTML = "";
  }
}
window.addEventListener("scroll", navscrol);

// nav position

//input ucun

const input_item = document.querySelector(".input_item");
const Searchi = document.querySelector(".Searchi");
const myinput = document.querySelector(".myinput");
const inputremov = document.querySelector(".inputremov");
Searchi.addEventListener("click", function () {
  myinput.classList.add("activinput");
});
inputremov.addEventListener("click", function () {
  myinput.classList.remove("activinput");
  searchinput.value = "";
  input_item.innerHTML = "";
});

async function imputFetch() {
  const res = await fetch("http://localhost:3000/post");
  const data = await res.json();
  data.forEach((element) => {
    if (
      element.name
        .toLocaleLowerCase()
        .includes(searchinput.value.toLocaleLowerCase())
    ) {
      inputCReate(element);
    }
  });
}

//basget and wishlist

let basketarr = [];

basketarr = JSON.parse(localStorage.getItem("basket"));

let wishlistarr = [];

wishlistarr = JSON.parse(localStorage.getItem("wishlist"));

function inputCReate(element) {
  const mydiv = document.createElement("div");
  const creddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const myimg = document.createElement("img");
  const p = document.createElement("p");
  const h3 = document.createElement("h3");
  const a = document.createElement("a");

  imgdiv.className = "imgdiv";
  mydiv.classList.add("card");
  myimg.src = element.img_src;
  a.innerHTML = element.name;
  p.innerText = element.price + "$";
  a.href = `http://127.0.0.1:5501/my-project/itemabout.html#${element.id}`;

  creddiv.classList.add("myCreput");
  imgdiv.append(myimg);
  h3.append(a);
  creddiv.append(h3);
  mydiv.append(creddiv, imgdiv, p);
  input_item.append(mydiv);
}

const position = document.querySelector(".position");

searchinput.addEventListener("keyup", function () {
  imputFetch();
  input_item.innerHTML = "";
});
