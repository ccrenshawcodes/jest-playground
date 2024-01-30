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