import { historyDiv, expenseDiv, update } from "./app.js";
import { removeLocalHistory } from "./localStorage.js";

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

const addManageExpense = (expense, cost) => {
    let div = document.createElement("div");
    div.className = "between";

    let h4 = document.createElement("h4");
    h4.textContent = expense;

    let h4Two = document.createElement("h4");
    h4Two.className = "red";
    h4Two.textContent =  cost;

    let button = document.createElement("button");
    button.className = "btn btn-danger w100";
    button.textContent = "remove expense";

    button.addEventListener('click', () => {
        removeLocalHistory([expense, cost]);
        update();
    })

    div.append(h4);
    div.append(h4Two);
    expenseDiv.append(div);
    expenseDiv.append(button);
}

export {addHistory, addManageExpense}