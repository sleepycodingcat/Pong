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
      new Costume("costume2", "./Player1/costumes/costume2.svg", {
        x: 9,
        y: 100.5495495495496,
      }),
    ];

    this.sounds = [new Sound("pop", "./Player1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-200, 0);
    this.size = 75;
    this.costume = "costume1";
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
      if (this.compare(-100, this.y) > 0 && this.costumeNumber === 2) {
        this.y = -100;
      }
      if (this.compare(this.y, 100) > 0 && this.costumeNumber === 2) {
        this.y = 100;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Powerup1p1"].andClones())) {
        this.costume = "costume2";
        yield* this.wait(20);
        this.costume = "costume1";
      }
      yield;
    }
  }
}
