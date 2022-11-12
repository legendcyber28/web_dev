let userForm = document.getElementById("user-form");
var userEntries = [];

const retieveEntries = () => {
  let entries = localStorage.getItem("userEntries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};
const displayEntries = () => {
  let entries = retieveEntries();
  const tbleEntries = entries
    .map((entry) => {
      const name_Cell = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const email_Cell = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const password_Cell = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dob_Cell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTerms_Cell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;
      const row = `<tr>${name_Cell} ${email_Cell} ${password_Cell} ${dob_Cell} ${acceptTerms_Cell}</tr>`;
      return row;
    })
    .join("\n");
  const table = ` <table class='table-auto w-full'>
    <tr>
    <th class='px-4 py-2 '>Name </th>
    <th class='px-4 py-2 '>Email </th>
    <th class='px-4 py-2 '>Password </th>
    <th class='px-4 py-2 '>Dob </th>
    <th class='px-4 py-2 '>Accepted terms? </th>
    </tr>${tbleEntries}
</table>`;
  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;
  var currentYear = new Date().getFullYear();
  var birthYear = dob.split("-");
  let year = birthYear[0];
  var age = currentYear - year;
  console.log({ age1, currentYear, birthYear });
  if (age1 < 18 || age1> 55) {
    document.getElementById("dob").style = "border:1px solid red";
    return alert("Your is not under 18 and 55 years");
  } else {
    document.getElementById("dob").style = "border:none";

    const entry = {
      name,
      email,
      password,
      dob,
      acceptTerms,
    };
    userEntries = retieveEntries();
    userEntries.push(entry);
    localStorage.setItem("userEntries", JSON.stringify(userEntries));
    displayEntries();
    userForm.reset();
  }
};
userForm.addEventListener("submit", saveUserForm);
displayEntries();