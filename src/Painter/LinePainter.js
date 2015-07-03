import PainterBase from './PainterBase.js'
import MathUtils from '../Utils/MathUtils.js'


class LinePainter extends PainterBase{
    constructor(opt){
       super(opt)
    }


    draw(ctx){
        var xAxis = this.xAxis;
        var data = this.data;
        var firstPt = data[0]
        ctx.moveTo(firstPt.x,firstPt.y)
        for(var i = 1;i<data.length;i++){
            var y = data[i]
            var x = xAxis[i]
            ctx.lineTo(x,y)
        }
    }
}

export default LinePainter;