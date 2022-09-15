import { giphyServer } from "./AxiosService.js"

class GiphysService{
  async searchGifs() {
    const res = await giphyServer.get(
      '/vi/gifs/search?api_key=FtUhtVAkn006OVS2B7ZRzdsVweJgN7cj',{
        params:{
          q:'',
          limit:5
        }
      }
    );
  }
}
export const giphysService = new GiphysService()