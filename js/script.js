// (i) onBlur event
function blurMessage() {
  const dob = document.querySelector('input[type="date"]').value;
  if (!dob) {
    alert("You left the date of birth field!");
  }
}

// (ii) onFocus email
function focusEmail() {
  const emailInput = document.getElementById('emailField');
  if (!emailInput.value) { // only show if empty
    alert("Please enter a valid email address (e.g., name@example.com)");
  }
}


// (iii) onChange event — convert to CAPS LOCK
function toCaps(element) {
  element.value = element.value.toUpperCase();
}

// (iv) On form submission — show Bootstrap modal
function submitForm() {
  var myModal = new bootstrap.Modal(document.getElementById('successModal'));
  myModal.show();
}