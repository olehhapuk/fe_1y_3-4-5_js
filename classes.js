class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXP(amount) {
    this.xp += amount;
    console.log(`${this.name} отримав ${amount}XP`);
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }

  attack(enemy) {
    console.log(`${this.name} атакує ${enemy} за допомогою ${this.weapon}`);
    super.gainXP(50);
  }
}

const sasha = new Warrior('Sasha', 800, 'Екскалібур');
sasha.attack('Огр');
