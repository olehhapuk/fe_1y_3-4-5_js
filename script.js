const obj = {
  name: 'Vlad',
  changeName() {
    console.log(this.name);
  },
  // changeName: function() {
  //   console.log(this.name);
  // }
};

// const func = obj.changeName;
// func();

obj.changeName();

obj.getName = function () {
  console.log(this.name);
};

obj.getName();
