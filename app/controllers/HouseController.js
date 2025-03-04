import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    this.grabHouses()
  }

  async grabHouses() {
    try {
      await houseService.getHouses()
      this.drawHouses()
    } catch (error) {
      console.log(error);
      Pop.toast('Aaaa!', error)
    }
  }

  drawHouses() {
    console.log('drawing', AppState.houses);

    let content = ''
    let houseElems = document.getElementById('houseLists')
    let newContent = AppState.houses.forEach(house => content += house.addedHTML)
    houseElems.innerHTML = content
  }


}