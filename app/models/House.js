export class House {
  constructor(theData) {
    this.bedrooms = theData.bedrooms
    this.bathrooms = theData.bathrooms
    this.levels = theData.levels
    this.image = theData.imgUrl // not required
    this.year = theData.year
    this.price = theData.price
    this.creatorId = theData.creatorId // creatorId
    this.creator = theData.creator
    this.id = theData.id // house ID
  }

  get addedHTML() {
    return /*html*/ `<div class="col-12">
          <div class="row bg-light shadow car-border" style="border-color: aqua;">
            <div class="col-md-4 ps-0">
              <img src="${this.image}"
                alt="house" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="d-flex flex-column justify-content-between h-100">
                <div>
                  <p class="fs-3 mb-1 fst-italic">Home</p>
                  <div class="d-flex mt-1 align-items-center">
                    <p class="fs-3">$${this.price.toLocaleString()}</p>
                  </div>
                  <p class="fs-4">${this.year}</p>
                  <p>${this.bedrooms} bed</p>
                  <p>${this.bathrooms} bath</p>
                  <p>${this.levels} levels</p>

                </div>
                <div class="text-end mb-1">
                  <button onclick="app.houseController.unlistHouse('${this.creatorId}', '${this.id}')" class="btn btn-outline-danger">
                    Delete House
                  </button>
                </div>
              
                          <div class="d-flex justify-content-between mb-1">
              <div>
                <img src="${this.creator.picture}" alt="${this.creator.name}" class="creator-img">
                <span>${this.creator.name}</span>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>`
  }

}