const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;

  this.addGuest = function (guestName) {
    console.log(`${guestName} entered ${this.name}`);
  };
};

const hotel = new Hotel('Resort Hotel', 5, 100);
hotel.addGuest('Владислав');
