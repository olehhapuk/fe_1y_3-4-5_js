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

const targetId = '2';
// const filteredPlayers = players.filter((player) => {
//   if (player.id === targetId) {
//     return false;
//   }

//   return true;
// });

const filteredPlayers = players.filter((player) => player.id !== targetId);

const onlinePlayers = players.filter((player) => player.isOnline);
const offlinePlayers = players.filter((player) => !player.isOnline);

console.table(players);
console.table(offlinePlayers);
