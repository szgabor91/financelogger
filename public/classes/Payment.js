export class Payment {
    constructor(/*method: string,*/ clientTo, details, amount) {
        //this.method = "payment";
        this.clientTo = clientTo;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return this.clientTo + " has " + this.amount + " for " + this.details;
    }
}
