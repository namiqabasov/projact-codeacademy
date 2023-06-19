const menu_btn = document.querySelector(".menu_btn ");
const add_btn = document.querySelector(".add_btn ");
const delet_btn = document.querySelector(".delet_btn ");
const admin_form = document.querySelector("#my_apiform ");
const apicard = document.querySelector(".apicard ");
const api_myform = document.querySelector(".api_myform ");
const singout = document.querySelector(".singout ");

//admin login

const adminobj = {
  name: "namiq",
  password: "12345",
};

const adminlogin = document.querySelector(".adminlogin");
const admin_start = document.querySelector(".admin_start");
const adminname = document.querySelector("#adminname");
const adminpass = document.querySelector("#adminpass");
const admindiv = document.querySelector("#admindiv");
const adinput = document.querySelector("#adinput");

menu_btn.addEventListener("click", function () {
  admin_form.style.cssText = `
    display:none;
    `;
  api_myform.style.cssText = `
    display:block;
    `;
});
add_btn.addEventListener("click", function () {
  admin_form.style.cssText = `
    display:flex;
    `;
  api_myform.style.cssText = `
    display:none;
    `;
});

//edit ucun
const editform = document.querySelector(".editform");
const pname = document.querySelector("#pname");
const pimgsrc = document.querySelector("#pimgsrc");
const pprice = document.querySelector("#pprice");
const pabout = document.querySelector("#pabout");
const psael = document.querySelector("#psael");
const pamount = document.querySelector("#pamount");
const pcatacory = document.querySelector("#pcatacory");

async function putfetch(editobj) {
  const res = await fetch(`https://namiq-myapi.onrender.com/${editobj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editobj),
  });
}

//post ucun

const my_apiform = document.querySelector("#my_apiform");
const myname = document.querySelector("#name");
const img = document.querySelector("#img");
const sale = document.querySelector("#sale");
const price = document.querySelector("#price");
const amount = document.querySelector("#amount");
const command = document.querySelector("#command");
const catacory = document.querySelector("#catacory");

async function postfetch(postobj) {
  const res = await fetch(`https://namiq-myapi.onrender.com/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postobj),
  });
}

function admin_post() {
  my_apiform.addEventListener("submit", function () {
    let postobj = {
      img_src: img.value,
      name: myname.value,
      sale: sale.value,
      price: price.value,
      amount: amount.value,
      command: command.value,
      catacory: catacory.value,
    };
    postfetch(postobj);
  });
}

//creat ucun
async function myfetch() {
  const res = await fetch(`https://namiq-myapi.onrender.com/`);
  const data = await res.json();

  data.forEach((element) => {
    if (
      element.name
        .toLocaleLowerCase()
        .includes(adinput.value.toLocaleLowerCase())
    ) {
      creElement(element);
    }
  });
}

async function myfetchdelet(data) {
  const res = await fetch(`https://namiq-myapi.onrender.com/${data.id}`, {
    method: "DELETE",
  });
}

function creElement(data) {
  const mydiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const aboutdiv = document.createElement("div");
  const btndiv = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const catacoryh5 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const btndelet = document.createElement("button");
  const btnedit = document.createElement("button");

  //btn functions

  btndelet.addEventListener("click", function () {
    myfetchdelet(data);
  });

  btnedit.addEventListener("click", function () {
    document.documentElement.scrollTop = 100000;
    pimgsrc.value = data.img_src;
    pname.value = data.name;
    pabout.value = data.command;
    pprice.value = data.price;
    pamount.value = data.amount;
    psael.value = data.sale;
    pcatacory.value = data.catacory;

    editform.addEventListener("submit", function () {
      let editobj = {
        id: data.id,
        img_src: pimgsrc.value,
        name: pname.value,
        sale: psael.value,
        price: pprice.value,
        amount: pamount.value,
        command: pabout.value,
        catacory: pcatacory.value,
      };
      putfetch(editobj);
    });
  });

  // innertext
  img.src = data.img_src;
  h2.innerText = data.name;
  h3.innerText = "PRICE:" + data.price + "$";
  h4.innerText = "amount:" + data.amount;
  catacoryh5.innerText = "catacory:" + data.catacory;
  p.innerText = data.command;
  btndelet.innerText = "DELETE";
  btnedit.innerText = "EDIT";

  //classlist
  mydiv.classList.add("cart");
  imgdiv.classList.add("img");
  aboutdiv.classList.add("about");
  btndiv.classList.add("btn");

  //append
  imgdiv.appendChild(img);
  aboutdiv.append(h2, h3, catacoryh5, h4, p);
  btndiv.append(btndelet, btnedit);
  mydiv.append(imgdiv, aboutdiv, btndiv);
  apicard.appendChild(mydiv);
}

//giris ucun

singout.addEventListener("click", function () {
  localStorage.removeItem("admin");
  window.location.reload();
});

if (localStorage.getItem("admin")) {
  admindiv.style.cssText = `
    display:block;
    `;

  admin_start.style.cssText = `
    display:none;
    `;
  admin_post();
  myfetch();
  adinput.addEventListener("keyup", function () {
    apicard.innerHTML = "";
    myfetch();
  });
}
adminlogin.addEventListener("submit", function () {
  if (
    adminname.value === adminobj.name &&
    adminpass.value === adminobj.password
  ) {
    admindiv.style.cssText = `
    display:block;
    `;

    admin_start.style.cssText = `
    display:none;
    `;
    localStorage.setItem(
      "admin",
      JSON.stringify({
        password: adminobj.password,
        name: adminobj.name,
      })
    );

    myfetch();
    admin_post();
    adinput.addEventListener("keyup", function () {
      apicard.innerHTML = "";
      myfetch();
    });
  }
});
