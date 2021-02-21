// lesson 7
let form = document.querySelector(".formWithValidation");
let validateBtn = form.querySelector(".validateBtn");
let name = form.querySelector(".name");
let age = form.querySelector(".age");
let dateOfBirth = form.querySelector(".dateOfBirth");
let education = form.querySelector(".education");
let gender = form.querySelector(".gender");
let fields = form.querySelectorAll(".field");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = document.querySelector(".nameValue");
  nameValue.innerHTML = name.value;
  const ageValue = document.querySelector(".ageValue");
  ageValue.innerHTML = age.value;
  const dateOfBirthValue = document.querySelector(".dateOfBirthValue");
  dateOfBirthValue.innerHTML = dateOfBirth.value;
  const educationValue = document.querySelector(".educationValue");
  educationValue.innerHTML = education.value;
  const genderValue = document.querySelector('input[name="rate"]:checked')
    .value;
  genderValue.innerHTML = gender.value;

  // document.querySelector('input[name="gender"]:checked').value;

  let errors = form.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = document.createElement("div");
      error.className = "error";
      error.style.color = "gray";
      error.style.border = "2px solid red";
      error.innerHTML = "This field is required";
      fields[i].after(error);
    }
  }
  console.log(fields.length);
});

// -----MODAL-----
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
  if (fields[0].value) {
    modal.style.display = "block";
  }
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
