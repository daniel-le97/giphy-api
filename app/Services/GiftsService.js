import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandboxServer } from "./AxiosService.js";

class GiftsService {
  async getGifts() {
    const res = await sandboxServer.get("/api/gifts");
    console.log(res.data, 'hello from getGifts');
    appState.sandboxGifts = res.data.map(s => new Gift(s))
    console.log(appState.sandboxGifts);
    
  }
  async sendGift(formData) {
    const res = await sandboxServer.post("/api/gifts", formData);
    console.log(res.data, "hello from service");
    appState.gift = new Gift(res.data)
    
  }
}
export const giftsService = new GiftsService();
