//wishlist ucun
const Wishlistcard = document.querySelector(".Wishlistcard");

let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));

wishlist_arr.forEach((element) => {
  const mydiv = document.createElement("div");
  const creddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const myimg = document.createElement("img");
  const h3 = document.createElement("h3");
  const delet = document.createElement("button");

  imgdiv.className = "imgdiv";
  mydiv.classList.add("card");
  myimg.src = element.img_src;
  h3.innerHTML = element.name;
  delet.innerHTML = "X";

  //delete
  delet.addEventListener("click", () => {
    console.log(element.id);
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    window.location.reload();
    btn.parentElement.parentElement.remove();
  });

  creddiv.classList.add("wishlist_item");
  imgdiv.append(myimg);
  creddiv.append(h3, delet);
  mydiv.append(creddiv, imgdiv);
  Wishlistcard.append(mydiv);
});
