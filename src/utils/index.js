/**
 * 提示与加载工具类
 */
import axios from '../../http'
import OSS from 'ali-oss'
import qs from 'qs'
import nanoid from 'nanoid'
export default class utils {
    constructor() {
    }
    // 验证手机号
    static isPoneAvailable(str) {
        var myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }
    //检查是什么浏览器
    static getExplorer() {
        localStorage.setItem('ie9','true')
        var explorer = window.navigator.userAgent ;
        if (explorer.indexOf("MSIE 9.0") >= 0) {//ie 
            return "ie9";
        }else if (explorer.indexOf("Firefox") >= 0) {//firefox
            return "Firefox"; 
        }else if(explorer.indexOf("Chrome") >= 0){//Chrome
            return "Chrome";
        }else if(explorer.indexOf("Opera") >= 0){//Opera
            return "Opera";
        }else if(explorer.indexOf("Safari") >= 0){//Safari
            return "Safari";
        }
    }
    // 删除数组中指定元素
    static removeArrVal(arr,val){
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    // 判断字符是否为空的方法
    static isEmpty(obj){
        if(typeof obj == "undefined" || obj == null || obj == ""){
            return false;
        }else{
            return true;
        }
    }
}