import { appState } from "../AppState.js";
import { SandboxGift } from "../Models/SandboxGift.js";
import { sandboxServer } from "./AxiosService.js";

class SandboxGiftsService {
  async openGift(id) {
    const openedGift = appState.sandboxGifts.find((o) => o.id == id);
    if (!openedGift) {
      throw new Error("bad id");
    }
    openedGift.opened = true;

    const res = await sandboxServer.put(`/api/gifts/${id}`, openedGift);
    openedGift.url = res.data.url;
    appState.emit("sandboxGifts");
  }
  async getGifts() {
    const res = await sandboxServer.get("/api/gifts");
    console.log(res.data, "hello from getGifts");
    appState.sandboxGifts = res.data.map((s) => new SandboxGift(s));
    console.log(appState.sandboxGifts);
  }
}
export const sandboxGiftsService = new SandboxGiftsService();
