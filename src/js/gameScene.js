import {Actor, Engine, Random, Timer, Vector, Label, Color, Font, FontUnit, Scene, Class, } from "excalibur";
import {Fish} from "./fish.js";
import {Sail} from "./sail.js";
import {Background} from "./mapLoader.js";

export class gameScene extends Scene {
    constructor() {
        super();
    }
    i
    game
    engine
    score
    lives
    mylabel
    mylabel2

    onInitialize(Engine) {
        this.game = Engine
        }


    onActivate(ctx) {

        const backgroundLoop = new Background()
        this.add(backgroundLoop)
        const fish = new Fish();
        this.add(fish);
        const sail = new Sail();
        this.add(sail);
        this.score = 0
        this.i = 0
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })
        this.add(this.mylabel)
    }

    updateScore(){
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }

}





