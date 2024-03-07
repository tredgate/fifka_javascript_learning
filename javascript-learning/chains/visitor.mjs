import { EntryHall } from "./entry_hall.mjs";

new EntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .washHands()
  .washHands()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak je?")
  .entryBathroom()
  .washHands()
  .returnToEntryHall()
  .askReceptionistQuestion("Otázka");
