export class Phone {
  number: string

  constructor(number: string) {
    this.number = number ? number.replace(/[\s-()]/g, '') : number
  }
}
