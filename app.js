// const bank = owner => {
//     balance = 0
//     return amount => {
//         balance += amount;
//         return balance;
//     }
// }

const bank = owner => {
    balance = 0
return {
    deposit : amount => {
        balance += amount;
        return balance;
    },
    withdraw: amount => {
        balance -= amount;
        return balance;
    }
}
}

// const joyBank = bank('joy');
// console.log(joyBank(200));
// console.log(joyBank(500));
// console.log(joyBank.balance);
// console.log(joyBank(300));
const joyBank = bank('joy');
console.log(joyBank.deposit(200));
console.log(joyBank.deposit(500));
console.log(joyBank.balance);
console.log(joyBank.withdraw(300));
console.log(joyBank.withdraw(100));