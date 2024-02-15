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

const removeLocalHistory = (array) => {
    let arr = getLocalHistory();
    let index = 0;
    arr.map(el => {
        index++;
        if(el[0] === array[0] && el[1] === array[1]){
            console.log(index);
        }
    })
}


export {getBudget, saveBudget, getLocalHistory, saveLocalHistory, removeLocalHistory}