import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    AppState.on('identity', this.drawHouseForm)
    AppState.on('houses', this.drawHouses)
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

  async listHouse() {
    event.preventDefault()
    let input = getFormData(event.target)

    try {
      await houseService.postHouse(input)
      Pop.toast('Added to API')

    } catch (error) {
      Pop.toast('try again')
    }
  }

  drawHouseForm() {
    document.getElementById('hForm').classList.remove('d-none')
    document.getElementById('hFormPholder').classList.add('d-none')
  }

}