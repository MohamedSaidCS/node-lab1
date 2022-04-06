const add = (n1, n2) => {
    if(typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    return 'Error, input must be a valid number.';
}

const subtract = (n1, n2) => {
    if(typeof n1 === 'number' && typeof n2 === 'number')
        return n1 - n2;
    return 'Error, input must be a valid number.';
}

const multiply = (n1, n2) => {
    if(typeof n1 === 'number' && typeof n2 === 'number')
        return n1 * n2;
    return 'Error, input must be a valid number.';
}


module.exports = {
    add,
    subtract,
    multiply
}