export class ListItem {
    clearEmpty() {
        let empty = document.getElementById("empty")!;
        empty.innerText = "";
    }

    render(listItems: any): any {
        // Invoking clearEmpty() above to clear empty div's text
        this.clearEmpty();
        
        let li = document.createElement("li") as HTMLElement;
        let docsUl = document.querySelector("#docsUl") as HTMLElement;
        listItems.forEach((element: any) => {
            li.innerText = element.format();            
            docsUl.appendChild(li);
        });
    }
}