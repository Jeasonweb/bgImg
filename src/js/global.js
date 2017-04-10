//获取当前浏览器的类型 1是微信 0是支付宝-1是其他浏览器，支持扩展
 function getPayType(){
          var ua=window.navigator.userAgent.toLowerCase();
          if(ua.match(/MicroMessenger/i)=='micromessenger'){
               return 1;
          }else if(ua.match(/AlipayClient/i)=='alipayclient'){
               return 0;
          }else{
               return -1;
          }
     }
//客户端和服务器端异步通讯通用方法
	function postDataFromClient(method, params, successFunction, failFunction) {
	    $.ajax({
	        type: "POST",
	        url: 'common.php',
	        data:{"Method":method,"Params":params},
	        async: true,
	        dataType: "json",
	        error: failFunction,
	        success: successFunction
	    })
	}
//客户端和服务器端同步通讯通用方法
function postDataFromClientOnSync(method, params, successFunction, failFunction) {
	    $.ajax({
	        type: "POST",
	        url: 'common.php',
	        data:{"Method":method,"Params":params},
	        async: false,
	        dataType: "json",
	        error: failFunction,
	        success: successFunction
	    })
	}
//检查手机号码是否合法
function isPhoneNumber(aPhone) {
	var bValidate = RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/).test(aPhone);
	if (bValidate) {
		return true;
	}
	else
	 return false;
}
//密码控件输入是否是数字检查
function isPSWNumber(nvalue){
  var bValidate = RegExp(/^[0-9]*$/).test(nvalue);
  if(bValidate)
    return true;
  else
    return false;
}
//检查邮箱是否合法
function isEmail(aEmail) {
    var bValidate = RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(aEmail);
    if (bValidate) {
       return true;
    }
    else
      return false;
}
//检查是否是数字
function isNumber(strValue) { 
　　　　var Letters = "1234567890."; 
　　　　var i; 
　　　　var c; 
　　　　for( i = 0; i < strValue.length; i ++ ){//->>>>取字符长度
　　　　　　c = strValue.charAt( i );//根据位置取到字符 
　　　　　　if (Letters.indexOf( c ) ==-1){ //判断字符是否是数字，在数字列表中找不到
　　　　　　　　return false; 
　　　   　　} 
　　　　} 
　　　　return true; 
}
//去掉空格
function trim(str){
  //var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}
//生成唯一不同的随机数
function getRandNum(){
  var today=new Date();
  var rno=today.getFullYear().toString()+today.getTime();
  return rno;
}
//电话号码部分数字用*代替
function mobileNumToXing(mobilenum){
   var showedmobile="";
   var phonenum="";
   if(mobilenum!=""){
     phonenum=mobilenum;
   }
   if(phonenum==""){
     phonenum=getLoginUserPhone();
   }
   if(phonenum!=""){
     var t_num=phonenum.substring(0,3);
     var d_num=phonenum.substring(7);
     showedmobile=t_num+"****"+d_num;
   }
   return showedmobile;
}
//数字转换
Date.prototype.Format = function (fmt) {  
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
 }
/**
 ** 加法函数，用来得到精确的加法结果
 ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 ** 调用：accAdd(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function accurateAdd(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}
/**
 ** 减法函数，用来得到精确的减法结果
 ** 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 ** 调用：accSub(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function accurateSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
/**
 ** 乘法函数，用来得到精确的乘法结果
 ** 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 ** 调用：accMul(arg1,arg2)
 ** 返回值：arg1乘以 arg2的精确结果
 **/
function accurateMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
/** 
 ** 除法函数，用来得到精确的除法结果
 ** 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 ** 调用：accDiv(arg1,arg2)
 ** 返回值：arg1除以arg2的精确结果
 **/
function accurateDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}
