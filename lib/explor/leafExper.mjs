import { Container, Graphics, Text, Sprite, TextStyle, Texture, Rectangle, textureFrom } from '../pixi.mjs';
import { anime, fontStyle_main, fontStyle_title, fontStyle_basic,fontStyle_basic2, fontStyleB } from '../global.mjs';
import { explor, explorSelect } from '../manager.mjs';
import {
    experReset,
    animeSetting,
    videoBackToStart,
    playAnime,
} from '../func.mjs';

class LeafExper {
    constructor() {
        this.container = new Container();
        this.container.visible = false;
        this.on = false;
        this.bg = new Sprite(Texture.from('bg'))

        //圖片
        this.step1 = new Texture.from('step1');
        this.step2 = new Texture.from('step2');
        this.step3 = new Texture.from('step3');
        this.step4 = new Texture.from('step4');
        this.step1_cholo = new Texture.from('step1_cholo');
        this.step2_cholo = new Texture.from('step2_cholo');
        this.step3_cholo = new Texture.from('step3_cholo');
        this.step4_cholo = new Texture.from('step4_cholo');

        this.step1_on = new Texture.from('step1_on');
        this.step2_on = new Texture.from('step2_on');
        this.step3_on = new Texture.from('step3_on');
        this.step4_on = new Texture.from('step4_on');
        this.step1_cholo_on = new Texture.from('step1_cholo_on');
        this.step2_cholo_on = new Texture.from('step2_cholo_on');
        this.step3_cholo_on = new Texture.from('step3_cholo_on');
        this.step4_cholo_on = new Texture.from('step4_cholo_on');

        this.sun_end = new Texture.from('sun_end');
        this.o2_end = new Texture.from('o2_end');
        this.co2_end = new Texture.from('co2_end');
        this.water_end = new Texture.from('water_end');
        this.cholo_end = new Texture.from('cholo_end');

        this.title = new Text({ resolution: 2 });
        this.title.style = fontStyle_main;
        this.title.text = '取下葉片後的實驗流程';
        this.title.anchor = 0.5;
        this.title.x = 500
        this.title.y = 100

        this.title2 = new Text({ resolution: 2 });
        this.title2.style = fontStyle_main;
        this.title2.text = '請選擇正確流程拖曳至左方';
        this.title2.anchor = 0.5;
        this.title2.x = 1400
        this.title2.y = 100

        this.slot_1 = new Graphics();
        this.slot_1_now = ""
        this.slot_1.roundRect(-200, -100, 400, 200, 20)
        this.slot_1.fill(0xffffff)
        this.slot_1.stroke({ width: 5, color: 0x495a44 });
        this.slot_1.tint = 0xcccccc;
        this.slot_1.x = 500
        this.slot_1.y = 250
        this.slot_1_step = new Sprite();
        this.slot_1_step.anchor = 0.5;
        this.slot_1_step.x = 500
        this.slot_1_step.y = 250
        this.slot_1_Text = new Text({ resolution: 2 });
        this.slot_1_Text.style = fontStyle_main;
        this.slot_1_Text.text = '1';
        this.slot_1_Text.anchor = 0.5;
        this.slot_1_Text.x = 250
        this.slot_1_Text.y = 250

        this.slot_2 = new Graphics();
        this.slot_2_now = ""
        this.slot_2.roundRect(-200, -100, 400, 200, 20)
        this.slot_2.fill(0xffffff)
        this.slot_2.stroke({ width: 5, color: 0x495a44 });
        this.slot_2.tint = 0xcccccc;
        this.slot_2.x = 500
        this.slot_2.y = 460
        this.slot_2_step = new Sprite();
        this.slot_2_step.anchor = 0.5;
        this.slot_2_step.x = 500
        this.slot_2_step.y = 460
        this.slot_2_Text = new Text({ resolution: 2 });
        this.slot_2_Text.style = fontStyle_main;
        this.slot_2_Text.text = '2';
        this.slot_2_Text.anchor = 0.5;
        this.slot_2_Text.x = 250
        this.slot_2_Text.y = 460

        this.slot_3 = new Graphics();
        this.slot_3_now = ""
        this.slot_3.roundRect(-200, -100, 400, 200, 20)
        this.slot_3.fill(0xffffff)
        this.slot_3.stroke({ width: 5, color: 0x495a44 });
        this.slot_3.tint = 0xcccccc;
        this.slot_3.x = 500
        this.slot_3.y = 670
        this.slot_3_step = new Sprite();
        this.slot_3_step.anchor = 0.5;
        this.slot_3_step.x = 500
        this.slot_3_step.y = 670
        this.slot_3_Text = new Text({ resolution: 2 });
        this.slot_3_Text.style = fontStyle_main;
        this.slot_3_Text.text = '3';
        this.slot_3_Text.anchor = 0.5;
        this.slot_3_Text.x = 250
        this.slot_3_Text.y = 670

        this.slot_4 = new Graphics();
        this.slot_4_now = ""
        this.slot_4.roundRect(-200, -100, 400, 200, 20)
        this.slot_4.fill(0xffffff)
        this.slot_4.stroke({ width: 5, color: 0x495a44 });
        this.slot_4.tint = 0xcccccc;
        this.slot_4.x = 500
        this.slot_4.y = 880
        this.slot_4_step = new Sprite();
        this.slot_4_step.anchor = 0.5;
        this.slot_4_step.x = 500
        this.slot_4_step.y = 880
        this.slot_4_Text = new Text({ resolution: 2 });
        this.slot_4_Text.style = fontStyle_main;
        this.slot_4_Text.text = '4';
        this.slot_4_Text.anchor = 0.5;
        this.slot_4_Text.x = 250
        this.slot_4_Text.y = 880

        //步驟選項
        this.step1_item = new Sprite(this.step1);
        this.step1_item.scale = 1;
        // this.step1_item.zIndex = 1;
        this.step1_item.anchor = 0.5;
        this.step1_itemPos = [1450, 780]
        this.step1_item.x = this.step1_itemPos[0]
        this.step1_item.y = this.step1_itemPos[1]
        // this.step1_item.eventMode = 'static';
        // this.step1_item.cursor = 'pointer';
        // this.step1_item.on('pointerdown', this.onDragStart, this.step1_item);

        this.step2_item = new Sprite(this.step2);
        this.step2_item.scale = 1;
        // this.step2_item.zIndex = 1;
        this.step2_item.anchor = 0.5;
        this.step2_itemPos = [1200, 540]
        this.step2_item.x = this.step2_itemPos[0]
        this.step2_item.y = this.step2_itemPos[1]

        this.step3_item = new Sprite(this.step3);
        this.step3_item.scale = 1;
        // this.step3_item.zIndex = 1;
        this.step3_item.anchor = 0.5;
        this.step3_itemPos = [1450, 300]
        this.step3_item.x = this.step3_itemPos[0]
        this.step3_item.y = this.step3_itemPos[1]

        this.step4_item = new Sprite(this.step4);
        this.step4_item.scale = 1;
        // this.step4_item.zIndex = 1;
        this.step4_item.anchor = 0.5;
        this.step4_itemPos = [1700, 540]
        this.step4_item.x = this.step4_itemPos[0]
        this.step4_item.y = this.step4_itemPos[1]

        this.reset_butt = new Sprite(Texture.from("reset"));
        this.reset_butt.scale = 2;
        // this.step4_item.zIndex = 1;
        this.reset_butt.anchor = 0.5;
        this.reset_butt.x = 800
        this.reset_butt.y = 920
        this.reset_butt.visible = true;

        //正確
        this.correct = new Text({ resolution: 2 });
        this.correct.style = fontStyleB;
        this.correct.text = '正確!';
        this.correct.tint = 0xffefa7;
        this.correct.anchor = 0.5;
        this.correct.x = 940
        this.correct.y = 750
        this.correct.visible = false;
        //錯誤
        this.wrong = new Text({ resolution: 2 });
        this.wrong.style = fontStyleB;
        this.wrong.text = '再想想!';
        this.wrong.tint = 0xffefa7;
        this.wrong.anchor = 0.5;
        this.wrong.x = 940
        this.wrong.y = 750
        this.wrong.visible = false;

        //下一個動畫按鈕
        this.explorNext_butt = new Container();
        this.explorNext_bg = new Graphics();
        this.explorNext_bg.roundRect(-100, -38, 200, 76, 20)
        this.explorNext_bg.fill(0xffffff)
        this.explorNext_bg.stroke({ width: 5, color: 0x495a44 });
        this.explorNext_bg.tint = 0x758f6e;

        this.explorNext_text = new Text({ resolution: 2 });
        this.explorNext_text.style = fontStyle_basic2;
        this.explorNext_text.text = 'NEXT';
        this.explorNext_text.fontSize = 20;
        this.explorNext_text.anchor = 0.5;
        this.explorNext_butt.addChild(this.explorNext_bg, this.explorNext_text);
        this.explorNext_butt.visible = false;
        this.explorNext_butt.x = 1775;
        this.explorNext_butt.y = 1000;

        this.explorNext_bg.eventMode = 'static';
        this.explorNext_bg.on('pointerdown', async() => {
            if(explor.selected == "sun"){
                await playAnime(this.sun_end);
            }else if(explor.selected == "o2"){
                await playAnime(this.o2_end);
            }else if(explor.selected == "co2"){
                await playAnime(this.co2_end);
            }else if(explor.selected == "water"){
                await playAnime(this.water_end);
            }else if(explor.selected == "cholo"){
                await playAnime(this.cholo_end);
            }
            setTimeout(() => {
                this.explorNext_bg.tint = 0xf9ffe0;
                this.explorNext_bg.scale = 1;
                this.explorNext_butt.visible = false;
                this.container.visible = false;
            }, 15);
        })
            .on('pointerover', () => {
                this.explorNext_bg.tint = 0xc9e265;
                this.explorNext_bg.scale = 1.05;
            })
            .on('pointerout', () => {
                this.explorNext_bg.tint = 0x758f6e;
                this.explorNext_bg.scale = 1;
            })

        // this.check = [this.slot_1_now, this.slot_2_now, this.slot_3_now, this.slot_4_now]

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
            this.title,
            this.title2,
            this.slot_1,
            this.slot_1_step,
            this.slot_1_Text,
            this.slot_2,
            this.slot_2_step,
            this.slot_2_Text,
            this.slot_3,
            this.slot_3_step,
            this.slot_3_Text,
            this.slot_4,
            this.slot_4_step,
            this.slot_4_Text,
            this.step1_item,
            this.step2_item,
            this.step3_item,
            this.step4_item,
            this.correct,
            this.wrong,
            this.dragArea,
            this.reset_butt,
            this.explorNext_butt,
        )


    }
    init() {

    }

    // onDragMove(event) {
    //     if (this.dragTarget) {
    //         this.dragTarget.parent.toLocal(event.global, null, this.dragTarget.position);
    //     }
    // }

    // onDragStart() {
    //     // Store a reference to the data
    //     // * The reason for this is because of multitouch *
    //     // * We want to track the movement of this particular touch *
    //     this.alpha = 0.5;
    //     this.dragTarget = this;
    //     this.dragArea.on('pointermove', this.onDragMove);
    // }

    // onDragEnd() {
    //     if (this.dragTarget) {

    //         console.log(this.dragTarget);
    //         this.dragArea.off('pointermove', this.onDragMove);
    //         this.dragTarget.alpha = 1;
    //         this.dragTarget = null;
    //     }
    // }
    checkCorrect() {
        // if (this.slot_1_now == "step1" && this.slot_2_now == "step2" && this.slot_3_now == "step3" && this.slot_4_now == "step4") {
        //     this.correct.visible = true;
        // } else { }
        this.wrong.visible = false;
        if (this.slot_1_now != "" && this.slot_2_now != "" && this.slot_3_now != "" && this.slot_4_now != "") {
            if (this.slot_1_now == "step1" && this.slot_2_now == "step2" && this.slot_3_now == "step3" && this.slot_4_now == "step4") {
                this.correct.visible = true;
                this.reset_butt.visible = false;
                this.explorNext_butt.visible = true;
            } else {
                this.wrong.visible = true;
            }
        }

    }

    checkCholo() {
        if (explor.selected == "cholo") {
            this.step1_item.texture = this.step1_cholo
            this.step2_item.texture = this.step2_cholo
            this.step3_item.texture = this.step3_cholo
            this.step4_item.texture = this.step4_cholo
        } else {
            this.step1_item.texture = this.step1
            this.step2_item.texture = this.step2
            this.step3_item.texture = this.step3
            this.step4_item.texture = this.step4
        }
    }

}




// const explor = new Explor();
export { LeafExper }