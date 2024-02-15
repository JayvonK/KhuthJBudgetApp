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

const getLocalHistory = () => {
    if(localStorage.getItem("history") !== null){
        return JSON.parse(localStorage.getItem("history"));
    } else {
        return [];
    }
}

const saveLocalHistory = (array) => {
    let arr = getLocalHistory();
    arr.push(array);

    localStorage.setItem("history", JSON.stringify(arr));
}




export {getBudget, saveBudget, getLocalHistory, saveLocalHistory}