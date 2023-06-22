import { ImageSource, Sound, Resource, Loader } from "excalibur";
import boot from "/src/images/boot.png"
import boei from "/src/images/boei.png"
import sailRight from "/src/images/sailRight.png";
import Background from "../images/Background.png";
import button from "../images/menuButton.png";
import Logo from "../images/Logo.png";
import StartButton from "../images/StartButton.png"
import Background2 from "../images/Background2.png"
import sailLeft from "../images/sailLeft.png"
import bovenkantMolen from "../images/bovenkantMolen.png"
import onderkantMolen from "../images/onderkantMolen.png"





const Resources = {
    boot: new ImageSource(boot),
    boei: new ImageSource(boei),
    sailRight: new ImageSource(sailRight),
    Background: new ImageSource(Background),
    retryButton: new ImageSource(button),
    Logo: new ImageSource(Logo),
    StartButton: new ImageSource(StartButton),
    Background2: new ImageSource(Background2),
    sailLeft: new ImageSource(sailLeft),
    bovenkantMolen: new ImageSource(bovenkantMolen),
    onderkantMolen: new ImageSource(onderkantMolen),

};
const ResourceLoader = new Loader([Resources.boot, Resources.boei, Resources.sailRight, Resources.Background, Resources.retryButton, Resources.Logo, Resources.StartButton, Resources.Background2, Resources.sailLeft, Resources.bovenkantMolen, Resources.onderkantMolen]);

export { Resources, ResourceLoader };
