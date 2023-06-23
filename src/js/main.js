import {Actor, Engine, Input, Physics, Random, Vector,} from "excalibur"
import {Resources, ResourceLoader } from './resources.js'
import {gameScene} from "./gameScene.js";
import {gameover} from "./gameover.js"
import {startMenu} from "./startMenu.js";
import {infoScene} from "./infoScene.js";

ResourceLoader.suppressPlayButton = true


export class Game extends Engine {

    constructor() {
        super({width: 1400, height: 700});
        this.start(ResourceLoader).then(() => this.startGame());
        this.random = new Random(1337)
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0,0)
// this.showDebug(true)
    }

    startGame(engine) {

        this.engine = engine
        this.add("gameScene", new gameScene(this.engine))
        this.add("gameover", new gameover(this.engine))
        this.add("startMenu", new startMenu(this.engine))
        this.add("infoScene", new infoScene(this.engine))
        this.goToScene("startMenu")



    }

}
new Game()