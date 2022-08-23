export class PrjState {
  private static instance: PrjState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return this.instance;
  }
}
