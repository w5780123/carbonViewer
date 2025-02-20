import { Assets, Text } from './pixi.mjs'
import { progressText } from './global.mjs';


const imgResource = [
    "100ml",
    "250ml",
    "1000ml",
    "alcohol",
    "alcoholLamp",
    "Ben",
    "fabric",
    "glucose",
    "Iodine",
    "petriDish",
    "thermometer",
    "tripod",
    "tube",
    "tweezers",
    "bg",
];

const experVideoResource = [
    "exper_01",
    "exper_02",
    "exper_03",
    "exper_04",
    "exper_05",
    "exper_06",
    "exper_07",
    "exper_08",
    "exper_09",
    "exper_10",
    "exper_11",
    "exper_12",
    "exper_13",
    "exper_14",
    "exper_15",
    "exper_16",
    "exper_17",
    "exper_18",
    "exper_19",
    "exper_20",
    "exper_21",
    "exper_22",
];
const leafVideoResource = [
    "leaf_in",
    "airHole_back",
    "airHole_in",
    "corne_back",
    "corne_in",
    "downEpi_back",
    "downEpi_in",
    "Guard_back",
    "Guard_in",
    "mesophyll_back",
    "mesophyll_in",
    "upEpi_back",
    "upEpi_in",
    "vein_back",
    "vein_in",
    "cholo_in",
    "cholo_back",
];
const explorResource = [
    "chlorophyll",
    "co2",
    "o2",
    "sun",
    "water",
    "jar01",
    "jar02",
    "jar03",
    "jar04",
    "leaf01",
    "leaf02",
    "lime",
    "plant",
    "step1",
    "step2",
    "step3",
    "step4",
    "step1_cholo",
    "step2_cholo",
    "step3_cholo",
    "step4_cholo",
    "step1_on",
    "step2_on",
    "step3_on",
    "step4_on",
    "step1_cholo_on",
    "step2_cholo_on",
    "step3_cholo_on",
    "step4_cholo_on",
    "reset",
    "plantGrow"
];
const explorVideoResource = [
    "cholo_1",
    "cholo_2",
    "cholo_end",
    "co2_1",
    "co2_2",
    "co2_end",
    "o2_1",
    "o2_2",
    "o2_end",
    "sun_1",
    "sun_2",
    "sun_end",
    "water_1",
    "water_2",
    "water_end",
];

class AssetsLoader {
    constructor() {

        this.loadDone = false;
    }

    async loadAllTexture() {
        return new Promise((resolve, reject) => {
            let loadArray = [];

            imgResource.forEach(element => {
                Assets.add({ alias: element, src: `img/${element}.png` });
                loadArray.push(element);
            });
            explorResource.forEach(element => {
                Assets.add({ alias: element, src: `img/explor/${element}.png` });
                loadArray.push(element);
            });
            explorVideoResource.forEach(element => {
                Assets.add({ alias: element, src: `img/explor/${element}.mp4` });
                loadArray.push(element);
            });
            experVideoResource.forEach(element => {
                Assets.add({ alias: element, src: `img/${element}.mp4` });
                loadArray.push(element);
            });
            leafVideoResource.forEach(element => {
                Assets.add({ alias: element, src: `img/leaf/${element}.mp4` });
                loadArray.push(element);
            });
            const texturesPromise = Assets.load(loadArray, this.showProgress);
            texturesPromise.then((textures) => {
                this.loadDone = true;
                console.log(textures)
                this.reloadfont();
                resolve(true)
            });

            texturesPromise.onerror = reject;
        })
    }
    showProgress(progress) {
        console.log(progress)
        progressText.text = `載入進度${progress*100}%`;
    }

    reloadfont() {
        console.log('text')
        
    }
}

export { AssetsLoader }