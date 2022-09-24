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

// const updatedPlayers = players.map(({ hoursPlayed, ...otherPlayerData }) => ({
//   ...otherPlayerData,
//   isOnline: true,
// }));

// const updatedPlayers = players.map((player) => ({
//   name: player.name,
//   id: player.id,
//   isOnline: true,
// }));

const targetId = '3';
const updatedPlayers = players.map((player) => {
  if (player.id === targetId) {
    return {
      ...player,
      isOnline: true,
    };
  }

  return player;
});

console.table(players);
console.table(updatedPlayers);
