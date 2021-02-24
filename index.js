const form = document.getElementById("form");
const modalContend = document.getElementById("modalContend");
const modal = document.getElementById("modalWrapper");
const btn = document.getElementById("myBtn");
const span = document.getElementById("closeBtn");

retrieveFormValue = (event) => {
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
  checkModalOnErrors();
};

const checkModalOnErrors = () => {
  const errors = [...form.querySelectorAll(".error")];
  const fields = [...form.querySelectorAll(".field")];

  errors.forEach((item) => {
    item.remove();
  });

  fields.forEach((item) => {
    if (!item.value) {
      item.insertAdjacentHTML(
        "afterEnd",
        '<div class="error">This field is required</div>'
      );
    } else modal.style.display = "block";
  });
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
