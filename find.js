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

const targetName = 'Poly';
const player = players.find((player) => player.name === targetName);
if (!player) {
  console.log('Такого гравця немає');
} else {
  console.log(player);
}
