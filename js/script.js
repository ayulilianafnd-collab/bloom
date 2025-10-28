// (i) onBlur event
function blurMessage() {
  alert("You left the date of birth field!");
}

// (ii) onFocus event for email field
function focusEmail() {
  alert("Please enter a valid email address.");
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

