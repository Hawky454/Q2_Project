document.addEventListener("DOMContentLoaded", (event) => {
  fetch('/cellar/')
  .then(response => response.json())
  .then(data => {
    let cellarData = data;
    console.log(cellarData);
  });
});
