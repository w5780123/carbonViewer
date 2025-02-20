import { Application, Assets, Texture, Sprite, Container, Graphics, Text, TextStyle, Polygon } from './pixi.mjs';
import { AssetsLoader } from './assets.mjs';
import { LeafButt } from './leafButt.mjs';
import { anime, fontStyleB,progressText } from './global.mjs';
import { manager, explor, explorSelect, leafExper, explorGrow } from './manager.mjs';
import {
    videoBackToStart,
    playAnime
} from './func.mjs';


//初始化APP
let div = document.createElement("div");
div.classList.add('container');
document.body.appendChild(div);

const app = new Application();
await app.init({ background: '#d9f2ff', autoDensity: true })
app.renderer.resolution = window.devicePixelRatio;
app.renderer.events.resolution = window.devicePixelRatio;

div.appendChild(app.canvas);
app.canvas.addEventListener('contextmenu', (e) => { e.preventDefault(); });
app.canvas.classList.add('appView');

//建立UI、Map Container
const viewport = new Container();
const hitContainer = new Container();
const TitleContainer = new Container();
const experContainer = new Container();
const explorContainer = new Container();
const animeContainer = new Container();

app.stage.addChild(viewport);
viewport.addChild(
    animeContainer,
    experContainer,
    explorContainer,
    TitleContainer,
    hitContainer,
    progressText
);
//==============================
//  // 顯示進度
//  const progress = new Text
//  progress.text = ''
//  progress.position.set(50, 50); // 調整位置

//===============================

//資產讀取
const assetsLoader = new AssetsLoader();

await assetsLoader.loadAllTexture();
console.log("Start Main")
viewport.removeChild(progressText)

function onWindowResize() {
    const isPortrait = window.innerHeight > window.innerWidth;
    let vpScale = isPortrait
        ? Math.min(window.innerWidth / 1080, window.innerHeight / 1920)
        : Math.min(window.innerWidth / 1920, window.innerHeight / 1080);

    if (isPortrait) {
        app.renderer.resize(1080 * vpScale, 1920 * vpScale);
        viewport.rotation = Math.PI / 2;
        viewport.position.set(1080 * vpScale, 0); // 若有位移偏差，可適當微調
    } else {
        app.renderer.resize(1920 * vpScale, 1080 * vpScale);
        viewport.rotation = 0;
        viewport.position.set(0, 0);
    }

    viewport.scale.set(vpScale); // 確保縮放應用到 viewport
}
window.addEventListener("load", onWindowResize)
window.addEventListener("resize", onWindowResize)
onWindowResize();


manager.init()
//背景底圖
const bg = new Sprite(Texture.from('bg'));
// //====================================
//實驗動畫
const exper1 = new Texture.from('exper_01')
animeSetting(exper1);
const exper2 = new Texture.from('exper_02')
animeSetting(exper2);
const exper3 = new Texture.from('exper_03')
animeSetting(exper3);
const exper4 = new Texture.from('exper_04')
animeSetting(exper4);
const exper5 = new Texture.from('exper_05')
animeSetting(exper5);
const exper6 = new Texture.from('exper_06')
animeSetting(exper6);
const exper7 = new Texture.from('exper_07')
animeSetting(exper7);
const exper8 = new Texture.from('exper_08')
animeSetting(exper8);
const exper9 = new Texture.from('exper_09')
animeSetting(exper9);
const exper10 = new Texture.from('exper_10')
animeSetting(exper10);
const exper11 = new Texture.from('exper_11')
animeSetting(exper11);
const exper12 = new Texture.from('exper_12')
animeSetting(exper12);
const exper13 = new Texture.from('exper_13')
animeSetting(exper13);
exper13.source.resource.loop = true;
const exper14 = new Texture.from('exper_14')
animeSetting(exper14);
const exper15 = new Texture.from('exper_15')
animeSetting(exper15);
const exper16 = new Texture.from('exper_16')
animeSetting(exper16);
const exper17 = new Texture.from('exper_17')
animeSetting(exper17);
exper17.source.resource.loop = true;
const exper18 = new Texture.from('exper_18')
animeSetting(exper18);
const exper19 = new Texture.from('exper_19')
animeSetting(exper19);
exper19.source.resource.loop = true;
const exper20 = new Texture.from('exper_20')
animeSetting(exper20);
const exper21 = new Texture.from('exper_21')
animeSetting(exper21);
const exper22 = new Texture.from('exper_22')
animeSetting(exper22);

//=============================================
//葉子動畫
const leaf_in = new Texture.from('leaf_in');
animeSetting(leaf_in);
const airHole_back = new Texture.from('airHole_back');
animeSetting(airHole_back);
const airHole_in = new Texture.from('airHole_in');
animeSetting(airHole_in);
const corne_back = new Texture.from('corne_back');
animeSetting(corne_back);
const corne_in = new Texture.from('corne_in');
animeSetting(corne_in);
const downEpi_back = new Texture.from('downEpi_back');
animeSetting(downEpi_back);
const downEpi_in = new Texture.from('downEpi_in');
animeSetting(downEpi_in);
const Guard_back = new Texture.from('Guard_back');
animeSetting(Guard_back);
const Guard_in = new Texture.from('Guard_in');
animeSetting(Guard_in);
const mesophyll_back = new Texture.from('mesophyll_back');
animeSetting(mesophyll_back);
const mesophyll_in = new Texture.from('mesophyll_in');
animeSetting(mesophyll_in);
const upEpi_back = new Texture.from('upEpi_back');
animeSetting(upEpi_back);
const upEpi_in = new Texture.from('upEpi_in');
animeSetting(upEpi_in);
const vein_back = new Texture.from('vein_back');
animeSetting(vein_back);
const vein_in = new Texture.from('vein_in');
animeSetting(vein_in);
const cholo_in = new Texture.from('cholo_in');
animeSetting(cholo_in);
const cholo_back = new Texture.from('cholo_back');
animeSetting(cholo_back);
//=============================================
let nowExperAnime = 1
// const anime = new Sprite(exper1);
// console.log(exper1);

//自型
const fontStyleA = new TextStyle({
    fontSize: 50,
    // fontWeight: 'bold',
    fill: 0xffffff,
    // stroke: { color: '#755a8a', width: 5, join: 'round' },
    wordWrap: true,
    wordWrapWidth: 440,
});
//============================================================
//做實驗
//============================================================
//做實驗下一頁按鈕
const experNext_butt = new Container();
const experNext_bg = new Graphics();
experNext_bg.roundRect(-100, -38, 200, 76, 20)
experNext_bg.fill(0xffffff)
experNext_bg.stroke({ width: 5, color: 0x495a44 });
experNext_bg.tint = 0x758f6e;

const experNext_text = new Text({ resolution: 2 });
experNext_text.style = fontStyleA;
experNext_text.text = 'NEXT';
experNext_text.fontSize = 20;
experNext_text.anchor = 0.5;
experNext_butt.addChild(experNext_bg, experNext_text);
experNext_butt.x = 1775;
experNext_butt.y = 1000;

experNext_bg.eventMode = 'static';
experNext_bg.on('pointerdown', async () => {
    experNext_bg.tint = 0xf9ffe0;
    experNext_bg.scale = 1;
    TitleContainer.visible = false;
    experNext_bg.eventMode = '';
    // backToTitle_butt.visible = false;

    if (nowExperAnime > 22) {
        nowExperAnime = 1
    } else if (nowExperAnime <= 22 && nowExperAnime != 1 && nowExperAnime != 2 && nowExperAnime != 4 && nowExperAnime != 3 && nowExperAnime != 11 && nowExperAnime != 15 && nowExperAnime != 17 && nowExperAnime != 19 && nowExperAnime != 20) {
        nowExperAnime++;
        handleExperPage(nowExperAnime);
        // playAnime();
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 750);
    } else if (nowExperAnime == 1) {
        nowExperAnime = 2
        handleExperPage(nowExperAnime);
        // playAnime();
        experNext_text.text = '做實驗';
        seeLeaf_butt.visible = true;
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 750);
    } else if (nowExperAnime == 2) {
        nowExperAnime = 3
        handleExperPage(nowExperAnime);
        // playAnime();
        experNext_text.text = 'NEXT';
        seeLeaf_butt.visible = false;
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 750);
    } else if (nowExperAnime == 3) {
        nowExperAnime = 4
        handleExperPage(nowExperAnime);
        // playAnime();
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            material_all.visible = true;
            // backToTitle_butt.visible = true;
        }, 700);
    } else if (nowExperAnime == 4) {
        material_all.visible = false;
        exper4Reset();
        nowExperAnime = 5
        handleExperPage(nowExperAnime);
        // playAnime();
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 750);
    } else if (nowExperAnime == 11) {
        nowExperAnime = 12
        handleExperPage(nowExperAnime);
        // playAnime();

        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            nowExperAnime = 13
            handleExperPage(nowExperAnime);
            // playAnime();
        }, 1200);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 1550);
    } else if (nowExperAnime == 15) {
        nowExperAnime = 16
        handleExperPage(nowExperAnime);
        // playAnime();

        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            nowExperAnime = 17
            handleExperPage(nowExperAnime);
            // playAnime();
        }, 500);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 1550);
    } else if (nowExperAnime == 17) {
        nowExperAnime = 18
        handleExperPage(nowExperAnime);
        // playAnime();
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            nowExperAnime = 19
            handleExperPage(nowExperAnime);
            // playAnime();
        }, 4000);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 5000);
    } else if (nowExperAnime == 19) {
        nowExperAnime = 20
        handleExperPage(nowExperAnime);
        // playAnime();
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 3000);
    } else if (nowExperAnime == 20) {
        nowExperAnime = 21
        handleExperPage(nowExperAnime);
        // playAnime();
        setTimeout(() => {
            experNext_bg.tint = 0xb3b3b3;
        }, 200);
        setTimeout(() => {
            experNext_bg.tint = 0x758f6e;
            experNext_bg.eventMode = 'static';
            // backToTitle_butt.visible = true;
        }, 3000);
    }
})
    .on('pointerover', () => {
        experNext_bg.tint = 0xc9e265;
        experNext_bg.scale = 1.05;

    })
    .on('pointerout', () => {
        experNext_bg.tint = 0x758f6e;
        experNext_bg.scale = 1;
    })
