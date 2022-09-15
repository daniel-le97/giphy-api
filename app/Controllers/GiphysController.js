import { giphysService } from "../Services/GiphysService.js"
import { Pop } from "../Utils/Pop.js"

export class GiphysController{
  constructor(){
    
  }
  async searchGifs(){
    try {
        await giphysService.searchGifs()
      } catch (error) {
        console.error('[]',error)
        Pop.error(error)
      }
  }
}