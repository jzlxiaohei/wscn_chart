/**
 * Created by zilong on 7/1/15.
 */

import MathUtils from '../Utils/MathUtils.js'
//import CandlePainter from '../Painter/CandlePainter.js'
/*
* data format:
* {
*   xTransform:function
*
*   painters:[{
*       painter:
*       yTransform :
*
*   }]
* }
*
* */




class Layout{
    constructor(opt){
        this.ctx =opt.ctx;
        this.canvasY = opt.canvasY;
        this.canvasX = opt.canvasX;
        this.painters = [];

    }

    addPainter(painter){
        this.painters.push(painter)
        return this;
    }

    render(){
        for(var i =0;i<this.painters.length;i++){
            var p = this.painters[i]
            p.render(this.ctx);
        }
    }

}

export default Layout
