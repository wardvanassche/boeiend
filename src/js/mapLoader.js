import {Actor, Vector, GraphicsGroup,} from 'excalibur'
import {Resources} from "./resources.js";

export class Background extends Actor {
    constructor() {
        super({width: Resources.Background.width, height: Resources.Background.height})

    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(1200, 350)
        this.vel = new Vector(0, 0)
    }
}