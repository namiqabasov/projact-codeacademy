const Basgetcard = document.querySelector(".Basgetcard");
const total = document.querySelector(".total p");
const wishlist_leng = document.querySelector(".wishlist_leng");
const basget_leng = document.querySelector(".basget_leng");
let wishlist_arr = [];
let basket_arr = [];
if (localStorage.getItem("basket") !== null) {
  basket_arr = JSON.parse(localStorage.getItem("basket"));
  basget_leng.innerHTML = basketarr.length;
}
if (localStorage.getItem("wishlist") !== null) {
  wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  wishlist_leng.innerHTML = wishlist_arr.length;
}

getTotal();
basket_arr.forEach((element) => {
  const mydiv = document.createElement("div");
  const creddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const myimg = document.createElement("img");
  const h3 = document.createElement("h3");
  const a = document.createElement("a");
  const incin = document.createElement("button");
  const secp = document.createElement("p");
  const decin = document.createElement("button");
  const delet = document.createElement("button");

  const totaldiv = document.createElement("div");
  const myh2 = document.createElement("h2");
  const myh3 = document.createElement("h3");
  const myp = document.createElement("p");

  myh3.innerText = "prices: " + element.count;
  myh2.innerText = element.name;
  myp.innerText = element.price + "$";

  totaldiv.classList.add("card");
  imgdiv.className = "imgdiv";
  mydiv.classList.add("card");
  myimg.src = element.img_src;
  a.innerHTML = element.name;
  a.href = `http://127.0.0.1:5501/my-project/itemabout.html#${element.id}`;
  incin.innerHTML = "+";
  secp.innerHTML = element.count;
  decin.innerHTML = "-";
  delet.innerHTML = "X";

  //artim
  incin.onclick = () => {
    secp.innerHTML++;

    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count++;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
    myh3.innerText = "prices: " + element.count;
  };
  //azalma
  decin.addEventListener("click", () => {
    if (secp.innerHTML === "1") {
      return;
    }
    secp.innerHTML--;
    myh3.innerText = "prices: " + element.count;

    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count--;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
  });
  //delete
  delet.addEventListener("click", () => {
    basket_arr = basket_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();

    delet.parentElement.parentElement.remove();
    basget_leng.innerHTML = basket_arr.length;
  });

  creddiv.classList.add("basket_item");
  imgdiv.append(myimg);
  h3.append(a);
  creddiv.append(h3, decin, secp, incin, delet);
  mydiv.append(creddiv, imgdiv);
  Basgetcard.append(mydiv);

  totaldiv.append(myh2, myh3, myp);
  document.querySelector(".appenddiv").append(totaldiv);
});

function getTotal() {
  total.innerHTML =
    basket_arr.reduce((sum, prev) => sum + prev.price * prev.count, 0) + "$";
  document.querySelector(".mytotal p").innerHTML = total.innerHTML;
}

if (total.innerHTML == 0 + "$") {
  total.parentElement.innerHTML = "";
  document.querySelector(".appenddiv").innerHTML = "";
} else {
  total.parentElement.style.cssText = `
    padding: 20px;
    `;
}

document.querySelector(".total_btn").addEventListener("click", function () {
  document.querySelector(".check").style.cssText = `
  display:block;
  `;
});
document.querySelector(".okey").addEventListener("click", function () {
  document.querySelector(".check").style.cssText = `
  display:none;
  `;
  window.location.reload();
});
