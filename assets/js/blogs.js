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
