const form = document.getElementById("form");
const modalContend = document.getElementById("modalContend");
const modal = document.getElementById("modalWrapper");
const btn = document.getElementById("myBtn");
const span = document.getElementById("closeBtn");

function retrieveFormValue(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const dateOfBirth = document.getElementById("dateOfBirth");
  const education = document.getElementById("education");
  const gender = document.querySelector('input[name="gender"]:checked').value;

  modalContend.innerHTML = `
  <p>Name: ${name.value}</p>
  <p>Age: ${age.value}</p>
  <p>Date of Birth: ${dateOfBirth.value}</p>
  <p>Education: ${education.value}</p>
  <p>Sex: ${gender}</p>
  `;

  removeSameErrors();
  checkModalOnErrors();

  modal.style.display = "block";
}

const removeSameErrors = () => {
  const errors = [...form.querySelectorAll(".error")];
  errors.forEach(function (item, i, errors) {
    return errors[i].remove();
  });
};

const checkModalOnErrors = () => {
  const fields = [...form.querySelectorAll(".field")];
  fields.forEach(function (item, i, fields) {
    if (!fields[i].value) {
      let error = document.createElement("div");
      error.className = "error";
      error.style.color = "red";
      error.innerHTML = "This field is required";
      return fields[i].after(error);
    }
  });
};

form.addEventListener("submit", retrieveFormValue);

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
