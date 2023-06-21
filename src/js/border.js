import {Actor, CollisionType, EdgeCollider, Vector} from "excalibur";

export class Border extends Actor {
    constructor(x1, y1, x2, y2) {
        super();
        const edge = new EdgeCollider({
            begin: new Vector(0, 0),
            end: new Vector(200, 200),
        })

        // const actor = new Actor({
        //     pos: new Vector(x1, y1),
        //     collider: edge,
        // })

        this.pos = new Vector(150,300)
        //this.collider = edge
        this.body.collider = edge

        this.body.collisionType = CollisionType.Fixed
    }

}