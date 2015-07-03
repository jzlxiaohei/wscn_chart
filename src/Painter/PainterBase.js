/**
 * Created by zilong on 6/19/15.
 */

import utils from "../Utils/CommonUtils.js"


class PainterBase{
    constructor(opt){
        if(opt){
            this.style=opt.style || {};
        }
    }

    beforeDraw(ctx,style){
        ctx.beginPath();
    }

    draw(ctx){
        console.error('subClass should implements draw method')
    }

    render(ctx){
        this.beforeDraw(ctx,this.style);
        this.draw(ctx)
        this.afterDraw(ctx,this.style);
    }

    setData(data){
        this.data = data;
        return this;
    }

    setStyle(style){
        this.style = style;
        return this;
    }

    //xAxis:
    setXAxis(xAxis){
        this.xAxis = xAxis;
        return this;
    }

    afterDraw(ctx){
        var style = this.style;
        if(style.strokeStyle){
            ctx.strokeStyle = style.strokeStyle;
        }
        if(style.fillStyle){
            ctx.fillStyle = style.fillStyle;
        }

        style.brushType = style.brushType || 'stroke';
        if (style.brushType == 'both'){
            ctx.stroke();
            ctx.fill();
        }else if(style.brushType=='fill'){
            ctx.fill();
        }else{
            ctx.stroke();
        }
    }
}

export default PainterBase