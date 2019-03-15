const toXml = (transferRecord) => {
  return "<BankTransfer amount='" + transferRecord.amount + "'>" +
    "<Payer>" + transferRecord.payer.id + "</Payer>" +
    "<Payee>" + transferRecord.payee.id + "</Payee>" +
    "</BankTransfer>";
}

module.exports = toXml;
