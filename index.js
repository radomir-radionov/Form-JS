const form = document.getElementById("form");
const modal = document.getElementById("modalWrapper");
const span = document.getElementById("closeBtn");

retrieveFormValue = (event) => {
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const dateOfBirth = document.getElementById("dateOfBirth");
  const education = document.getElementById("education");
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const modalContend = document.getElementById("modalContend");
  event.preventDefault();

  modalContend.innerHTML = `
  <p>Name: ${name.value}</p>
  <p>Age: ${age.value}</p>
  <p>Date of Birth: ${dateOfBirth.value}</p>
  <p>Education: ${education.value}</p>
  <p>Sex: ${gender}</p>
  `;
  if (checkModalOnErrors(name) === true) {
    modal.style.display = "block";
  }
};

const checkModalOnErrors = (name) => {
  const errors = [...form.querySelectorAll(".error")];
  const fields = [...form.querySelectorAll(".field")];
  errors.forEach((item) => {
    item.remove();
  });
  if (name.value === "") {
    name.insertAdjacentHTML(
      "afterEnd",
      '<div class="error">This field is required</div>'
    );
    return false;
  }
  return true;
};

form.addEventListener("submit", retrieveFormValue);

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
