class ForagerBee extends Bee {
  constructor (age, color, food, job) {
    super(age, color, food, job);
    this.age = 10;
    // this.color = 'yellow';
    // this.food = 'jelly'; // **note that although ForagerBee is derived from the Bee superclass, the food property is inherited from the Grub parent superclass
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  // eat () {
  //   return 'Mmmmmmmmm jelly';
  // }
  forage (treasure) {
    this.treasureChest.push(treasure);
  }
}