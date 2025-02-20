import { Container, Graphics, Text, Sprite, TextStyle, Texture, Rectangle } from './pixi.mjs';

// import{
//     leaf_in,airHole_back,airHole_in,corne_back,corne_in,downEpi_back,downEpi_in,Guard_back,Guard_in,mesophyll_back,mesophyll_in,upEpi_back,upEpi_in,vein_back,vein_in,
// }from './animeTexture.mjs';
import {  
    experReset,
    animeSetting,
    videoBackToStart,
    playAnime, } from './func.mjs';
import { anime } from './global.mjs';

class LeafButt {
    constructor(buttName,animeIn,posX,posY) {
        
        this.container = new Container();
        this.butt = new Container();
        
        //按鈕
        this.inLeafAnime = false;
        this.buttPos = [posX, posY]
        this.bg = new Graphics();
        this.bg.roundRect(-100, -38, 200, 76, 20)
        this.bg.fill(0xffffff)
        this.bg.stroke({ width: 5, color: 0x495a44 });
        this.bg.tint = 0x758f6e;
        this.fontStyle = new TextStyle({
            fontSize: 50,
            // fontWeight: 'bold',
            fill: 0xffffff,
            // stroke: { color: '#755a8a', width: 5, join: 'round' },
            wordWrap: true,
            wordWrapWidth: 440,
        });
        this.text = new Text({ resolution: 2 });
        this.text.style = this.fontStyle;
        this.text.text = buttName;
        this.text.fontSize = 20;
        this.text.anchor = 0.5;

        this.butt.addChild(this.bg, this.text);
        this.butt.x = this.buttPos[0];
        this.butt.y = this.buttPos[1];
        this.container.addChild(this.butt);
        this.container.visible = false;

        this.bg.eventMode = 'static';
        this.bg.on('pointerdown', async() => {
            // animeIn.source.resource.autoplay = false;
            // animeIn.source.autoPlay = false;
            // animeIn.source.options.autoPlay = false;
            // animeIn.source.resource.currentTime = 0;
            // animeBack.source.resource.autoplay = false;
            // animeBack.source.autoPlay = false;
            // animeBack.source.options.autoPlay = false;
            // animeBack.source.resource.currentTime = 0;
            // animeBack.source.resource.pause();
            this.inLeafAnime = true;


                this.bg.tint = 0xf9ffe0;
                this.container.visible = false;

                // anime.texture = animeIn;
                await playAnime(animeIn);
                setTimeout(() => {
                    // this.container.visible = true;
                    // this.text.text = 'BACK';
                    // this.butt.x = 1775
                    // this.butt.y = 1000
                    
                    this.bg.tint = 0x758f6e;
                }, 500);
         
            // if (this.butt_ckick == false) {
            //     this.butt_ckick = true;
            //     this.bg.tint = 0xf9ffe0;
            //     // this.container.visible = false;

            //     anime.texture = animeIn;
            //     playAnime();
            //     setTimeout(() => {
            //         // this.container.visible = true;
            //         this.text.text = 'BACK';
            //         this.butt.x = 1775
            //         this.butt.y = 1000
            //         this.bg.tint = 0x758f6e;
            //     }, 500);
            // } else if (this.butt_ckick == true) {
            //     this.butt_ckick = false;
            //     this.bg.tint = 0xf9ffe0;
            //     // this.container.visible = false;

            //     anime.texture = animeBack;
            //     playAnime();
            //     setTimeout(() => {
            //         // this.container.visible = true;
            //         this.text.text = '角質層';
            //         this.butt.x = this.buttPos[0]
            //         this.butt.y = this.buttPos[1]
            //         this.bg.tint = 0x758f6e;
            //     }, 500);
            // }
        })
            .on('pointerover', () => {
                this.bg.tint = 0xc9e265;
                this.bg.scale = 1.05;
            })
            .on('pointerout', () => {
                this.bg.tint = 0x758f6e;
                this.bg.scale = 1;
            })

    // //回到上一頁按鈕
    // this.back_butt = new Container();
    // this.back_buttPos = [posX2, posY2]
    // this.back_bg = new Graphics();
    // this.back_bg.roundRect(-100, -38, 200, 76, 20)
    // this.back_bg.fill(0xffffff)
    // this.back_bg.stroke({ width: 5, color: 0x495a44 });
    // this.back_bg.tint = 0x758f6e;

    // this.back_text = new Text({ resolution: 2 });
    // this.back_text.style = this.fontStyle;
    // this.back_text.text = 'BACK';
    // this.back_text.fontSize = 20;
    // this.back_text.anchor = 0.5;

    // this.back_butt.addChild(this.back_bg, this.back_text);
    // this.back_butt.x = this.back_buttPos[0];
    // this.back_butt.y = this.back_buttPos[1];
    // this.container.addChild(this.back_butt);

    // this.back_bg.eventMode = 'static';
    // this.back_bg.on('pointerdown', () => {
    //     animeBack.source.resource.autoplay = false;
    //     animeBack.source.autoPlay = false;
    //     animeBack.source.options.autoPlay = false;
    //     animeBack.source.resource.currentTime = 0;
    //     animeBack.source.resource.pause();

    //     this.butt_ckick = false;
    //     this.bg.tint = 0xf9ffe0;
    //     this.container.visible = false;

    //     anime.texture = animeBack;
    //     playAnime();
    //     setTimeout(() => {
    //         this.container.visible = true;
    //         this.text.text = '角質層';
    //         this.butt.x = this.buttPos[0]
    //         this.butt.y = this.buttPos[1]
    //         this.bg.tint = 0x758f6e;
    //     }, 500);
    // })
    //     .on('pointerover', () => {
    //         this.bg.tint = 0xc9e265;
    //         this.bg.scale = 1.05;
    //     })
    //     .on('pointerout', () => {
    //         this.bg.tint = 0x758f6e;
    //         this.bg.scale = 1;
    //     })
    }
    init() {

    }
    

}




export { LeafButt }