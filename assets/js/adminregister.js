const admin_register = document.querySelector(".admin_register");
const admin_name = document.querySelector("#admin_name");
const admin_pass = document.querySelector("#admin_pass");
const adminregistr_worng = document.querySelector(".adminregistr_worng");

admin_register.addEventListener("submit", (e) => {
  if (admin_name.value !== "" && admin_pass.value !== "") {
    let adminregiterobj = {
      id: 1,
      name: admin_name.value,
      password: admin_pass.value,
    };
    registerput(adminregiterobj);
    localStorage.removeItem("admin");
    location.href = `admin.html?#`;
  } else {
    adminregistr_worng.innerHTML = "butun hisseleri doldurun";
  }
  e.preventDefault();
});

async function registerput(obj) {
  const res = fetch(`https://namiq-myapi.onrender.com/data/admin/${obj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
