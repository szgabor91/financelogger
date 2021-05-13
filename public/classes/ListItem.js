export class ListItem {
    clearEmpty() {
        let empty = document.getElementById("empty");
        empty.innerText = "";
    }
    render(listItems) {
        // Invoking clearEmpty() above to clear empty div's text
        this.clearEmpty();
        let li = document.createElement("li");
        let docsUl = document.querySelector("#docsUl");
        listItems.forEach((element) => {
            li.innerText = element.format();
            docsUl.appendChild(li);
        });
    }
}
