const getBudget = () => {
    if(localStorage.getItem("budget") === null){
        return [];
    }else {
        return JSON.parse(localStorage.getItem("budget"));
    }
}

const saveBudget = (budget) => {
    let arr = [];
    arr.push(budget);

    localStorage.setItem("budget", JSON.stringify(arr));
}





export {getBudget, saveBudget}