import { appState } from "../AppState.js";
import { sandboxGiftsService } from "../Services/SandboxGiftsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
  let template = "";
  appState.sandboxGifts.forEach((s) => (template += s.SandboxGiftTemplate));
  setHTML("gifts", template);
}

export class SandboxGiftsController {
  constructor() {
    this.getGifts();
    appState.on("sandboxGifts", _drawGifts);
  }

  async openGift(id){
    try {
        await sandboxGiftsService.openGift(id)
      } catch (error) {
        console.error('[]',error)
        Pop.error(error)
      }
  }
  
  async getGifts() {
    try {
      await sandboxGiftsService.getGifts();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
}
