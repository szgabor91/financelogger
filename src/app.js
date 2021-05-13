"use strict";
exports.__esModule = true;
var Invoice_js_1 = require("./classes/Invoice.js");
// instantiating form and its elements
var form = document.querySelector(".form");
var method = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var amount = document.querySelector("#amount");
// docs array contains all the invoices and payments
var docs = [];
var inv = new Invoice_js_1.Invoice(/*"invoice",*/ "", "", 0);
console.log(inv);
docs.push(inv);
console.log("docs:" + docs.length);
// checking if there is any invoice/payment in docs[]
if (docs.length == 0) {
    var empty = document.getElementById("empty");
    empty.innerText = "No invoices/payments in the database.";
}
else {
    var docsLength = docs.length;
    var ul = document.createElement("ul");
    docs.forEach(function (element, i) {
        var li = document.createElement("li");
        // let type = ({element[method]});
        // // 1. próba
        // if(Object.entries(docs[i]).keys()) {
        //     ;
        // }
        // // 2. próba
        // if(Object.entries(element).values() === ["invoice",]) {
        //     ;
        // }
        // 3. próba
        // if(element.method === "invoice") {
        //     // példányosítás
        // }
        // 4. próba
        if (element instanceof Invoice_js_1.Invoice) {
            li.innerText = element.format();
        }
    });
}
;
