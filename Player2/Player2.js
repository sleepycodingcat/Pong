/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Player2/costumes/costume1.svg", {
        x: 9,
        y: 51,
      }),
      new Costume("costume2", "./Player2/costumes/costume2.svg", {
        x: 8.999999999999972,
        y: 100.54955000000002,
      }),
      new Costume("costume3", "./Player2/costumes/costume3.svg", {
        x: 9,
        y: 51,
      }),
      new Costume("costume4", "./Player2/costumes/costume4.svg", {
        x: 8.999999999999972,
        y: 100.54954999999998,
      }),
    ];

    this.sounds = [new Sound("pop", "./Player2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "freeze p2" },
        this.whenIReceiveFreezeP2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.speedP2 = 5;
    this.goto(200, 0);
    this.size = 75;
    this.costume = "costume1";
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.y += this.toNumber(this.stage.vars.speedP2);
      }
      if (this.keyPressed("down arrow")) {
        this.y += 0 - this.toNumber(this.stage.vars.speedP2);
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
      if (this.touching(this.sprites["Powerup1p2"].andClones())) {
        this.costume = "costume2";
        yield* this.wait(20);
        this.costume = "costume1";
      }
      if (this.touching(this.sprites["Powerup2p2"].andClones())) {
        this.stage.vars.speedP2 = 10;
        yield* this.wait(20);
        this.stage.vars.speedP2 = 5;
      }
      yield;
    }
  }

  *whenIReceiveFreezeP2() {
    if (this.costumeNumber === 1) {
      this.costume = "costume3";
      yield* this.wait(5);
      this.costume = "costume1";
    } else {
      this.costume = "costume4";
      yield* this.wait(5);
      this.costume = "costume2";
      yield* this.wait(2);
      this.costume = "costume1";
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Powerup3p2"].andClones())) {
        this.stage.vars.speedP1 = 0;
        this.broadcast("freeze p1");
        yield* this.wait(5);
        this.stage.vars.speedP1 = 5;
      }
      yield;
    }
  }
}
