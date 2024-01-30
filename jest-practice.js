function capitalize (str) {
    const arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

function reverse (str) {
    return str.split('').reverse().join('');
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function caesar(str, num) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let indices = [];
    for (let i = 0; i < str.length; i++) {
        indices.push(alphabet.indexOf(str[i]));
    }
    const newIndices = indices.map((element) => element + num);
    const newStr = [];
    newIndices.forEach((element) => {
        newStr.push(alphabet[element]);
    })
    return newStr.join('');

}

function caesarCipher (str, vector) {
    let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    upperCaseAlphabet = upperCaseAlphabet.split('');
    
    let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    lowerCaseAlphabet = lowerCaseAlphabet.split('');

    let strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {
        if (upperCaseAlphabet.includes(strArr[i])) {
            let letterCode = strArr[i].charCodeAt(0);

            if (letterCode + vector > 90) {
                letterCode = 64 + (letterCode - 90);
            }
            strArr[i] = String.fromCharCode(letterCode + vector);
        }
        if (lowerCaseAlphabet.includes(strArr[i])) {
            let letterCode = strArr[i].charCodeAt(0);

            if (letterCode + vector > 122) {
                letterCode = 96 + (letterCode - 122);
            }
            strArr[i] = String.fromCharCode(letterCode + vector);
        }
    }
    return strArr.join('');
}

function arrayAverage (arr) {

}

function analyzeArray (arr) {
    arr = arr.sort();

    const total = arr.reduce((next, current) => next + current);
    const avg = total / arr.length;

    let analyzed = {
        average: avg,
        min: arr[0],
        max: arr[arr.length - 1],
        length: arr.length
    }
    return analyzed;
}


export {
    capitalize,
    reverse,
    add,
    subtract,
    times,
    divide,
    caesarCipher,
    analyzeArray,
}