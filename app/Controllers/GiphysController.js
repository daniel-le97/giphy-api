import { appState } from "../AppState.js";
import { giphysService } from "../Services/GiphysService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGiphyList() {
  let template = "";
  appState.giphy.forEach((g) => (template += g.GiphyListTemplate));
  setHTML("giphy-list", template);
}

export class GiphysController {
  constructor() {
    appState.on("giphy", _drawGiphyList);
  }

  grabGiphy(id) {
    try {
      giphysService.grabGiphy(id)
      ;
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }

  async searchGifs() {
    try {
      // window.event.preventDefault();
      // @ts-ignore
      let searchInput = window.event.target.value;

      console.log(searchInput);
      await giphysService.searchGifs(searchInput);
    } catch (error) {
      console.error("[searchGifs]", error);
      Pop.error(error);
    }
  }
}
