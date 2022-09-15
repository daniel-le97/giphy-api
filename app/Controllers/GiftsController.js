import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



export class GiftsController {
  constructor() {
  
  }

 
  async sendGift(formData) {
    try {
      console.log("hello");
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);
      await giftsService.sendGift(formData);
      console.log(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("[sendGift]", error);
      Pop.error(error);
    }
  }
}
