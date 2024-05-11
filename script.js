// github pages link:
// https://shanizah.github.io/MitziNet_registraition_form/

let successSubmitFlag = true;
// check validity of all input fields
function checkValid() {
  let firstNameInput = document.getElementById("firstName");
  let lastNameInput = document.getElementById("lastName");
  let emailInput = document.getElementById("email");
  let phoneNumberInput = document.getElementById("phoneNumber");
  let inputs = [firstNameInput, lastNameInput, emailInput, phoneNumberInput];
  checkPassword();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      successSubmitFlag = false;
      inputs[i].style.borderColor = "red";
    } else {
      inputs[i].style.borderColor = "green";
    }
  }
  if (successSubmitFlag) {
    document.getElementById("successfulSubmit").textContent =
      "You are signed-in!";
  }
}

// check that the password is valid and both entries match
function checkPassword() {
  let password_status = document.getElementById("submitionStatus");
  let password_1 = document.getElementById("password_1");
  let password_2 = document.getElementById("password_2");

  if (password_1.value !== password_2.value) {
    password_status.textContent = "Passwords do not match!";
    password_1.style.borderColor = "red";
    password_2.style.borderColor = "red";
    successSubmitFlag = false;
  } else if (password_1.value.length < 8) {
    password_status.textContent = "Password must be at least 8 digits!";
    password_status.style.color = "red";
    password_1.style.borderColor = "red";
    password_2.style.borderColor = "red";
    successSubmitFlag = false;
  } else {
    password_status.textContent = "Valid password!";
    password_status.style.color = "green";
    password_1.style.borderColor = "green";
    password_2.style.borderColor = "green";
  }
}
