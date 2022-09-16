import { appState } from "../AppState.js";
import { Giphy } from "../Models/Giphy.js";
import { giphyServer } from "./AxiosService.js";

class GiphysService {
  grabGiphy(id) {
    console.log(id);
    let myGiphy = appState.giphy.find((g) => g.id == id);
    console.log(myGiphy);

    let message = document.getElementById("tag-input");
    let giphyLink = document.getElementById("url-input");
    // @ts-ignore
    giphyLink.value = myGiphy.url;
    // @ts-ignore
    message.value = myGiphy.title.replace("GIF", " ") || "hello";
    appState.emit("giphy");
  }
  async searchGifs(searchInput) {
    const res = await giphyServer.get("/v1/gifs/search", {
      params: {
        api_key: "FtUhtVAkn006OVS2B7ZRzdsVweJgN7cj",
        q: searchInput,
        limit: 5,
      },
    });
    console.log(res.data.data);
    appState.giphy = res.data.data.map((g) => new Giphy(g));
  }
}
export const giphysService = new GiphysService();
