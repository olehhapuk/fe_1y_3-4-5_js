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

players.forEach((player) => {
  console.log(
    `Гравець ${player.name} ${player.isOnline ? 'онлайн' : 'офлайн'}`
  );
});
