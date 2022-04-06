const info = (name, date) => {
    if(new Date(date).getFullYear() && new Date().getFullYear() !== new Date(date).getFullYear()) {
        const age = new Date().getFullYear() - new Date(date).getFullYear();
        console.log(`Hello ${name}, your age is now ${age}.`);
    } else {
        console.log('Error, birth date is invalid.');
    }
}

module.exports = info