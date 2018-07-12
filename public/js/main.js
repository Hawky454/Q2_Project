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
      let cellarBrand = document.createElement('h4');
      cellarBrand.innerText = `Brand: ${cellarObject.brand}`;
      console.log(cellarBrand);
      //blend
      let cellarBlend = document.createElement('h4');
      cellarBlend.innerText = `Blend: ${cellarObject.blend}`;
      console.log(cellarBlend);
      //age
      let cellarAge = document.createElement('h4');
      cellarAge.innerText = `Age: ${cellarObject.age}`;
      console.log(cellarAge);
      //image
      let cellarImage = document.createElement('img');
      cellarImage.setAttribute('src', cellarObject.image);
      console.log(cellarImage);
      //availability
      let cellarAvailability = document.createElement('h4');
      cellarAvailability.innerText = `Available: ${cellarObject.isAvailable}`;
      if(cellarObject.isAvailable === true) {
        cellarAvailability.innerText = 'Available: Yes!';
      } else {
        cellarAvailability.innerText = 'Available: Nope. (frowny face)';
      }
      console.log(cellarAvailability);
      //price
      let cellarPrice = document.createElement('h4');
      cellarPrice.innerText = `Price: $${cellarObject.price.toFixed(2)}`;
      console.log(cellarPrice);
      //purchased
      let cellarPurchase = document.createElement('h4');
      let date = cellarObject.purchased.split('T')[0];
      cellarPurchase.innerText = `Purchased: ${date}`;
      console.log(cellarPurchase);
      //source
      let cellarSource = document.createElement('h4');
      cellarSource.innerText = `Source: ${cellarObject.source}`;
      console.log(cellarSource);
      //weight
      let cellarWeight = document.createElement('h4');
      cellarWeight.innerText = `Weight: ${cellarObject.weight}`;
      console.log(cellarWeight);
      //rating
      let cellarRating = document.createElement('h4');
      cellarRating.innerText = `Rating: ${cellarObject.rating} out of 5 stars`;
      console.log(cellarRating);
      //edit button
      let cellarEdit = document.createElement('button');
      cellarEdit.setAttribute('class', 'edit-btn');
      cellarEdit.innerText = 'Edit Blend';
      //delete button
      let cellarDelete = document.createElement('button');
      cellarDelete.setAttribute('class', 'delete-btn');
      cellarDelete.innerText = 'Delete';

      column1.appendChild(cellarImage);
      column1.appendChild(cellarBrand);
      column1.appendChild(cellarBlend);
      column1.appendChild(cellarPurchase);
      column1.appendChild(cellarAge);
      column1.appendChild(cellarWeight);

      column2.appendChild(cellarEdit);
      column2.appendChild(cellarDelete);
      column2.appendChild(cellarAvailability);
      column2.appendChild(cellarPrice);
      column2.appendChild(cellarSource);
      column2.appendChild(cellarRating);


      cellarCardChild.appendChild(column1);
      cellarCardChild.appendChild(column2);

      cellarCard.appendChild(cellarCardChild);
       }
    });
});
