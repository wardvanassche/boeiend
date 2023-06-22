import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";


export class Chinees extends Actor {

    constructor() {
        super({width: Resources.chinees.width, height: Resources.chinees.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.chinees.toSprite())
<<<<<<< HEAD
        this.pos = new Vector(  2770, -1250)
        this.vel = new Vector(0,0)
        this.scale = new Vector(1.5, 1.5)
    }
    onPreUpdate(engine){
        let speed = 0
=======
        this.pos = new Vector(  2750, -1200)
        this.vel = new Vector(0,0)
    }
    onPreUpdate(engine){
        let speed = 0
        this.rotation = .55
>>>>>>> origin/main

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
        );

        this.vel = direction;
    }
}