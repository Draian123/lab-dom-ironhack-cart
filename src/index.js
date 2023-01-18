// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = Math.round(parseFloat(product.querySelector('.price span').innerText)*100)/100;
  const quantityElement = Math.round(parseFloat(product.querySelector('.quantity input').value)*100)/100;
  // const subtotalElement = parseFloat(document.querySelector('.subtotal span').innerText);
  // console.log(priceElement, quantityElement, subtotalElement)

  let subtotal = Math.round((priceElement * quantityElement)*100)/100


  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  const allProducts = document.querySelectorAll('.product');

  // console.log(allProducts);
  let total = 0;
  allProducts.forEach(p =>{
    total += updateSubtotal(p)
  })
  // console.log(total);
  total = Math.round(total*100)/100
  document.querySelector('#total-value span').innerText = total;
  return total
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
