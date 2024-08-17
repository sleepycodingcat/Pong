/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 5.699999999999989,
        y: 5.699999999999989,
      }),
    ];

    this.sounds = [new Sound("Low Whoosh", "./Sprite1/sounds/Low Whoosh.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "reset " },
        this.whenIReceiveReset
      ),
    ];

    this.vars.lastX = 0;
    this.vars.lasty = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.lasty = 0;
    this.vars.lastX = 0;
    this.broadcast("reset ");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(Color.rgb(39, 255, 255))) {
        this.broadcast("reset ");
        this.stage.vars.player2Score++;
      }
      if (this.touching(Color.rgb(41, 255, 0))) {
        this.broadcast("reset ");
        this.stage.vars.player1Score++;
      }
      yield;
    }
  }

  *whenIReceiveReset() {
    this.direction = this.random(35, 45);
    this.goto(0, 0);
    yield* this.wait(1);
    while (true) {
      this.vars.lastX = this.x;
      this.vars.lasty = this.y;
      this.move(10);
      this.ifOnEdgeBounce();
      if (this.touching(this.sprites["Player1"].andClones())) {
        yield* this.startSound("Low Whoosh");
        this.y = this.toNumber(this.vars.lasty);
        this.x = this.toNumber(this.vars.lastX);
        this.direction += this.random(50, 180);
      }
      if (this.touching(this.sprites["Player2"].andClones())) {
        yield* this.startSound("Low Whoosh");
        this.y = this.toNumber(this.vars.lasty);
        this.x = this.toNumber(this.vars.lastX);
        this.direction += this.random(150, 180);
      }
      yield;
    }
  }
}
