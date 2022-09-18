// ========================= THE DOM AND TYPE CASTING ===============================
const anchor = document.querySelector('a');
// if (anchor){
//     console.log(anchor.href);
// }
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, 
    // amount.value,
    amount.valueAsNumber);
});
// ========================= CLASSES, MODULES, ACCESS MODIFIER (PUBLIC, PRIVATE, READONLY) ===============================
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
// console.log(invOne);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(inv => {
    inv.client = "something else";
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
