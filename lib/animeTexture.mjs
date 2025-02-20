import { Application, Assets, Texture, Sprite, Container, Graphics, Text, TextStyle, Polygon } from './pixi.mjs';
import {  
    leafReset,
    experReset,
    animeSetting,
    playAnime, } from './func.mjs';
//====================================
// //實驗動畫

// const exper1 = new Texture.from('exper_01')
// animeSetting(exper1);
// const exper2 = new Texture.from('exper_02')
// animeSetting(exper2);
// const exper3 = new Texture.from('exper_03')
// animeSetting(exper3);
// const exper4 = new Texture.from('exper_04')
// animeSetting(exper4);
// const exper5 = new Texture.from('exper_05')
// animeSetting(exper5);
// const exper6 = new Texture.from('exper_06')
// animeSetting(exper6);
// const exper7 = new Texture.from('exper_07')
// animeSetting(exper7);
// const exper8 = new Texture.from('exper_08')
// animeSetting(exper8);
// const exper9 = new Texture.from('exper_09')
// animeSetting(exper9);
// const exper10 = new Texture.from('exper_10')
// animeSetting(exper10);
// const exper11 = new Texture.from('exper_11')
// animeSetting(exper11);
// const exper12 = new Texture.from('exper_12')
// animeSetting(exper12);
// const exper13 = new Texture.from('exper_13')
// animeSetting(exper13);
// exper13.source.resource.loop = true;
// const exper14 = new Texture.from('exper_14')
// animeSetting(exper14);
// const exper15 = new Texture.from('exper_15')
// animeSetting(exper15);
// const exper16 = new Texture.from('exper_16')
// animeSetting(exper16);
// const exper17 = new Texture.from('exper_17')
// animeSetting(exper17);
// exper17.source.resource.loop = true;
// const exper18 = new Texture.from('exper_18')
// animeSetting(exper18);
// const exper19 = new Texture.from('exper_19')
// animeSetting(exper19);
// exper19.source.resource.loop = true;
// const exper20 = new Texture.from('exper_20')
// animeSetting(exper20);
// const exper21 = new Texture.from('exper_21')
// animeSetting(exper21);
// const exper22 = new Texture.from('exper_22')
// animeSetting(exper22);

// for(let i = 1; i < 23; i++){
//     console.log(`exper${i}`);
//     animeSetting(`exper${i}`);
//   }

// //=============================================
// //葉子動畫
// const leaf_in = new Texture.from('leaf_in');
// animeSetting(leaf_in);
// const airHole_back = new Texture.from('airHole_back');
// animeSetting(airHole_back);
// const airHole_in = new Texture.from('airHole_in');
// animeSetting(airHole_in);
// const corne_back = new Texture.from('corne_back');
// animeSetting(corne_back);
// const corne_in = new Texture.from('corne_in');
// animeSetting(corne_in);
// const downEpi_back = new Texture.from('downEpi_back');
// animeSetting(downEpi_back);
// const downEpi_in = new Texture.from('downEpi_in');
// animeSetting(downEpi_in);
// const Guard_back = new Texture.from('Guard_back');
// animeSetting(Guard_back);
// const Guard_in = new Texture.from('Guard_in');
// animeSetting(Guard_in);
// const mesophyll_back = new Texture.from('mesophyll_back');
// animeSetting(mesophyll_back);
// const mesophyll_in = new Texture.from('mesophyll_in');
// animeSetting(mesophyll_in);
// const upEpi_back = new Texture.from('upEpi_back');
// animeSetting(upEpi_back);
// const upEpi_in = new Texture.from('upEpi_in');
// animeSetting(upEpi_in);
// const vein_back = new Texture.from('vein_back');
// animeSetting(vein_back);
// const vein_in = new Texture.from('vein_in');
// animeSetting(vein_in);



// export{
//     // exper1,exper2,exper3,exper4,exper5,exper6,exper7,exper8,exper9,exper10,exper11,exper12,exper13,exper14,exper15,exper16,exper17,exper18,exper19,exper20,exper21,exper22,
//     leaf_in,airHole_back,airHole_in,corne_back,corne_in,downEpi_back,downEpi_in,Guard_back,Guard_in,mesophyll_back,mesophyll_in,upEpi_back,upEpi_in,vein_back,vein_in,
// }