(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var theImages = document.querySelectorAll('.data-ref'),
      theNames = document.querySelector('.modelName'),
      thePrices = document.querySelector('.priceInfo'),
      theDetails = document.querySelector('.modelDetails');

  function changeElements(){
      let objectIndex = carData[this.id];

        theNames.firstChild.nodeValue = objectIndex.model;
        thePrices.firstChild.nodeValue = objectIndex.price;
        theDetails.firstChild.nodeValue = objectIndex.description;

        theImages.forEach(function(image, index){
          image.classList.add('nonActive');
});

          this.classList.remove('nonActive');

};
        theImages.forEach(function(image, index){
          image.addEventListener('click', changeElements, false);
});

})();
