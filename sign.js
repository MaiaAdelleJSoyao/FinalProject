function save() {
  let valid = true;

  document.querySelectorAll('.error').forEach(span => span.textContent = '');

  const firstName = document.getElementById('name1').value.trim();
  const lastName = document.getElementById('name2').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('pword').value.trim();
  const reason = document.getElementById('reason').value.trim();
  const sex = document.querySelector('input[name="sex"]:checked');

  if (!firstName) {
    document.getElementById('err-name1').textContent = 'required';
    valid = false;
  }

  if (!lastName) {
    document.getElementById('err-name2').textContent = 'required';
    valid = false;
  }

  if (!email) {
    document.getElementById('err-email').textContent = 'required';
    valid = false;
  }

  if (!password) {
    document.getElementById('err-pword').textContent = 'required';
    valid = false;
  }

  if (!reason) {
    document.getElementById('err-reason').textContent = 'required';
    valid = false;
  }

  if (!sex) {
    alert("Please select your sex.");
    valid = false;
  }

  if (!valid) {
    return false;
  }

  const userData = {
    firstName,
    lastName,
    email,
    sex: sex.value,
    reason
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  window.location.href = 'prof.html';
  return false;
}
