import { Application, Assets, Texture, Sprite, Container, Graphics, Text, TextStyle, Polygon } from './pixi.mjs';



const anime = new Sprite();
const fontStyle_main = new TextStyle({
    fontSize: 60,
    // fontWeight: 'bold',
    fill: 0xffffff,
    stroke: { color: '#000000', width: 10, join: 'round' },
    wordWrap: true,
    wordWrapWidth: 440,
});

const progressText = new Text;
progressText.style = fontStyle_main;

const fontStyle_title = new TextStyle({
    fontSize: 85,
    // fontWeight: 'bold',
    fill: 0xffffff,
    stroke: { color: '#000000', width: 10, join: 'round' },
    wordWrap: true,
    wordWrapWidth: 440,
});
const fontStyle_basic = new TextStyle({
    fontSize: 40,
    // fontWeight: 'bold',
    fill: 0x000000,
    // stroke: { color: '#755a8a', width: 5, join: 'round' },
    wordWrap: true,
    wordWrapWidth: 440,
});
const fontStyle_basic2 = new TextStyle({
    fontSize: 50,
    // fontWeight: 'bold',
    fill: 0xffffff,
    // stroke: { color: '#755a8a', width: 5, join: 'round' },
    wordWrap: true,
    wordWrapWidth: 440,
});
const fontStyleB = new TextStyle({
    fontSize: 100,
    // fontWeight: 'bold',
    fill: 0xffffff,
    stroke: { color: '#000000', width: 12, join: 'round' },
    wordWrap: true,
    wordWrapWidth: 440,
});


// progressText.style = fontStyle_title;

export{anime,fontStyle_main,fontStyle_title,fontStyle_basic,fontStyle_basic2,fontStyleB, progressText}

