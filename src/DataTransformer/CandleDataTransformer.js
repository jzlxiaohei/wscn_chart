/**
 * Created by zilong on 7/1/15.
 */
import MathUtils from '../Utils/MathUtils.js'


function CandleDataPriceTransformer(opt){
    var data = opt.data,
        range = opt.range;

    var max = -Infinity,
        min = Infinity;
    var tfData = [];

    for(var i =0;i<data.length;i++){
        var d  =  data[i];
        if(d.high>max){max = d.high}
        if(d.low<min) {min = d.low}
    }

    var domain = [min,max];
    var lineFunc =  MathUtils.LineScale(domain,range);
    for(var i = 0;i<data.length;i++){
        tfData.push(range[1]-lineFunc(data[i].close));
    }
    return tfData;
}

function CandleDataPercentageTransformer(opt){
    var data = opt.data,
        range = opt.range,
        prevClose = opt.prevClose;

    var max = -Infinity,
        min = Infinity;
    var tfData = [];

    for(var i =0;i<data.length;i++){
        var d  =  data[i];
        if(d.high>max){max = d.high}
        if(d.low<min) {min = d.low}
    }
    var domain = [(min-prevClose)/prevClose,(max-prevClose)/prevClose];
    var lineFunc = MathUtils.LineScale(domain,range);
    for(var i = 0;i<data.length;i++){
        var d = data[i]
        var percentage = (d.close-prevClose)/d.close;
        tfData.push(lineFunc(percentage));
    }
    return tfData;
}
var DataTransform={
    CandleDataPriceTransformer:CandleDataPriceTransformer
}
export default DataTransform;
