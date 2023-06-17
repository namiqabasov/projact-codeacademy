//basget ucun
const wishlist_leng = document.querySelector(".wishlist_leng");
const basget_leng = document.querySelector(".basget_leng");

let basket_arr = [];
let wishlist_arr = [];

//data ucun localstorage

if (localStorage.getItem("basket") !== null) {
  basket_arr = JSON.parse(localStorage.getItem("basket"));
  basget_leng.innerHTML = basketarr.length;
}
if (localStorage.getItem("wishlist") !== null) {
  wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  wishlist_leng.innerHTML = wishlist_arr.length;
}

//wishlist ucun
const Wishlistcard = document.querySelector(".Wishlistcard");

wishlist_arr.forEach((element) => {
  const mydiv = document.createElement("div");
  const creddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const myimg = document.createElement("img");
  const h3 = document.createElement("h3");
  const a = document.createElement("a");
  const delet = document.createElement("button");

  imgdiv.className = "imgdiv";
  mydiv.classList.add("card");
  myimg.src = element.img_src;
  a.innerHTML = element.name;
  a.href = `itemabout.html#${element.id}`;
  delet.innerHTML = "X";

  //delete
  delet.addEventListener("click", () => {
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    delet.parentElement.parentElement.remove();
    wishlist_leng.innerHTML = wishlist_arr.length;
  });

  creddiv.classList.add("wishlist_item");
  imgdiv.append(myimg);
  h3.appendChild(a);
  creddiv.append(h3, delet);
  mydiv.append(creddiv, imgdiv);
  Wishlistcard.append(mydiv);
});
