import { Container, Graphics, Text, Sprite, TextStyle, Texture, Rectangle, textureFrom } from '../pixi.mjs';
import { fontStyle_main, fontStyle_title } from '../global.mjs';
import { explorSelect,explorGrow } from '../manager.mjs';
import {
    experReset,
    animeSetting,
    videoBackToStart,
    playAnime,
} from '../func.mjs';

class Explor {
    constructor() {
        this.container = new Container();
        this.selected = "";

        this.title = new Text({ resolution: 2 });
        this.title.style = fontStyle_title;
        this.title.text = '我想探究的因素';
        this.title.anchor = 0.5;
        this.title.x = 960
        this.title.y = 200

        this.title2 = new Text({ resolution: 2 });
        this.title2.style = fontStyle_main;
        this.title2.text = '請選擇想探究的因素';
        this.title2.anchor = 0.5;
        this.title2.x = 960
        this.title2.y = 350

        this.sun = new Container();
        this.sun_butt = new Sprite(Texture.from('sun'));
        this.sun_butt.scale = 0.5;
        this.sun_butt.anchor = 0.5;
        this.sun_text = new Text({ resolution: 2 });
        this.sun_text.style = fontStyle_main;
        this.sun_text.text = '光';
        this.sun_text.anchor = 0.5;
        this.sun_text.y = 200
        this.sun.addChild(this.sun_butt, this.sun_text)
        this.sun.x = 360;
        this.sun.y = 700;
        this.sun_butt.eventMode = 'static';
        this.sun_butt.on('pointerdown', async () => {
        this.selected = "sun";
        this.container.visible = false;
        explorSelect.container.visible = true;
        explorSelect.title.text = '探究的因素:光-請選擇操作變因的預處理(或實驗組及對照組)';
        })
            .on('pointerover', () => {
                this.sun_butt.scale = 0.55;
            })
            .on('pointerout', () => {

                this.sun_butt.scale = 0.5;
            })


        this.o2 = new Container();
        this.o2_butt = new Sprite(Texture.from('o2'));
        this.o2_butt.scale = 0.5;
        this.o2_butt.anchor = 0.5;
        this.o2_text = new Text({ resolution: 2 });
        this.o2_text.style = fontStyle_main;
        this.o2_text.text = '氧氣';
        this.o2_text.anchor = 0.5;
        this.o2_text.y = 200
        this.o2.addChild(this.o2_butt, this.o2_text)
        this.o2.x = 660;
        this.o2.y = 700;
        this.o2_butt.eventMode = 'static';
        this.o2_butt.on('pointerdown', async () => {
            this.selected = "o2";
            this.container.visible = false;
            explorSelect.container.visible = true;
        explorSelect.title.text = '探究的因素:氧氣-請選擇操作變因的預處理(或實驗組及對照組)';

        })
            .on('pointerover', () => {
                this.o2_butt.scale = 0.55;
            })
            .on('pointerout', () => {

                this.o2_butt.scale = 0.5;
            })

        this.co2 = new Container();
        this.co2_butt = new Sprite(Texture.from('co2'));
        this.co2_butt.scale = 0.5;
        this.co2_butt.anchor = 0.5;
        this.co2_text = new Text({ resolution: 2 });
        this.co2_text.style = fontStyle_main;
        this.co2_text.text = '二氧化碳';
        this.co2_text.anchor = 0.5;
        this.co2_text.y = 200
        this.co2.addChild(this.co2_butt, this.co2_text)
        this.co2.x = 960;
        this.co2.y = 700;
        this.co2_butt.eventMode = 'static';
        this.co2_butt.on('pointerdown', async () => {
            this.selected = "co2";
            this.container.visible = false;
            explorSelect.container.visible = true;
        explorSelect.title.text = '探究的因素:二氧化碳-請選擇操作變因的預處理(或實驗組及對照組)';
        explorSelect.title.x = 880;

        })
            .on('pointerover', () => {
                this.co2_butt.scale = 0.55;
            })
            .on('pointerout', () => {

                this.co2_butt.scale = 0.5;
            })

        this.water = new Container();
        this.water_butt = new Sprite(Texture.from('water'));
        this.water_butt.scale = 0.5;
        this.water_butt.anchor = 0.5;
        this.water_text = new Text({ resolution: 2 });
        this.water_text.style = fontStyle_main;
        this.water_text.text = '水';
        this.water_text.anchor = 0.5;
        this.water_text.y = 200
        this.water.addChild(this.water_butt, this.water_text)
        this.water.x = 1260;
        this.water.y = 700;
        this.water_butt.eventMode = 'static';
        this.water_butt.on('pointerdown', async () => {
            this.selected = "water";
            this.container.visible = false;
            explorSelect.container.visible = true;
        explorSelect.title.text = '探究的因素:水-請選擇操作變因的預處理(或實驗組及對照組)';

        })
            .on('pointerover', () => {
                this.water_butt.scale = 0.55;
            })
            .on('pointerout', () => {

                this.water_butt.scale = 0.5;
            })

        this.cholo = new Container();
        this.cholo_butt = new Sprite(Texture.from('chlorophyll'));
        this.cholo_butt.scale = 0.5;
        this.cholo_butt.anchor = 0.5;
        this.cholo_text = new Text({ resolution: 2 });
        this.cholo_text.style = fontStyle_main;
        this.cholo_text.text = '葉綠素';
        this.cholo_text.anchor = 0.5;
        this.cholo_text.y = 200
        this.cholo.addChild(this.cholo_butt, this.cholo_text)
        this.cholo.x = 1560;
        this.cholo.y = 700;
        this.cholo_butt.eventMode = 'static';
        this.cholo_butt.on('pointerdown', async () => {
            this.selected = "cholo";
            this.container.visible = false;
            explorSelect.container.visible = true;
        explorSelect.title.text = '探究的因素:葉綠素-請選擇操作變因的預處理(或實驗組及對照組)';

        })
            .on('pointerover', () => {
                this.cholo_butt.scale = 0.55;
            })
            .on('pointerout', () => {

                this.cholo_butt.scale = 0.5;
            })


            this.plantExplor = new Container();
            this.plantExplor_butt = new Sprite(Texture.from('plantGrow'));
            this.plantExplor_butt.scale = 0.3;
            this.plantExplor_butt.anchor = 0.5;
            this.plantExplorBG= new Graphics();
            this.plantExplorBG.circle(0, 0, 130)
            this.plantExplorBG.fill(0xffffff)
            this.plantExplorBG.stroke({ width: 5, color: 0x495a44 });
            this.plantExplorBG.tint = 0xcccccc;
            this.plantExplor_text = new Text({ resolution: 2 });
            this.plantExplor_text.style = fontStyle_main;
            this.plantExplor_text.text = '光合作用必要因素';
            this.plantExplor_text.scale = 0.5
            this.plantExplor_text.anchor = 0.5;
            this.plantExplor_text.y = 175
            this.plantExplor.addChild(this.plantExplorBG,this.plantExplor_butt, this.plantExplor_text)
            this.plantExplor.x = 1750;
            this.plantExplor.y = 250;
            this.plantExplorBG.eventMode = 'static';
            this.plantExplorBG.on('pointerdown', async () => {
                this.selected = "";
                this.container.visible = false;
                explorGrow.container.visible = true;
                explorGrow.on = true;
                this.plantExplorBG.scale = 1;

            })
                .on('pointerover', () => {
                    this.plantExplorBG.scale = 1.05;
                })
                .on('pointerout', () => {
    
                    this.plantExplorBG.scale = 1;
                })

        this.container.addChild(
            this.sun,
            this.o2,
            this.co2,
            this.water,
            this.cholo,
            this.plantExplor,
            this.title,
            this.title2,
        )


    }
    init() {

    }


}



// const explor = new Explor();
export { Explor }