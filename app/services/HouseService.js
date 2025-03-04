import { AppState } from "../AppState.js"
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js"

class HouseService {

  async getHouses() {
    let response = await api.get('houses') // const would make more sense here
    console.log('homes', response.data);
    let housesAddedToArray = response.data.map(pojo => new House(pojo))

  }

}


export const houseService = new HouseService()