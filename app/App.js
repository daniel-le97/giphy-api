import { GiftsController } from "./Controllers/GiftsController.js";
import { GiphysController } from "./Controllers/GiphysController.js";
import { SandboxGiftsController } from "./Controllers/SandboxGiftsController.js";

class App {
  giftsController = new GiftsController();
  sandboxGiftsController = new SandboxGiftsController();
  giphysController = new GiphysController()
}

window["app"] = new App();
