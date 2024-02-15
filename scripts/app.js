import { addHistory, addManageExpense } from "./addingToHistory.js";
import { saveBudget, getBudget, saveLocalHistory, getLocalHistory } from "./localStorage.js";

let budgetInput = document.getElementById("budgetInput");
let budgetUpdate = document.getElementById("budgetUpdate");
let budgetCancel = document.getElementById("budgetCancel");
let expenseDiv = document.getElementById("expenseDiv");
let expenseName = document.getElementById("expenseName");
let expenseCost = document.getElementById("expenseCost");
let addExpense = document.getElementById("addExpense");
let expenseCancel = document.getElementById("expenseCancel");
let budget = document.getElementById("budget");
let historyDiv = document.getElementById("historyDiv");

const update = () => {
    historyDiv.innerHTML = "";
    expenseDiv.innerHTML = "";
    let arr = getBudget();
    arr.length === 0 ? budget.textContent = "$" + "0.00" : budget.textContent = "$" + arr[0];

    let histArr = getLocalHistory();
    if (histArr.length === 0) {
        historyDiv.textContent = "No History.";
    } else {
        for (let i = histArr.length - 1; i >= 0; i--) {
            addHistory(histArr[i][0], histArr[i][1]);
        }
    }

    let expArr = [];
    for(let i = 0; i < histArr.length; i++){
        if(histArr[i][0] !== "Update Budget:"){
            expArr.push(histArr[i]);
        }
    }

    if(expArr.length === 0){
        expenseDiv.textContent = "No Expenses";
    } else {
        expArr.map(exp => addManageExpense(exp[0], exp[1]));
    }


}

update();

budgetUpdate.addEventListener('click', () => {
    let arr = [];
    let budg = budgetInput.value;
    for (let i = 0; i < budg.length; i++) {
        console.log(budg[i])
        if (budg[i] !== "$") {
            arr.push(budg[i]);
        }
    }
    console.log(arr);
    let budgetInp = arr.join("");
    if (budgetInp.trim() === "" || Number.isNaN(Number(budgetInp))) {
        alert("Please input a number");
    } else {
        saveLocalHistory(["Update Budget:", budgetInp]);
        saveBudget(budgetInp);
        update();
        budgetInput.value = "";
    }
})

budgetCancel.addEventListener('click', () => {
    budgetInput.value = "";
})

addExpense.addEventListener('click', () => {
    let arr = [];
    let cost = expenseCost.value;
    for (let i = 0; i < cost.length; i++) {
        if (cost[i] !== "$") {
            arr.push(cost[i]);
        }
    }
    let expenseC = arr.join("");
    if (expenseName.value.trim() === "" || Number.isNaN(Number(expenseC)) || cost.trim() === "") {
        alert("Please input all the fields, or input a correct number");
    } else {
        saveLocalHistory([expenseName.value + ":", expenseC]);
        update();
        expenseName.value = "";
        expenseCost.value = "";
    }
})

expenseCancel.addEventListener('click', () => {
    expenseName.value = "";
    expenseCost.value = "";
})

export { historyDiv, expenseDiv, update }
