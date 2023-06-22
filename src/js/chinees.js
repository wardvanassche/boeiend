import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";


export class Chinees extends Actor {

    constructor() {
        super({width: Resources.chinees.width, height: Resources.chinees.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.chinees.toSprite())
        this.pos = new Vector(  2780, -1250)
        this.scale = new Vector(1.5, 1.5)
    }
}