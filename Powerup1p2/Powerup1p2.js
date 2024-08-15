/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Powerup1p2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Powerup1p2/costumes/costume1.svg", {
        x: 13.999999999999943,
        y: 14,
      }),
    ];

    this.sounds = [new Sound("Collect", "./Powerup1p2/sounds/Collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "powerup p1p2" },
        this.whenIReceivePowerupP1p2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      while (!(this.sprites["Player2"].costumeNumber === 1)) {
        yield;
      }
      yield* this.wait(this.random(10, 25));
      this.goto(200, this.random(-120, 100));
      this.visible = true;
      yield* this.wait(10);
      this.broadcast("powerup p1p2");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Player2"].andClones())) {
        yield* this.startSound("Collect");
        this.broadcast("powerup p1p2");
      }
      yield;
    }
  }

  *whenIReceivePowerupP1p2() {
    this.visible = false;
  }
}
