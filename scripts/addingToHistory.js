import { historyDiv } from "./app.js";

const addHistory = (name, budget) => {

    let div = document.createElement("div");
    div.className = "between";

    let h4 = document.createElement("h4");
    h4.textContent = name;

    let h4Two = document.createElement("h4");
    h4Two.className = "";
    h4Two.textContent =  budget;

    let hr2 = document.createElement("hr");

    div.append(h4);
    div.append(h4Two);
    historyDiv.append(div);
    historyDiv.append(hr2);
}

export {addHistory}