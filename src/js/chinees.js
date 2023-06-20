import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";


export class Chinees extends Actor {

    constructor() {
        super({width: Resources.chinees.width, height: Resources.chinees.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.chinees.toSprite())
        this.pos = new Vector(  2750, -1200)
        this.vel = new Vector(0,0)
    }
    onPreUpdate(engine){
        let speed = 0
        this.rotation = .55

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
        );

        this.vel = direction;
    }
}