import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Fish} from "./fish.js";
function getRandomNum(min, max) {
    return Math.random() * (max - min);
}

export class Boei extends Actor {
    score

    constructor() {
        super({width: Resources.boei.width, height: Resources.boei.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.boei.toSprite())
        this.pos = new Vector(getRandomNum(0, 1399), getRandomNum(0, 700))
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        if (event.other instanceof Boei) {
            this.pos = new Vector(getRandomNum(0, 1399), getRandomNum(0, 700))
            this.engine.currentScene.updateScore()
        }
    }
}
