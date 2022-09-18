export class Invoice {
    // readonly client: String;
    // private details: string;
    // public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){

    }

    format() {
        // this.client = 'something else'; // error, because readonly property
        return `${this.client} owes Rp${this.amount} for ${this.details}`;
    }
}