import PainterBase from './PainterBase.js'

class XAxisPainter extends PainterBase{
    constructor(){
        super();
    }
    //tickCount
    //tickSpace
    //tickData=[]
    drawShape(ctx,style){
        var x1 = style.x1,
            x2 = style.x2,
            y = style.y;
        ctx.moveTo(x1,y)
        ctx.lineTo(x2,y);


        var tickData = style.tickData || []
        var tickCount = tickData.length;
        var tickHeight = style.tickHeight||10
        var len = Math.abs(x2-x1);
        var tickLen = len/tickCount
        for(var i =1;i<tickCount;i++){
            ctx.moveTo(x1+tickLen*i,y)
            ctx.lineTo(x1+tickLen*i,y+tickHeight)
        }

    }
}

export default XAxisPainter;
