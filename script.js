// function login() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Ganti URL ini dengan link raw JSON GitHub lu
//   const jsonUrl =
//     "https://raw.githubusercontent.com/sulaiman0851/database-json-script-bot-WhatApp/refs/heads/main/json/users.json";

//   fetch(jsonUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const users = data.users;
//       const user = users.find(
//         (user) => user.username === username && user.password === password
//       );

//       if (user) {
//         document.getElementById("message").innerText = "Login berhasil!";
//         document.getElementById("message").style.color = "green";
//       } else {
//         document.getElementById("message").innerText =
//           "Username atau password salah!";
//         document.getElementById("message").style.color = "red";
//       }
//     })
//     .catch((error) => console.error("Error:", error));
// }
