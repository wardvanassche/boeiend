import {Actor, Engine, Random, Timer, Vector, Label, Color, Font, FontUnit, Scene, Class, } from "excalibur";
import {Fish} from "./fish.js";
import {Sail} from "./sail.js";
import {Background} from "./mapLoader.js";
import {MolenBoven} from "./molenboven.js";
import {MolenOnder} from "./molenonder.js";

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
        const sail = new Sail();
        const fish = new Fish(sail);
        this.add(fish);
        fish.addChild(sail);
        const molenBoven = new MolenBoven();
        const molenOnder = new MolenOnder(molenBoven);
        this.add(molenOnder)
        molenOnder.addChild(molenBoven)
        this.score = 0
        this.i = 0
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel)


        this.mylabel2 = new Label({
            text: `Wind`,
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel2)

        this.mylabel3 = new Label({
            text: `↑`,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel3)

        this.camera.strategy.elasticToActor(
            fish, 0.9, 0.9
        )
    }

    updateScore(){
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        this.mylabel.pos = this.game.screenToWorldCoordinates(new Vector(1230, 50))
        this.mylabel2.pos = this.game.screenToWorldCoordinates(new Vector(15, 100))
        this.mylabel3.pos = this.game.screenToWorldCoordinates(new Vector(40, 50))


    }

}





