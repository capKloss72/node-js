// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

const event = {
  name: 'Birthday Party',
  guestList: ['Tym', 'Sim', 'Max'],
  printGuestList() {
    console.log(`This is a ${this.name}`);
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending the ${this.name}`);
    });
  },
};

event.printGuestList();
