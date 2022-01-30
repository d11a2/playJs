// task 1
const str = 'Сформировать переменную которая ...';

let getVowels = str => {
    let rusVowelsArr = ["а","е","ё","и","о","ы","э","у","я","ю"];
    let lowCaseStr = str.toLowerCase();
    let newStr = "";
    
    for (let index = 0; index < lowCaseStr.length; index++) {
        
        if (rusVowelsArr.indexOf(lowCaseStr[index]) !== -1) {
            newStr += lowCaseStr[index];       
        }
    }
    return newStr;
}
console.log('Task 1');
console.log(getVowels(str));
console.log();

// task 2
const employers = [
    { name: 'Harry', salary: 300 },
    { name: 'john', salary: 5000 },
    { name: 'Zigmunt', salary: 200 },
    { name: 'Sasha', salary: 11000 }
];

let getWorthyWorkers = arr => {
    let bigBosses = [];
    arr.forEach(element => {
        if (element.salary > 1000) {
            bigBosses.push(element.name);
        }
    });
    return bigBosses;
}
console.log('Task 2');
console.log(getWorthyWorkers(employers));
console.log();

// task 3

const pathStr1 = '/Users/nikitasubarev/Documents/LOFTSCHOOL/02_project_landing/css/footer/test js.js';
const pathStr2 = '/Users/nikitasubarev/Documents/LOFTSCHOOL/02_project_landing/index.html';

let isHtml = pathStr => {
    let validSuffix = '.html';

    if (pathStr.substring(pathStr.length - 5) === validSuffix) {
        return true;
    }
    return false;
}

console.log('Task 3');
console.log(isHtml(pathStr1));
console.log(isHtml(pathStr2));
console.log();

// task 4

const mixedArray = [3,34,13,454,74,33,99,651,14,66,15,22,4];

const isEven = num => {    
    if (Number.isInteger(num)) {
        if (num % 2 == 0) return true;
    }
    return false;  
};

let filterArray = (arr, handler) => {
    let evenNumArr = [];
    arr.forEach(element => {
        if (isEven(element)) {
            evenNumArr.push(element);
        }
    });
    return evenNumArr;
};

console.log('Task 4');
console.log(filterArray(mixedArray, isEven));