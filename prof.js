function display() {
  const data = JSON.parse(localStorage.getItem('userData'));
  if (!data) {
    document.getElementById("output").innerHTML = "<p>No data found.</p>";
    return;
  }

  document.getElementById("output").innerHTML = `
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Sex:</strong> ${data.sex}</p>
    <p><strong>Why I support this campaign:</strong><br>${data.reason}</p>
  `;
}
