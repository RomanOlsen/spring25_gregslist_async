import { houseService } from "../services/HouseService.js";

export class HouseController {
  constructor() {
    this.grabHouses()
  }

  async grabHouses() {
    try {
      houseService.getHouses()
    } catch (error) {
      console.log(error);

    }
  }


}