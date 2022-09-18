export class Invoice {
    // readonly client: String;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = 'something else'; // error, because readonly property
        return `${this.client} owes Rp${this.amount} for ${this.details}`;
    }
}
