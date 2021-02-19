// lesson 7
let form = document.querySelector(".formWithValidation");
let validateBtn = form.querySelector(".validateBtn");
let name = form.querySelector(".name");
let age = form.querySelector(".age");
let dateOfBirth = form.querySelector(".dateOfBirth");
let education = form.querySelector(".education");
let fields = form.querySelectorAll(".field");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = form.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("This field is required", fields[i]);
      let error = document.createElement("div");
      error.className = "error";
      error.style.color = "gray";
      error.style.border = "2px solid red";
      error.innerHTML = "This field is required";
      fields[i].after(error);
    }
  }
});
