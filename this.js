// const cart = {
//   products: [],
//   addProduct(product) {
//     console.log(this);
//     this.products.push(product);
//   },
// };

// cart.addProduct('Капуста');

// const copyAddProduct = cart.addProduct;

// copyAddProduct.call(cart, 'Апельсини');
// copyAddProduct.apply(cart, ['Яблука']);
// copyAddProduct.apply(cart, ['Яблука']);

// const addProductWithContext = copyAddProduct.bind(cart);

// addProductWithContext('Виноград');
// addProductWithContext('Кавун');

// console.log(cart.products);

// const cart = {
//   products: [],
// };

// function addProduct(product) {
//   console.log(this);
//   this.products.push(product);
//   console.log(this.products);
// }

// cart.addProduct = addProduct;

// cart.addProduct('Апельсини');
// addProduct('Апельсини');

const cart = {
  products: [],
  addProduct(product) {
    console.log(this);
    this.products.push(product);
    console.log(this.products);
  },
};

function callAddProduct(productName, callback) {
  callback(productName);
}

callAddProduct('Апельсини', cart.addProduct.bind(cart));
