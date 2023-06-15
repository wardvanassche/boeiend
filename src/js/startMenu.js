import {Actor, CollisionType, Scene, vec} from "excalibur"
import {Resources,ResourceLoader} from "./resources.js";
import {Background2} from "./mapLoader2.js";

export class startMenu extends Scene {

    game
    engine

    onInitialize(engine) {
        this.game = engine

        this.Logo = new Actor({
            z: 120,
            x: 720,
            y: 250,
            width: Resources.Logo.width,
            height: Resources.Logo.height,
            collisionType: CollisionType.PreventCollision
        })
        this.Logo.graphics.use(Resources.Logo.toSprite())
        this.add(this.Logo)


        this.StartButton = new Actor({
            z: 100,
            x: 720,
            y: 550,
            width: Resources.StartButton.width,
            height: Resources.StartButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.StartButton.graphics.use(Resources.StartButton.toSprite())
        this.StartButton.actions.scaleTo(vec(1.2,1.2),vec(1.2,1.2))
        this.StartButton.on('pointerup', () => {
            this.game.goToScene("gameScene")
            this.game.removeScene("gameScene")
        })

        this.add(this.StartButton)


    }

    onActivate(ctx) {

        const backgroundLoop = new Background2({
            height: 900,
            width: 1440,
        })
        this.add(backgroundLoop);
    }
}