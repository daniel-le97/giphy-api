export class SandboxGift {
  constructor(data) {
    this.tag = data.tag;
    this.url = data.url;
    this.opened = data.opened || false;
    this.id = data.id;
  }

  get SandboxGiftTemplate() {
    if (!this.opened) {
      return `
      
      <div class="col-3 card m-3">
              <div class="card-body">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
                  alt=""
                  onclick="app.sandboxGiftsController.openGift('${this.id}')"
                  class="img-fluid" />
              </div>
            </div>
      
      `;
    } else {
      return `
      
  <div class="col-3 card m-3">
              <div class="card-body">
                <img
                  src="${this.url}"
                  alt=""
                  class="img-fluid" />
                <p class="text-center">
                  ${this.tag}
                </p>
              </div>
            </div>
  `;
    }
  }
}
