
import { Container, Graphics, Text, Sprite, TextStyle, Texture, Rectangle } from './pixi.mjs';
import { anime } from './global.mjs';
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

// //葉子動畫恢復初始設定
// function leafReset() {
//     animeSetting(airHole_back);
//     animeSetting(airHole_in);
//     animeSetting(corne_back);
//     animeSetting(corne_in);
//     animeSetting(downEpi_back);
//     animeSetting(downEpi_in);
//     animeSetting(Guard_back);
//     animeSetting(Guard_in);
//     animeSetting(leaf_in);
//     animeSetting(mesophyll_back);
//     animeSetting(mesophyll_in);
//     animeSetting(upEpi_back);
//     animeSetting(upEpi_in);
//     animeSetting(vein_back);
//     animeSetting(vein_in);
// }

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

async function videoBackToStart(videoResource) {
    return new Promise((resolve) => {
        function onSeeked() {
            videoResource.removeEventListener('seeked', onSeeked);
            videoResource.style.visibility = 'visible'; // 確保影片顯示
            console.log("seek")
            resolve();
        }
        videoResource.style.visibility = 'hidden'; // 暫時隱藏影片
        videoResource.currentTime = 0; // 設置時間到第 0 秒
        videoResource.pause();
        videoResource.addEventListener('seeked', onSeeked); // 等待 seek 完成
    });
}

async function playAnime(texture) {
    await videoBackToStart(texture.source.resource);
    requestAnimationFrame(() => {
        anime.texture = texture;
        anime.texture.update();
        anime.texture.source.resource.play();
    });
}




// let dragTarget = null;

// app.stage.eventMode = 'static';
// app.stage.hitArea = app.screen;
// app.stage.on('pointerup', onDragEnd);
// app.stage.on('pointerupoutside', onDragEnd);

// function onDragMove(event) {
//     if (dragTarget) {
//         dragTarget.parent.toLocal(event.global, null, dragTarget.position);
//     }
// }

// function onDragStart() {
//     // Store a reference to the data
//     // * The reason for this is because of multitouch *
//     // * We want to track the movement of this particular touch *
//     this.alpha = 0.5;
//     dragTarget = this;
//     app.stage.on('pointermove', onDragMove);
// }

// function onDragEnd() {
//     if (dragTarget) {
//         console.log(dragTarget);
//         app.stage.off('pointermove', onDragMove);
//         dragTarget.alpha = 1;
//         dragTarget = null;
//     }
// }

export { 
    experReset,
    animeSetting,
    videoBackToStart,
    playAnime,
    // dragTarget,
    // onDragMove,
    // onDragStart,
    // onDragEnd,
}