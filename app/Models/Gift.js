// @ts-nocheck
export class Gift {
  constructor(data) {
    this.tag = data.tag;
    this.url = data.url;
    this.opened = data.opened || false;
    this.id = data.id;
  }
}
