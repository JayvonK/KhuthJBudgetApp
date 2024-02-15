import { historyDiv, expenseDiv, update } from "./app.js";
import { changeLocalHistory, saveLocalHistory } from "./localStorage.js";
import { addToBudget } from "./changeBudget.js";

const addHistory = (name, budget) => {

    let div = document.createElement("div");
    div.className = "between";

    let h4 = document.createElement("h4");
    h4.className = "overX"
    h4.textContent = name;

    let h4Two = document.createElement("h4");
    h4Two.className = "overX green";
    h4Two.textContent = "$" + budget;

    let hr2 = document.createElement("hr");

    div.append(h4);
    div.append(h4Two);
    historyDiv.append(div);
    historyDiv.append(hr2);
}

const addHistoryE = (name, budget) => {

    let div = document.createElement("div");
    div.className = "between";

    let h4 = document.createElement("h4");
    h4.className = "overX"
    h4.textContent = name;

    let h4Two = document.createElement("h4");
    h4Two.className = "overX red";
    h4Two.textContent = "-$" + budget;

    let hr2 = document.createElement("hr");

    div.append(h4);
    div.append(h4Two);
    historyDiv.append(div);
    historyDiv.append(hr2);
}



const addManageExpense = (expense, cost) => {
    let div = document.createElement("div");
    div.className = "between";

    let h4 = document.createElement("h4");
    h4.textContent = expense;

    let h4Two = document.createElement("h4");
    h4Two.className = "red";
    h4Two.textContent = "-$" + cost;

    let button = document.createElement("button");
    button.className = "btn btn-danger w100 expense";
    button.textContent = "remove expense";

    button.addEventListener('click', () => {
        addToBudget(cost);
        saveLocalHistory(["Removed " + expense, cost]);
        changeLocalHistory([expense, cost]);
        update();
    })

    div.append(h4);
    div.append(h4Two);
    expenseDiv.append(div);
    expenseDiv.append(button);
}

export {addHistory, addManageExpense, addHistoryE}