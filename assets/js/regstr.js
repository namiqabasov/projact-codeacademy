const registration = document.querySelector(".registration");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");

async function loginfetch(obj) {
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
}

registration.addEventListener("submit", function (e) {
  if (
    firstname.value !== "" &&
    lastname.value !== "" &&
    email.value !== "" &&
    pass.value !== ""
  ) {
    const obj = {
      name: firstname.value,
      lastname: lastname.value,
      mail: email.value,
      password: pass.value,
    };
    console.log(obj);
    loginfetch(obj);
  } else {
    alert("melumatlari tam doldurun");
  }
});
