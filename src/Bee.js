class Bee extends Grub {
  constructor (age, color, food, job) {
    super(age, color, food);
    this.age = 5;
    this.color = 'yellow';
    this.food = 'jelly';
    this.job = 'Keep on growing';
  }
  eat () {
    return 'Mmmmmmmmm jelly';
  }
}
