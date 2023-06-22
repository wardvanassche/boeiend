import {Actor, Vector, Input, Engine, CollisionType} from "excalibur";
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
        this.pos = new Vector(149, 500)
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.body.collisionType = CollisionType.Active
    }

    hitSomething(event) {
        if (event.other instanceof Boei) {
            event.other.kill();
            this.engine.currentScene.updateScore()
        }
    }

    onPreUpdate(engine) {
        let speed = 25;

        // movement between rotation 0 and 0.5
        if (this.rotation < 0.5 && this.rotation > 0  && this.sail.rotation > 0.3 && this.sail.rotation < 0.5) {
            speed = (90, 90);
        }
        if (this.rotation < 0.5 && this.rotation > 0  && this.sail.rotation > 0.1 && this.sail.rotation < 0.3) {
            speed = (60, 60);
        }
        if (this.rotation < 0.5 && this.rotation > 0  && this.sail.rotation > 0 && this.sail.rotation < 0.1) {
            speed = (30, 30);
        }

        // movement between rotation 0.5 and 1
        if (this.rotation < 1 && this.rotation > 0.5  && this.sail.rotation > 0.6 && this.sail.rotation < 0.9) {
            speed = (90, 90);
        }
        if (this.rotation < 1 && this.rotation > 0.5  && this.sail.rotation > 0.35 && this.sail.rotation < 0.6) {
            speed = (60, 60);
        }
        if (this.rotation < 1 && this.rotation > 0.5  && this.sail.rotation > 0 && this.sail.rotation < 0.35) {
            speed = (30, 30);
        }

        // movement between rotation 1 and 1.5
        if (this.rotation < 1.5 && this.rotation > 1  && (this.sail.rotation > 0.25 && this.sail.rotation < 0.5 || this.sail.rotation > 6 && this.sail.rotation < 6.15)) {
            speed = (30, 30);
        }
        if (this.rotation < 1.5 && this.rotation > 1  && (this.sail.rotation > 0.15 && this.sail.rotation < 0.25 || this.sail.rotation > 6.15 && this.sail.rotation < 6.3)) {
            speed = (60, 60);
        }
        if (this.rotation < 1.5 && this.rotation > 1  && (this.sail.rotation > 0 && this.sail.rotation < 0.15 || this.sail.rotation > 6.3 && this.sail.rotation < 6.5)) {
            speed = (90, 90);
        }

        // movement between rotation 1.5 and 2
        if (this.rotation < 2 && this.rotation > 1.5  && this.sail.rotation > 6.1 && this.sail.rotation < 6.5) {
            speed = (90, 90);
        }
        if (this.rotation < 2 && this.rotation > 1.5  && this.sail.rotation > 6 && this.sail.rotation < 6.1) {
            speed = (60, 60);
        }
        if (this.rotation < 2 && this.rotation > 1.5  && this.sail.rotation > 5.8 && this.sail.rotation < 6) {
            speed = (30, 30);
        }

        // movement between rotation 2 and 2.5
        if (this.rotation < 2.5 && this.rotation > 2  && this.sail.rotation > 5.8 && this.sail.rotation < 6.1) {
            speed = (90, 90);
        }
        if (this.rotation < 2.5 && this.rotation > 2  && this.sail.rotation > 6.1 && this.sail.rotation < 6.3) {
            speed = (60, 60);
        }
        if (this.rotation < 2.5 && this.rotation > 2  && this.sail.rotation > 6.3 && this.sail.rotation < 6.5) {
            speed = (30, 30);
        }

        // movement between rotation 2.5 and 3
        if (this.rotation < 3 && this.rotation > 2.5  && this.sail.rotation > 5.5 && this.sail.rotation < 5.8) {
            speed = (90, 90);
        }
        if (this.rotation < 3 && this.rotation > 2.5  && this.sail.rotation > 5.8 && this.sail.rotation < 6) {
            speed = (60, 60);
        }
        if (this.rotation < 3 && this.rotation > 2.5  && this.sail.rotation > 6 && this.sail.rotation < 6.3) {
            speed = (30, 30);
        }

        // movement between rotation 3 and 3.5
        if (this.rotation < 3.5 && this.rotation > 3  && this.sail.rotation > 5.8 && this.sail.rotation < 6) {
            speed = (90, 90);
        }
        if (this.rotation < 3.5 && this.rotation > 3  && this.sail.rotation > 6 && this.sail.rotation < 6.3) {
            speed = (60, 60);
        }
        if (this.rotation < 3.5 && this.rotation > 3  && this.sail.rotation > 6.3 && this.sail.rotation < 6.5) {
            speed = (30, 30);
        }

        // movement between rotation 3.5 and 4
        if (this.rotation < 4 && this.rotation > 3.5  && this.sail.rotation > 5.5 && this.sail.rotation < 5.8) {
            speed = (90, 90);
        }
        if (this.rotation < 4 && this.rotation > 3.5  && this.sail.rotation > 5.8 && this.sail.rotation < 6) {
            speed = (60, 60);
        }
        if (this.rotation < 4 && this.rotation > 3.5  && this.sail.rotation > 6 && this.sail.rotation < 6.2) {
            speed = (30, 30);
        }

        // movement between rotation 4 and 4.5
        if (this.rotation < 4.5 && this.rotation > 4  && this.sail.rotation > 5.25 && this.sail.rotation < 5.5) {
            speed = (90, 90);
        }
        if (this.rotation < 4.5 && this.rotation > 4  && this.sail.rotation > 5.5 && this.sail.rotation < 5.75) {
            speed = (60, 60);
        }
        if (this.rotation < 4.5 && this.rotation > 4  && this.sail.rotation > 5.75 && this.sail.rotation < 5.9) {
            speed = (30, 30);
        }

        // movement between rotation 4.5 and 5
        if (this.rotation < 5 && this.rotation > 4.5 && (this.sail.rotation > 4.85 && this.sail.rotation < 5.1 || this.sail.rotation > 1.2 && this.sail.rotation < 1.35)) {
            speed = (90, 90);
        }
        if (this.rotation < 5 && this.rotation > 4.5  && (this.sail.rotation > 5.1 && this.sail.rotation < 5.3 || this.sail.rotation > 1 && this.sail.rotation < 1.2)) {
            speed = (60, 60);
        }
        if (this.rotation < 5 && this.rotation > 4.5  && (this.sail.rotation > 5.3 && this.sail.rotation < 5.6 || this.sail.rotation > 0.8 && this.sail.rotation < 1)) {
            speed = (30, 30);
        }

        // movement between rotation 5 and 5.5
        if (this.rotation < 5.5 && this.rotation > 5  && this.sail.rotation > 0.8 && this.sail.rotation < 1.1) {
            speed = (90, 90);
        }
        if (this.rotation < 5.5 && this.rotation > 5  && this.sail.rotation > 0.5 && this.sail.rotation < 0.8) {
            speed = (60, 60);
        }
        if (this.rotation < 5.5 && this.rotation > 5  && this.sail.rotation > 0.3 && this.sail.rotation < 0.5) {
            speed = (30, 30);
        }

        // movement between rotation 5.5 and 6
        if (this.rotation < 6 && this.rotation > 5.5  && this.sail.rotation > 0.75 && this.sail.rotation < 0.95) {
            speed = (90, 90);
        }
        if (this.rotation < 6 && this.rotation > 5.5  && this.sail.rotation > 0.5 && this.sail.rotation < 0.75) {
            speed = (60, 60);
        }
        if (this.rotation < 6 && this.rotation > 5.5  && this.sail.rotation > 1.3 && this.sail.rotation < 0.5) {
            speed = (30, 30);
        }

        // movement between rotation 6 and 6.5
        if (this.rotation < 6.5 && this.rotation > 6  && this.sail.rotation > 0.7 && this.sail.rotation < 0.95) {
            speed = (90, 90);
        }
        if (this.rotation < 6.5 && this.rotation > 6  && this.sail.rotation > 0.5 && this.sail.rotation < 0.7) {
            speed = (60, 60);
        }
        if (this.rotation < 6.5 && this.rotation > 6  && this.sail.rotation > 0.3 && this.sail.rotation < 0.5) {
            speed = (30, 30);
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





