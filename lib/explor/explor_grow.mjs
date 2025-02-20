import { Container, Graphics, Text, Sprite, TextStyle, Texture, Rectangle, textureFrom } from '../pixi.mjs';
import { anime, fontStyle_main, fontStyle_title, fontStyle_basic,fontStyle_basic2, fontStyleB } from '../global.mjs';
import { explor, explorSelect } from '../manager.mjs';
import {
    experReset,
    animeSetting,
    videoBackToStart,
    playAnime,
} from '../func.mjs';

class ExplorGrow {
    constructor() {
        this.container = new Container();
        this.container.visible = false;

        this.on = false;
        this.bg = new Sprite(Texture.from('bg'))

        this.title = new Text({ resolution: 2 });
        this.title.style = fontStyle_main;
        this.title.text = '請拖曳適當條件給植物，給對能量或物質植物會長大';
        this.title.anchor = 0.5;
        this.title.x = 960
        this.title.y = 100

        this.sun = new Container();
        this.sun_butt = new Sprite(Texture.from('sun'));
        this.sun_butt.scale = 0.35;
        this.sun_butt.anchor = 0.5;
        this.sun_text = new Text({ resolution: 2 });
        this.sun_text.style = fontStyle_main;
        this.sun_text.text = '光';
        this.sun_text.scale = 0.75
        this.sun_text.anchor = 0.5;
        this.sun_text.y = 150
        this.sun.addChild(this.sun_butt, this.sun_text)
        this.sunPos = [200,350];
        this.sun.x = this.sunPos[0];
        this.sun.y = this.sunPos[1];

        this.o2 = new Container();
        this.o2_butt = new Sprite(Texture.from('o2'));
        this.o2_butt.scale = 0.35;
        this.o2_butt.anchor = 0.5;
        this.o2_text = new Text({ resolution: 2 });
        this.o2_text.style = fontStyle_main;
        this.o2_text.text = '氧氣';
        this.o2_text.anchor = 0.5;
        this.o2_text.scale = 0.75
        this.o2_text.y = 150
        this.o2.addChild(this.o2_butt, this.o2_text)
        this.o2Pos = [500,350]
        this.o2.x = this.o2Pos[0];
        this.o2.y = this.o2Pos[1];

        this.co2 = new Container();
        this.co2_butt = new Sprite(Texture.from('co2'));
        this.co2_butt.scale = 0.35;
        this.co2_butt.anchor = 0.5;
        this.co2_text = new Text({ resolution: 2 });
        this.co2_text.style = fontStyle_main;
        this.co2_text.text = '二氧化碳';
        this.co2_text.anchor = 0.5;
        this.co2_text.scale = 0.75;
        this.co2_text.y = 150
        this.co2.addChild(this.co2_butt, this.co2_text)
        this.co2Pos = [800,350]
        this.co2.x = this.co2Pos[0];
        this.co2.y = this.co2Pos[1];

        this.water = new Container();
        this.water_butt = new Sprite(Texture.from('water'));
        this.water_butt.scale = 0.35;
        this.water_butt.anchor = 0.5;
        this.water_text = new Text({ resolution: 2 });
        this.water_text.style = fontStyle_main;
        this.water_text.text = '水';
        this.water_text.anchor = 0.5;
        this.water_text.scale = 0.75;
        this.water_text.y = 150
        this.water.addChild(this.water_butt, this.water_text)
        this.waterPos = [350,700]
        this.water.x = this.waterPos[0];
        this.water.y = this.waterPos[1];

        this.cholo = new Container();
        this.cholo_butt = new Sprite(Texture.from('chlorophyll'));
        this.cholo_butt.scale = 0.35;
        this.cholo_butt.anchor = 0.5;
        this.cholo_text = new Text({ resolution: 2 });
        this.cholo_text.style = fontStyle_main;
        this.cholo_text.text = '葉綠素';
        this.cholo_text.anchor = 0.5;
        this.cholo_text.scale = 0.75;
        this.cholo_text.y = 150
        this.cholo.addChild(this.cholo_butt, this.cholo_text)
        this.choloPos = [650,700]
        this.cholo.x = this.choloPos[0];
        this.cholo.y = this.choloPos[1];

        this.plantBG= new Graphics();
        this.plantBG.roundRect(0, 0, 650, 700, 20)
        this.plantBG.fill(0xffffff)
        this.plantBG.stroke({ width: 5, color: 0x495a44 });
        this.plantBG.tint = 0xcccccc;
        this.plantBG.x = 1250
        this.plantBG.y = 200
        this.plant = new Sprite(Texture.from('plantGrow'));
        this.plantScale = 0.53
        this.plant.scale = this.plantScale;
        this.plant.anchor.set(0.5,1);
        this.plant.x = 1575
        this.plant.y = 885

        this.reset_butt = new Sprite(Texture.from("reset"));
        this.reset_butt.scale = 2;
        // this.step4_item.zIndex = 1;
        this.reset_butt.anchor = 0.5;
        this.reset_butt.x = 1150
        this.reset_butt.y = 850
        this.reset_butt.visible = true;
        


        // this.dragTarget = null;
        this.dragArea = new Graphics();
        this.dragArea.rect(0, 0, 1920, 1080)
        this.dragArea.fill(0x000000);
        this.dragArea.alpha = 0
        // this.dragArea.eventMode = 'static';
        // this.dragArea.hitArea = this.dragArea;
        // this.dragArea.on('pointerup', this.onDragEnd);
        // this.dragArea.on('pointerupoutside', this.onDragEnd);


        this.container.addChild(
            this.bg,
            this.plantBG,
            this.title,
            this.sun,
            this.o2,
            this.co2,
            this.water,
            this.cholo,
            this.plant,
            this.reset_butt,
            this.dragArea,
        )


    }
    init() {

    }

}

// const explor = new Explor();
export { ExplorGrow }