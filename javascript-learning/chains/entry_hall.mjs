import { Bathroom } from "./bathroom.mjs";

export class EntryHall {
  constructor() {
    console.log("Návštěvník přišel do vstupní haly.");
  }

  entryBathroom() {
    console.log("Návštěvník jde na toaletu.");
    return new Bathroom();
  }

  askReceptionistQuestion(question) {
    console.log(`Návštěvník se zeptal recepční: "${question}"`);
    console.log("Recepční neodpovídá.");
    return this;
  }
}
