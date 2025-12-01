fetch("https://cool-website-back.onrender.com")
  .then(response => response.json())
  .then(data => {
      document.body.innerHTML += `<p>Backend says: ${data.message}</p>`;
  })
  .catch(err => console.error("Fetch error:", err));
