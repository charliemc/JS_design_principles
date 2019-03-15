const transfer = require("../../src/single_responsibility/bank_transfer");

describe('bank transfer', () => {
    const payer = { id: 1, balance: 100.0 };
    const payee = { id: 2, balance: 0.0 };

    const transferRecord = transfer(payer, payee, 50.0);

    it('should debit amount from payer', () => {
        expect(transferRecord.payer.balance).toBe(50.0);
    })

    it('should credit amount to payee', () => {
        expect(transferRecord.payer.balance).toBe(50.0);
    })
})
