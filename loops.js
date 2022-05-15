// let a = 5;
// while (a < 5) {
//   console.log(1);
//   a++;
// } // void

// for (let i = 0; i < 5; i++) {
//   console.log(1);
// }

// let b = 5;
// do {
//   console.log(1);
//   b++;
// } while (b < 5);
// 1

// break
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     console.log('Зупиняється цикл');
//     break;
//   }

//   console.log(i);
// }
// 0 1 2 Зупиняється цикл

// continue
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     console.log('Пропускається ітерація');
//     continue;
//   }

//   console.log(i);
// }
// 0 1 2 Пропускається ітерація 4

for (let index = 0; index < 10; index++) {
  if (index % 2 !== 0) {
    continue;
  }

  console.log(index);
}
