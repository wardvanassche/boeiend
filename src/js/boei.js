import {Actor, Vector, Input, Engine, CollisionType} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Fish} from "./fish.js";
function getRandomNum(min, max) {
    return Math.random() * (max - min)+min;
}

export class Boei extends Actor {
    score
    getPoint = Resources.getPoint;

    constructor() {
        super({width: Resources.boei.width, height: Resources.boei.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.boei.toSprite())
        this.pos = new Vector(getRandomNum(149, 2398), getRandomNum(-942, 1045))
        this.on('collisionstart', (event) => this.hitSomething(event))
    }
    hitSomething(event) {
        if (event.other instanceof Boei) {
            this.pos = new Vector(getRandomNum(149, 2398), getRandomNum(-942, 1045))
        }
        if (event.other instanceof Fish) {
           this.graphics.use(Resources.boei2.toSprite())
            this.getPoint.play(.5).then(r => console.log(r));
            this.body.collisionType = CollisionType.PreventCollision
        }
    }


}
