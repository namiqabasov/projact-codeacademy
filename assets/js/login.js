const login = document.querySelector(".login");
const mybtn = document.querySelector(".mybtn");
const myemail = document.querySelector("#myemail");
const mypass = document.querySelector("#mypass");

async function loginfetch() {
  const res = await fetch("https://namiq-myapi.onrender.com/data/login");
  const data = await res.json();
  data.forEach((element) => {
    if (element.mail === myemail.value && element.password === mypass.value) {
      document.querySelector(".login_worng").innerHTML = "";
      localStorage.setItem(
        "user",
        JSON.stringify({
          mail: element.mail,
          password: element.password,
          name: element.name,
          lastname: element.lastname,
        })
      );
      location.href = `home.html#${element.id}`;
    } else {
      document.querySelector(".login_worng").innerHTML =
        "parol ve ya istifadeci adi yanlisdir";
    }
  });
}

mybtn.addEventListener("click", function () {
  loginfetch();
});
