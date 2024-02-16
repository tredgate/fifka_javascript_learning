import { CarBlueprint } from "./car_blueprint.mjs";

const dieselCar = new CarBlueprint("Red", "1.4TDI", "Diesel");
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Grey", "EV 160KW", "Electricity");
console.log(electricCar);

new CarBlueprint("Green", "1.2TSI", "Petrol").logCarProperties();

dieselCar.repaint("Black");
dieselCar.logCarProperties();
const newCar = dieselCar;
newCar.repaint("White");
dieselCar.logCarProperties();

const dieselCarColor = dieselCar.getColor();
console.log(dieselCarColor);
