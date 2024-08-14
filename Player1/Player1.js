/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Player1/costumes/costume1.svg", {
        x: 9,
        y: 51,
      }),
    ];

    this.sounds = [new Sound("pop", "./Player1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-200, 0);
    this.size = 75;
    while (true) {
      if (this.keyPressed("w")) {
        this.y += 5;
      }
      if (this.keyPressed("s")) {
        this.y -= 5;
      }
      if (this.compare(this.y, -140) < 0) {
        this.y = -140;
      }
      if (this.compare(this.y, 140) > 0) {
        this.y = 140;
      }
      yield;
    }
  }
}
