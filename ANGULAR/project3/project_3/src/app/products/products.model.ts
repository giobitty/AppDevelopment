export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public price: number = 0,
    public img?: string,
    public quantity:number = 0
  ) {}
}
