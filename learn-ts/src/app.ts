// ========================= THE DOM AND TYPE CASTING ===============================

const anchor = document.querySelector('a')!;

// if (anchor){
//     console.log(anchor.href);
// }

console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        // amount.value,
        amount.valueAsNumber
    );
});

// ========================= CLASSES, ACCESS MODIFIER (PUBLIC, PRIVATE, READONLY) ===============================

class Invoice {
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
        this.client = 'something else';
        return `${this.client} owes Rp${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);

// console.log(invOne);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invoices.forEach(inv => {
    inv.client = "something else";
    console.log(
        inv.client,
        inv.details,
        inv.amount,
        inv.format()
    );
});

// ========================= MODULES ===============================
