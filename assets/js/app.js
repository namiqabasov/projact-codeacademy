const mycards = document.querySelector(".mycards");
const autoplay = document.querySelector(".autoplay");

//animation

const Discover = document.querySelector(".Discover");
const easily = document.querySelectorAll(".easily");
const myroom1 = document.querySelector(".myroom1");
const myroom2 = document.querySelector(".myroom2");
const myroom3 = document.querySelector(".myroom3");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  Discover.style.backgroundPositionX = -scrollPosition + "px";
});

function scroll_animate() {
  let myscrol = window.scrollY;

  if (myscrol > 200) {
    easily.forEach((element) => {
      element.style.cssText = `
    opacity:1;
    top:50%;

    `;
    });
  } else {
    easily.forEach((element) => {
      element.style.cssText = `
    opacity:0;
    top:55%;

    `;
    });
  }
  if (myscrol > 700) {
    easily.forEach((element) => {
      element.style.cssText = `
    opacity:0;
    top:55%;
    `;
    });
  }
  if (myscrol > 500) {
    myroom1.style.cssText = `
    opacity:1;  
    transition: 0.5s;

    `;
    myroom2.style.cssText = `
    opacity:1;  
    transition: 1.5s;

    `;
    myroom3.style.cssText = `
    opacity:1;  
    transition: 2s;
    `;
  } else {
    myroom1.style.cssText = `
  opacity:0;  
  transition: 2s;

  `;
    myroom2.style.cssText = `
  opacity:0;
  transition: 1.5s;

  `;
    myroom3.style.cssText = `
  opacity:0;  
  transition: 0.5s;

  `;
  }
  if (myscrol > 1400) {
    myroom1.style.cssText = `
    opacity:0; 
  transition: 2s;

    `;
    myroom2.style.cssText = `
    opacity:0;  
  transition: 1s;
    
    `;
    myroom3.style.cssText = `
    opacity:0;  
  transition: 0.5s;

    `;
  }
  if (myscrol > 1000) {
    mycards.style.cssText = `
    opacity: 1;
  transition: 2s;

    
    `;
  } else {
    mycards.style.cssText = `
    opacity: 0;
    
    `;
  }
}
window.addEventListener("scroll", scroll_animate);

// mocapi hissesi
async function myfetch() {
  const respon = await fetch(`https://namiq-myapi.onrender.com/data/post`);
  const data = await respon.json();

  data.forEach((element) => {
    cretElement(element);
  });
}
async function myfetch1() {
  const respon = await fetch(`https://namiq-myapi.onrender.com/data/post`);
  const data = await respon.json();

  const nevdata = await data.forEach((element) => {
    cretElement1(element);
  });

  $(".autoplay").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
}

const wishlist_leng = document.querySelector(".wishlist_leng");
const basget_leng = document.querySelector(".basget_leng");

let basket_arr = [];
let wishlist_arr = [];

//data ucun localstorage
window.onload = function () {
  if (localStorage.getItem("basket") !== null) {
    basket_arr = JSON.parse(localStorage.getItem("basket"));
    basget_leng.innerHTML = basketarr.length;
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
    wishlist_leng.innerHTML = wishlist_arr.length;
  }
};

