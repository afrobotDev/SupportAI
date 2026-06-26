export class ExecutiveMember {
  constructor(
    protected balance: number,
    protected points: number,
  ) {}

  isVIP() {
    return this.balance >= 10_000;
  }

  redeemPoints(points: number) {
    if (this.points >= points) {
      this.points -= points;
      return true;
    }
    return false;
  }
}
