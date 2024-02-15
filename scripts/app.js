import { addHistory } from "./addingToHistory.js";
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
    let arr = getBudget();
    arr.length === 0 ? budget.textContent = "$" + "0.00" : budget.textContent = "$" + arr[0];

    let histArr = getLocalHistory();
    histArr.length === 0 ? historyDiv.textContent = "No History." : histArr.map(item => {
        addHistory(item[0], item[1]);
    });
}

update();

budgetUpdate.addEventListener('click', () => {
    let arr = [];
    let budg = budgetInput.value;
    for(let i = 0; i < budg.length; i++){
        console.log(budg[i])
        if(budg[i] !== "$"){
            arr.push(budg[i]);
        }
    }
    console.log(arr);
    let budgetInp = arr.join("");
    if(budgetInp.trim() === "" || Number.isNaN(Number(budgetInp))){
        alert("Please input a number");
    } else {
        saveLocalHistory(["Update Budget: ", budgetInp]);
        saveBudget(budgetInp);
        update();
        budgetInput.value = "";
    }
})

budgetCancel.addEventListener('click', () => {
    budgetInput.value = "";
})

addExpense.addEventListener('click', () => {
    
})

export { historyDiv }
