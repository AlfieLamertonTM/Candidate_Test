export class CreditCard {
  constructor(
    name,
    apr,
    balanceTransferOfferDuration,
    purchaseOfferDuration,
    availableCredit
  ) {
    this.name = name;
    this.apr = apr;
    this.balanceTransferOfferDuration = balanceTransferOfferDuration;
    this.purchaseOfferDuration = purchaseOfferDuration;
    this.availableCredit = availableCredit;
  }
}
