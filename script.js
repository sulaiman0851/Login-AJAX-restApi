const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// Mock API URL (Ganti dengan URL JSON Anda di GitHub)
const MOCK_API_URL =
  "https://raw.githubusercontent.com/sulaiman0851/database-json-script-bot-WhatApp/refs/heads/main/json/users.json";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMessage.style.display = "none";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // AJAX request ke Mock API
    const response = await fetch(MOCK_API_URL);

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server!");
    }

    const data = await response.json();
    const users = data.users; // Sesuai struktur JSON yang diberikan

    // Cek kredensial
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Simulasi login berhasil
      alert(`Login berhasil! Selamat datang, ${user.username}`);
      window.location.href = "/dashboard";
    } else {
      showError("Username atau password salah!");
    }
  } catch (error) {
    showError(error.message || "Gagal mengambil data dari server!");
  }
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}
