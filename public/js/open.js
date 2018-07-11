document.addEventListener("DOMContentLoaded", (event) => {
  fetch('/open/')
  .then(response => response.json())
  .then(data => {
    let openData = data;
    console.log(openData);
  });
});
