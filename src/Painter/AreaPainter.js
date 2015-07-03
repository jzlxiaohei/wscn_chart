import PainterBase from './PainterBase.js'

/*
* 和LinePainter的实现算法一样
*
*  1: LinePainter 是 stroke
*
*  2: AreaPainter 是 fill ，另外多两个点，用于设定x轴
* */
class AreaPainter extends PainterBase{
    constructor(opt){
        super(opt);
    }
    draw(ctx){
        var data = this.data;
        var firstPt = data[0]
        ctx.moveTo(firstPt.x,firstPt.y)
        for(var i = 1;i<data.length;i++){
            var d = data[i]
            ctx.lineTo(d.x,d.y)
        }
    }
}

export default AreaPainter;
