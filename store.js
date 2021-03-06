// TODO:
var products = []

// Declare `shoppingCart`, something where you will be storing all products that the user buys.
// Declare `products`, the different that you will be selling under each of the departments.

var printProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents
  // use the printProductsOnScreen function for inspiration
};

var addProductToCart = function(productNumber) {
  console.log(productNumber);
  // Find the product in the array of objects with the correct reference number
  // Add the product to your shopping cart


  printProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  updateTotalPrice(/*The variable holding the totol price*/);
};

var checkoutCustomer = function() {
  //replace this with showing a nice goodbye message showing the amount to be paid.
  window.alert("Bye")
  //empty the shopping cart
}

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var updateTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;
    referenceNumberElement.onclick = function () {
      //this method is called when the reference number is clicked
      var productNumber = this.innerHTML;
      //use the reference number to look up the product and add it to 
      addProductToCart(productNumber);
    };

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);
  }
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    printProductsOnScreen();
    document.getElementById("checkout").onclick = function(){
      checkoutCustomer();
    }
  }
};
