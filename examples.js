// const a = 1;
// const b = 1;

// while (a === b) {
//   console.log(1);
// }

// [log, log, log...]

// let counter = 0;

// function a() {
//   console.log(counter);
//   counter++;

//   if (counter < 10) {
//     a();
//   }
// }

// a();

// [a, log, a, log, a, log...]

// function global() {}

// global();

// const fruit = 'apple';

// console.log(fruit);

// function a() {
//   const exampleVar = 5;
//   console.log(exampleVar);
//   console.log(fruit);

//   function b() {
//     const price = 5;
//     console.log(exampleVar);
//     console.log(fruit);
//   }
// }

/*
  Global env - створюється при виконанні файлу скрипта
    Record: {}
    Parent: null
*/

// const x = 10;
// /*
//   Global env
//     Record: {x: 10}
//     Parent: null
// */

// const y = 20;
// /*
//   Global env
//     Record: {x: 10, y: 20}
//     Parent: null
// */

// /*
//   Записується в момент оголошення функції
//   [[Environment]] = Global env
// */
// const foo = function (z) {
//   /*
//     Foo env - створюється в момент виклику функції
//       Record: {z: 30}
//       Parent: Global env
//   */

//   const x = 100;
//   /*
//     Foo env - створюється в момент виклику функції
//       Record: {z: 30, x: 100}
//       Parent: Global env
//   */

//   return x + y + z;
// };

// /*
//   Global env
//     Record: {x: 10, y: 20, foo: <function>}
//     Parent: null
// */

// const w = 500;

// /*
//   Global env
//     Record: {x: 10, y: 20, foo: <function>, w: 500}
//     Parent: null
// */

// foo(30); // 150
