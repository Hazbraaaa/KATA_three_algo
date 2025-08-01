let bracketStatus = false;
let squareBracketStatus = false;
let curlyBracketStatus = false;

function isValid(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === ")") {
            if (!checkBracket(str[i])) {
                return false;
            }
        }
        else if (str[i] === "[" || str[i] === "]") {
            if (!checkSquareBracket(str[i])) {
                return false;
            }
        }
        else if (str[i] === "{" || str[i] === "}") {
            if (!checkCurlyBracket(str[i])) {
                return false;
            }
        }
    }
    if (!bracketStatus && !squareBracketStatus && !curlyBracketStatus) {
        return true;
    }
    return false;
}

function checkBracket(char) {
    if (!bracketStatus && char === "(") {
        bracketStatus = true;
    }
    else if (bracketStatus && char === ")") {
        bracketStatus = false;
    }
    else {
        return false;
    }
    return true;
}

function checkSquareBracket(char) {
    if (!squareBracketStatus && char === "[") {
        squareBracketStatus = true;
    }
    else if (squareBracketStatus && char === "]") {
        squareBracketStatus = false;
    }
    else {
        return false;
    }
    return true;
}

function checkCurlyBracket(char) {
    if (!curlyBracketStatus && char === "{") {
        curlyBracketStatus = true;
    }
    else if (curlyBracketStatus && char === "}") {
        curlyBracketStatus = false;
    }
    else {
        return false;
    }
    return true;
}


// Do one test at the time, because I made global variables

console.log(isValid("()"));
console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
console.log(isValid("([])"));