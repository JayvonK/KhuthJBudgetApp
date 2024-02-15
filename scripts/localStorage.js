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
    let count = 0;
    let index = 0;
    arr.map(el => {
        count++
        if(el[0] === array[0] && el[1] === array[1]){
            index = count;
        }
    })

    console.log("work");
    arr.splice(index - 1, 1);
    localStorage.setItem("history", JSON.stringify(arr));
}


export {getBudget, saveBudget, getLocalHistory, saveLocalHistory, removeLocalHistory}