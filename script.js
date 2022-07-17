const catalogList = document.querySelector('#productsList');
const cartList = document.querySelector('#cartList');

const productsManager = {
  catalog: [],
  orderedProducts: [],
  setCatalog(products) {
    this.catalog = products;
    this.renderCatalog();
  },
  renderCatalog() {
    const productElements = [];
    for (const product of this.catalog) {
      const newProductElem = this.createProductElement(product);
      productElements.push(newProductElem);
    }

    catalogList.append(...productElements);
  },
  handleAddSubmit(e) {
    e.preventDefault();

    const input = e.currentTarget.querySelector('input');
    const quantity = parseInt(input.value);
    const productId = e.currentTarget.dataset.id;

    this.orderProduct(productId, quantity);

    input.value = '1';
  },
  orderProduct(id, quantity) {
    let productToAdd;
    for (const product of this.catalog) {
      if (product.id === id) {
        productToAdd = product;
        break;
      }
    }

    for (const product of this.orderedProducts) {
      if (product.id === productToAdd.id) {
        product.quantity += quantity;
        this.renderOrderedProducts();
        return;
      }
    }

    this.orderedProducts.push({
      ...productToAdd,
      quantity,
    });
    this.renderOrderedProducts();
  },
  renderOrderedProducts() {
    const orderedElements = [];
    for (const product of this.orderedProducts) {
      const newProductElem = this.createOrderElement(product);
      orderedElements.push(newProductElem);
    }

    cartList.innerHTML = '';
    cartList.append(...orderedElements);
  },
  createProductElement(product) {
    const inputId = product.name + product.id;

    const productElem = document.createElement('li');
    productElem.className = 'product';

    const image = document.createElement('img');
    image.src = `images/${product.image}`;
    image.alt = product.name;
    image.className = 'product__img';
    image.width = 168;
    image.height = 180;

    const title = document.createElement('h4');
    title.className = 'product__title';
    title.textContent = product.name;
    // title.innerText = product.name;
    // title.innerHTML = product.name;

    const price = document.createElement('p');
    price.className = 'product__price';
    price.textContent = product.price;

    const priceTag = document.createElement('span');
    priceTag.className = 'product__price-tag';
    priceTag.textContent = ' ₴';

    price.appendChild(priceTag);

    const form = document.createElement('form');
    form.className = 'product__form';
    form.dataset.id = product.id;
    form.addEventListener('submit', this.handleAddSubmit.bind(this));

    const formField = document.createElement('div');
    formField.className = 'form__field product__quantity-field';

    const label = document.createElement('label');
    label.className = 'label';
    label.htmlFor = inputId;
    label.textContent = 'Кількість';

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'input';
    input.min = '1';
    input.step = '1';
    input.value = '1';
    input.name = 'quantity';
    input.id = inputId;

    formField.append(label, input);

    const button = document.createElement('button');
    button.className = 'btn';
    button.type = 'submit';
    button.textContent = 'Купити';

    form.append(formField, button);

    productElem.append(image, title, price, form);

    return productElem;
  },
  createOrderElement(product) {
    const productElem = document.createElement('li');
    productElem.className = 'product';

    const image = document.createElement('img');
    image.src = `images/${product.image}`;
    image.alt = product.name;
    image.className = 'product__img';
    image.width = 168;
    image.height = 180;

    const title = document.createElement('h4');
    title.className = 'product__title';
    title.textContent = product.name;

    const price = document.createElement('p');
    price.className = 'product__price';
    price.textContent = product.price;

    const priceTag = document.createElement('span');
    priceTag.className = 'product__price-tag';
    priceTag.textContent = ' ₴';

    price.appendChild(priceTag);

    const quantityControls = document.createElement('div');
    quantityControls.className = 'product__quantity-controls';

    const decrementBtn = document.createElement('button');
    decrementBtn.className = 'btn product__quantity-btn';
    decrementBtn.type = 'button';
    decrementBtn.textContent = '-';
    // TODO: Add onclick

    const quantity = document.createElement('span');
    quantity.className = 'tag product__quantity';
    quantity.textContent = product.quantity;

    const incrementBtn = document.createElement('button');
    incrementBtn.className = 'btn product__quantity-btn';
    incrementBtn.type = 'button';
    incrementBtn.textContent = '+';
    // TODO: Add onclick

    quantityControls.append(decrementBtn, quantity, incrementBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn';
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Видалити';

    productElem.append(image, title, price, quantityControls, deleteBtn);

    return productElem;
  },
};

function loadProductsCatalog(callback) {
  fetch('products.json')
    .then((res) => res.json())
    .then((products) => callback(products));
}

const callbackWithContext = productsManager.setCatalog.bind(productsManager);
loadProductsCatalog(callbackWithContext);
