import { Application, Assets, Texture, Sprite, Container, Graphics, Text, TextStyle, Polygon } from './pixi.mjs';
import { ExplorSelect } from './explor/explor_select.mjs';
import { Explor } from './explor/explor.mjs';
import { LeafExper } from './explor/leafExper.mjs';
import { ExplorGrow } from './explor/explor_grow.mjs';

let explor
let explorSelect
let leafExper
let explorGrow

class Manager {
    constructor() {
    }
    init() {
        leafExper = new LeafExper()
        explor = new Explor();
        explorSelect = new ExplorSelect();
        explorGrow = new ExplorGrow();
    }

}


const manager = new Manager();

export {
    manager,
    explor,
    explorSelect,
    leafExper,
    explorGrow,
}