export class Invoice {
    constructor(/*method: string,*/ clientFrom, details, amount) {
        //this.method = "invoice";
        this.clientFrom = clientFrom;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.clientFrom} has ${this.amount} for ${this.details}`;
    }
}
