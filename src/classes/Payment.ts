export class Payment {
    //readonly method: string;
    public clientTo: string;
    public details: string;
    public amount: number;

    constructor(/*method: string,*/ clientTo: string, details: string, amount: number) {
        //this.method = "payment";
        this.clientTo = clientTo;
        this.details = details;
        this.amount = amount;
    }

    public format() {
        return this.clientTo + " has " + this.amount + " for " + this.details;
    }
}