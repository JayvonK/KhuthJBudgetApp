import { saveBudget, getBudget } from "./localStorage.js"

const addToBudget = (num) => {
    let value = getBudget();

    let newBudget = Number(value[0]) + Number(num);

    saveBudget(newBudget);
}

const subtractFromBudget = (num) => {
    let value = getBudget();

    let newBudget = Number(value[0]) - Number(num);

    saveBudget(newBudget);
}

export { addToBudget, subtractFromBudget }