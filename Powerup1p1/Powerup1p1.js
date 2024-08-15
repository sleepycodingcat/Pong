/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Powerup1p1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Powerup1p1/costumes/costume1.svg", {
        x: 13.999999999999943,
        y: 14,
      }),
    ];

    this.sounds = [new Sound("Collect", "./Powerup1p1/sounds/Collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "powerup 1p1 hide" },
        this.whenIReceivePowerup1p1Hide
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      while (!(this.sprites["Player1"].costumeNumber === 1)) {
        yield;
      }
      yield* this.wait(this.random(10, 25));
      this.goto(-200, this.random(-120, 100));
      this.visible = true;
      yield* this.wait(10);
      this.broadcast("powerup 1p1 hide");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Player1"].andClones())) {
        yield* this.startSound("Collect");
        this.broadcast("powerup 1p1 hide");
      }
      yield;
    }
  }

  *whenIReceivePowerup1p1Hide() {
    this.visible = false;
  }
}
