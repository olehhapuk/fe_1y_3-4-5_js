const hotel1 = {
  displayName: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  address: 'Violet'
};

const { displayName } = hotel1;

// const hotel2 = {
//   displayName: 'Affordable Hotel',
//   stars: 4,
//   capacity: 30,
//   status: 'full',
//   address: 'Philadelphia'
// };

/**
 * const displayName = hotel.displayName;
 * const stars = hotel.stars;
 * const status = hotel.status;
 */
// const starsCount = hotel1.stars;
// const stars = 1;
// const {
//   displayName,
//   stars: starsCount,
//   status = 'empty',
//   ...otherValues
// } = hotel2;

// // Вітаємо вас в готелі {name}, який має {stars} зірок
// const message =
//   `Вітаємо вас в готелі ${displayName},
//     який має ${starsCount} зірок`;
// console.log(message);
// console.log(status);
// console.log(otherValues);

const rgb = [200, 255, 100];
const [red, green] = rgb;

// const green = rgb[1];
// console.log(green);
// const [red, ...colors] = rgb;
// console.log(colors);

// const [, green, blue] = rgb;
// console.log(green);
// const blue = rgb[2];