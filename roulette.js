let startingBalance = 1000;
let betAmount;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`Welcome to h8ya's casino! You have $${startingBalance} to play with.` + '\n')
rl.question('Insert Bet Amount: $', (amt) => {
    //Anti Abuse
    betAmount = amt;
    if (betAmount > startingBalance || betAmount < 0 || betAmount === undefined || isNaN(betAmount)) {
        console.log('Insufficient Funds!')
        rl.close();
        return;
    }


    rl.question('Insert Bet Type: (Red | Black | Single Number) ', (answer) => {
        let spinWheel = Math.floor(Math.random() * 37);
        let betType = answer;
        let win = false;
        if (betType === 'Red' && spinWheel % 2 === 0) {
            win = true;
            console.log(`You Win ${betAmount *= 2}!`)
            betAmount *= 2;
        }

        if (betType === 'Black' && spinWheel % 2 === 1) {
            win = true;
            console.log(`You Win ${betAmount *= 2}!`)
            betAmount *= 2;
        }

        if (betType === spinWheel) {
            win = true;
            console.log(`You Win ${betAmount *= 35}!`)
            betAmount *= 35;
        }
        if (win === false) {
            console.log(`You Lose ${betAmount}.`)
            startingBalance -= betAmount;
        }
        rl.close();
    })

})
