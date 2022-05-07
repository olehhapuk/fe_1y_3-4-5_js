'use strict';

const global = 5;

if (true) {
  const local1 = 10;

  console.log(local1);
  console.log(global);
}

if (true) {
  console.log(local1);
}

console.log(local1);

// {
//   const a = 1;
// }
