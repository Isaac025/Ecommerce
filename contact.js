const form = document.querySelector("form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const textArea = document.querySelector("#message");
// const button = document.querySelector(".btn");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("hello");
  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const textAreaValue = textArea.value.trim();

  if (firstnameValue === "") {
    setError(firstname, "firstname is required");
  }
  // else if (firstnameValue.length < 5) {
  //   setError(firstname, "cannot be less than 5 characters");
  // }
  else {
    setSuccess(firstname);
  }

  if (lastnameValue === "") {
    setError(lastname, "lastname is required");
  }
  // else if (lastnameValue.length < 5) {
  //   setError(lastname, "cannot be less than 5 characters");
  // }
  else {
    setSuccess(lastname);
  }

  if (emailValue === "") {
    setError(email, "email is required");
  } else if (!emailRegex.test(emailValue)) {
    setError(email, "invalid emal");
  } else {
    setSuccess(email);
  }

  if (textAreaValue === "") {
    setError(textArea, "fill the box above");
  } else if (textAreaValue.length < 20) {
    setError(textArea, "canot be less than 20 characters");
  } else {
    setSuccess(textArea);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
