import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Fish} from "./fish.js";
export class Sail extends Fish {

    constructor() {
        super({width:Resources.sailLeft.width, height:Resources.sailLeft.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.sailLeft.toSprite())
        this.pos = new Vector(35,0)
        this.vel = new Vector(0, 0)
    }


    onPreUpdate(engine) {
        let speed = 0;

        if (this.rotation > 1.3 && this.rotation < 4.5) {
            this.rotation = 1.3

        }
        if (this.rotation < 4.9 && this.rotation > 1.5) {
            this.rotation = 4.9

        }
        if (this.rotation > 5){
            this.graphics.use(Resources.sailRight.toSprite())
        }
        if (this.rotation < 1){
            this.graphics.use(Resources.sailLeft.toSprite())
        }

        if (
            engine.input.keyboard.isHeld(Input.Keys.Left)
        ) {
            this.rotation += 0.05;
            console.log(this.rotation)

        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.Right)
        ) {
            this.rotation -= 0.05;
            console.log(this.rotation)
        }

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
        );

        this.vel = direction;

    }


}





