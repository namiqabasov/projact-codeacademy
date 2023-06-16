const login = document.querySelector(".login");
const mybtn = document.querySelector(".mybtn");
const myemail = document.querySelector("#myemail");
const mypass = document.querySelector("#mypass");

async function loginfetch() {
  const res = await fetch("http://localhost:3000/login");
  const data = await res.json();
  data.forEach((element) => {
    if (element.mail === myemail.value && element.password === mypass.value) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          mail: element.mail,
          password: element.password,
          name: element.name,
          lastname: element.lastname,
        })
      );
      location.href = `http://127.0.0.1:5501/my-project/home.html#${element.id}`;
    }
  });
}

mybtn.addEventListener("click", function () {
  loginfetch();
});
