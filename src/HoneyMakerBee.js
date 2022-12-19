class HoneyMakerBee extends Bee {
  constructor (age, color, food, job) {
    super(age, color, food, job);
    this.age = 10;
    // this.color = 'yellow';
    // this.food = 'jelly';
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  // eat () {
  //   return 'Mmmmmmmmm jelly';
  // }
  makeHoney () {
    this.honeyPot++;
  }
  giveHoney () {
    this.honeyPot--;
  }
}