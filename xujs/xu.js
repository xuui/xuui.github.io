void function(){
  alert('water');
}();

(function(){
//var mouseover_tid=[];
//var mouseout_tid=[];
// 通过 ID 获取 Element 对象
function $(sel){
  var idstr="#";
  //console.log('indexOf: '+sel.indexOf(idstr));
  if(sel.indexOf(idstr)>=0){
    //console.log('sel a: '+sel);
    return document.querySelector(sel);
  }else{
    //console.log('sel all: '+sel);
    return document.querySelectorAll(sel);
  }
}
//addListener
//addEventListener
var $_GET=(function(){
  var url=window.document.location.href.toString();
  var u=url.split("?");
  if(typeof(u[1])=="string"){
    u=u[1].split("&");
    var get={};
    for(var i in u){
      var j=u[i].split("=");
      get[j[0]]=j[1];
    }
    return get;
  }else{
    return{};
  }
})();
// 这是对外的接口
window['xu']={};
window['xu']['$']=$; //xu.$();
window['xu']['$_GET']=$_GET; //xu.$_GET['getX'];;
})();

/*
xu.$('#sml').style.color='red';
*/

/*
// jQuery. 窗口尺寸改变
$(window).resize(function() {
  $("body").append("<div>Handler for .resize() called.</div>");
  $("body").prepend("<div>" + $(window).width() + "</div>");
  $("body").prepend("<div>" + $(window).height() + "</div>");
});
// jQuery. 窗口滚动条事件
$(window).scroll(function(){
  $("span").css("display","inline").fadeOut("slow");
});


// jQuery. 滚动导航菜单
var mouseover_tid=[];
var mouseout_tid=[];
jQuery(document).ready(function($){
  $('#menus > li').each(function(index){
    $(this).hover(
      function(){
        var _self=this;
        clearTimeout(mouseout_tid[index]);
        mouseover_tid[index]=setTimeout(function() {
          jQuery(_self).find('ul:eq(0)').slideDown(200);
        },400);
      },function(){
        var _self=this;
        clearTimeout(mouseover_tid[index]);
        mouseout_tid[index]=setTimeout(function() {
          jQuery(_self).find('ul:eq(0)').slideUp(200);
        },400);
      }
    );
  });
});


/**
 * 回到页面顶部
 * @param acceleration 加速度
 * @param time 时间间隔 (毫秒)
 <a href="#" onclick="goTop();return false;">TOP</a>
 **//*
function goTop(acceleration,time){
  acceleration = acceleration || 0.1;
  time = time || 16;
  var x1 = 0;
  var y1 = 0;
  var x2 = 0;
  var y2 = 0;
  var x3 = 0;
  var y3 = 0;
  if (document.documentElement) {
    x1 = document.documentElement.scrollLeft || 0;
    y1 = document.documentElement.scrollTop || 0;
  }
  if (document.body){
    x2 = document.body.scrollLeft || 0;
    y2 = document.body.scrollTop || 0;
  }
  var x3 = window.scrollX || 0;
  var y3 = window.scrollY || 0;
  var x = Math.max(x1, Math.max(x2, x3));
  var y = Math.max(y1, Math.max(y2, y3));
  var speed = 1 + acceleration;
  window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
  if(x > 0 || y > 0) {
    var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
    window.setTimeout(invokeFunction, time);
  }
}

// 搜索框提示文字
var searchtxt=document.getElementById("searchtxt");
var tiptext="提示文字...";
if(searchtxt.value=="" || searchtxt.value==tiptext){
  searchtxt.className="searchtip";
  searchtxt.value=tiptext;
}
searchtxt.onfocus=function(e){// 鼠标聚焦搜索框时
  if(searchtxt.value==tiptext){
    searchtxt.value="";
    searchtxt.className="";
  }
}
searchtxt.onblur=function(e){// 搜索框失去焦点时
  if(searchtxt.value==""){
    searchtxt.className="searchtip";
    searchtxt.value=tiptext;
  }
}
var searchbtn=document.getElementById("searchbtn");// 提交按钮
searchbtn.onclick=function(e){
  if(searchtxt.value=="" || searchtxt.value==tiptext){return false;}
}
*/