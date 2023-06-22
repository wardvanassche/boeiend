import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";


export class Toren extends Actor {

    constructor() {
        super({width: Resources.toren.width, height: Resources.toren.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.toren.toSprite())
        this.pos = new Vector(  -425, 100)
    }
}