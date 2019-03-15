const toXml = require("../../src/single_responsibility/xml_serializer");

describe('bank transfer', () => {
  const payer = { id: 1, balance: 100.0 };
  const payee = { id: 2, balance: 0.0 };

  const transferRecord = { amount: 50, payer, payee };

  it('should serialize the transfer details to XML', () => {
    expect(toXml(transferRecord)).toEqual("<BankTransfer amount='50'>" +
      "<Payer>1</Payer>" +
      "<Payee>2</Payee>" +
      "</BankTransfer>")
  })
})
