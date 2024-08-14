import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player1 from "./Player1/Player1.js";
import Player2 from "./Player2/Player2.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player1: new Player1({
    x: -200,
    y: -10,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 2,
  }),
  Player2: new Player2({
    x: 200,
    y: -140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 1,
  }),
  Sprite1: new Sprite1({
    x: 50.34563128398701,
    y: 62.171676916557665,
    direction: 39,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