//葉片按鈕===============================================
//看葉片下一頁按鈕
const seeLeaf_butt = new Container();
const seeLeaf_bg = new Graphics();
seeLeaf_bg.roundRect(-100, -38, 200, 76, 20)
seeLeaf_bg.fill(0xffffff)
seeLeaf_bg.stroke({ width: 5, color: 0x495a44 });
seeLeaf_bg.tint = 0x758f6e;

const seeLeaf_text = new Text({ resolution: 2 });
seeLeaf_text.style = fontStyleA;
seeLeaf_text.text = '看葉片';
seeLeaf_text.fontSize = 20;
seeLeaf_text.anchor = 0.5;

seeLeaf_butt.addChild(seeLeaf_bg, seeLeaf_text);
seeLeaf_butt.x = 1500;
seeLeaf_butt.y = 1000;
seeLeaf_butt.visible = false;

seeLeaf_bg.eventMode = 'static';
seeLeaf_bg.on('pointerdown', async () => {
    seeLeaf_bg.tint = 0xf9ffe0;
    seeLeaf_bg.scale = 1;
    seeLeaf_bg.eventMode = '';
    experNext_butt.visible = false;
    backToExper_butt.visible = true;
    // experReset();
    await playAnime(leaf_in);

    setTimeout(() => {
        seeLeaf_bg.tint = 0x758f6e;
        seeLeaf_bg.eventMode = 'static';
        seeLeaf_butt.visible = false;
    }, 200);
    setTimeout(() => {
        corne_butt.container.visible = true;
        upEpi_butt.container.visible = true;
        downEpi_butt.container.visible = true;
        vein_butt.container.visible = true;
        mesophyll_butt.container.visible = true;
        Guard_butt.container.visible = true;
        airHole_butt.container.visible = true;
        cholo_butt.container.visible = true;
    }, 500);
})
    .on('pointerover', () => {
        seeLeaf_bg.tint = 0xc9e265;
        seeLeaf_bg.scale = 1.05;
    })
    .on('pointerout', () => {
        seeLeaf_bg.tint = 0x758f6e;
        seeLeaf_bg.scale = 1;
    })



//葉片按鈕
const corne_butt = new LeafButt("角質層", corne_in, 1650, 325);
const upEpi_butt = new LeafButt("上表皮", upEpi_in, 1650, 475);
const downEpi_butt = new LeafButt("下表皮", downEpi_in, 1650, 600);
const vein_butt = new LeafButt("葉脈", vein_in, 1650, 825);
const mesophyll_butt = new LeafButt("葉肉", mesophyll_in, 275, 555);
const Guard_butt = new LeafButt("保衛細胞", Guard_in, 275, 760);
const airHole_butt = new LeafButt("氣孔", airHole_in, 275, 890);
const cholo_butt = new LeafButt("葉綠體", cholo_in, 275, 325);


//回到葉片按鈕
const backToLeaf_butt = new Container();
const backToLeaf_bg = new Graphics();
backToLeaf_bg.roundRect(-100, -38, 200, 76, 20)
backToLeaf_bg.fill(0xffffff)
backToLeaf_bg.stroke({ width: 5, color: 0x495a44 });
backToLeaf_bg.tint = 0x758f6e;

const backToLeaf_text = new Text({ resolution: 2 });
backToLeaf_text.style = fontStyleA;
backToLeaf_text.text = 'BACK';
backToLeaf_text.fontSize = 20;
backToLeaf_text.anchor = 0.5;

backToLeaf_butt.addChild(backToLeaf_bg, backToLeaf_text);
backToLeaf_butt.x = 1775;
backToLeaf_butt.y = 1000;
backToLeaf_butt.visible = false;

