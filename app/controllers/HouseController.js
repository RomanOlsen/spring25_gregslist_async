import { AppState } from "../AppState.js";
import { Identity } from "../Auth/Identity.js";
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

  async unlistHouse(creatorID, houseID) {
    if (creatorID == AppState.identity.id) {

      let confirmation = await Pop.confirm()
      if (!confirmation) {
        return
      }
      try {
        await houseService.deleteHouse(houseID)
      } catch (error) {
        Pop.error(error)
      }

      return
    }
    window.alert('Hey, you cant delete that! You dont own the listing')
  }

}