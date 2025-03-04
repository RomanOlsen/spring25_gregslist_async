export class House {
  constructor(theData) {
    this.bedrooms = theData.bedrooms
    this.bathrooms = theData.bathrooms
    this.levels = theData.levels
    this.image = theData.imgUrl // not required
    this.year = theData.year
    this.price = theData.price
    this.creatorId = theData.id
  }

  get addedHTML() {
    return `<div class="col-12">
          <div class="row bg-light shadow car-border" style="border-color: aqua;">
            <div class="col-md-4 ps-0">
              <img src="${this.image}"
                alt="house" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="d-flex flex-column justify-content-between h-100">
                <div>
                  <p class="fs-3 mb-1">Home</p>
                  <small></small>
                  <div class="d-flex mt-1 justify-content-between align-items-center">
                    <p class="fs-3">$${this.price.toLocaleString()}</p>
                    <p class="fs-4">${this.year}</p>

                  </div>
                  <p>${this.bedrooms} bed</p>
                                    <p>${this.bathrooms} bath</p>
                  <p>${this.levels} levels</p>

                </div>
                <div class="text-end mb-1">
                  <button class="btn btn-outline-danger">
                    Delete House
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>`
  }

}