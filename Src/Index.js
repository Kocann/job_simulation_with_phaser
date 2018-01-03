import _ from 'lodash';
import './../node_modules/phaser/build/custom/pixi';
import './../node_modules/phaser/build/custom/p2.js';
import './../node_modules/phaser/build/custom/phaser-split';
import 'phaser';

import {PlayState} from './scripts/PlayState';

//https://mozdevs.github.io/html5-games-workshop/en/guides/platformer/gravity/

window.onload = function () {
  let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
  game.state.add('play', PlayState);
  game.state.start('play');
};