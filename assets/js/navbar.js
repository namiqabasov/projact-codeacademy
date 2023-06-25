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
//icons page
const blog_icon = document.querySelector(".blog_icon");
const hom_icon = document.querySelector(".hom_icon");
const home_li = document.querySelector(".home_li");
const blog_li = document.querySelector(".blog_li");
blog_icon.addEventListener("click", function () {
  blog_li.classList.toggle("active_blog_li");
  blog_icon.classList.toggle("transform_icon");
});
hom_icon.addEventListener("click", function () {
  home_li.classList.toggle("active_home_li");
  hom_icon.classList.toggle("transform_icon");
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
  imputFetch();
});
inputremov.addEventListener("click", function () {
  myinput.classList.remove("activinput");
  searchinput.value = "";
  input_item.innerHTML = "";
});

async function imputFetch() {
  const res = await fetch("https://namiq-myapi.onrender.com/data/post");
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
  a.href = `itemabout.html#${element.id}`;

  creddiv.classList.add("myCreput");
  imgdiv.append(myimg);
  h3.append(a);
  creddiv.append(h3);
  mydiv.append(creddiv, imgdiv, p);
  input_item.append(mydiv);
}

const position = document.querySelector(".position");
searchinput.addEventListener("keyup", function () {
  input_item.innerHTML = "";
  imputFetch();
});

//login ucun

const mylogin = document.querySelector(".mylogin");
const mynumber = document.querySelector(".mynumber");

if (localStorage.getItem("user")) {
  console.log(JSON.parse(localStorage.getItem("user")));
  const mail = JSON.parse(localStorage.getItem("user")).mail;
  const name = JSON.parse(localStorage.getItem("user")).name;
  const lastname = JSON.parse(localStorage.getItem("user")).lastname;

  mylogin.innerHTML = "";
  mynumber.innerText = mail;

  const div = document.createElement("div");
  const btn = document.createElement("button");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.innerText = name;
  p.innerText = lastname;
  btn.innerText = "SING OUT";

  btn.addEventListener("click", function () {
    localStorage.removeItem("user");
    window.location.reload();
  });
  div.append(h2, p);
  mylogin.append(div, btn);
} else {
  mylogin.innerHTML = `<a href="login.html?#">login</a>`;
}
