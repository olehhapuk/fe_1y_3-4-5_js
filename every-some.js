const players = [
  {
    id: '1',
    name: 'Mango',
    isOnline: true,
    hoursPlayed: 1,
    rank: 5,
  },
  {
    id: '2',
    name: 'Poly',
    isOnline: true,
    hoursPlayed: 3,
    rank: 4,
  },
  {
    id: '3',
    name: 'Ajax',
    isOnline: true,
    hoursPlayed: 10,
    rank: 5,
  },
  {
    id: '4',
    name: 'Chelsey',
    isOnline: false,
    hoursPlayed: 4,
    rank: 1,
  },
];

// const isAllOnline = players.every((player) => player.isOnline);
// console.log(isAllOnline);

// const isOneOnline = players.some((player) => player.isOnline);
// console.log(isOneOnline);

const canAllPlay = players.every((abc) => abc.rank >= 4);
console.log(canAllPlay);
