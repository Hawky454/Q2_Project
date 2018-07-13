document.addEventListener('DOMContentLoaded', (event) => {
  fetch('/pipes/')
  .then(response => response.json())
  .then(data => {
     console.log(data);
     data.forEach((pipesData) => {
       console.log(pipesData);

       let pipesCard = document.getElementById('pipes-card');

       let pipesCardChild = document.createElement('section');
       pipesCardChild.setAttribute('class','pipes-card-child');

       let side1 = document.createElement('section');
       side1.setAttribute('class', 'side1');

       let side2 = document.createElement('section');
       side2.setAttribute('class', 'side2');

       let pipesImage = document.createElement('img');
       pipesImage.setAttribute('src', pipesData.image);
       pipesImage.setAttribute('class', 'pipes-image');

       let pipesBrand = document.createElement('h4');
       pipesBrand.innerText = `Brand: ${pipesData.brand}`;

       let pipeMaker = document.createElement('h4');
       pipeMaker.innerText = `Pipemaker: ${pipesData.pipemaker}`;

       let pipesYear = document.createElement('h4');
       pipesYear.innerText = `Year: ${pipesData.year}`;

       let pipesPrice = document.createElement('h4');
       pipesPrice.innerText = `Price: $${pipesData.price.toFixed(2)}`;

       let pipesEdit = document.createElement('button');
       pipesEdit.setAttribute('class', 'editthis');
       pipesEdit.innerText = 'Edit Pipes';

       let pipesDelete = document.createElement('button');
       pipesDelete.setAttribute('class', 'deletethis');
       pipesDelete.innerText = 'Delete Pipes';

       let sandblasted = document.createElement('h4');
       sandblasted.innerText = `Sandblasted: ${pipesData.sandblasted}`;

       let smooth = document.createElement('h4');
       smooth.innerText = `Smooth: ${pipesData.smooth}`;

       let pipesSource = document.createElement('h4');
       pipesSource.innerText = `Source ${pipesData.source}`;

       let pipesRating = document.createElement('h4');
       pipesRating.innerText = `Rating: ${pipesData.rating} out of 5 stars`;


       side1.appendChild(pipesImage);

       side2.appendChild(pipesEdit);
       side2.appendChild(pipesDelete);
       side2.appendChild(pipesBrand);
       side2.appendChild(pipeMaker);
       side2.appendChild(pipesYear);
       side2.appendChild(pipesPrice);
       side2.appendChild(sandblasted);
       side2.appendChild(smooth);
       side2.appendChild(pipesSource);
       side2.appendChild(pipesRating);

       pipesCardChild.appendChild(side1);
       pipesCardChild.appendChild(side2);

       pipesCard.appendChild(pipesCardChild);

     });
  });
});
