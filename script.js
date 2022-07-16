const catalogList = document.querySelector('#productsList');

const productsManager = {
  catalog: [],
  setCatalog(products) {
    this.catalog = products;
    this.renderCatalog();
  },
  renderCatalog() {
    for (const product of this.catalog) {
      this.createProductElement(product);
    }

    this.createOrderElement({
      ...this.catalog[0],
      quantity: 9,
    });
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
    // TODO: add onSubmit

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

    console.log(productElem);
    catalogList.appendChild(productElem);
  },
  // Домашнє завдання: Зробити елемент замовлення
  createOrderElement(product) {},
};

function loadProductsCatalog(callback) {
  fetch('products.json')
    .then((res) => res.json())
    .then((products) => callback(products));
}

const callbackWithContext = productsManager.setCatalog.bind(productsManager);
loadProductsCatalog(callbackWithContext);
