function makeCheff(cheffName) {
  return (dishName) => {
    console.log(`${cheffName} готує ${dishName}`);
  };
}

const vladMezhevyi = makeCheff('Владислав Межевий');

// vladMezhevyi('Салат');

function makeCounter() {
  let counter = 0;

  return {
    increment() {
      counter++;
      console.log(counter);
    },
    setCounter(value) {
      counter = value;
      console.log(counter);
    },
  };
}

const counter1 = makeCounter();
// const increment1 = makeCounter();

// counter1.increment();
// counter1.setCounter(15);

const funcArray = [() => console.log(1), () => console.log(2)];
funcArray[1]();

const createCounter = function () {
  /*
   * Локальна змінна privateValue доступна тільки в замиканні.
   * Отримати до неї доступ в зовнішньому коді неможливо.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};
