import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {MolenOnder} from "./molenonder.js";


export class MolenBoven extends MolenOnder {
    score
    i = true

    constructor() {
        super({width: Resources.bovenkantMolen.width, height: Resources.bovenkantMolen.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.bovenkantMolen.toSprite())
        this.pos = new Vector(0, -78)
        this.vel = new Vector(0, 0)
    }

    onPreUpdate(engine){
        let speed = 0
        if (
            this.i = true
        ) {
            this.rotation -= 0.02;

        }

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
        );

        this.vel = direction;
    }
}