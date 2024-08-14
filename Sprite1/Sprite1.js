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

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "reset " },
        this.whenIReceiveReset
      ),
    ];
  }

  *whenGreenFlagClicked() {
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
      this.move(10);
      this.ifOnEdgeBounce();
      if (this.touching(this.sprites["Player1"].andClones())) {
        this.direction += this.random(130, 180);
      }
      if (this.touching(this.sprites["Player2"].andClones())) {
        this.direction += this.random(130, 180);
      }
      yield;
    }
  }
}
