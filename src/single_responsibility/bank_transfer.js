const {debit, credit} = require("./bank_account");

const transfer = (payer, payee, amount) => {
    return {
        payer: debit(payer, amount),
        payee: credit(payee, amount),
        amount: amount
    };
}

module.exports = transfer;
