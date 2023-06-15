import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Fish} from "./fish.js";
export class Sail extends Fish {

    constructor() {
        super({width:Resources.zijlProto.width, height:Resources.zijlProto.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.zijlProto.toSprite())
        this.pos = new Vector(700, 350)
        this.vel = new Vector(0, 0)
    }


    onPreUpdate(engine) {
        let speed = 0;
        if (
            engine.input.keyboard.isHeld(Input.Keys.A)
        ) {
            this.rotation += 0.05;
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.D)
        ) {
            this.rotation -= 0.05;
        }

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
        );

        this.vel = direction;

    }


}





