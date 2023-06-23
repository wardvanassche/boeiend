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
        const spaceImage3 = Resources.wolken.toSprite()
        this.offset = spaceImage3.height

        const group3 = new GraphicsGroup({
            members: [
                {
                    graphic: spaceImage3,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: spaceImage3,
                    pos: new Vector(0, spaceImage3.height),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group3)
        this.pos = new Vector(-900, 0)
        this.scale = new Vector(4,4)
        this.vel = new Vector(0, -50)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.y > this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}