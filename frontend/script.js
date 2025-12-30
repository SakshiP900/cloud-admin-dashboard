// Load all users and display in table
function loadUsers() {
  fetch("/users")
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("usersTable");
      tbody.innerHTML = ""; // clear existing rows

      data.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>
            <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    });
}

// Add new user
document.getElementById("addUserForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (!name) return;

  fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById("name").value = "";
    loadUsers(); // refresh table
  });
});

// Delete user
function deleteUser(id) {
  fetch(`/users/${id}`, { method: "DELETE" })
    .then(() => loadUsers());
}

// Initial load
loadUsers();

