import PainterBase from './PainterBase.js'

class CandlePainter extends PainterBase{
    constructor(opt){
        super(opt);
    }
    /**
     * data format:[{
        x:
        open:
        close:
        high:
        low:
      }]
    */



    draw(ctx){
        var xAxis = this.xAxis;
        var data = this.data;
        var width = this.style.candleWidth || 6;

        for(var i = 0;i<data.length;i++){
            var d = data[i]
            var x1 = xAxis[i],
                open = d.open,
                close = d.close,
                high = d.high,
                low = d.low

            var x2 = x + width
            var midX = (x1+x2)/2

            //画矩形
            ctx.moveTo(x1,open);
            ctx.lineTo(x2, open);
            ctx.lineTo(x2, close);
            ctx.lineTo(x1, close);
            ctx.lineTo(x1,open);

            //画上下两根线
            ctx.moveTo(midX,close)
            ctx.lineTo(midX,high)

            ctx.moveTo(midX,open)
            ctx.lineTo(midX,low)
        }
    }

}

export default CandlePainter;
