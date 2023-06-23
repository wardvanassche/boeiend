import {Actor, Vector, GraphicsGroup,} from 'excalibur'
import {Resources} from "./resources.js";



export class Wolken extends Actor {
    constructor() {

        super({
            z: 0,
        });

    }
    offset

    onInitialize(engine){
        const spaceImage2 = Resources.wolken.toSprite()
        this.offset = spaceImage2.height

        const group2 = new GraphicsGroup({
            members: [
                {
                    graphic: spaceImage2,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: spaceImage2,
                    pos: new Vector(0, spaceImage2.height),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group2)
        this.pos = new Vector(0, 0)
        this.scale = new Vector(4,4)
        this.vel = new Vector(0, -50)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.y < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}