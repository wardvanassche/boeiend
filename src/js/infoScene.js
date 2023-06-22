import {Actor, CollisionType, Scene, vec} from "excalibur";
import {Background2} from "./mapLoader2.js";
import {Resources} from "./resources.js";

export class infoScene extends Scene {

    game
    engine

    onInitialize(engine) {
        this.game = engine
        this.Start = new Actor({
            z: 100,
            x: 720,
            y: 620,
            width: Resources.StartButton.width,
            height: Resources.StartButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.Start.graphics.use(Resources.StartButton.toSprite())
        this.Start.on('pointerup', () => {
            this.game.goToScene("gameScene")
            this.game.removeScene("gameScene")
        })
        this.add(this.Start)

        this.Informatie = new Actor({
            z: 100,
            x: 720,
            y: 300,
            width: Resources.informatie.width,
            height: Resources.informatie.height,
            collisionType: CollisionType.PreventCollision
        })
        this.Informatie.graphics.use(Resources.informatie.toSprite())
        this.add(this.Informatie)

    }

    onActivate(ctx) {

        const backgroundLoop = new Background2({
            height: 900,
            width: 1440,
        })
        this.add(backgroundLoop);
    }
}