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

  imgdiv.className = "imgdiv";
  mydiv.classList.add("card");
  myimg.src = element.img_src;
  a.innerHTML = element.name;
  a.href = `itemabout.html#${element.id}`;
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
  };
  //azalma
  decin.addEventListener("click", () => {
    if (secp.innerHTML === "1") {
      return;
    }
    secp.innerHTML--;

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
});

function getTotal() {
  total.innerHTML =
    basket_arr.reduce((sum, prev) => sum + prev.price * prev.count, 0) + "$";
}

if (total.innerHTML == 0 + "$") {
  total.parentElement.innerHTML = "";
} else {
  total.parentElement.style.cssText = `
    padding: 20px;
    `;
}
