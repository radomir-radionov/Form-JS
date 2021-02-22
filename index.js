// lesson 7
const form = document.getElementById("form");
const validateBtn = form.querySelector(".validateBtn");
const fields = form.querySelectorAll(".field");
const name = form.querySelector(".name");
age = form.querySelector(".age");
dateOfBirth = form.querySelector(".dateOfBirth");
education = form.querySelector(".education");
gender = form.querySelector(".gender");

function retrieveFormValue(event) {
  event.preventDefault();
  const nameValue = document.querySelector(".nameValue");
  nameValue.innerHTML = name.value;
  const ageValue = document.querySelector(".ageValue");
  ageValue.innerHTML = age.value;

  // if (typeof age.value === Number) {

  // }

  const dateOfBirthValue = document.querySelector(".dateOfBirthValue");
  dateOfBirthValue.innerHTML = dateOfBirth.value;
  const educationValue = document.querySelector(".educationValue");
  educationValue.innerHTML = education.value;
  const genderValue = document.querySelector(".genderValue");
  // ---Пол---
  function getGenderValue(genderValue) {
    var chboxTrue;
    var chboxFalse;
    chboxTrue = document.getElementById("chboxTrueMale");
    chboxFalse = document.getElementById("chboxFalseFemale");
    if (chboxTrueMale.checked) {
      genderValue.innerHTML = "Male";
    } else if (chboxFalseFemale.checked) {
      genderValue.innerHTML = "Female";
    } else {
      alert("Выберите пол");
    }
  }

  getGenderValue(genderValue);
  // ---Объект со всеми значениями---
  const values = {
    name: name.value,
    age: age.value,
    dateOfBirth: dateOfBirth.value,
    education: education.value,
    gender: gender.checked,
  };
  console.log(values);

  // ---Ошибка---
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
}

form.addEventListener("submit", retrieveFormValue);

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
