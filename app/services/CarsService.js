import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "../utils/Axios.js"

class CarsService {
  async deleteCar(carId) {
    const response = await api.delete(`cars/${carId}`)
    console.log('DELETED CAR 📡📡📡📡', response.data);

    const cars = AppState.cars
    const carIndex = cars.findIndex(car => car.id == carId)
    cars.splice(carIndex, 1)
  }
  async createCar(carData) {
    // NOTE carData becomes the payload (request body) for this request
    const response = await api.post('/cars', carData)
    console.log('CREATED CAR 📡📡📡📡', response.data);
    const car = new Car(response.data)
    AppState.cars.push(car) // trigger observer
  }
  async getCars() {
    const response = await api.get('/cars')
    console.log('GOT CARS 📡📡📡📡', response.data);
    const cars = response.data.map(pojo => new Car(pojo))
    AppState.cars = cars // trigger observer
  }
}

export const carsService = new CarsService()