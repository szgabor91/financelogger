import { Invoice } from "./classes/Invoice.js";
import { ListItem } from "./classes/ListItem.js";
import { Payment } from "./classes/Payment.js";
// instantiating form and its elements
const form = document.querySelector(".form");
const method = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const amount = document.querySelector("#amount");
const details = document.querySelector("#details");
// docs array contains all the invoices and payments
let docs = [];
// Form's event listener for submitting data
/*form.onsubmit = (e: Event) => {*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (method.value === "invoice") {
        docs.push(new Invoice(toFrom.value, details.value, parseInt(amount.value)));
        let listItem = new ListItem().render(docs);
    }
    if (method.value === "payment") {
        docs.push(new Payment(toFrom.value, details.value, +amount.value));
        let listItem = new ListItem().render(docs);
    }
});
// checking if there is any invoice/payment in docs[]
if (docs.length == 0) {
    let empty = document.getElementById("empty");
    empty.innerText = "No invoices/payments in the database.";
}
// else {
//     docs.forEach((element, i) => {
//         let li = document.createElement("li");
//         // let type = ({element[method]});
//         // // 1. próba
//         // if(Object.entries(docs[i]).keys()) {
//         //     ;
//         // }
//         // // 2. próba
//         // if(Object.entries(element).values() === ["invoice",]) {
//         //     ;
//         // }
//         // 3. próba
//         // if(element.method === "invoice") {
//         //     // példányosítás
//         // }
//     });
// };
