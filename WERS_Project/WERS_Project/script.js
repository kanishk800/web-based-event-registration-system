// Handle registration
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const tableBody = document.querySelector("#participantsTable tbody");

  // ✅ If form exists (register.html)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const event = document.getElementById("event").value;

      if (!name || !email || !event) {
        alert("Please fill all fields!");
        return;
      }

      // Get old data from localStorage
      let participants = JSON.parse(localStorage.getItem("participants")) || [];

      // Save new participant
      participants.push({ name, email, event });
      localStorage.setItem("participants", JSON.stringify(participants));

      alert("Registration successful!");
      form.reset();
    });
  }

  // ✅ If participants page exists
  if (tableBody) {
    let participants = JSON.parse(localStorage.getItem("participants")) || [];

    if (participants.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='3'>No registrations yet.</td></tr>";
    } else {
      participants.forEach(p => {
        let row = `<tr>
          <td>${p.name}</td>
          <td>${p.email}</td>
          <td>${p.event}</td>
        </tr>`;
        tableBody.innerHTML += row;
      });
    }
  }
});
