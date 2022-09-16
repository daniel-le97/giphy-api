export class Giphy {
  constructor(data) {
    this.url = data.images.original.url;
    this.title = data.title
    this.id = data.id;
  }

  get GiphyListTemplate() {
    return `
    <img src="${this.url}"class="img-fluid p-2 selectable" onclick="app.giphysController.grabGiphy('${this.id}')" alt="">
    
    `;
  }
}
