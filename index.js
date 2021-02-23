// lesson 7
const form = document.getElementById("form");
const modalContend = document.getElementById("modalContend");
const fields = form.querySelectorAll(".field");

function retrieveFormValue(event) {
  event.preventDefault();

  const name = document.getElementById("name"),
    age = document.getElementById("age"),
    dateOfBirth = document.getElementById("dateOfBirth"),
    education = document.getElementById("education"),
    gender = document.querySelector('input[name="gender"]:checked').value;

  modalContend.innerHTML = `
  <span">&times;</span>
  <p>${name.value}</p>
  <p>${age.value}</p>
  <p>${dateOfBirth.value}</p>
  <p>${education.value}</p>
  <p>${gender}</p>
  `;

  // ---Ошибка---
  let errors = form.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  fields.forEach(function (item, i, fields) {
    if (!fields[i].value) {
      let error = document.createElement("div");
      error.className = "error";
      error.style.color = "red";
      error.innerHTML = "This field is required";
      fields[i].after(error);
    }
  });
}

form.addEventListener("submit", retrieveFormValue);

// -----MODAL-----

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementById("close");

btn.addEventListener("click", function () {
  if (fields[0].value) {
    modal.style.display = "block";
  }
});

// span.addEventListener("click", function () {
//   modal.style.display = "none";
// });

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
