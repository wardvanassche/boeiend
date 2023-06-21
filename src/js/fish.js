import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Boei} from "./boei.js";
export class Fish extends Actor {

    sail

    constructor(sail) {
        super({width:Resources.boot.width, height:Resources.boot.height})
        this.sail = sail
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.boot.toSprite())
        this.pos = new Vector(-128, 1318)
        this.vel = new Vector(0, 0)
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        if (event.other instanceof Boei) {
            event.other.kill();
            this.engine.currentScene.updateScore()
        }
    }

    onPreUpdate(engine) {
        let speed = 0;

        if (this.rotation < 5 && this.rotation > 4.5  && this.sail.rotation > 1.25 && this.sail.rotation < 1.36) {
            speed = (90, 90);
        }
        if (this.rotation < 5.5 && this.rotation > 5  && this.sail.rotation > 0.8 && this.sail.rotation <1.05) {
            speed = (90, 90);
        }
        if (this.rotation < 6 && this.rotation > 5.5  && this.sail.rotation > 0.6 && this.sail.rotation <0.85) {
            speed = (90, 90);
        }
        if ((this.rotation < .5 && this.rotation > 0 || this.rotation < 6.5 && this.rotation > 6 ) && this.sail.rotation > 0.35 && this.sail.rotation <0.6) {
            speed = (90, 90);
        }
        if (this.rotation < 1 && this.rotation > 0.5  && this.sail.rotation > 0.2 && this.sail.rotation <0.45) {
            speed = (90, 90);
        }
        if (this.rotation < 1.5 && this.rotation > 1 && this.sail.rotation > 0 && this.sail.rotation <0.25) {
            speed = (90, 90);
        }
        if (this.rotation < 2 && this.rotation > 1.5 && this.sail.rotation > 6 && this.sail.rotation <6.3) {
            speed = (90, 90);
        }
        if (this.rotation < 2.5 && this.rotation > 2 && this.sail.rotation > 5.75 && this.sail.rotation <6) {
            speed = (90, 90);
        }
        if (this.rotation < 3 && this.rotation > 2.5 && this.sail.rotation > 5 && this.sail.rotation <5.75) {
            speed = (90, 90);
        }
        if (this.rotation < 3.5 && this.rotation > 3 && this.sail.rotation > 4.8 && this.sail.rotation <5.5) {
            speed = (90, 90);
        }
        if (this.rotation < 4 && this.rotation > 3.5 && this.sail.rotation > 4.4 && this.sail.rotation <5.2) {
            speed = (90, 90);
        }
        if (this.rotation < 4.5 && this.rotation > 4 && this.sail.rotation <5.15 && this.sail.rotation >4.85) {
            speed = (90, 90);
        }



        if (
            engine.input.keyboard.isHeld(Input.Keys.D)
        ) {
            this.rotation += 0.05;
            console.log(this.rotation)
            console.log(`${this.pos}`)
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.A)
        ) {
            this.rotation -= 0.05;
            console.log(this.rotation)
            console.log(`${this.pos}`)
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





