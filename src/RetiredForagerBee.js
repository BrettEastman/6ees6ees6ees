class RetiredForagerBee extends ForagerBee {
  constructor (age, color, food, job) {
    super(age, color, food, job);
    this.age = 40;
    this.color = 'grey';
    // this.food = 'jelly';
    this.job = 'gamble';
    this.canFly = false;
    // this.treasureChest = [];
  }
  // eat () {
  //   return 'Mmmmmmmmm jelly';
  // }
  forage () {
    return 'I am too old, let me play cards instead';
  }
  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
}