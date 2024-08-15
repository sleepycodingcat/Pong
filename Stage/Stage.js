/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 291.8918827274539,
        y: 229.129138293567,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.vars.player1Score = 2;
    this.vars.player2Score = 0;

    this.watchers.player1Score = new Watcher({
      label: "player 1 score",
      style: "normal",
      visible: true,
      value: () => this.vars.player1Score,
      x: 245,
      y: 175,
    });
    this.watchers.player2Score = new Watcher({
      label: "player 2 score",
      style: "normal",
      visible: true,
      value: () => this.vars.player2Score,
      x: 245,
      y: 149,
    });
  }

  *whenGreenFlagClicked() {
    this.vars.player2Score = 0;
    this.vars.player1Score = 0;
  }
}
