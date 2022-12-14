import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  api_key = "FtUhtVAkn006OVS2B7ZRzdsVweJgN7cj";

  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", Value);

  /** @type {import('./Models/Gift').Gift |null}*/
  gift = null;

  /** @type {import('./Models/SandboxGift').SandboxGift[]}*/
  sandboxGifts = [];

  /** @type {import('./Models/Giphy').Giphy[]}*/
  giphy = [];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
