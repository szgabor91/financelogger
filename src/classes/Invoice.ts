export class Invoice {
  //readonly method: string;
  public clientFrom: string;
  public details: string;
  public amount: number;

  constructor(/*method: string,*/ clientFrom: string, details: string, amount: number) {
    //this.method = "invoice";
    this.clientFrom = clientFrom;
    this.details = details;
    this.amount = amount;
  }

  public format(): string {
      return `${this.clientFrom} has ${this.amount} for ${this.details}`;
  }
}
