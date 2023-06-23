import {
    Actor,
    Engine,
    Random,
    Timer,
    Vector,
    Label,
    Color,
    Font,
    FontUnit,
    EdgeCollider,
    Scene,
    Class,
    Physics,
    CollisionType,
} from "excalibur";
import {Fish} from "./fish.js";
import {Sail} from "./sail.js";
import {Boei} from "./boei.js"
import {Background} from "./mapLoader.js";
import {MolenBoven} from "./molenboven.js";
import {MolenOnder} from "./molenonder.js";
import {Toren} from "./toren.js";
import {Chinees} from "./chinees.js";
import {Border} from "./border.js";
import {Resources} from "./resources.js";

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
    mylabel3
    mylabel4
    counter
    gametimer

    onInitialize(Engine) {
        const border1 = new Border(-410,-850,-130,500)
      this.add(border1)

        const border2 = new Border(-120,-1350,-300,500)
        this.add(border2)

        const border3 = new Border(35,-1500,-150,150)
        this.add(border3)

        const border4 = new Border(35,-1500,300,5)
        this.add(border4)

        const border5 = new Border(335,-1490,390,70)
        this.add(border5)

        const border6 = new Border(722,-1405,150,120)
        this.add(border6)

        const border7 = new Border(876,-1290,1020,200)
        this.add(border7)

        const border8 = new Border(1900,-1090,215,0)
        this.add(border8)

        const border9 = new Border(2110,-1090,28,-28)
        this.add(border9)

        const border10 = new Border(2150,-1115,30,0)
        this.add(border10)

        const border11 = new Border(2180,-1115,16,-110)
        this.add(border11)

        const border12 = new Border(2196,-1225,50,-60)
        this.add(border12)

        const border13 = new Border(2246,-1285,115,18)
        this.add(border13)

        const border14 = new Border(2360,-1268,30,-90)
        this.add(border14)

        const border15 = new Border(2390,-1360,100,10)
        this.add(border15)

        const border16 = new Border(2490,-1350,330,330)
        this.add(border16)

        const border17 = new Border(2820,-1020,60,330)
        this.add(border17)

        const border18 = new Border(2880,-690,-38,275)
        this.add(border18)

        const border19 = new Border(2840,-415,0,180)
        this.add(border19)

        const border20 = new Border(2830,-225,-22,175)
        this.add(border20)

        const border21 = new Border(2810,-50,0,180)
        this.add(border21)

        const border22 = new Border(2810,130,-25,70)
        this.add(border22)

        const border23 = new Border(2785,200,0,85)
        this.add(border23)

        const border24 = new Border(2785,285,-60,250)
        this.add(border24)

        const border25 = new Border(2725,535,0,65)
        this.add(border25)

        const border26 = new Border(2725,600,-40,165)
        this.add(border26)

        const border27 = new Border(2685,765,-25,145)
        this.add(border27)

        const border28 = new Border(2660,910,0,200)
        this.add(border28)

        const border29 = new Border(2660,1110,-30,140)
        this.add(border29)

        const border30 = new Border(2630,1250,-270,40)
        this.add(border30)

        const border31 = new Border(2360,1290,-40,-32)
        this.add(border31)

        const border32 = new Border(2320,1260,-50,0)
        this.add(border32)

        const border33 = new Border(2270,1260,-165,70)
        this.add(border33)

        const border34 = new Border(2105,1330,-170,130)
        this.add(border34)

        const border35 = new Border(1935,1460,-35,55)
        this.add(border35)

        const border36 = new Border(1900,1515,0,65)
        this.add(border36)

        const border37 = new Border(1900,1580,50,65)
        this.add(border37)

        const border38 = new Border(1950,1645,-130,0)
        this.add(border38)

        const border39 = new Border(1820,1645,-20,-25)
        this.add(border39)

        const border40 = new Border(1800,1620,-105,65)
        this.add(border40)

        const border41 = new Border(1695,1685,-60,55)
        this.add(border41)

        const border42 = new Border(1635,1740,-70,0)
        this.add(border42)

        const border43 = new Border(1565,1740,-5,-40)
        this.add(border43)

        const border44 = new Border(1560,1700,-80,-65)
        this.add(border44)

        const border45 = new Border(1480,1635,-70,-25)
        this.add(border45)

        const border46 = new Border(1410,1610,-65,-65)
        this.add(border46)

        const border47 = new Border(1345,1545,-45,0)
        this.add(border47)

        const border48 = new Border(1300,1545,-60,40)
        this.add(border48)

        const border49 = new Border(1240,1585,-10,80)
        this.add(border49)

        const border50 = new Border(1230,1665,-30,30)
        this.add(border50)

        const border51 = new Border(1200,1695,-20,70)
        this.add(border51)

        const border52 = new Border(1180,1765,40,170)
        this.add(border52)

        const border53 = new Border(1220,1935,25,10)
        this.add(border53)

        const border54 = new Border(1245,1945,0,140)
        this.add(border54)

        const border55 = new Border(1245,2085,-25,60)
        this.add(border55)

        const border56 = new Border(1220,2145,-90,0)
        this.add(border56)

        const border57 = new Border(1130,2145,-55,-30)
        this.add(border57)

        const border58 = new Border(1075,2115,-75,-80)
        this.add(border58)

        const border59 = new Border(1000,2035,-25,-45)
        this.add(border59)

        const border60 = new Border(975,1995,-30,-30)
        this.add(border60)

        const border61 = new Border(945,1965,-230,-75)
        this.add(border61)

        const border62 = new Border(715,1890,-850,0)
        this.add(border62)

        const border63 = new Border(50,1890,0,-400)
        this.add(border63)

        const border64 = new Border(50,1760,120,0)
        this.add(border64)

        const border65 = new Border(170,1760,70,-70)
        this.add(border65)

        const border66 = new Border(240,1690,-70,-70)
        this.add(border66)

        const border67 = new Border(170,1620,-120,0)
        this.add(border67)

        const border68 = new Border(170,1490,-120,0)
        this.add(border68)

        const border69 = new Border(10,1890,0,-400)
        this.add(border69)

        const border70 = new Border(10,1490,-125,0)
        this.add(border70)

        const border71 = new Border(10,1620,-125,0)
        this.add(border71)

        const border72 = new Border(-115,1620,0,-130)
        this.add(border72)

        const border73 = new Border(10,1760,-125,0)
        this.add(border73)

        const border74 = new Border(-140,1880,-170,0)
        this.add(border74)

        const border75 = new Border(-315,1870,-380,0)
        this.add(border75)

        const border76 = new Border(-695,1860,-90,0)
        this.add(border76)

        const border77 = new Border(-785,1860,-45,-70)
        this.add(border77)

        const border78 = new Border(-830,1790,0,-360)
        this.add(border78)

        const border79 = new Border(-830,1430,25,-85)
        this.add(border79)

        const border80 = new Border(-805,1345,185,-105)
        this.add(border80)

        const border81 = new Border(-620,1240,20,-40)
        this.add(border81)

        const border82 = new Border(-600,1200,0,-780)
        this.add(border82)

        const border83 = new Border(-600,420,-35,-170)
        this.add(border83)

        const border84 = new Border(-635,250,0,-80)
        this.add(border84)

        const border85 = new Border(-635,170,130,0)
        this.add(border85)

        const border86 = new Border(-505,170,115,55)
        this.add(border86)

        const border87 = new Border(-390,225,25,-20)
        this.add(border87)

        const border88 = new Border(-365,205,0,-140)
        this.add(border88)

        const border89 = new Border(-365,65,-70,-130)
        this.add(border89)

        const border90 = new Border(-435,-65,0,-280)
        this.add(border90)

        const border91 = new Border(-435,-345,-110,0)
        this.add(border91)

        const border92 = new Border(-350,-290,40,50)
        this.add(border92)

        const border93 = new Border(-310,-240,-35,90)
        this.add(border93)

        const border94 = new Border(-345,-150,-35,-60)
        this.add(border94)

        const border95 = new Border(-380,-210,30,-80)
        this.add(border95)

        const border96 = new Border(-380,350,0,-70)
        this.add(border96)

        const border97 = new Border(-380,280,-50,-30)
        this.add(border97)

        const border98 = new Border(-430,250,-55,20)
        this.add(border98)

        const border99 = new Border(-485,270,0,65)
        this.add(border99)

        const border100 = new Border(-485,335,35,70)
        this.add(border100)

        const border101 = new Border(-450,405,35,0)
        this.add(border101)

        const border102 = new Border(-415,405,35,-55)
        this.add(border102)

        const border103 = new Border(-605,480,390,0)
        this.add(border103)

        const border104 = new Border(-215,480,0,195)
        this.add(border104)

        const border105 = new Border(-215,683,-80,60)
        this.add(border105)

        const border106 = new Border(-295,743,-70,-65)
        this.add(border106)

        const border107 = new Border(-365,678,0,-195)
        this.add(border107)

        const border108 = new Border(-605,520,390,0)
        this.add(border108)

        const border109 = new Border(-485,678,0,-195)
        this.add(border109)

        const border110 = new Border(-605,520,390,0)
        this.add(border110)

        const border111 = new Border(-215,880,0,355)
        this.add(border111)

        const border112 = new Border(-215,880,-75,-50)
        this.add(border112)

        const border113 = new Border(-290,830,-130,50)
        this.add(border113)

        const border114 = new Border(-420,880,-125,-60)
        this.add(border114)

        const border115 = new Border(-545,820,-60,0)
        this.add(border115)

        const border116 = new Border(-605,1080,390,0)
        this.add(border116)

        const border117 = new Border(-355,1080,0,155)
        this.add(border117)

        const border118 = new Border(-485,1080,0,155)
        this.add(border118)

        const border119 = new Border(-630,1755,290,0)
        this.add(border119)

        const border120 = new Border(-340,1755,75,55)
        this.add(border120)

        const border121 = new Border(-265,1810,-75,55)
        this.add(border121)

        const border122 = new Border(-630,1755,0,-130)
        this.add(border122)

        const border123 = new Border(-630,1625,290,0)
        this.add(border123)

        const border124 = new Border(-340,1625,45,65)
        this.add(border124)

        const border125 = new Border(-295,1690,-45,65)
        this.add(border125)

        const border126 = new Border(-505,1490,0,380)
        this.add(border126)

        const border127 = new Border(-465,1490,0,380)
        this.add(border127)

        const border128 = new Border(-630,1490,290,0)
        this.add(border128)

        const border129 = new Border(-630,1490,290,0)
        this.add(border129)

        const border130 = new Border(830,1215,-70,-30)
        this.add(border130)

        const border131 = new Border(760,1185,-80,0)
        this.add(border131)

        const border132 = new Border(680,1185,-40,60)
        this.add(border132)

        const border133 = new Border(640,1245,60,40)
        this.add(border133)

        const border134 = new Border(700,1285,80,0)
        this.add(border134)

        const border135 = new Border(780,1285,50,-35)
        this.add(border135)

        const border136 = new Border(830,1250,0,-35)
        this.add(border136)

        const border137 = new Border(950,1450,-145,0)
        this.add(border137)

        const border138 = new Border(805,1455,-60,0)
        this.add(border138)

        const border139 = new Border(745,1455,-40,60)
        this.add(border139)

        const border140 = new Border(705,1515,45,50)
        this.add(border140)

        const border141 = new Border(750,1565,70,20)
        this.add(border141)

        const border142 = new Border(820,1585,270,0)
        this.add(border142)

        const border143 = new Border(1090,1585,60,-40)
        this.add(border143)

        const border144 = new Border(1150,1545,-130,-80)
        this.add(border144)

        const border145 = new Border(1020,1465,-70,-10)
        this.add(border145)


        this.game = Engine
            this.timer2 = new Timer({
            fcn: () => this.spawn2(Engine),
            interval: 1000,
            repeats: true

        })
        Engine.currentScene.add(this.timer2)

            this.timer = new Timer({
                fcn: () => this.spawn(Engine),
                interval: 30,
                repeats: true
            })
            Engine.currentScene.add(this.timer)
            this.timer.start()
    }

    music = Resources.music;


    onActivate(ctx) {
        this.music.play(.5).then(r => console.log(r));
        const backgroundLoop = new Background();
        this.add(backgroundLoop);
        const sail = new Sail();
        const fish = new Fish(sail);
        this.add(fish);
        fish.addChild(sail);
        const molenBoven = new MolenBoven();
        const molenOnder = new MolenOnder(molenBoven);
        this.add(molenOnder)
        molenOnder.addChild(molenBoven)

        this.score = 0
        this.gametimer = 90
        this.counter = 0
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

        this.mylabel4 = new Label({
            text: `${this.gametimer}s`,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.Black
            }),
        })
        this.add(this.mylabel4)

        this.camera.strategy.elasticToActor(
            fish, 0.9, 0.9
        )

        const toren = new Toren();
        this.add(toren);

        const chinees = new Chinees();
        this.add(chinees);
    }

    updateScore(){
        this.score++
        this.mylabel.text = `Score: ${this.score}`
        if (this.score == 15){
            this.engine.goToScene("gameover", { score: this.score, gametimer: this.gametimer })
        }
        this.timer2.start()
    }
    delScore(){
        this.score--
        this.mylabel.text = `Score: ${this.score}`

    }



    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        this.mylabel.pos = this.game.screenToWorldCoordinates(new Vector(1230, 50))
        this.mylabel2.pos = this.game.screenToWorldCoordinates(new Vector(15, 100))
        this.mylabel3.pos = this.game.screenToWorldCoordinates(new Vector(40, 50))
        this.mylabel4.pos = this.game.screenToWorldCoordinates(new Vector(1270, 100))


    }

    spawn(engine) {

        const boei = new Boei(
        )
        this.add(boei)
        this.counter++
        this.on('collisionstart', (event) => this.hitSomething(event))
        if (this.counter == 17){
            this.timer.stop()
        }
    }
    hitSomething(event){
        if (event.other instanceof Fish) {
            this.pos = new Vector(getRandomNum(149, 2398), getRandomNum(-942, 1045))
            this.delScore()
        }
    }
    spawn2(engine) {

        this.gametimer--
        if (this.gametimer >9) {
            this.mylabel4.text = `${this.gametimer}s`
        }
        else {this.mylabel4.text = `${this.gametimer}s`}

        if (this.gametimer == 0){
            this.timer2.stop()
            this.engine.goToScene("gameover", { score: this.score, gametimer: this.gametimer })
        }
    }

}





