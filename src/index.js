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
  const parentNode = target.parentNode.parentNode;
  // console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('yo')
  let textInput= document.querySelector('#textInput').value;
  let priceInput= document.querySelector('#priceInput').value;


let newProduct = document.createElement('tr')
newProduct.className = 'product'
newProduct.innerHTML = `  
<td class="name">
  <span>${textInput}</span>
</td>
<td class="price">$<span>${priceInput}</span></td>
<td class="quantity">
  <input type="number" value="1" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

console.log(newProduct)

  let bodyOfProducts = document.querySelector('tbody')
  // console.log(bodyOfProducts)
  bodyOfProducts.appendChild(newProduct)
  calculateAll()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
    const removeButton = document.querySelectorAll('.btn-remove');
  removeButton.forEach(btn => btn.addEventListener('click',removeProduct));

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
})