import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {MolenBoven} from "./molenboven.js";

export class MolenOnder extends Actor {

    MolenBoven


    constructor(sail) {
        super({width:Resources.boot.width, height:Resources.boot.height})
        this.MolenBoven = MolenBoven

    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.onderkantMolen.toSprite())
        this.pos = new Vector(2800, 400)
        this.vel = new Vector(0, 0)
    }

}





