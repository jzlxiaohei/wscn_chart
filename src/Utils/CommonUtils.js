/**
 * Created by zilong on 6/23/15.
 */
var toString = Object.prototype.toString;
var utils ={
    isArray:function(arr){
        return toString.call(arr) == '[object Array]'
    }
}

export default utils;