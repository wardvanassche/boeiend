import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
export class Fish extends Actor {

    sail


    constructor(sail) {
        super({width:Resources.boot.width, height:Resources.boot.height})
        this.sail = sail
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.boot.toSprite())
        this.pos = new Vector(700, 350)
        this.vel = new Vector(0, 0)
    }


    onPreUpdate(engine) {
        let speed = 0;

        if (this.rotation < 5 && this.rotation > 4.25  && this.sail.rotation > 1.2) {
            speed = (110, 110);
        }
        if (this.rotation < 5.5 && this.rotation > 5  && this.sail.rotation > 0.8 && this.sail.rotation <1.05) {
            speed = (90, 90);
        }
        if (this.rotation < 6 && this.rotation > 5.5  && this.sail.rotation > 0.6 && this.sail.rotation <0.85) {
            speed = (70, 70);
        }
        if (this.rotation < .5 && this.rotation > 0 || this.rotation < 6.5 && this.rotation > 6  && this.sail.rotation > 0.4 && this.sail.rotation <0.65) {
            speed = (50, 50);
        }
        if (this.rotation < 1 && this.rotation > 0.5  && this.sail.rotation > 0.2 && this.sail.rotation <0.45) {
            speed = (30, 30);
        }
        if (this.rotation < 1.5 && this.rotation > 1 && this.sail.rotation > 0 && this.sail.rotation <0.25) {
            speed = (10, 10);
        }
        if (this.rotation < 2 && this.rotation > 1.5 && this.sail.rotation > 6 && this.sail.rotation <6.3) {
            speed = (10, 10);
        }
        if (this.rotation < 2.5 && this.rotation > 2 && this.sail.rotation > 5.75 && this.sail.rotation <6) {
            speed = (30, 30);
        }
        if (this.rotation < 3 && this.rotation > 2.5 && this.sail.rotation > 5 && this.sail.rotation <5.75) {
            speed = (50, 50);
        }
        if (this.rotation < 3.5 && this.rotation > 3 && this.sail.rotation > 4.8 && this.sail.rotation <5.5) {
            speed = (70, 70);
        }
        if (this.rotation < 4 && this.rotation > 3.5 && this.sail.rotation > 4.4 && this.sail.rotation <5.2) {
            speed = (90, 90);
        }
        if (this.rotation < 4.25 && this.rotation > 4  && this.sail.rotation > 1.2) {
            speed = (110, 110);
        }



        if (
            engine.input.keyboard.isHeld(Input.Keys.D)
        ) {
            this.rotation += 0.05;
            console.log(this.rotation)
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.A)
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
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
    }


}





