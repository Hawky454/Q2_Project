document.addEventListener("DOMContentLoaded", (event) => {
  fetch('/cellar/')
    .then(response => response.json())
    .then(data => {
      let cellarData = data;
      for(let i = 0; i < cellarData.length; i++) {
      let cellarCard = document.getElementById('cellar-card');
      let cellarObject = cellarData[i];
      let cellarCardChild = document.createElement('section');
      cellarCardChild.setAttribute('class', 'cellar-card-child');
      console.log(cellarObject);

      // creating columns to better organize content within display card
      let column1 = document.createElement('section');
      column1.setAttribute('class', 'column1');

      let column2 = document.createElement('section');
      column2.setAttribute('class', 'column2');

      // just in case i'll create two more columns...
      let column3 = document.createElement('section');
      column3.setAttribute('class', 'column3');
      let column4 = document.createElement('section');
      column4.setAttribute('class', 'column4');

      //brand
      let cellarBrand = document.createElement('h2');
      cellarBrand.innerText = `Brand: ${cellarObject.brand}`;
      console.log(cellarBrand);
      //blend
      let cellarBlend = document.createElement('span');
      cellarBlend.innerText = `Blend: ${cellarObject.blend}`;
      console.log(cellarBlend);
      //age
      let cellarAge = document.createElement('span');
      cellarAge.innerText = `Age: ${cellarObject.age}`;
      console.log(cellarAge);
      //image
      let cellarImage = document.createElement('img');
      cellarImage.setAttribute('src', cellarObject.image);
      console.log(cellarImage);
      //availability
      let cellarAvailability = document.createElement('span');
      cellarAvailability.innerText = `Available: ${cellarObject.isAvailable}`;
      if(cellarObject.isAvailable === true) {
        cellarAvailability.innerText = 'Available: Yes!';
      } else {
        cellarAvailability.innerText = 'Available: Nope. (frowny face)';
      }
      console.log(cellarAvailability);
      //price
      let cellarPrice = document.createElement('span');
      cellarPrice.innerText = `Price: $${cellarObject.price.toFixed(2)}`;
      console.log(cellarPrice);
      //purchased
      let cellarPurchase = document.createElement('span');
      cellarPurchase.innerText = `DoP: ${cellarObject.purchased}`;
      console.log(cellarPurchase);
      //source
      let cellarSource = document.createElement('span');
      cellarSource.innerText = `Source: ${cellarObject.source}`;
      console.log(cellarSource);
      //weight
      let cellarWeight = document.createElement('span');
      cellarWeight.innerText = `Weight: ${cellarObject.weight}`;
      console.log(cellarWeight);
      //rating
      let cellarRating = document.createElement('span');
      cellarRating.innerText = `Rating: ${cellarObject.rating} out of 5 stars`;
      console.log(cellarRating);






       }
    });
});
