import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player1 from "./Player1/Player1.js";
import Player2 from "./Player2/Player2.js";
import Ball from "./Ball/Ball.js";
import Powerup1p1 from "./Powerup1p1/Powerup1p1.js";
import Powerup1p2 from "./Powerup1p2/Powerup1p2.js";
import Powerup2p1 from "./Powerup2p1/Powerup2p1.js";
import Powerup2p2 from "./Powerup2p2/Powerup2p2.js";
import Powerup3p1 from "./Powerup3p1/Powerup3p1.js";
import Powerup3p2 from "./Powerup3p2/Powerup3p2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player1: new Player1({
    x: -200,
    y: -15,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 5,
  }),
  Player2: new Player2({
    x: 200,
    y: 20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 1,
  }),
  Ball: new Ball({
    x: 77.4947263668779,
    y: 119.07246650085344,
    direction: -142,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Powerup1p1: new Powerup1p1({
    x: -200,
    y: 43,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4,
  }),
  Powerup1p2: new Powerup1p2({
    x: 200,
    y: 82,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3,
  }),
  Powerup2p1: new Powerup2p1({
    x: -200,
    y: 97,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  Powerup2p2: new Powerup2p2({
    x: 200,
    y: 9,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8,
  }),
  Powerup3p1: new Powerup3p1({
    x: -200,
    y: -115,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
  Powerup3p2: new Powerup3p2({
    x: 200,
    y: 93,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
