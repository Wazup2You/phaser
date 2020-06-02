import { CST } from "../CST"
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){

    }
    loadImages(){
        this.load.setPath("./assets/image");
        //@ts-ignore
        for (let prop in CST.IMAGE){
            this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
        }
    }
    loadAudio(){
        this.load.setPath("./assets/audio");
        //@ts-ignore
        for (let prop in CST.AUDIO){
            this.load.audio(CST.AUDIO[prop], CST.AUDIO[prop]);
        }
    }
    loadSprites(frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig){
        this.load.setPath("./assets/sprite");
        //@ts-ignore
        for (let prop in CST.SPRITE){
            this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
        }
    }

    preload(){
        this.load.spritesheet("anna", "./assets/sprite/anna.png", {frameHeight: 64, frameWidth: 64});
        this.load.atlas("characters", "./assets/sprite/characters.png", "./assets/sprite/characters.json")

        this.loadAudio();
        this.loadSprites({
            frameHeight: 80,
            frameWidth: 80
        });
        this.loadImages();
        // this.load.image("title_bg", "./assets/CLE4.png");

        // this.load.image("options_button", "./assets/options_button.png");

        // this.load.image("play_button", "./assets/play_button.png");

        // //this.load.image("logo", "./assets/logo.png");

        // this.load.spritesheet("cat", "./assets/MafiaMinions.png", {
        //     frameHeight: 80,
        //     frameWidth: 80
        // });

        // this.load.audio("title_music", "./assets/shuinvy-childhood.mp3");

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        });
        
        /*for(let i = 0; i < 100; i++){
            this.load.spritesheet("cat" + i, "./assets/MafiaMinions.png", {
                frameHeight: 32,
                frameWidth: 32
            });
        }*/

        this.load.on("progress", (percent: number)=>{
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        });

        this.load.on("complete", ()=>{
            //this.scene.start(CST.SCENES.MENU, "hello");
        });

        this.load.on("load", (file: Phaser.Loader.File)=>{
            console.log(file.src)
        })
    }

    create(){
        this.scene.start(CST.SCENES.MENU);

    }
}
