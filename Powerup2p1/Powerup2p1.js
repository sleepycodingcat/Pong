/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Powerup2p1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Powerup2p1/costumes/costume1.svg", {
        x: 14,
        y: 14,
      }),
    ];

    this.sounds = [new Sound("Collect", "./Powerup2p1/sounds/Collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      while (!(this.sprites["Player1"].costumeNumber === 1)) {
        yield;
      }
      yield* this.wait(this.random(5, 10));
      this.goto(-200, this.random(-120, 100));
      this.visible = true;
      for (let i = 0; i < 10; i++) {
        while (!(this.sprites["Player1"].costumeNumber === 1)) {
          yield;
        }
        yield* this.wait(1);
        yield;
      }
      this.visible = false;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Player1"].andClones())) {
        yield* this.startSound("Collect");
        this.visible = false;
      }
      yield;
    }
  }
}
