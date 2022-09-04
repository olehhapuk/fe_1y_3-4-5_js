// Hero, Warrior, Mage
// attack, buyPotion, heal, move, cast spell

class Hero {
  static count = 0;

  #hp = 0;
  position = {
    x: 0,
    y: 0,
  };

  constructor(name, xp, hp, baseLvl) {
    Hero.count++;

    this.name = name;
    this.xp = xp;
    this.#hp = hp;
    this.lvl = baseLvl;
  }

  get hp() {
    return this.#hp;
  }

  set hp(value) {
    if (value > 20 || value <= 0) {
      console.log('HP не може бути більше 20');
    } else {
      this.#hp = value;
    }
  }

  takeDamage(amount, from) {
    this.#hp -= amount;
    console.log(`${from.name} атакує ${this.name} і наносить ${amount} шкоди`);
    console.log(`У ${this.name} залишилось ${this.#hp} HP`);
  }

  gainXP(amount) {
    this.xp += amount;
    console.log(`${this.name} отримав ${amount} досвіду`);

    if (this.xp >= 1000) {
      this.increaseLvl();
    }
  }

  increaseLvl() {
    this.xp = 0;
    this.lvl++;
    console.log(`${this.name} отримав ${this.lvl} рівень`);
  }

  move(moveX, moveY) {
    this.position.x += moveX;
    this.position.y += moveY;
    console.log(
      `${this.name} пішов до X:${this.position.x} Y:${this.position.y}`
    );
  }
}

class Warrior extends Hero {
  constructor(name, xp, hp, baseLvl, damage) {
    super(name, xp, hp, baseLvl);
    this.damage = damage;
  }

  attack(hero) {
    hero.takeDamage(this.damage, this);
  }
}

class Mage extends Hero {
  constructor(name, xp, hp, baseLvl, spell) {
    super(name, xp, hp, baseLvl);
    this.spell = spell;
  }

  castSpell(hero) {
    hero.takeDamage(this.spell.damage, this);
  }
}

const vsevolod = new Warrior('Vsevolod', 500, 20, 0, 7);
vsevolod.gainXP(500);
vsevolod.move(-5, 5);

const vlad = new Mage('Vlad', 700, 15, 2, {
  damage: 12,
  name: 'Nightmare',
});

vsevolod.attack(vlad);
vlad.castSpell(vsevolod);

vsevolod.hp = 19;
console.log(vsevolod.hp);

console.log(Hero.count);
