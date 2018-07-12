document.addEventListener("DOMContentLoaded", (event) => {
  fetch('/open/')
  .then(response => response.json())
  .then(data => {
    let openData = data;
    console.log(openData);
    openData.forEach((openBaccy) => {
      let openCard = document.getElementById('open-card');
      let openCardChild = document.createElement('section');
      openCardChild.setAttribute('class', 'open-card-child');
      console.log(openBaccy.age);

      let row1 = document.createElement('section');
      row1.setAttribute('class', 'row1');

      let row2 = document.createElement('section');
      row2.setAttribute('class', 'row2');

      let openImage = document.createElement('img');
      openImage.setAttribute('src', openBaccy.image);

      let openBrand = document.createElement('h4');
      openBrand.innerText = `Brand: ${openBaccy.brand}`;

      let openBlend = document.createElement('h4');
      openBlend.innerText = `Blend: ${openBaccy.blend}`;

      let openWeight = document.createElement('h4');
      openWeight.innerText = `Weight: ${openBaccy.weight}`;

      let openPurchase = document.createElement('h4');
      let date = openBaccy.purchased.split('T')[0];
      openPurchase.innerText = `Purchased: ${date}`;

      let openAge = document.createElement('h4');
      openAge.innerText = `Age: ${openBaccy.age}`;

      let openPrice = document.createElement('h4');
      openPrice.innerText = `Price $${openBaccy.price.toFixed(2)}`;

      let openAvailability = document.createElement('h4');
      openAvailability.innerText = `Available: ${openBaccy.isAvailable}`;
      if(openBaccy.isAvailable === true) {
        openAvailability.innerText = `Available: Yup!`;
      } else {
        `Available: Nope.`;
      }

      let openSource = document.createElement('h4');
      openSource.innerText = `Sourece: ${openBaccy.source}`;

      let openRating = document.createElement('h4');
      openRating.innerText = `Rating: ${openBaccy.rating} out of 5 stars`;

      let openEdit = document.createElement('button');
      openEdit.setAttribute('class', 'edit-button');
      openEdit.innerText = 'Edit Blend';

      let openDelete = document.createElement('button');
      openDelete.setAttribute('class', 'delete-btn');
      openDelete.innerText = 'Delete';

      row1.appendChild(openImage);
      row1.appendChild(openBrand);
      row1.appendChild(openBlend);
      row1.appendChild(openPurchase);
      row1.appendChild(openAge);
      row1.appendChild(openWeight);

      row2.appendChild(openEdit);
      row2.appendChild(openDelete);
      row2.appendChild(openAvailability);
      row2.appendChild(openPrice);
      row2.appendChild(openSource);
      row2.appendChild(openRating);

      openCardChild.appendChild(row1);
      openCardChild.appendChild(row2);

      openCard.appendChild(openCardChild);

    });
  });
});
