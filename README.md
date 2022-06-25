1. Створити об'єкт cat з властивостями name, age
2. Вивести в консоль `Мене звати {name}, мені {age} років`
3. Додати до об'єкта cat властивість {breed}
4. Вивести в консоль значення breed через computed property
5. Додати в середину об'єкта cat властивість features = []
6. Додати в середину об'єкта cat метод addFeature(feature), який прийматиме нову особливість і додаватиме її в масив features кота
7. Додати в середину об'єкта cat метод getFeatures() який вертатиме всі особливості кота

8. Створити масив об'єктів students з властивостями name, present
9. Створити функцію checkPresence(name) яка отримує ім'я студента і перевіряє чи він є на занятті
10. Створити функцію getPresentStudents яка вертатиме масив тільки з присутніми на занятті студентами

11. Створити об'єкт cart з властивістю products = []
12. Додати в об'єкт cart метод add(product) який отримуватиме об'єкт product(name, price, quantity) і додаватиме його в масив products
13. Додати в об'єкт cart метод remove(productName) який видалятиме з масива products існуючий продукт по його імені, якщо такий існує
14. Додати в об'єкт cart метод clear() який очищуватиме масив products
15. Додати в об'єкт cart метод getAll()
16. Додати в об'єкт cart метод getTotalPrice() який обраховуватиме і вертатиме сумарну вартість товарів, включаючи їх кількість(наприклад яблуко коштує 4 грн і його 4 штуки, сума = 4 \* 4 = 16)
17. Додати в об'єкт cart метод increaseQuantity(productName) який додаватиме 1 до quantity існуючого продукту по його імені
18. Додати в об'єкт cart метод decreaseQuantity(productName) який прибиратиме 1 від quantity існуючого продукту по його імені
19. Додати генерацію випадкового передбачення generate()
20. Додати в об'єкт cart метод order() який виводитиме через alert або в консоль повідомлення:
    `
---
Чек
{product.name} {product.quantity} x {product.price} = {product.totalPrice}
{product.name} {product.quantity} x {product.price} = {product.totalPrice}
{product.name} {product.quantity} x {product.price} = {product.totalPrice}
---
Сума = {totalPrice}
---
Дякуємо за покупку!
---
{randomPhrase}
`