function cretElement(data) {
  // createelement
  const carddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const shopdiv = document.createElement("div");

  const myimg = document.createElement("img");

  const btndiv = document.createElement("div");

  const btnsee = document.createElement("a");
  const btnbasget = document.createElement("button");
  const btnwishlist = document.createElement("button");

  btnwishlist.classList.add("wislis");
  btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;

  btnbasget.addEventListener("click", function () {
    if (basket_arr.find((x) => x.id == data.id) === undefined) {
      basket_arr.push({ ...data, count: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    basget_leng.innerHTML = basket_arr.length;
  });

  if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
    btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  }

  btnwishlist.addEventListener("click", () => {
    if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
      wishlist_arr.push(data);
      btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
      wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
      btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    wishlist_leng.innerHTML = wishlist_arr.length;
  });

  //catacory ucun

  if (data.catacory === "hous") {
    carddiv.classList.add("house");
  }
  if (data.catacory === "woman") {
    carddiv.classList.add("woman");
  }
  if (data.catacory === "man") {
    carddiv.classList.add("man");
  }
  if (data.catacory === "child") {
    carddiv.classList.add("child");
  }

  const myp = document.createElement("p");
  myp.innerText = "";
  if (data.sale !== "false") {
    myp.innerText = "SALE!";
    myp.classList.add("sale");
  }

  const pdiv = document.createElement("div");
  const p = document.createElement("p");
  const h2 = document.createElement("h2");

  // classname
  carddiv.classList.add("card");
  carddiv.classList.add("cardfillret");
  imgdiv.classList.add("img");
  shopdiv.classList.add("shop");
  btndiv.classList.add("divbtn");
  btnsee.classList.add("see");
  btnbasget.classList.add("basket");
  pdiv.classList.add("ptag");

  // innertext

  myimg.src = data.img_src;
  btnsee.innerHTML = `<i class="fa-solid fa-eye"></i> View Details`;
  btnsee.href = `itemabout.html#${data.id}`;

  btnbasget.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
Select Options`;
  p.innerText = data.name;
  h2.innerText = data.price + "$";

  // append
  pdiv.append(p, h2);
  shopdiv.append(myp, pdiv);

  btndiv.append(btnsee, btnbasget);
  imgdiv.append(myimg, btnwishlist, btndiv);
  carddiv.append(imgdiv, shopdiv);
  mycards.append(carddiv);
}
function cretElement1(data) {
  // createelement
  const carddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const shopdiv = document.createElement("div");

  const myimg = document.createElement("img");

  const btndiv = document.createElement("div");

  const btnsee = document.createElement("a");
  const btnbasget = document.createElement("button");
  const btnwishlist = document.createElement("button");

  btnwishlist.classList.add("wislis");
  btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
    btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  }
  btnbasget.addEventListener("click", function () {
    if (basket_arr.find((x) => x.id == data.id) === undefined) {
      basket_arr.push({ ...data, count: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    basget_leng.innerHTML = basket_arr.length;
  });
  btnwishlist.addEventListener("click", () => {
    if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
      wishlist_arr.push(data);
      btnwishlist.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
      wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
      btnwishlist.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    wishlist_leng.innerHTML = wishlist_arr.length;
  });

  const myp = document.createElement("p");
  myp.innerText = "";
  if (data.sale !== "false") {
    myp.innerText = "SALE!";
    myp.classList.add("sale");
  }

  const pdiv = document.createElement("div");
  const p = document.createElement("p");
  const h2 = document.createElement("h2");

  // classname
  carddiv.classList.add("card");

  imgdiv.classList.add("img");
  shopdiv.classList.add("shop");
  btndiv.classList.add("divbtn");
  btnsee.classList.add("see");
  btnbasget.classList.add("basket");
  pdiv.classList.add("ptag");

  // innertext

  myimg.src = data.img_src;
  btnsee.innerHTML = `<i class="fa-solid fa-eye"></i> View Details`;
  btnsee.href = `itemabout.html#${data.id}`;

  btnbasget.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
Select Options`;
  p.innerText = data.name;
  h2.innerText = data.price + "$";

  // append
  carddiv.append(imgdiv, shopdiv);
  pdiv.append(p, h2);
  shopdiv.append(myp, pdiv);

  btndiv.append(btnsee, btnbasget);
  imgdiv.append(myimg, btnwishlist, btndiv);

  autoplay.append(carddiv);
}

myfetch();
myfetch1();

// const mylogin = document.querySelector(".mylogin");
// const mynumber = document.querySelector(".mynumber");

// if (window.location.hash.slice(1) === "") {
//   mylogin.innerHTML = `<a href="login.html?#">login</a>`;
// } else {
//   // async function loginfetch() {
//   //   const res = await fetch(
//   //     `https://namiq-myapi.onrender.com/data/login/${window.location.hash.slice(1)}`
//   //   );
//   //   const data = await res.json();
//   //   mynumber.innerText = data.mail;

//   //   const div = document.createElement("div");
//   //   const btn = document.createElement("button");
//   //   const h2 = document.createElement("h2");
//   //   const p = document.createElement("p");
//   //   h2.innerText = data.name;
//   //   p.innerText = data.lastname;
//   //   btn.innerText = "SING OUT";

//   //   btn.addEventListener("click", function () {
//   //     window.location.hash = "";
//   //   });
//   //   div.append(h2, p);
//   //   mylogin.append(div, btn);
//   // }
//   // // loginfetch();

// }

const man_btn = document.querySelector(".man_btn");
const woman_btn = document.querySelector(".woman_btn");
const child_btn = document.querySelector(".child_btn");
const hous_btn = document.querySelector(".hous_btn");
const showall = document.querySelector(".showall");
//filter ucun

man_btn.addEventListener("click", function () {
  document.querySelectorAll(".cardfillret").forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(".man").forEach((element) => {
    element.style.display = "block";
  });
});
woman_btn.addEventListener("click", function () {
  document.querySelectorAll(".cardfillret").forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(".woman").forEach((element) => {
    element.style.display = "block";
  });
});
child_btn.addEventListener("click", function () {
  document.querySelectorAll(".cardfillret").forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(".child").forEach((element) => {
    element.style.display = "block";
  });
});
showall.addEventListener("click", function () {
  document.querySelectorAll(".cardfillret").forEach((element) => {
    element.style.display = "block";
  });
});
hous_btn.addEventListener("click", function () {
  document.querySelectorAll(".cardfillret").forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(".house").forEach((element) => {
    element.style.display = "block";
  });
});
