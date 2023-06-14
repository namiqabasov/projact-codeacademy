const Basgetcard = document.querySelector(".Basgetcard");
const total = document.querySelector(".total p");

let basket_arr = [];

basket_arr = JSON.parse(localStorage.getItem("basket"));

getTotal();
basket_arr.forEach((element) => {
  const mydiv = document.createElement("div");
  const creddiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const myimg = document.createElement("img");
  const h3 = document.createElement("h3");
  const incin = document.createElement("button");
  const secp = document.createElement("p");
  const decin = document.createElement("button");
  const delet = document.createElement("button");

  imgdiv.className = "imgdiv";
  mydiv.classList.add("card");
  myimg.src = element.img_src;
  h3.innerHTML = element.name;
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
    window.location.reload();
  });

  creddiv.classList.add("basket_item");
  imgdiv.append(myimg);
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