backToLeaf_butt.eventMode = 'static';
backToLeaf_butt.on('pointerdown', async () => {

    notInLeafAnime();
    if (anime.texture == corne_in) {
        await playAnime(corne_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    } else if (anime.texture == upEpi_in) {
        await playAnime(upEpi_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    } else if (anime.texture == downEpi_in) {
        await playAnime(downEpi_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    } else if (anime.texture == vein_in) {
        await playAnime(vein_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    } else if (anime.texture == mesophyll_in) {
        await playAnime(mesophyll_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    } else if (anime.texture == Guard_in) {
        await playAnime(Guard_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    } else if (anime.texture == airHole_in) {
        await playAnime(airHole_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    }else if (anime.texture == cholo_in) {
        await playAnime(cholo_back);
        setTimeout(() => {
            ShowleafButt()
        }, 500);
    }
})
    .on('pointerover', () => {
        backToLeaf_bg.tint = 0xc9e265;
        backToLeaf_bg.scale = 1.05;
    })
    .on('pointerout', () => {
        backToLeaf_bg.tint = 0x758f6e;
        backToLeaf_bg.scale = 1;
    })
//==============================================================
//回到標題按鈕
const backToTitle_butt = new Container();
const backToTitle_bg = new Graphics();
backToTitle_bg.roundRect(-100, -38, 200, 76, 20)
backToTitle_bg.fill(0xffffff)
backToTitle_bg.stroke({ width: 5, color: 0x495a44 });
backToTitle_bg.tint = 0x758f6e;

const backToTitle_text = new Text({ resolution: 2 });
backToTitle_text.style = fontStyleA;
backToTitle_text.text = 'TITLE';
backToTitle_text.fontSize = 20;
backToTitle_text.anchor = 0.5;

backToTitle_butt.addChild(backToTitle_bg, backToTitle_text);
backToTitle_butt.x = 150;
backToTitle_butt.y = 1000;
backToTitle_butt.visible = false;

backToTitle_bg.eventMode = 'static';
backToTitle_bg.on('pointerdown', () => {
    backToTitle_bg.tint = 0xf9ffe0;
    backToTitle_bg.scale = 1;
    backToTitle_butt.x = 150;
    backToTitle_butt.y = 1000;
    TitleContainer.visible = true;
    anime.texture = '';
    experContainer.visible = false;
    explorContainer.visible = false;
    explor.container.visible = false;
    explorSelect.container.visible = false;
    explorSelect.selectReset();
    leafExper.container.visible = false;
    leafExper.on = false;
    explorGrow.container.visible = false;
    explorGrow.on = false;
    explorGrow_reset()
    leafExperStep_reset();
    exper4Reset();
    material_all.visible = false;

    notInLeafAnime()

    corne_butt.container.visible = false;
    upEpi_butt.container.visible = false;
    downEpi_butt.container.visible = false;
    vein_butt.container.visible = false;
    mesophyll_butt.container.visible = false;
    Guard_butt.container.visible = false;
    airHole_butt.container.visible = false;
    cholo_butt.container.visible = false;

    // backToLeaf_butt.visible = false;
    seeLeaf_butt.visible = false;
    // backToExper_butt.visible=false;
    experNext_text.text = 'NEXT';


    backToTitle_bg.eventMode = '';
    setTimeout(() => {
        backToTitle_bg.tint = 0x758f6e;
        backToTitle_bg.eventMode = 'static';
        backToTitle_butt.visible = false;
    }, 200);
})
    .on('pointerover', () => {
        backToTitle_bg.tint = 0xc9e265;
        backToTitle_bg.scale = 1.05;

    })
    .on('pointerout', () => {
        backToTitle_bg.tint = 0x758f6e;
        backToTitle_bg.scale = 1;
    })
//===========================================================
//回到實驗按鈕
const backToExper_butt = new Container();
const backToExper_bg = new Graphics();
backToExper_bg.roundRect(-100, -38, 200, 76, 20)
backToExper_bg.fill(0xffffff)
backToExper_bg.stroke({ width: 5, color: 0x495a44 });
backToExper_bg.tint = 0x758f6e;

const backToExper_text = new Text({ resolution: 2 });
backToExper_text.style = fontStyleA;
backToExper_text.text = '回實驗';
backToExper_text.fontSize = 20;
backToExper_text.anchor = 0.5;

backToExper_butt.addChild(backToExper_bg, backToExper_text);
backToExper_butt.x = 375;
backToExper_butt.y = 1000;
backToExper_butt.visible = false;

backToExper_bg.eventMode = 'static';
backToExper_bg.on('pointerdown', () => {
    backToExper_bg.tint = 0xf9ffe0;
    backToExper_bg.scale = 1;
    backToExper_butt.x = 375;
    backToExper_butt.y = 1000;

    nowExperAnime = 2
    handleExperPage(nowExperAnime);
    // playAnime();
    experNext_text.text = '做實驗';
    seeLeaf_butt.visible = true;
    experNext_butt.visible = true;
    setTimeout(() => {
        experNext_bg.tint = 0xb3b3b3;
    }, 200);
    setTimeout(() => {
        experNext_bg.tint = 0x758f6e;
        experNext_bg.eventMode = 'static';
        // backToTitle_butt.visible = true;
    }, 750);

    exper4Reset();
    material_all.visible = false;
    notInLeafAnime()
    corne_butt.container.visible = false;
    upEpi_butt.container.visible = false;
    downEpi_butt.container.visible = false;
    vein_butt.container.visible = false;
    mesophyll_butt.container.visible = false;
    Guard_butt.container.visible = false;
    airHole_butt.container.visible = false;
    cholo_butt.container.visible = false;
    // backToLeaf_butt.visible = false;
    // seeLeaf_butt.visible = false;
    // backToExper_butt.visible=false;
    // experNext_text.text = 'NEXT';

    // backToTitle_bg.eventMode = '';
    setTimeout(() => {
        backToExper_bg.tint = 0x758f6e;
        backToExper_butt.visible = false;
        backToExper_bg.eventMode = 'static';
    }, 200);
})
    .on('pointerover', () => {
        backToExper_bg.tint = 0xc9e265;
        backToExper_bg.scale = 1.05;

    })
    .on('pointerout', () => {
        backToExper_bg.tint = 0x758f6e;
        backToExper_bg.scale = 1;
    })
//============================================================
//主畫面
//============================================================
TitleContainer.visible = true;
experContainer.visible = false;
explorContainer.visible = false;

//做實驗按鈕
const exper_butt = new Container();
const exper_bg = new Graphics();
exper_bg.roundRect(-200, -75, 400, 150, 20)
exper_bg.fill(0xffffff)
exper_bg.stroke({ width: 10, color: 0x495a44 });
exper_bg.tint = 0x758f6e;

const exper_text = new Text({ resolution: 2 });
exper_text.style = fontStyleA;
exper_text.text = '做實驗';
exper_text.anchor = 0.5;

exper_butt.addChild(exper_bg, exper_text,);
exper_butt.x = 960;
exper_butt.y = 350;

exper_bg.eventMode = 'static';
exper_bg.on('pointerdown', () => {
    exper_bg.tint = 0xf9ffe0;
    exper_bg.scale = 1;
    TitleContainer.visible = false;
    experContainer.visible = true;
    experNext_butt.visible = true;
    experNext_bg.tint = 0xb3b3b3;
    experNext_bg.eventMode = '';

    nowExperAnime = 1;
    handleExperPage(1)

    setTimeout(() => {
        exper_bg.tint = 0x758f6e;
    }, 200);

    setTimeout(() => {
        experNext_bg.tint = 0x758f6e;
        experNext_bg.eventMode = 'static';
        backToTitle_butt.visible = true;
    }, 2000);
})
    .on('pointerover', () => {
        exper_bg.tint = 0xc9e265;
        exper_bg.scale = 1.05;

    })
    .on('pointerout', () => {
        exper_bg.tint = 0x758f6e;
        exper_bg.scale = 1;
    })
//做探究按鈕
const explo_butt = new Container();
const explo_bg = new Graphics();
explo_bg.roundRect(-200, -75, 400, 150, 20)
explo_bg.fill(0xffffff)
explo_bg.stroke({ width: 10, color: 0x495a44 });
explo_bg.tint = 0x758f6e;

const explo_text = new Text({ resolution: 2 });
explo_text.style = fontStyleA;
explo_text.text = '做探究';
explo_text.anchor = 0.5;

explo_butt.addChild(explo_bg, explo_text,);
explo_butt.x = 960;
explo_butt.y = 750;

explo_bg.eventMode = 'static';
explo_bg.on('pointerdown', () => {
    explo_bg.tint = 0xf9ffe0;
    explo_bg.scale = 1;
    TitleContainer.visible = false;
    anime.texture = '';
    explorContainer.visible = true;
    explor.container.visible = true;
    backToTitle_butt.visible = true;

    setTimeout(() => {
        explo_bg.tint = 0x758f6e;
    }, 200);
})
    .on('pointerover', () => {
        explo_bg.tint = 0xc9e265;
        explo_bg.scale = 1.05;

    })
    .on('pointerout', () => {
        explo_bg.tint = 0x758f6e;
        explo_bg.scale = 1;
    })

//==========================================    
//實驗器材選擇
const material_all = new Container;
material_all.visible = false;
//100ml燒杯
const ml100_bg = new Graphics();
ml100_bg.roundRect(0, 0, 225, 265, 20)
ml100_bg.fill(0xffffff)
ml100_bg.tint = 0xcccccc;
let ml100_select = false;
ml100_bg.eventMode = 'static';
ml100_bg.on('pointerdown', () => {
    if (ml100_select == false) {
        ml100_select = true;
        ml100_bg.tint = 0xffefa7;
    } else if (ml100_select == true) {
        ml100_select = false;
        ml100_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (ml100_select == true) {
            ml100_bg.tint = 0xffefa7;
        } else if (ml100_select == false) {
            ml100_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (ml100_select == true) {
            ml100_bg.tint = 0xffefa7;
        } else if (ml100_select == false) {
            ml100_bg.tint = 0xcccccc;
        }
    })
const ml100 = new Sprite(Texture.from('100ml'))
ml100.x = 730
ml100.y = 20
ml100_bg.x = ml100.x
ml100_bg.y = ml100.y

//250ml燒杯
const ml250_bg = new Graphics();
ml250_bg.roundRect(0, 0, 225, 265, 20)
ml250_bg.fill(0xffffff)
ml250_bg.tint = 0xcccccc;
let ml250_select = false;
ml250_bg.eventMode = 'static';
ml250_bg.on('pointerdown', () => {
    if (ml250_select == false) {
        ml250_select = true;
        ml250_bg.tint = 0xffefa7;
    } else if (ml250_select == true) {
        ml250_select = false;
        ml250_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (ml250_select == true) {
            ml250_bg.tint = 0xffefa7;
        } else if (ml250_select == false) {
            ml250_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (ml250_select == true) {
            ml250_bg.tint = 0xffefa7;
        } else if (ml250_select == false) {
            ml250_bg.tint = 0xcccccc;
        }
    })
const ml250 = new Sprite(Texture.from('250ml'))
ml250.x = 960
ml250.y = 20
ml250_bg.x = ml250.x
ml250_bg.y = ml250.y

//1000ml燒杯
const ml1000_bg = new Graphics();
ml1000_bg.roundRect(0, 0, 225, 265, 20)
ml1000_bg.fill(0xffffff)
ml1000_bg.tint = 0xcccccc;
let ml1000_select = false;
ml1000_bg.eventMode = 'static';
ml1000_bg.on('pointerdown', () => {
    if (ml1000_select == false) {
        ml1000_select = true;
        ml1000_bg.tint = 0xffefa7;
    } else if (ml1000_select == true) {
        ml1000_select = false;
        ml1000_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (ml1000_select == true) {
            ml1000_bg.tint = 0xffefa7;
        } else if (ml1000_select == false) {
            ml1000_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (ml1000_select == true) {
            ml1000_bg.tint = 0xffefa7;
        } else if (ml1000_select == false) {
            ml1000_bg.tint = 0xcccccc;
        }
    })
const ml1000 = new Sprite(Texture.from('1000ml'))
ml1000.x = 1190
ml1000.y = 20
ml1000_bg.x = ml1000.x
ml1000_bg.y = ml1000.y

//酒精
const alcohol_bg = new Graphics();
alcohol_bg.roundRect(0, 0, 225, 265, 20)
alcohol_bg.fill(0xffffff)
alcohol_bg.tint = 0xcccccc;
let alcohol_select = false;
alcohol_bg.eventMode = 'static';
alcohol_bg.on('pointerdown', () => {
    if (alcohol_select == false) {
        alcohol_select = true;
        alcohol_bg.tint = 0xffefa7;
    } else if (alcohol_select == true) {
        alcohol_select = false;
        alcohol_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (alcohol_select == true) {
            alcohol_bg.tint = 0xffefa7;
        } else if (alcohol_select == false) {
            alcohol_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (alcohol_select == true) {
            alcohol_bg.tint = 0xffefa7;
        } else if (alcohol_select == false) {
            alcohol_bg.tint = 0xcccccc;
        }
    })
const alcohol = new Sprite(Texture.from('alcohol'))
alcohol.x = 1420
alcohol.y = 20
alcohol_bg.x = alcohol.x
alcohol_bg.y = alcohol.y

//酒精燈
const alcoholLamp_bg = new Graphics();
alcoholLamp_bg.roundRect(0, 0, 225, 265, 20)
alcoholLamp_bg.fill(0xffffff)
alcoholLamp_bg.tint = 0xcccccc;
let alcoholLamp_select = false;
alcoholLamp_bg.eventMode = 'static';
alcoholLamp_bg.on('pointerdown', () => {
    if (alcoholLamp_select == false) {
        alcoholLamp_select = true;
        alcoholLamp_bg.tint = 0xffefa7;
    } else if (alcoholLamp_select == true) {
        alcoholLamp_select = false;
        alcoholLamp_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (alcoholLamp_select == true) {
            alcoholLamp_bg.tint = 0xffefa7;
        } else if (alcoholLamp_select == false) {
            alcoholLamp_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (alcoholLamp_select == true) {
            alcoholLamp_bg.tint = 0xffefa7;
        } else if (alcoholLamp_select == false) {
            alcoholLamp_bg.tint = 0xcccccc;
        }
    })
const alcoholLamp = new Sprite(Texture.from('alcoholLamp'))
alcoholLamp.x = 1650
alcoholLamp.y = 20
alcoholLamp_bg.x = alcoholLamp.x
alcoholLamp_bg.y = alcoholLamp.y

//本氏液
const ben_bg = new Graphics();
ben_bg.roundRect(0, 0, 225, 265, 20)
ben_bg.fill(0xffffff)
ben_bg.tint = 0xcccccc;
let ben_select = false;
ben_bg.eventMode = 'static';
ben_bg.on('pointerdown', () => {
    if (ben_select == false) {
        ben_select = true;
        ben_bg.tint = 0xffefa7;
    } else if (ben_select == true) {
        ben_select = false;
        ben_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (ben_select == true) {
            ben_bg.tint = 0xffefa7;
        } else if (ben_select == false) {
            ben_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (ben_select == true) {
            ben_bg.tint = 0xffefa7;
        } else if (ben_select == false) {
            ben_bg.tint = 0xcccccc;
        }
    })
const ben = new Sprite(Texture.from('Ben'))
ben.x = 730
ben.y = 320
ben_bg.x = ben.x
ben_bg.y = ben.y

//陶瓷纖維網
const fabric_bg = new Graphics();
fabric_bg.roundRect(0, 0, 225, 265, 20)
fabric_bg.fill(0xffffff)
fabric_bg.tint = 0xcccccc;
let fabric_select = false;
fabric_bg.eventMode = 'static';
fabric_bg.on('pointerdown', () => {
    if (fabric_select == false) {
        fabric_select = true;
        fabric_bg.tint = 0xffefa7;
    } else if (fabric_select == true) {
        fabric_select = false;
        fabric_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (fabric_select == true) {
            fabric_bg.tint = 0xffefa7;
        } else if (fabric_select == false) {
            fabric_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (fabric_select == true) {
            fabric_bg.tint = 0xffefa7;
        } else if (fabric_select == false) {
            fabric_bg.tint = 0xcccccc;
        }
    })
const fabric = new Sprite(Texture.from('fabric'))
fabric.x = 960
fabric.y = 320
fabric_bg.x = fabric.x
fabric_bg.y = fabric.y

//葡萄糖
const glucose_bg = new Graphics();
glucose_bg.roundRect(0, 0, 225, 265, 20)
glucose_bg.fill(0xffffff)
glucose_bg.tint = 0xcccccc;
let glucose_select = false;
glucose_bg.eventMode = 'static';
glucose_bg.on('pointerdown', () => {
    if (glucose_select == false) {
        glucose_select = true;
        glucose_bg.tint = 0xffefa7;
    } else if (glucose_select == true) {
        glucose_select = false;
        glucose_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (glucose_select == true) {
            glucose_bg.tint = 0xffefa7;
        } else if (glucose_select == false) {
            glucose_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (glucose_select == true) {
            glucose_bg.tint = 0xffefa7;
        } else if (glucose_select == false) {
            glucose_bg.tint = 0xcccccc;
        }
    })
const glucose = new Sprite(Texture.from('glucose'))
glucose.x = 1190
glucose.y = 320
glucose_bg.x = glucose.x
glucose_bg.y = glucose.y

//碘液
const Iodine_bg = new Graphics();
Iodine_bg.roundRect(0, 0, 225, 265, 20)
Iodine_bg.fill(0xffffff)
Iodine_bg.tint = 0xcccccc;
let Iodine_select = false;
Iodine_bg.eventMode = 'static';
Iodine_bg.on('pointerdown', () => {
    if (Iodine_select == false) {
        Iodine_select = true;
        Iodine_bg.tint = 0xffefa7;
    } else if (Iodine_select == true) {
        Iodine_select = false;
        Iodine_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (Iodine_select == true) {
            Iodine_bg.tint = 0xffefa7;
        } else if (Iodine_select == false) {
            Iodine_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (Iodine_select == true) {
            Iodine_bg.tint = 0xffefa7;
        } else if (Iodine_select == false) {
            Iodine_bg.tint = 0xcccccc;
        }
    })
const Iodine = new Sprite(Texture.from('Iodine'))
Iodine.x = 1420
Iodine.y = 320
Iodine_bg.x = Iodine.x
Iodine_bg.y = Iodine.y

//培養皿
const petriDish_bg = new Graphics();
petriDish_bg.roundRect(0, 0, 225, 265, 20)
petriDish_bg.fill(0xffffff)
petriDish_bg.tint = 0xcccccc;
let petriDish_select = false;
petriDish_bg.eventMode = 'static';
petriDish_bg.on('pointerdown', () => {
    if (petriDish_select == false) {
        petriDish_select = true;
        petriDish_bg.tint = 0xffefa7;
    } else if (petriDish_select == true) {
        petriDish_select = false;
        petriDish_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (petriDish_select == true) {
            petriDish_bg.tint = 0xffefa7;
        } else if (petriDish_select == false) {
            petriDish_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (petriDish_select == true) {
            petriDish_bg.tint = 0xffefa7;
        } else if (petriDish_select == false) {
            petriDish_bg.tint = 0xcccccc;
        }
    })
const petriDish = new Sprite(Texture.from('petriDish'))
petriDish.x = 1650
petriDish.y = 320
petriDish_bg.x = petriDish.x
petriDish_bg.y = petriDish.y

//溫度計
const thermometer_bg = new Graphics();
thermometer_bg.roundRect(0, 0, 225, 265, 20)
thermometer_bg.fill(0xffffff)
thermometer_bg.tint = 0xcccccc;
let thermometer_select = false;
thermometer_bg.eventMode = 'static';
thermometer_bg.on('pointerdown', () => {
    if (thermometer_select == false) {
        thermometer_select = true;
        thermometer_bg.tint = 0xffefa7;
    } else if (thermometer_select == true) {
        thermometer_select = false;
        thermometer_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (thermometer_select == true) {
            thermometer_bg.tint = 0xffefa7;
        } else if (thermometer_select == false) {
            thermometer_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (thermometer_select == true) {
            thermometer_bg.tint = 0xffefa7;
        } else if (thermometer_select == false) {
            thermometer_bg.tint = 0xcccccc;
        }
    })
const thermometer = new Sprite(Texture.from('thermometer'))
thermometer.x = 730
thermometer.y = 620
thermometer_bg.x = thermometer.x
thermometer_bg.y = thermometer.y

//三腳架
const tripod_bg = new Graphics();
tripod_bg.roundRect(0, 0, 225, 265, 20)
tripod_bg.fill(0xffffff)
tripod_bg.tint = 0xcccccc;
let tripod_select = false;
tripod_bg.eventMode = 'static';
tripod_bg.on('pointerdown', () => {
    if (tripod_select == false) {
        tripod_select = true;
        tripod_bg.tint = 0xffefa7;
    } else if (tripod_select == true) {
        tripod_select = false;
        tripod_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (tripod_select == true) {
            tripod_bg.tint = 0xffefa7;
        } else if (tripod_select == false) {
            tripod_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (tripod_select == true) {
            tripod_bg.tint = 0xffefa7;
        } else if (tripod_select == false) {
            tripod_bg.tint = 0xcccccc;
        }
    })
const tripod = new Sprite(Texture.from('tripod'))
tripod.x = 960
tripod.y = 620
tripod_bg.x = tripod.x
tripod_bg.y = tripod.y

//試管
const tube_bg = new Graphics();
tube_bg.roundRect(0, 0, 225, 265, 20)
tube_bg.fill(0xffffff)
tube_bg.tint = 0xcccccc;
let tube_select = false;
tube_bg.eventMode = 'static';
tube_bg.on('pointerdown', () => {
    if (tube_select == false) {
        tube_select = true;
        tube_bg.tint = 0xffefa7;
    } else if (tube_select == true) {
        tube_select = false;
        tube_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (tube_select == true) {
            tube_bg.tint = 0xffefa7;
        } else if (tube_select == false) {
            tube_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (tube_select == true) {
            tube_bg.tint = 0xffefa7;
        } else if (tube_select == false) {
            tube_bg.tint = 0xcccccc;
        }
    })
const tube = new Sprite(Texture.from('tube'))
tube.x = 1190
tube.y = 620
tube_bg.x = tube.x
tube_bg.y = tube.y

//鑷子
const tweezers_bg = new Graphics();
tweezers_bg.roundRect(0, 0, 225, 265, 20)
tweezers_bg.fill(0xffffff)
tweezers_bg.tint = 0xcccccc;
let tweezers_select = false;
tweezers_bg.eventMode = 'static';
tweezers_bg.on('pointerdown', () => {
    if (tweezers_select == false) {
        tweezers_select = true;
        tweezers_bg.tint = 0xffefa7;
    } else if (tweezers_select == true) {
        tweezers_select = false;
        tweezers_bg.tint = 0xcccccc;
    }
    exper4Check();
})
    .on('pointerover', () => {
        if (tweezers_select == true) {
            tweezers_bg.tint = 0xffefa7;
        } else if (tweezers_select == false) {
            tweezers_bg.tint = 0xf9f9f9;
        }
    })
    .on('pointerout', () => {
        if (tweezers_select == true) {
            tweezers_bg.tint = 0xffefa7;
        } else if (tweezers_select == false) {
            tweezers_bg.tint = 0xcccccc;
        }
    })
const tweezers = new Sprite(Texture.from('tweezers'))
tweezers.x = 1420
tweezers.y = 620
tweezers_bg.x = tweezers.x
tweezers_bg.y = tweezers.y

//正確
const exper4Correct_text = new Text({ resolution: 2 });
exper4Correct_text.style = fontStyleB;
exper4Correct_text.text = '正確!';
exper4Correct_text.tint = 0xffefa7;
exper4Correct_text.x = 1650;
exper4Correct_text.y = 675;
exper4Correct_text.visible = false;

material_all.addChild(
    ml100_bg,
    ml100,
    ml250_bg,
    ml250,
    ml1000_bg,
    ml1000,
    alcohol_bg,
    alcohol,
    alcoholLamp_bg,
    alcoholLamp,
    ben_bg,
    ben,
    fabric_bg,
    fabric,
    glucose_bg,
    glucose,
    Iodine_bg,
    Iodine,
    petriDish_bg,
    petriDish,
    thermometer_bg,
    thermometer,
    tripod_bg,
    tripod,
    tube_bg,
    tube,
    tweezers_bg,
    tweezers,
    exper4Correct_text,
)
//===========================================================================
//做探究
//===========================================================================
// const explor = new Explor();
// explor.container.visible = true;
// const explorSelect = new ExplorSelect();
// explorSelect.container.visible = true;


//===========================================================================
//container
//===========================================================================

animeContainer.addChild(anime);
TitleContainer.addChild(
    bg,
    exper_butt,
    explo_butt,

)

experContainer.addChild(
    // anime,
    backToLeaf_butt,
    experNext_butt,
    seeLeaf_butt,
    material_all,
    corne_butt.container,
    upEpi_butt.container,
    downEpi_butt.container,
    vein_butt.container,
    mesophyll_butt.container,
    Guard_butt.container,
    airHole_butt.container,
    cholo_butt.container,
    // backToExper_butt,
);
explorContainer.addChild(
    explor.container,
    explorSelect.container,
    leafExper.container,
    explorGrow.container,
)
hitContainer.addChild(
    backToTitle_butt,
    backToExper_butt,
)


//======================================================
//function
//判斷實驗exper4器材是否選擇正確
function exper4Check() {
    if (
        ml100_select == true &&
        ml250_select == true &&
        ml1000_select == false &&
        glucose_select == false &&
        tube_select == false &&
        ben_select == false &&
        thermometer_select == false &&
        Iodine_select == true &&
        fabric_select == true &&
        alcohol_select == true &&
        tweezers_select == true &&
        petriDish_select == true &&
        tripod_select == true &&
        alcoholLamp_select == true
    ) {
        experNext_bg.tint = 0x758f6e;
        experNext_bg.eventMode = 'static';
        ml100_bg.eventMode = '';
        ml250_bg.eventMode = '';
        ml1000_bg.eventMode = '';
        alcohol_bg.eventMode = '';
        alcoholLamp_bg.eventMode = '';
        ben_bg.eventMode = '';
        fabric_bg.eventMode = '';
        glucose_bg.eventMode = '';
        Iodine_bg.eventMode = '';
        petriDish_bg.eventMode = '';
        thermometer_bg.eventMode = '';
        tripod_bg.eventMode = '';
        tube_bg.eventMode = '';
        tweezers_bg.eventMode = '';
        exper4Correct_text.visible = true;

    }
}
//復原實驗exper4器材的選擇
function exper4Reset() {
    ml100_select = false
    ml250_select = false
    Iodine_select = false
    fabric_select = false
    alcohol_select = false
    tweezers_select = false
    petriDish_select = false
    tripod_select = false
    alcoholLamp_select = false

    ml100_bg.eventMode = 'static';
    ml250_bg.eventMode = 'static';
    ml1000_bg.eventMode = 'static';
    alcohol_bg.eventMode = 'static';
    alcoholLamp_bg.eventMode = 'static';
    ben_bg.eventMode = 'static';
    fabric_bg.eventMode = 'static';
    glucose_bg.eventMode = 'static';
    Iodine_bg.eventMode = 'static';
    petriDish_bg.eventMode = 'static';
    thermometer_bg.eventMode = 'static';
    tripod_bg.eventMode = 'static';
    tube_bg.eventMode = 'static';
    tweezers_bg.eventMode = 'static';

    ml100_bg.tint = 0xcccccc;
    ml250_bg.tint = 0xcccccc;
    ml1000_bg.tint = 0xcccccc;
    alcohol_bg.tint = 0xcccccc;
    alcoholLamp_bg.tint = 0xcccccc;
    ben_bg.tint = 0xcccccc;
    fabric_bg.tint = 0xcccccc;
    glucose_bg.tint = 0xcccccc;
    Iodine_bg.tint = 0xcccccc;
    petriDish_bg.tint = 0xcccccc;
    thermometer_bg.tint = 0xcccccc;
    tripod_bg.tint = 0xcccccc;
    tube_bg.tint = 0xcccccc;
    tweezers_bg.tint = 0xcccccc;

    exper4Correct_text.visible = false;
}

//載入動畫素材設定
function animeSetting(animeName) {
    animeName.source.resource.autoplay = false;
    animeName.source.autoPlay = false;
    animeName.source.options.autoPlay = false;
    animeName.source.resource.currentTime = 0;
    animeName.source.resource.pause();
}
// //從頭撥放畫
// function playAnime() {
//     anime.texture.source.resource.currentTime = 0;
//     anime.texture.source.resource.play();
// }

//實驗動畫翻頁
async function handleExperPage(key) {
    // anime.texture.source.resource.currentTime = 0;
    // anime.texture.source.resource.play();
    switch (key) {
        case 1:
            await playAnime(exper1);
            break;
        case 2:
            await playAnime(exper2);
            break;
        case 3:
            await playAnime(exper3);
            break;
        case 4:
            await playAnime(exper4);
            break;
        case 5:
            await playAnime(exper5);
            break;
        case 6:
            await playAnime(exper6);
            break;
        case 7:
            await playAnime(exper7);
            break;
        case 8:
            await playAnime(exper8);
            break;
        case 9:
            await playAnime(exper9);
            break;
        case 10:
            await playAnime(exper10);
            break;
        case 11:
            await playAnime(exper11);
            break;
        case 12:
            await playAnime(exper12);
            break;
        case 13:
            await playAnime(exper13);
            break;
        case 14:
            await playAnime(exper14);
            break;
        case 15:
            await playAnime(exper15);
            break;
        case 16:
            await playAnime(exper16);
            break;
        case 17:
            await playAnime(exper17);
            break;
        case 18:
            await playAnime(exper18);
            break;
        case 19:
            await playAnime(exper19);
            break;
        case 20:
            await playAnime(exper20);
            break;
        case 21:
            await playAnime(exper21);
            break;
        case 22:
            await playAnime(exper22);
            experNext_butt.visible = false;
            backToTitle_butt.visible = true;
            backToTitle_butt.x = 1775;
            backToTitle_butt.y = 1000;
            backToTitle_bg.eventMode = '';
            backToTitle_bg.tint = 0xb3b3b3;
            setTimeout(() => {
                backToTitle_bg.tint = 0x758f6e;
                backToTitle_bg.eventMode = 'static';
            }, 3000);
            experReset();
            break;
        default:
            await playAnime(exper1);
            break;
    }
}
//實驗動畫恢復初始設定
function experReset() {
    animeSetting(exper1);
    animeSetting(exper2);
    animeSetting(exper3);
    animeSetting(exper4);
    animeSetting(exper5);
    animeSetting(exper6);
    animeSetting(exper7);
    animeSetting(exper8);
    animeSetting(exper9);
    animeSetting(exper10);
    animeSetting(exper11);
    animeSetting(exper12);
    animeSetting(exper13);
    animeSetting(exper14);
    animeSetting(exper15);
    animeSetting(exper16);
    animeSetting(exper17);
    animeSetting(exper18);
    animeSetting(exper19);
    animeSetting(exper20);
    animeSetting(exper21);
    animeSetting(exper22);
}


//葉子動畫恢復初始設定
function leafReset() {
    animeSetting(airHole_back);
    animeSetting(airHole_in);
    animeSetting(corne_back);
    animeSetting(corne_in);
    animeSetting(downEpi_back);
    animeSetting(downEpi_in);
    animeSetting(Guard_back);
    animeSetting(Guard_in);
    animeSetting(leaf_in);
    animeSetting(mesophyll_back);
    animeSetting(mesophyll_in);
    animeSetting(upEpi_back);
    animeSetting(upEpi_in);
    animeSetting(vein_back);
    animeSetting(vein_in);
    animeSetting(cholo_in);
    animeSetting(cholo_back);
}
//葉子按鈕恢復顯示
function ShowleafButt() {
    airHole_butt.container.visible = true;
    corne_butt.container.visible = true;
    downEpi_butt.container.visible = true;
    Guard_butt.container.visible = true;
    mesophyll_butt.container.visible = true;
    upEpi_butt.container.visible = true;
    vein_butt.container.visible = true;
    cholo_butt.container.visible = true;
}
//不在葉子動畫中
function notInLeafAnime() {
    airHole_butt.inLeafAnime = false;
    corne_butt.inLeafAnime = false;
    downEpi_butt.inLeafAnime = false;
    Guard_butt.inLeafAnime = false;
    mesophyll_butt.inLeafAnime = false;
    upEpi_butt.inLeafAnime = false;
    vein_butt.inLeafAnime = false;
    cholo_butt.inLeafAnime = false;
}



//=========================
let dragTarget = null;


// leafExper.dragArea.eventMode = 'static';
// leafExper.dragArea.hitArea = leafExper.dragArea;
leafExper.dragArea.on('pointerup', onDragEnd);
leafExper.dragArea.on('pointerupoutside', onDragEnd);

explorGrow.dragArea.on('pointerup', onDragEnd);
explorGrow.dragArea.on('pointerupoutside', onDragEnd);

function onDragMove(event) {
    if (dragTarget) {
        dragTarget.parent.toLocal(event.global, null, dragTarget.position);
    }
}

function onDragStart() {
    // Store a reference to the data
    // * The reason for this is because of multitouch *
    // * We want to track the movement of this particular touch *
    this.alpha = 0.5;
    dragTarget = this;
    leafExper.dragArea.eventMode = 'static';
    leafExper.dragArea.on('pointermove', onDragMove);
    
    explorGrow.dragArea.eventMode = 'static';
    explorGrow.dragArea.on('pointermove', onDragMove);
}

function onDragEnd() {
    if (dragTarget) {

        console.log(dragTarget);
        leafExper.dragArea.eventMode = 'passive';
        leafExper.dragArea.off('pointermove', onDragMove);

        explorGrow.dragArea.eventMode = 'passive';
        explorGrow.dragArea.off('pointermove', onDragMove);
        if(explorGrow.on == true){
            if(dragTarget.x>1250&&dragTarget.x<1900&&dragTarget.y>200&&dragTarget.y<900){
                if(dragTarget == explorGrow.sun){
                    dragTarget.x = explorGrow.sunPos[0]
                    dragTarget.y = explorGrow.sunPos[1]
                    explorGrow.sun.eventMode = ''
                    explorGrow.plant.scale= explorGrow.plantScale+=0.15
                }else if(dragTarget == explorGrow.o2){
                    dragTarget.x = explorGrow.o2Pos[0]
                    dragTarget.y = explorGrow.o2Pos[1]
                    explorGrow.o2.eventMode = ''
                    explorGrow.plant.scale= explorGrow.plantScale+=0
                }else if(dragTarget == explorGrow.co2){
                    dragTarget.x = explorGrow.co2Pos[0]
                    dragTarget.y = explorGrow.co2Pos[1]
                    explorGrow.co2.eventMode = ''
                    // explorGrow.plant.scale+=0.2;
                }else if(dragTarget == explorGrow.water){
                    dragTarget.x = explorGrow.waterPos[0]
                    dragTarget.y = explorGrow.waterPos[1]
                    explorGrow.water.eventMode = ''
                    explorGrow.plant.scale= explorGrow.plantScale+=0.15
                }else if(dragTarget == explorGrow.cholo){
                    dragTarget.x = explorGrow.choloPos[0]
                    dragTarget.y = explorGrow.choloPos[1]
                    explorGrow.cholo.eventMode = ''
                    explorGrow.plant.scale= explorGrow.plantScale+=0.15
                }
                dragTarget.alpha = 0.3;
                console.log(explorGrow.plant.scale)
            }else{
                if(dragTarget == explorGrow.sun){
                    dragTarget.x = explorGrow.sunPos[0]
                    dragTarget.y = explorGrow.sunPos[1]
                }else if(dragTarget == explorGrow.o2){
                    dragTarget.x = explorGrow.o2Pos[0]
                    dragTarget.y = explorGrow.o2Pos[1]
                }else if(dragTarget == explorGrow.co2){
                    dragTarget.x = explorGrow.co2Pos[0]
                    dragTarget.y = explorGrow.co2Pos[1]
                }else if(dragTarget == explorGrow.water){
                    dragTarget.x = explorGrow.waterPos[0]
                    dragTarget.y = explorGrow.waterPos[1]
                }else if(dragTarget == explorGrow.cholo){
                    dragTarget.x = explorGrow.choloPos[0]
                    dragTarget.y = explorGrow.choloPos[1]
                }
                dragTarget.alpha = 1;
            }
            

        }
        if (leafExper.on == true) {
            if (dragTarget == leafExper.step1_item) {
                // if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 150 && dragTarget.y < 350) {
                //     //判斷slot1
                //     if (leafExper.slot_1_now == "step2") {
                //         step2_item_Pos_reset()
                //         //
                //         if (leafExper.slot_2_now == "step1" || leafExper.slot_3_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 250
                //             leafExper.slot_1_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_1_now == "step3") {
                //         step3_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_2_now == "step1" || leafExper.slot_3_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 250
                //             leafExper.slot_1_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_1_now == "step4") {
                //         step2_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_2_now == "step1" || leafExper.slot_3_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 250
                //             leafExper.slot_1_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_1_now == "") {
                //         dragTarget.x = 500
                //         dragTarget.y = 250
                //         leafExper.slot_1_now = "step1"
                //         leafExper.checkCorrect();
                //     }
                // } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 360 && dragTarget.y < 560) {
                //     //判斷slot2
                //     // dragTarget.x = 500
                //     // dragTarget.y = 460
                //     // leafExper.slot_2_now = "step1"
                //     // leafExper.checkCorrect();
                //     if (leafExper.slot_2_now == "step2") {
                //         step2_item_Pos_reset()
                //         //
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_3_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 460
                //             leafExper.slot_2_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_2_now == "step3") {
                //         step3_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_3_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 460
                //             leafExper.slot_2_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_2_now == "step4") {
                //         step2_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_3_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 460
                //             leafExper.slot_2_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_2_now == "") {
                //         dragTarget.x = 500
                //         dragTarget.y = 460
                //         leafExper.slot_2_now = "step1"
                //         leafExper.checkCorrect();
                //     }
                // } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 570 && dragTarget.y < 770) {
                //     //判斷slot3
                //     // dragTarget.x = 500
                //     // dragTarget.y = 670
                //     // leafExper.slot_3_now = "step1"
                //     // leafExper.checkCorrect();
                //     if (leafExper.slot_3_now == "step2") {
                //         step2_item_Pos_reset()
                //         //
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_2_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 670
                //             leafExper.slot_3_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_3_now == "step3") {
                //         step3_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_2_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 670
                //             leafExper.slot_3_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_3_now == "step4") {
                //         step2_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_2_now == "step1" || leafExper.slot_4_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 670
                //             leafExper.slot_3_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_3_now == "") {
                //         dragTarget.x = 500
                //         dragTarget.y = 670
                //         leafExper.slot_3_now = "step1"
                //         leafExper.checkCorrect();
                //     }
                // } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 780 && dragTarget.y < 980) {
                //     //判斷slot4
                //     // dragTarget.x = 500
                //     // dragTarget.y = 880
                //     // leafExper.slot_4_now = "step1"
                //     // leafExper.checkCorrect();
                //     if (leafExper.slot_4_now == "step2") {
                //         step2_item_Pos_reset()
                //         //
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_2_now == "step1" || leafExper.slot_3_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 880
                //             leafExper.slot_4_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_4_now == "step3") {
                //         step3_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_2_now == "step" || leafExper.slot_3_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 880
                //             leafExper.slot_4_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_4_now == "step4") {
                //         step2_item_Pos_reset()
                //         //如果其他slot是當前拖動物體的話,物體移動至目標
                //         if (leafExper.slot_1_now == "step1" || leafExper.slot_2_now == "step1" || leafExper.slot_3_now == "step1") {
                //             dragTarget.x = 500
                //             dragTarget.y = 880
                //             leafExper.slot_4_now = "step1"
                //             leafExper.checkCorrect();
                //         }
                //     } else if (leafExper.slot_4_now == "") {
                //         dragTarget.x = 500
                //         dragTarget.y = 880
                //         leafExper.slot_4_now = "step1"
                //         leafExper.checkCorrect();
                //     }
                // }
                // else {
                //     //歸位
                //     step1_item_Pos_reset()
                // }
                if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 150 && dragTarget.y < 350) {
                    //判斷slot1
                    dragTarget.x = 500
                    dragTarget.y = 250
                    leafExper.slot_1_now = "step1"
                    leafExper.step1_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 360 && dragTarget.y < 560) {
                    //判斷slot2
                    dragTarget.x = 500
                    dragTarget.y = 460
                    leafExper.slot_2_now = "step1"
                    leafExper.step1_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 570 && dragTarget.y < 770) {
                    //判斷slot3
                    dragTarget.x = 500
                    dragTarget.y = 670
                    leafExper.slot_3_now = "step1"
                    leafExper.step1_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 780 && dragTarget.y < 980) {
                    //判斷slot4
                    dragTarget.x = 500
                    dragTarget.y = 880
                    leafExper.slot_4_now = "step1"
                    leafExper.step1_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                }
                else {
                    //歸位
                    step1_item_Pos_reset()
                }
                // leafStepCheck("step1")
            } else if (dragTarget == leafExper.step2_item) {
                if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 150 && dragTarget.y < 350) {
                    //判斷slot1
                    dragTarget.x = 500
                    dragTarget.y = 250
                    leafExper.slot_1_now = "step2"
                    leafExper.step2_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 360 && dragTarget.y < 560) {
                    //判斷slot2
                    dragTarget.x = 500
                    dragTarget.y = 460
                    leafExper.slot_2_now = "step2"
                    leafExper.step2_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 570 && dragTarget.y < 770) {
                    //判斷slot3
                    dragTarget.x = 500
                    dragTarget.y = 670
                    leafExper.slot_3_now = "step2"
                    leafExper.step2_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 780 && dragTarget.y < 980) {
                    //判斷slot4
                    dragTarget.x = 500
                    dragTarget.y = 880
                    leafExper.slot_4_now = "step2"
                    leafExper.step2_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                }
                else {
                    //歸位
                    step2_item_Pos_reset()
                }
                // leafStepCheck("step2")
            } else if (dragTarget == leafExper.step3_item) {
                if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 150 && dragTarget.y < 350) {
                    //判斷slot1
                    dragTarget.x = 500
                    dragTarget.y = 250
                    leafExper.slot_1_now = "step3"
                    leafExper.step3_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 360 && dragTarget.y < 560) {
                    //判斷slot2
                    dragTarget.x = 500
                    dragTarget.y = 460
                    leafExper.slot_2_now = "step3"
                    leafExper.step3_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 570 && dragTarget.y < 770) {
                    //判斷slot3
                    dragTarget.x = 500
                    dragTarget.y = 670
                    leafExper.slot_3_now = "step3"
                    leafExper.step3_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 780 && dragTarget.y < 980) {
                    //判斷slot4
                    dragTarget.x = 500
                    dragTarget.y = 880
                    leafExper.slot_4_now = "step3"
                    leafExper.step3_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                }
                else {
                    //歸位
                    step3_item_Pos_reset()
                }
                // leafStepCheck("step3")
            } else if (dragTarget == leafExper.step4_item) {
                if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 150 && dragTarget.y < 350) {
                    //判斷slot1
                    dragTarget.x = 500
                    dragTarget.y = 250
                    leafExper.slot_1_now = "step4"
                    leafExper.step4_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 360 && dragTarget.y < 560) {
                    //判斷slot2
                    dragTarget.x = 500
                    dragTarget.y = 460
                    leafExper.slot_2_now = "step4"
                    leafExper.step4_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 570 && dragTarget.y < 770) {
                    //判斷slot3
                    dragTarget.x = 500
                    dragTarget.y = 670
                    leafExper.slot_3_now = "step4"
                    leafExper.step4_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 780 && dragTarget.y < 980) {
                    //判斷slot4
                    dragTarget.x = 500
                    dragTarget.y = 880
                    leafExper.slot_4_now = "step4"
                    leafExper.step4_item.eventMode = '';
                    leafExper_itemOn()
                    leafExper.checkCorrect();
                }
                else {
                    //歸位
                    step4_item_Pos_reset()
                }
                // leafStepCheck("step4")
            }
            console.log(
                [leafExper.slot_1_now, leafExper.slot_2_now, leafExper.slot_3_now, leafExper.slot_4_now,]
            )
            dragTarget.alpha = 1;
        }
        // dragTarget.alpha = 1;
        dragTarget = null;
    }
}
//======================================================

leafExper.step1_item.eventMode = 'static';
leafExper.step1_item.cursor = 'pointer';
leafExper.step1_item.on('pointerdown', onDragStart, leafExper.step1_item);

leafExper.step2_item.eventMode = 'static';
leafExper.step2_item.cursor = 'pointer';
leafExper.step2_item.on('pointerdown', onDragStart, leafExper.step2_item);

leafExper.step3_item.eventMode = 'static';
leafExper.step3_item.cursor = 'pointer';
leafExper.step3_item.on('pointerdown', onDragStart, leafExper.step3_item);

leafExper.step4_item.eventMode = 'static';
leafExper.step4_item.cursor = 'pointer';
leafExper.step4_item.on('pointerdown', onDragStart, leafExper.step4_item);

explorGrow.sun.eventMode = 'static';
explorGrow.sun.cursor = 'pointer';
explorGrow.sun.on('pointerdown', onDragStart, explorGrow.sun);

explorGrow.o2.eventMode = 'static';
explorGrow.o2.cursor = 'pointer';
explorGrow.o2.on('pointerdown', onDragStart, explorGrow.o2);

explorGrow.co2.eventMode = 'static';
explorGrow.co2.cursor = 'pointer';
explorGrow.co2.on('pointerdown', onDragStart, explorGrow.co2);

explorGrow.water.eventMode = 'static';
explorGrow.water.cursor = 'pointer';
explorGrow.water.on('pointerdown', onDragStart, explorGrow.water);

explorGrow.cholo.eventMode = 'static';
explorGrow.cholo.cursor = 'pointer';
explorGrow.cholo.on('pointerdown', onDragStart, explorGrow.cholo);

explorGrow.reset_butt.eventMode = 'static';
explorGrow.reset_butt.on('pointerdown', async () => {
    explorGrow_reset()
    explorGrow.reset_butt.scale = 1.85;
    setTimeout(() => {
        explorGrow.reset_butt.tint = 0xffffff;
        explorGrow.reset_butt.scale = 2;
    }, 150);

})
    .on('pointerover', () => {
        explorGrow.reset_butt.tint = 0xeffff6;
        explorGrow.reset_butt.scale = 2.1;

    })
    .on('pointerout', () => {
        explorGrow.reset_butt.tint = 0xffffff;
        explorGrow.reset_butt.scale = 2;
    })


leafExper.reset_butt.eventMode = 'static';
leafExper.reset_butt.on('pointerdown', async () => {
    step1_item_Pos_reset()
    step2_item_Pos_reset()
    step3_item_Pos_reset()
    step4_item_Pos_reset()
    leafExper_itemReset()
    leafExper.reset_butt.scale = 1.95;
    setTimeout(() => {
        leafExper.reset_butt.tint = 0xffffff;
        leafExper.reset_butt.scale = 2;
    }, 150);

})
    .on('pointerover', () => {
        leafExper.reset_butt.tint = 0xeffff6;
        leafExper.reset_butt.scale = 2.1;

    })
    .on('pointerout', () => {
        leafExper.reset_butt.tint = 0xffffff;
        leafExper.reset_butt.scale = 2;
    })

function explorGrow_reset(){
explorGrow.sun.eventMode = 'static';
explorGrow.sun.alpha = 1;
explorGrow.o2.eventMode = 'static';
explorGrow.o2.alpha = 1;
explorGrow.co2.eventMode = 'static';
explorGrow.co2.alpha = 1;
explorGrow.water.eventMode = 'static';
explorGrow.water.alpha = 1;
explorGrow.cholo.eventMode = 'static';
explorGrow.cholo.alpha = 1;
explorGrow.plantScale = 0.53
explorGrow.plant.scale = 0.53

}

function step1_item_Pos_reset() {
    leafExper.step1_item.x = leafExper.step1_itemPos[0]
    leafExper.step1_item.y = leafExper.step1_itemPos[1]
}

function step2_item_Pos_reset() {
    leafExper.step2_item.x = leafExper.step2_itemPos[0]
    leafExper.step2_item.y = leafExper.step2_itemPos[1]
}
function step3_item_Pos_reset() {
    leafExper.step3_item.x = leafExper.step3_itemPos[0]
    leafExper.step3_item.y = leafExper.step3_itemPos[1]
}
function step4_item_Pos_reset() {
    leafExper.step4_item.x = leafExper.step4_itemPos[0]
    leafExper.step4_item.y = leafExper.step4_itemPos[1]
}
function leafExperStep_reset() {
    step1_item_Pos_reset()
    step2_item_Pos_reset()
    step3_item_Pos_reset()
    step4_item_Pos_reset()
    leafExper.slot_1_now = ""
    leafExper.slot_2_now = ""
    leafExper.slot_3_now = ""
    leafExper.slot_4_now = ""
    leafExper.step1_item.eventMode = 'static';
    leafExper.step2_item.eventMode = 'static';
    leafExper.step3_item.eventMode = 'static';
    leafExper.step4_item.eventMode = 'static';
    leafExper.correct.visible = false;
    leafExper.wrong.visible = false;
    leafExper.reset_butt.visible = true;
}
function leafExper_itemOn(){
    if(explor.selected=="cholo"){
        if(dragTarget==leafExper.step1_item){
            leafExper.step1_item.texture = leafExper.step1_cholo_on
        }else if(dragTarget==leafExper.step2_item){
            leafExper.step2_item.texture = leafExper.step2_cholo_on
        }else if(dragTarget==leafExper.step3_item){
            leafExper.step3_item.texture = leafExper.step3_cholo_on
        }else if(dragTarget==leafExper.step4_item){
            leafExper.step4_item.texture = leafExper.step4_cholo_on
        }
    }else{
        if(dragTarget==leafExper.step1_item){
            leafExper.step1_item.texture = leafExper.step1_on
        }else if(dragTarget==leafExper.step2_item){
            leafExper.step2_item.texture = leafExper.step2_on
        }else if(dragTarget==leafExper.step3_item){
            leafExper.step3_item.texture = leafExper.step3_on
        }else if(dragTarget==leafExper.step4_item){
            leafExper.step4_item.texture = leafExper.step4_on
        }
    }
}
function leafExper_itemReset(){
    if(explor.selected=="cholo"){
        leafExper.step1_item.texture = leafExper.step1_cholo
        leafExper.step2_item.texture = leafExper.step2_cholo
        leafExper.step3_item.texture = leafExper.step3_cholo
        leafExper.step4_item.texture = leafExper.step4_cholo
    }else{
        leafExper.step1_item.texture = leafExper.step1
        leafExper.step2_item.texture = leafExper.step2
        leafExper.step3_item.texture = leafExper.step3
        leafExper.step4_item.texture = leafExper.step4
    }
    leafExper.wrong.visible = false;
    leafExper.slot_1_now = ""
    leafExper.slot_2_now = ""
    leafExper.slot_3_now = ""
    leafExper.slot_4_now = ""
    leafExper.step1_item.eventMode = 'static';
    leafExper.step2_item.eventMode = 'static';
    leafExper.step3_item.eventMode = 'static';
    leafExper.step4_item.eventMode = 'static';
}



//判斷選項是否重複
function leafCheck_slot1(stepItem) {
    if (leafExper.slot_2_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 250
        leafExper.slot_2_now = ""
        leafExper.slot_1_now = stepItem
    } else if (leafExper.slot_3_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 250
        leafExper.slot_3_now = ""
        leafExper.slot_1_now = stepItem
    } else if (leafExper.slot_4_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 250
        leafExper.slot_4_now = ""
        leafExper.slot_1_now = stepItem
    } else {
        dragTarget.x = 500
        dragTarget.y = 250
        leafExper.slot_1_now = stepItem
    }
}
function leafCheck_slot2(stepItem) {
    if (leafExper.slot_1_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 460
        leafExper.slot_1_now = ""
        leafExper.slot_2_now = stepItem
    } else if (leafExper.slot_3_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 460
        leafExper.slot_3_now = ""
        leafExper.slot_2_now = stepItem
    } else if (leafExper.slot_4_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 460
        leafExper.slot_4_now = ""
        leafExper.slot_2_now = stepItem
    } else {
        dragTarget.x = 500
        dragTarget.y = 460
        leafExper.slot_2_now = stepItem
    }
}
function leafCheck_slot3(stepItem) {
    if (leafExper.slot_1_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 670
        leafExper.slot_1_now = ""
        leafExper.slot_3_now = stepItem
    } else if (leafExper.slot_2_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 670
        leafExper.slot_2_now = ""
        leafExper.slot_3_now = stepItem
    } else if (leafExper.slot_4_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 670
        leafExper.slot_4_now = ""
        leafExper.slot_3_now = stepItem
    } else {
        dragTarget.x = 500
        dragTarget.y = 670
        leafExper.slot_3_now = stepItem
    }
}
function leafCheck_slot4(stepItem) {
    if (leafExper.slot_1_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 880
        leafExper.slot_1_now = ""
        leafExper.slot_4_now = stepItem
    } else if (leafExper.slot_2_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 880
        leafExper.slot_2_now = ""
        leafExper.slot_4_now = stepItem
    } else if (leafExper.slot_3_now == stepItem) {
        dragTarget.x = 500
        dragTarget.y = 880
        leafExper.slot_3_now = ""
        leafExper.slot_4_now = stepItem
    } else {
        dragTarget.x = 500
        dragTarget.y = 888
        leafExper.slot_4_now = stepItem
    }
}

function leafStepCheck(stepItem) {
    //判斷slot1
    if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 150 && dragTarget.y < 350) {
        if (leafExper.slot_1_now == "step2") {
            step2_item_Pos_reset()
            leafCheck_slot1(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_1_now == "step3") {
            step3_item_Pos_reset()
            leafCheck_slot1(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_1_now == "step4") {
            step4_item_Pos_reset()
            leafCheck_slot1(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_1_now == "step1") {
            step1_item_Pos_reset()
            leafCheck_slot1(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_1_now == "") {
            dragTarget.x = 500
            dragTarget.y = 250
            leafExper.slot_1_now = stepItem
            leafExper.checkCorrect();
        } else {
            dragTarget.x = 500
            dragTarget.y = 250
            leafExper.slot_1_now = stepItem
            leafExper.checkCorrect();
        }
    } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 360 && dragTarget.y < 560) {
        //判斷slot2
        if (leafExper.slot_2_now == "step2") {
            step2_item_Pos_reset()
            leafCheck_slot2(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_2_now == "step3") {
            step3_item_Pos_reset()
            leafCheck_slot2(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_2_now == "step4") {
            step4_item_Pos_reset()
            leafCheck_slot2(stepItem)
            leafExper.checkCorrect();

        } else if (leafExper.slot_2_now == "step1") {
            step1_item_Pos_reset()
            leafCheck_slot2(stepItem)
            leafExper.checkCorrect();

        } else if (leafExper.slot_2_now == "") {
            dragTarget.x = 500
            dragTarget.y = 460
            leafExper.slot_2_now = stepItem
            leafExper.checkCorrect();
        } else {
            dragTarget.x = 500
            dragTarget.y = 460
            leafExper.slot_2_now = stepItem
            leafExper.checkCorrect();
        }
    } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 570 && dragTarget.y < 770) {
        //判斷slot3
        if (leafExper.slot_3_now == "step2") {
            step2_item_Pos_reset()
            leafCheck_slot3(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_3_now == "step3") {
            step3_item_Pos_reset()
            leafCheck_slot3(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_3_now == "step4") {
            step4_item_Pos_reset()
            leafCheck_slot3(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_3_now == "step1") {
            step1_item_Pos_reset()
            leafCheck_slot3(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_3_now == "") {
            dragTarget.x = 500
            dragTarget.y = 670
            leafExper.slot_3_now = stepItem
            leafExper.checkCorrect();
        } else {
            dragTarget.x = 500
            dragTarget.y = 670
            leafExper.slot_3_now = stepItem
            leafExper.checkCorrect();
        }
    } else if (dragTarget.x > 300 && dragTarget.x < 700 && dragTarget.y > 780 && dragTarget.y < 980) {
        //判斷slot4
        if (leafExper.slot_4_now == "step2") {
            step2_item_Pos_reset()
            leafCheck_slot4(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_4_now == "step3") {
            step3_item_Pos_reset()
            leafCheck_slot4(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_4_now == "step4") {
            step4_item_Pos_reset()
            leafCheck_slot4(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_4_now == "step1") {
            step1_item_Pos_reset()
            leafCheck_slot4(stepItem)
            leafExper.checkCorrect();
        } else if (leafExper.slot_4_now == "") {
            dragTarget.x = 500
            dragTarget.y = 880
            leafExper.slot_4_now = stepItem
            leafExper.checkCorrect();
        } else {
            dragTarget.x = 500
            dragTarget.y = 880
            leafExper.slot_4_now = stepItem
            leafExper.checkCorrect();
        }
    } else {
        if (dragTarget == leafExper.step1_item) {
            step1_item_Pos_reset()
        } else if (dragTarget == leafExper.step2_item) {
            step2_item_Pos_reset()
        } else if (dragTarget == leafExper.step3_item) {
            step3_item_Pos_reset()
        } else if (dragTarget == leafExper.step4_item) {
            step4_item_Pos_reset()
        }
    }
}


//======================================================



//每影格更新APP
app.ticker.add((time) => {
    if (corne_butt.inLeafAnime == true ||
        upEpi_butt.inLeafAnime == true ||
        downEpi_butt.inLeafAnime == true ||
        vein_butt.inLeafAnime == true ||
        mesophyll_butt.inLeafAnime == true ||
        Guard_butt.inLeafAnime == true ||
        airHole_butt.inLeafAnime == true ||
        cholo_butt.inLeafAnime == true
    ) {
        corne_butt.container.visible = false;
        upEpi_butt.container.visible = false;
        downEpi_butt.container.visible = false;
        vein_butt.container.visible = false;
        mesophyll_butt.container.visible = false;
        Guard_butt.container.visible = false;
        airHole_butt.container.visible = false;
        cholo_butt.container.visible = false;
        setTimeout(() => {
            backToLeaf_butt.visible = true;
        }, 500);
    } else {
        backToLeaf_butt.visible = false;
    }
});





// async function videoBackToStart(videoResource) {
//     return new Promise((resolve) => {
//         function onSeeked() {
//             videoResource.removeEventListener('seeked', onSeeked);
//             videoResource.style.visibility = 'visible'; // 確保影片顯示
//             console.log("seek")
//             resolve();
//         }
//         videoResource.style.visibility = 'hidden'; // 暫時隱藏影片
//         videoResource.currentTime = 0; // 設置時間到第 0 秒
//         videoResource.pause();
//         videoResource.addEventListener('seeked', onSeeked); // 等待 seek 完成
//     });
// }

// async function playAnime(texture) {
//     await videoBackToStart(texture.source.resource);
//     requestAnimationFrame(() => {
//         anime.texture = texture;
//         anime.texture.update();
//         anime.texture.source.resource.play();
//     });
// }