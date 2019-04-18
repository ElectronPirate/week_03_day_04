 const DogView = require('./views/dog_view.js');
 const Dogs = require('./models/dogs.js');


document.addEventListener('DOMContentLoaded', () => {
  const dogView = new DogView();
  dogView.bindEvents();

  const newDogView = new Dogs();
  newDogView.getData();
});
