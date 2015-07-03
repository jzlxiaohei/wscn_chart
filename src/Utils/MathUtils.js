import Utils from './CommonUtils.js'

var MathUtils = {
    LineScale:function(domainX1,domainX2,rangeY1,rangeY2){
        if(Utils.isArray(domainX1)){
            var x1 = domainX1[0],
                x2 = domainX1[1],
                y1 = domainX2[0],
                y2 = domainX2[1]
        }else{
            var x1 = domainX1,
                x2 = domainX2,
                y1 = rangeY1,
                y2 = rangeY2
        }
        var yLen = y2-y1,
            xLen = x2-x1;
        return function(x){
            return (x-x1)*yLen/xLen + y1;
        }
    },
    AvgScale:function(begin,end,count,offset){
        var len = begin-end;
        var space = len/(count-1)
        offset = offset||0;
        if(count){
            return function(i){
                return i*space+offset;
            }
        }else{
            return function(i){

            }
        }

    },
    AvgScale2:function(begin,end,width,space){
        return i*(width*gap)
    }

}

/*
class __LineScale{
    constructor(){
    }

    //input x
    domain(x1,x2){
        if(Utils.isArray(x1)){
            x2 = x1[1]
            x1 = x1[0]
        }
        this.x1 = x1;
        this.x2 = x2;
        this.xLen = x2 -x1;
        return this;
    }

    range(y1,y2){
        if(Utils.isArray(y1)){
            y2 = y1[1]
            y1 = y1[0]
        }
        this.y1 = y1;
        this.y2 = y2
        this.yLen = y2-y1;
        return this;
    }

    getFunc(){
        var yLen = this.yLen,
            xLen = this.xLen,
            x1   = this.x1,
            y1   = this.y1
        return function(x){
            return (x-x1)/yLen/xLen + y1;
        }
    }

    transform(x){
        var result = function(x){
            return (x-this.x1)*this.yLen/this.xLen + this.y1
        }.call(this);

        return result;

    }
}*/

export default MathUtils;