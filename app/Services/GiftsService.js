import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandboxServer } from "./AxiosService.js";

class GiftsService {
 
  async sendGift(formData) {
    const res = await sandboxServer.post("/api/gifts", formData);
    console.log(res.data, "hello from service");
    appState.gift = new Gift(res.data);
  }
}
export const giftsService = new GiftsService();
