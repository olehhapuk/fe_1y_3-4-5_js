// Hero
function Hero(name, xp) {
  this.name = name;
  this.xp = xp;
}

Hero.prototype.gainXP = function (amount) {
  this.xp += amount;
  console.log(`${this.name} отримав ${amount}XP`);
};

// Warrior
function Warrior(name, xp, weapon) {
  Hero.call(this, name, xp);
  this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
  console.log(`${this.name} атакує за допомогою ${this.weapon}`);
  this.gainXP(50);
};

const rostyslav = new Warrior('Ростислав', 1000, 'Меч Свободи');
rostyslav.attack();
console.log(rostyslav);
