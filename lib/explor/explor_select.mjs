import { Container, Graphics, Text, Sprite, TextStyle, Texture, Rectangle, textureFrom } from '../pixi.mjs';
import { fontStyle_main, fontStyle_title, fontStyle_basic, fontStyle_basic2 } from '../global.mjs';
import { explor, leafExper } from '../manager.mjs';
import {
    experReset,
    animeSetting,
    videoBackToStart,
    playAnime,
} from '../func.mjs';
class ExplorSelect {
    constructor() {
        this.container = new Container();
        this.selectAll = new Container();

        this.title = new Text({ resolution: 2 });
        this.title.style = fontStyle_main;
        this.title.text = '探究的因素-請選擇操作變因的預處理(或實驗組及對照組)';
        this.title.anchor = 0.5;
        this.title.x = 960
        this.title.y = 100

        //動畫頁數
        let now_SunAnime = 1
        let now_O2Anime = 1
        let now_Co2Anime = 1
        let now_WaterAnime = 1
        let now_CholoAnime = 1

        //動畫
        this.sun_1 = new Texture.from('sun_1');
        this.sun_2 = new Texture.from('sun_2');
        this.sun_end = new Texture.from('sun_end');
        this.cholo_1 = new Texture.from('cholo_1');
        this.cholo_2 = new Texture.from('cholo_2');
        this.cholo_end = new Texture.from('cholo_end');
        this.co2_1 = new Texture.from('co2_1');
        this.co2_2 = new Texture.from('co2_2');
        this.co2_end = new Texture.from('co2_end');
        this.o2_1 = new Texture.from('o2_1');
        this.o2_2 = new Texture.from('o2_2');
        this.o2_end = new Texture.from('o2_end');
        this.water_1 = new Texture.from('water_1');
        this.water_2 = new Texture.from('water_2');
        this.water_end = new Texture.from('water_end');

        //切斷葉脈
        this.leaf01 = new Container();
        this.leaf01_selected = false;
        this.leaf01_icon = new Sprite(Texture.from('leaf01'));
        this.leaf01_icon.scale = 0.4;
        this.leaf01_icon.anchor = 0.5;
        this.leaf01_text = new Text({ resolution: 2 });
        this.leaf01_text.style = fontStyle_basic;
        this.leaf01_text.text = '切斷葉脈';
        this.leaf01_text.anchor = 0.5;
        this.leaf01_text.y = 200

        this.leaf_bg = new Graphics();
        this.leaf_bg.roundRect(-160, -160, 320, 320, 20)
        this.leaf_bg.fill(0xffffff)
        this.leaf_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.leaf_bg.tint = 0xcccccc;

        this.leaf01.addChild(this.leaf_bg, this.leaf01_icon, this.leaf01_text)
        this.leaf01.x = 350;
        this.leaf01.y = 350;

        this.leaf_bg.eventMode = 'static';
        this.leaf_bg.on('pointerdown', async () => {
            this.again.visible = false;

            if (this.leaf01_selected == true) {
                this.leaf01_selected = false
                this.leaf_bg.tint = 0xcccccc;
            } else if (this.leaf01_selected == false) {
                this.leaf01_selected = true
                this.leaf_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.leaf_bg.scale = 1.05;
                if (this.leaf01_selected == true) {
                    this.leaf_bg.tint = 0xffefa7;
                } else if (this.leaf01_selected == false) {
                    this.leaf_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.leaf_bg.scale = 1;
                if (this.leaf01_selected == true) {
                    this.leaf_bg.tint = 0xffefa7;
                } else if (this.leaf01_selected == false) {
                    this.leaf_bg.tint = 0xcccccc;
                }
            })
        //包鋁箔
        this.leaf02 = new Container();
        this.leaf02_selected = false;
        this.leaf02_icon = new Sprite(Texture.from('leaf02'));
        this.leaf02_icon.scale = 0.4;
        this.leaf02_icon.anchor = 0.5;
        this.leaf02_text = new Text({ resolution: 2 });
        this.leaf02_text.style = fontStyle_basic;
        this.leaf02_text.text = '包鋁箔';
        this.leaf02_text.anchor = 0.5;
        this.leaf02_text.y = 200

        this.leaf02_bg = new Graphics();
        this.leaf02_bg.roundRect(-160, -160, 320, 320, 20)
        this.leaf02_bg.fill(0xffffff)
        this.leaf02_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.leaf02_bg.tint = 0xcccccc;

        this.leaf02.addChild(this.leaf02_bg, this.leaf02_icon, this.leaf02_text)
        this.leaf02.x = 700;
        this.leaf02.y = 350;

        this.leaf02_bg.eventMode = 'static';
        this.leaf02_bg.on('pointerdown', async () => {
            this.again.visible = false;

            if (this.leaf02_selected == true) {
                this.leaf02_selected = false
                this.leaf02_bg.tint = 0xcccccc;
            } else if (this.leaf02_selected == false) {
                this.leaf02_selected = true
                this.leaf02_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.leaf02_bg.scale = 1.05;
                if (this.leaf02_selected == true) {
                    this.leaf02_bg.tint = 0xffefa7;
                } else if (this.leaf02_selected == false) {
                    this.leaf02_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.leaf02_bg.scale = 1;
                if (this.leaf02_selected == true) {
                    this.leaf02_bg.tint = 0xffefa7;
                } else if (this.leaf02_selected == false) {
                    this.leaf02_bg.tint = 0xcccccc;
                }
            })

        //石灰
        this.lime = new Container();
        this.lime_selected = false;
        this.lime_icon = new Sprite(Texture.from('lime'));
        this.lime_icon.scale = 0.4;
        this.lime_icon.anchor = 0.5;
        this.lime_text = new Text({ resolution: 2 });
        this.lime_text.style = fontStyle_basic;
        this.lime_text.text = '氫氧化鈉';
        this.lime_text.anchor = 0.5;
        this.lime_text.y = 200
        this.lime_text2 = new Text({ resolution: 2 });
        this.lime_text2.style = fontStyle_basic;
        this.lime_text2.text = '說明:可吸收二氧化碳';
        this.lime_text2.scale = 0.75
        this.lime_text2.anchor = 0.5;
        this.lime_text2.y = 250

        this.lime_bg = new Graphics();
        this.lime_bg.roundRect(-160, -160, 320, 320, 20)
        this.lime_bg.fill(0xffffff)
        this.lime_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.lime_bg.tint = 0xcccccc;

        this.lime.addChild(this.lime_bg, this.lime_icon, this.lime_text, this.lime_text2)
        this.lime.x = 1050;
        this.lime.y = 350;

        this.lime_bg.eventMode = 'static';
        this.lime_bg.on('pointerdown', async () => {
            this.again.visible = false;

            if (this.lime_selected == true) {
                this.lime_selected = false
                this.lime_bg.tint = 0xcccccc;
            } else if (this.lime_selected == false) {
                this.lime_selected = true
                this.lime_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.lime_bg.scale = 1.05;
                if (this.lime_selected == true) {
                    this.lime_bg.tint = 0xffefa7;
                } else if (this.lime_selected == false) {
                    this.lime_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.lime_bg.scale = 1;
                if (this.lime_selected == true) {
                    this.lime_bg.tint = 0xffefa7;
                } else if (this.lime_selected == false) {
                    this.lime_bg.tint = 0xcccccc;
                }
            })

        //斑葉植物
        this.plant = new Container();
        this.plant_selected = false;
        this.plant_icon = new Sprite(Texture.from('plant'));
        this.plant_icon.scale = 0.37;
        this.plant_icon.anchor = 0.5;
        this.plant_icon.y = -15;

        this.plant_text = new Text({ resolution: 2 });
        this.plant_text.style = fontStyle_basic;
        this.plant_text.text = '斑葉植物(如:班葉黃金葛)';
        this.plant_text.anchor = 0.5;
        this.plant_text.y = 200

        this.plant_bg = new Graphics();
        this.plant_bg.roundRect(-160, -160, 320, 320, 20)
        this.plant_bg.fill(0xffffff)
        this.plant_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.plant_bg.tint = 0xcccccc;

        this.plant.addChild(this.plant_bg, this.plant_icon, this.plant_text)
        this.plant.x = 1400;
        this.plant.y = 350;

        this.plant_bg.eventMode = 'static';
        this.plant_bg.on('pointerdown', async () => {
            this.again.visible = false;

            if (this.plant_selected == true) {
                this.plant_selected = false
                this.plant_bg.tint = 0xcccccc;
            } else if (this.plant_selected == false) {
                this.plant_selected = true
                this.plant_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.plant_bg.scale = 1.05;
                if (this.plant_selected == true) {
                    this.plant_bg.tint = 0xffefa7;
                } else if (this.plant_selected == false) {
                    this.plant_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.plant_bg.scale = 1;
                if (this.plant_selected == true) {
                    this.plant_bg.tint = 0xffefa7;
                } else if (this.plant_selected == false) {
                    this.plant_bg.tint = 0xcccccc;
                }
            })

        //罐中放置氫氧化鈉
        this.jar01 = new Container();
        this.jar01_selected = false;
        this.jar01_icon = new Sprite(Texture.from('jar01'));
        this.jar01_icon.scale = 0.5;
        this.jar01_icon.anchor = 0.5;
        this.jar01_text = new Text({ resolution: 2 });
        this.jar01_text.style = fontStyle_basic;
        this.jar01_text.text = '罐中放置氫氧化鈉';
        this.jar01_text.anchor = 0.5;
        this.jar01_text.scale = 0.8
        this.jar01_text.y = 200

        this.jar01_bg = new Graphics();
        this.jar01_bg.roundRect(-160, -160, 320, 320, 20)
        this.jar01_bg.fill(0xffffff)
        this.jar01_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.jar01_bg.tint = 0xcccccc;

        this.jar01.addChild(this.jar01_bg, this.jar01_icon, this.jar01_text)
        this.jar01.x = 350;
        this.jar01.y = 800;

        this.jar01_bg.eventMode = 'static';
        this.jar01_bg.on('pointerdown', async () => {
            this.again.visible = false;

            if (this.jar01_selected == true) {
                this.jar01_selected = false
                this.jar01_bg.tint = 0xcccccc;
            } else if (this.jar01_selected == false) {
                this.jar01_selected = true
                this.jar01_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.jar01_bg.scale = 1.05;
                if (this.jar01_selected == true) {
                    this.jar01_bg.tint = 0xffefa7;
                } else if (this.jar01_selected == false) {
                    this.jar01_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.jar01_bg.scale = 1;
                if (this.jar01_selected == true) {
                    this.jar01_bg.tint = 0xffefa7;
                } else if (this.jar01_selected == false) {
                    this.jar01_bg.tint = 0xcccccc;
                }
            })
        //罐中未放置任呵物品
        this.jar02 = new Container();
        this.jar02_selected = false;
        this.jar02_icon = new Sprite(Texture.from('jar02'));
        this.jar02_icon.scale = 0.5;
        this.jar02_icon.anchor = 0.5;
        this.jar02_text = new Text({ resolution: 2 });
        this.jar02_text.style = fontStyle_basic;
        this.jar02_text.text = '罐中未放置氫氧化鈉';
        this.jar02_text.anchor = 0.5;
        this.jar02_text.scale = 0.8
        this.jar02_text.y = 200

        this.jar02_bg = new Graphics();
        this.jar02_bg.roundRect(-160, -160, 320, 320, 20)
        this.jar02_bg.fill(0xffffff)
        this.jar02_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.jar02_bg.tint = 0xcccccc;

        this.jar02.addChild(this.jar02_bg, this.jar02_icon, this.jar02_text)
        this.jar02.x = 700;
        this.jar02.y = 800;

        this.jar02_bg.eventMode = 'static';
        this.jar02_bg.on('pointerdown', async () => {
            this.again.visible = false;

            if (this.jar02_selected == true) {
                this.jar02_selected = false
                this.jar02_bg.tint = 0xcccccc;
            } else if (this.jar02_selected == false) {
                this.jar02_selected = true
                this.jar02_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.jar02_bg.scale = 1.05;
                if (this.jar02_selected == true) {
                    this.jar02_bg.tint = 0xffefa7;
                } else if (this.jar02_selected == false) {
                    this.jar02_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.jar02_bg.scale = 1;
                if (this.jar02_selected == true) {
                    this.jar02_bg.tint = 0xffefa7;
                } else if (this.jar02_selected == false) {
                    this.jar02_bg.tint = 0xcccccc;
                }
            })
        //罐中放置蠟燭燃燒後加入氧氣
        this.jar03 = new Container();
        this.jar03_selected = false;
        this.jar03_icon = new Sprite(Texture.from('jar03'));
        this.jar03_icon.scale = 0.5;
        this.jar03_icon.anchor = 0.5;
        this.jar03_text = new Text({ resolution: 2 });
        this.jar03_text.style = fontStyle_basic;
        this.jar03_text.text = '罐中放置蠟燭燃燒後';
        this.jar03_text.anchor = 0.5;
        this.jar03_text.scale = 0.8
        this.jar03_text.y = 200
        this.jar03_text2 = new Text({ resolution: 2 });
        this.jar03_text2.style = fontStyle_basic;
        this.jar03_text2.text = '放入氧氣';
        this.jar03_text2.anchor = 0.5;
        this.jar03_text2.scale = 0.8
        this.jar03_text2.y = 240

        this.jar03_bg = new Graphics();
        this.jar03_bg.roundRect(-160, -160, 320, 320, 20)
        this.jar03_bg.fill(0xffffff)
        this.jar03_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.jar03_bg.tint = 0xcccccc;

        this.jar03.addChild(this.jar03_bg, this.jar03_icon, this.jar03_text, this.jar03_text2)
        this.jar03.x = 1050;
        this.jar03.y = 800;

        this.jar03_bg.eventMode = 'static';
        this.jar03_bg.on('pointerdown', async () => {
            this.again.visible = false;

            if (this.jar03_selected == true) {
                this.jar03_selected = false
                this.jar03_bg.tint = 0xcccccc;
            } else if (this.jar03_selected == false) {
                this.jar03_selected = true
                this.jar03_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.jar03_bg.scale = 1.05;
                if (this.jar03_selected == true) {
                    this.jar03_bg.tint = 0xffefa7;
                } else if (this.jar03_selected == false) {
                    this.jar03_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.jar03_bg.scale = 1;
                if (this.jar03_selected == true) {
                    this.jar03_bg.tint = 0xffefa7;
                } else if (this.jar03_selected == false) {
                    this.jar03_bg.tint = 0xcccccc;
                }
            })
        //罐中放置蠟燭燃燒無加氧氣
        this.jar04 = new Container();
        this.jar04_selected = false;
        this.jar04_icon = new Sprite(Texture.from('jar04'));
        this.jar04_icon.scale = 0.5;
        this.jar04_icon.anchor = 0.5;
        this.jar04_text = new Text({ resolution: 2 });
        this.jar04_text.style = fontStyle_basic;
        this.jar04_text.text = '罐中放置蠟燭燃燒後';
        this.jar04_text.anchor = 0.5;
        this.jar04_text.scale = 0.8
        this.jar04_text.y = 200
        this.jar04_text2 = new Text({ resolution: 2 });
        this.jar04_text2.style = fontStyle_basic;
        this.jar04_text2.text = '無加氧氣';
        this.jar04_text2.anchor = 0.5;
        this.jar04_text2.scale = 0.8
        this.jar04_text2.y = 240

        this.jar04_bg = new Graphics();
        this.jar04_bg.roundRect(-160, -160, 320, 320, 20)
        this.jar04_bg.fill(0xffffff)
        this.jar04_bg.stroke({ width: 6, color: 0x000000, join: 'round' });

        this.jar04_bg.tint = 0xcccccc;

        this.jar04.addChild(this.jar04_bg, this.jar04_icon, this.jar04_text, this.jar04_text2)
        this.jar04.x = 1400;
        this.jar04.y = 800;

        this.jar04_bg.eventMode = 'static';
        this.jar04_bg.on('pointerdown', async () => {
            this.again.visible = false;
            if (this.jar04_selected == true) {
                this.jar04_selected = false
                this.jar04_bg.tint = 0xcccccc;
            } else if (this.jar04_selected == false) {
                this.jar04_selected = true
                this.jar04_bg.tint = 0xffefa7;
            }
        })
            .on('pointerover', () => {
                this.jar04_bg.scale = 1.05;
                if (this.jar04_selected == true) {
                    this.jar04_bg.tint = 0xffefa7;
                } else if (this.jar04_selected == false) {
                    this.jar04_bg.tint = 0xf9f9f9;
                }
            })
            .on('pointerout', () => {
                this.jar04_bg.scale = 1;
                if (this.jar04_selected == true) {
                    this.jar04_bg.tint = 0xffefa7;
                } else if (this.jar04_selected == false) {
                    this.jar04_bg.tint = 0xcccccc;
                }
            })

        //再想想
        this.again = new Container();
        this.again_bg = new Graphics();
        this.again_bg.roundRect(-95, -95, 190, 190, 20)
        this.again_bg.fill(0xffffff)
        this.again_bg.stroke({ width: 6, color: 0x000000, join: 'round' });
        this.again_bg.tint = 0xff5454;

        this.again_text = new Text({ resolution: 2 });
        this.again_text.style = fontStyle_basic;
        this.again_text.text = '再想想';
        this.again_text.anchor = 0.5;
        this.again_text.scale = 1;


        this.again.addChild(this.again_bg, this.again_text)
        this.again.visible = false;
        this.again.x = 1700;
        this.again.y = 400;

        //選擇完接下一頁按鈕
        this.next = new Container();
        this.next_bg = new Graphics();
        this.next_bg.roundRect(-95, -95, 190, 190, 20)
        this.next_bg.fill(0xffffff)
        this.next_bg.stroke({ width: 6, color: 0x000000, join: 'round' });
        this.next_bg.tint = 0xcccccc;

        this.next_text = new Text({ resolution: 2 });
        this.next_text.style = fontStyle_basic;
        this.next_text.text = 'NEXT';
        this.next_text.anchor = 0.5;
        this.next_text.scale = 1;


        this.next.addChild(this.next_bg, this.next_text)
        this.next.x = 1700;
        this.next.y = 800;

        this.next_bg.eventMode = 'static';
        this.next_bg.on('pointerdown', async () => {
            if (explor.selected == "sun" &&
                this.leaf01_selected == false &&
                this.leaf02_selected == true &&
                this.lime_selected == false &&
                this.plant_selected == false &&
                this.jar01_selected == false &&
                this.jar02_selected == false &&
                this.jar03_selected == false &&
                this.jar04_selected == false
            ) {
                now_SunAnime = 1
                this.handle_SunPage(now_SunAnime);
                this.selectAll.visible = false;
                this.explorNext_butt.visible = true;

                this.explorNext_bg.tint = 0xb3b3b3;
                this.explorNext_bg.eventMode = '';
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 500);
            } else if (explor.selected == "o2" &&
                this.leaf01_selected == false &&
                this.leaf02_selected == false &&
                this.lime_selected == false &&
                this.plant_selected == false &&
                this.jar01_selected == false &&
                this.jar02_selected == false &&
                this.jar03_selected == true &&
                this.jar04_selected == true
            ) {
                now_O2Anime = 1
                this.handle_O2Page(now_O2Anime);
                this.selectAll.visible = false;
                this.explorNext_butt.visible = true;

                this.explorNext_bg.tint = 0xb3b3b3;
                this.explorNext_bg.eventMode = '';
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 2500);
            } else if (explor.selected == "co2" &&
                this.leaf01_selected == false &&
                this.leaf02_selected == false &&
                this.lime_selected == false &&
                this.plant_selected == false &&
                this.jar01_selected == true &&
                this.jar02_selected == true &&
                this.jar03_selected == false &&
                this.jar04_selected == false
            ) {
                now_Co2Anime = 1
                this.handle_Co2Page(now_Co2Anime);
                this.selectAll.visible = false;
                this.explorNext_butt.visible = true;

                this.explorNext_bg.tint = 0xb3b3b3;
                this.explorNext_bg.eventMode = '';
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 500);
            } else if (explor.selected == "water" &&
                this.leaf01_selected == true &&
                this.leaf02_selected == false &&
                this.lime_selected == false &&
                this.plant_selected == false &&
                this.jar01_selected == false &&
                this.jar02_selected == false &&
                this.jar03_selected == false &&
                this.jar04_selected == false
            ) {
                now_WaterAnime = 1
                this.handle_WaterPage(now_WaterAnime);
                this.selectAll.visible = false;
                this.explorNext_butt.visible = true;

                this.explorNext_bg.tint = 0xb3b3b3;
                this.explorNext_bg.eventMode = '';
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 500);
            } else if (explor.selected == "cholo" &&
                this.leaf01_selected == false &&
                this.leaf02_selected == false &&
                this.lime_selected == false &&
                this.plant_selected == true &&
                this.jar01_selected == false &&
                this.jar02_selected == false &&
                this.jar03_selected == false &&
                this.jar04_selected == false
            ) {
                now_CholoAnime = 1
                this.handle_CholoPage(now_CholoAnime);
                this.selectAll.visible = false;
                this.explorNext_butt.visible = true;

                this.explorNext_bg.tint = 0xb3b3b3;
                this.explorNext_bg.eventMode = '';
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 500);
            }
            else {
                this.again.visible = true;
            }
        })
            .on('pointerover', () => {
                this.next_bg.tint = 0xf9f9f9;
            })
            .on('pointerout', () => {
                this.next_bg.tint = 0xcccccc;
            })


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
        this.explorNext_bg.on('pointerdown', async () => {
            this.explorNext_bg.tint = 0xf9ffe0;
            this.explorNext_bg.scale = 1;
            this.explorNext_bg.eventMode = '';
            setTimeout(() => {
                this.explorNext_bg.tint = 0xb3b3b3;
            }, 200);
            if (explor.selected == "sun" && now_SunAnime == 1) {
                now_SunAnime = 2
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 2000);
                this.handle_SunPage(now_SunAnime);
            } else if (explor.selected == "sun" && now_SunAnime == 2) {
                now_SunAnime = 3
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 200);
                this.handle_SunPage(now_SunAnime);
            }
            else if (explor.selected == "o2" && now_O2Anime == 1) {
                now_O2Anime = 2
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 2000);
                this.handle_O2Page(now_O2Anime);
            }
            else if (explor.selected == "o2" && now_O2Anime == 2) {
                now_O2Anime = 3
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 200);
                this.handle_O2Page(now_O2Anime);
            }  else if (explor.selected == "co2" && now_Co2Anime == 1) {
                now_Co2Anime = 2
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 2000);
                this.handle_Co2Page(now_Co2Anime);
            }else if (explor.selected == "co2" && now_Co2Anime == 2) {
                now_Co2Anime = 3
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 200);
                this.handle_Co2Page(now_Co2Anime);
            } 
             else if (explor.selected == "water" && now_WaterAnime == 1) {
                now_WaterAnime = 2
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 2000);
                this.handle_WaterPage(now_WaterAnime);
            } else if (explor.selected == "water" && now_WaterAnime == 2) {
                now_WaterAnime = 3
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 200);
                this.handle_WaterPage(now_WaterAnime);
            }
            else if (explor.selected == "cholo" && now_CholoAnime == 1) {
                now_CholoAnime = 2
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 1000);
                this.handle_CholoPage(now_CholoAnime);
            }else if (explor.selected == "cholo" && now_CholoAnime == 2) {
                now_CholoAnime = 3
                setTimeout(() => {
                    this.explorNext_bg.tint = 0x758f6e;
                    this.explorNext_bg.eventMode = 'static';
                }, 200);
                this.handle_CholoPage(now_CholoAnime);
            }


        })
            .on('pointerover', () => {
                this.explorNext_bg.tint = 0xc9e265;
                this.explorNext_bg.scale = 1.05;

            })
            .on('pointerout', () => {
                this.explorNext_bg.tint = 0x758f6e;
                this.explorNext_bg.scale = 1;
            })

        this.selectAll.addChild(
            this.title,
            this.leaf01,
            this.leaf02,
            this.lime,
            this.plant,
            this.jar01,
            this.jar02,
            this.jar03,
            this.jar04,
            this.next,
            this.again,
        )
        this.selectAll.x = 100
        this.container.addChild(
            this.selectAll,
            this.explorNext_butt,
        )
        this.container.visible = false;


    }
    //探究動畫翻頁
    async handle_SunPage(key) {

        switch (key) {
            case 1:
                await playAnime(this.sun_1);
                break;
            case 2:
                await playAnime(this.sun_2);
                break;
            case 3:
                leafExper.container.visible = true;
                this.explorNext_butt.visible = false;
                this.container.visible = false;
                leafExper.on = true;
                leafExper.checkCholo()
                break;

            default:
                await playAnime(this.sun_1);
                break;
        }
    }
    async handle_O2Page(key) {

        switch (key) {
            case 1:
                await playAnime(this.o2_1);
                break;
            case 2:
                await playAnime(this.o2_2);
                break;
            case 3:
                leafExper.container.visible = true;
                this.explorNext_butt.visible = false;
                this.container.visible = false;
                leafExper.on = true;
                leafExper.checkCholo()
                break;

            default:
                await playAnime(this.o2_1);
                break;
        }
    }
    async handle_Co2Page(key) {

        switch (key) {
            case 1:
                await playAnime(this.co2_1);
                break;
            case 2:
                await playAnime(this.co2_2);
                break;
            case 3:
                leafExper.container.visible = true;
                this.explorNext_butt.visible = false;
                this.container.visible = false;
                leafExper.on = true;
                leafExper.checkCholo()
                break;

            default:
                await playAnime(this.co2_1);
                break;
        }
    }
    async handle_CholoPage(key) {

        switch (key) {
            case 1:
                await playAnime(this.cholo_1);
                break;
            case 2:
                await playAnime(this.cholo_2);
                break;
            case 3:
                leafExper.container.visible = true;
                this.explorNext_butt.visible = false;
                this.container.visible = false;
                leafExper.on = true;
                leafExper.checkCholo()
                break;

            default:
                await playAnime(this.cholo_1);
                break;
        }
    }
    async handle_WaterPage(key) {

        switch (key) {
            case 1:
                await playAnime(this.water_1);
                break;
            case 2:
                await playAnime(this.water_2);
                break;
            case 3:
                leafExper.container.visible = true;
                this.explorNext_butt.visible = false;
                this.container.visible = false;
                leafExper.on = true;
                leafExper.checkCholo()
                break;

            default:
                await playAnime(this.water_1);
                break;
        }
    }

    selectReset() {
        this.leaf01_selected = false
        this.leaf_bg.tint = 0xcccccc;

        this.leaf02_selected = false
        this.leaf02_bg.tint = 0xcccccc;

        this.lime_selected = false
        this.lime_bg.tint = 0xcccccc;

        this.plant_selected = false
        this.plant_bg.tint = 0xcccccc;

        this.jar01_selected = false
        this.jar01_bg.tint = 0xcccccc;

        this.jar02_selected = false
        this.jar02_bg.tint = 0xcccccc;

        this.jar03_selected = false
        this.jar03_bg.tint = 0xcccccc;

        this.jar04_selected = false
        this.jar04_bg.tint = 0xcccccc;

        this.again.visible = false;
        this.selectAll.visible = true;
        this.explorNext_butt.visible = false;

        leafExper.container.visible = false;

        this.title.x = 960

    }

    init() {

    }


}



// const explorSelect = new ExplorSelect;
export { ExplorSelect }