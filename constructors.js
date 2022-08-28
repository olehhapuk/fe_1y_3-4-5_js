/**
 * if (statement) {
 *   code
 * }
 */

function Hotel(name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
  this.guestCount = 0;

  this.greet = function (guestName) {
    console.log(`Hello ${guestName}, welcome to ${this.name}`);
  };

  this.addGuest = function (guestName) {
    if (this.guestCount < this.capacity) {
      this.greet(guestName);
      this.guestCount += 1;
    } else {
      console.log(`Hotel ${this.name} is full`);
    }
  };

  this.removeGuest = function () {
    if (this.guestCount > 0) {
      console.log(`Thank you for visiting ${this.name}`);
      this.guestCount -= 1;
    } else {
      console.log('No guest left');
    }
  };
}

const hotel1 = new Hotel('Resort Hotel', 4, 3);
console.log(hotel1);
hotel1.addGuest('Sasha');
hotel1.addGuest('Polina');
hotel1.addGuest('Artem');

hotel1.addGuest('Oleh');
console.log(hotel1);

hotel1.removeGuest();
hotel1.removeGuest();
hotel1.removeGuest();

hotel1.removeGuest();
console.log(hotel1);

const hotel2 = new Hotel('Luxury Hotel', 10, 1000);
console.log(hotel2);

hotel2.addGuest('Sasha');

console.log(hotel1);
console.log(hotel2);
