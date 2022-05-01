'use strict';

// const value = !!0;
// const value1 = Boolean(0);
// console.log(value1, typeof value1);

// const value2 = Boolean('');
// console.log(value2, typeof value2);

// const value3 = Boolean(NaN);
// console.log(value3, typeof value3);

// const value4 = Boolean(null);
// console.log(value4, typeof value4);

// const value5 = Boolean(undefined);
// console.log(value5, typeof value5);

const result1 = 20 > 10;
console.log('20 > 10', result1);

const result2 = 20 < 10;
console.log('20 < 10', result2);

const result3 = 10 >= 10;
console.log('10 >= 10', result3);

const result4 = 10 > 10;
console.log('10 > 10', result4);

/**
 * і = &&
 * true && true = true
 * false && true = false
 * true && false = false
 * false && false = false
 */

/**
 * або = ||
 * true || true = true
 * false || true = true
 * true || false = true
 * false || false = false
 */

/**
 * не = !
 */

const result5 = 7 > 5 && 7 < 10;
console.log('7 > 5 && 7 < 10', result5);

const result6 = 7 > 5 || 7 > 10;
console.log('7 > 5 || 7 > 10', !result6);
