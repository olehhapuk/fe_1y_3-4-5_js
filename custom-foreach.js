// for (let i = 0; i < players.length; i++) {
//   const player = players[i];
//   console.log(player);
// }

// function customForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     callback(element, i, array);
//   }
// }

// customForEach(players, (player, i) => {
//   console.log(i);
//   console.log(player);
// });

const players = [
  {
    id: '1',
    name: 'Mango',
    isOnline: false,
    hoursPlayed: 1,
  },
  {
    id: '2',
    name: 'Poly',
    isOnline: true,
    hoursPlayed: 3,
  },
  {
    id: '3',
    name: 'Ajax',
    isOnline: false,
    hoursPlayed: 10,
  },
  {
    id: '4',
    name: 'Chelsey',
    isOnline: true,
    hoursPlayed: 4,
  },
];

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    callback(element, i, this);
  }
};

players.customForEach((player) => {
  console.log(player);
});
