import { AppState } from "../AppState.js"
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js"

class HouseService {
  async postHouse(newHouseData) {
    let posting = await api.post('houses', newHouseData)
    console.log('posting', posting.data);
    AppState.houses.push(new House(posting.data))

  }

  async getHouses() {
    let response = await api.get('houses') // const would make more sense here
    console.log('homes', response.data);
    let housesAddedToArray = response.data.map(pojo => new House(pojo)) // and here
    AppState.houses = housesAddedToArray

  }


}


export const houseService = new HouseService()