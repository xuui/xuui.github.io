(function(wbo){wbo(function(){

//function wbo_keyboard(input){
var carNs=['京','津','晋','冀','蒙','辽','吉','黑','沪',
           '苏','浙','皖','闽','赣','鲁','豫','鄂','湘',
           '粤','桂','琼','渝','川','贵','云','藏','陕',
           '切换','甘','青','宁','新','删除','清空','完成'];
var carNn=['1','2','3','4','5','6','7','8','9','0',
           'Q','W','E','R','T','Y','U','I','O','P',
           'A','S','D','F','G','H','J','K','L','使',
           'Z','X','C','V','B','N','M','港','澳','领',
           '切换','学','挂','试','超','删除','清空','完成'];

switchKey(carNs);
//switchKey(carNn);
function switchKey(key){
  wbo('#wboKeyboard .keyboard').html('');
  var j=0;k=1;
  for(var i=0;i<key.length;i++){
    if(j==0){wbo('#wboKeyboard .keyboard').append('<div class="weui-flex keyline-'+k+'"></div>');}
    if(wbo('#wboKeyboard .keyboard').hasClass('number')){
      if(j>9){j=0;k++;
        wbo('#wboKeyboard .keyboard').append('<div class="weui-flex keyline-'+k+'"></div>');
      }
    }else{
      if(j>8){j=0;k++;
      wbo('#wboKeyboard .keyboard').append('<div class="weui-flex keyline-'+k+'"></div>');
      }
    }
    switch(key[i]){
    case '清空':
      wbo('#wboKeyboard .keyboard .keyline-'+k).append('<a href="javascript:;" class="weui-flex__item fbox2 btn btn_remove">'+key[i]+'</a>');
    break;
    case '删除':
      wbo('#wboKeyboard .keyboard .keyline-'+k).append('<a href="javascript:;" class="weui-flex__item fbox2 btn btn_remove">'+key[i]+'</a>');
    break;
    case '完成':
      wbo('#wboKeyboard .keyboard .keyline-'+k).append('<a href="javascript:;" class="weui-flex__item fbox2 btn btn_primary">'+key[i]+'</a>');
    break;
    case '切换':
      wbo('#wboKeyboard .keyboard .keyline-'+k).append('<a href="javascript:;" class="weui-flex__item fbox2 btn btn_line">'+key[i]+'</a>');
    break;
    default:
      wbo('#wboKeyboard .keyboard .keyline-'+k).append('<a href="javascript:;" class="weui-flex__item btn">'+key[i]+'</a>');
    }
    j++;
  }
}

/**
for(var i=0;i<carNn.length;i++){
if(j==0){wbo('#wboKeyboard .keyboard').append('<div class="weui-flex keyline-'+k+'"></div>');}
if(j>9){j=0;k++;
wbo('#wboKeyboard .keyboard').append('<div class="weui-flex keyline-'+k+'"></div>');
}
wbo('#wboKeyboard .keyboard .keyline-'+k).append('<a href="javascript:;" class="weui-flex__item btn">'+carNn[i]+'</a>');
j++;
}
*/

var input_text=wbo('#inCarNum').val();

wbo('#inCarNum').on('focus',function(){
  wbo('#wboKeyboard').show();
});
wbo('#wboKeyboard .close').on('click',function(){
  wbo('#wboKeyboard').hide();
});
wbo('#wboKeyboard .keyboard').on('click','.btn',function(){
  var click=wbo(this).html();
  switch(click){
  case '切换':
    if(wbo('#wboKeyboard .keyboard').hasClass('number')){
      wbo('#wboKeyboard .keyboard').removeClass('number');
      console.log('keyboard: District');
      switchKey(carNs);
    }else{
      wbo('#wboKeyboard .keyboard').addClass('number');
      console.log('keyboard: number');
      switchKey(carNn);
    }
  break;
  case '删除':
    input_text=input_text.substr(0,input_text.length-1);
    wbo('#inCarNum').val(input_text);
    wbo('#carNums').html(input_text);
  break;
  case '清空':
    input_text='';
    wbo('#inCarNum').val(input_text);
    wbo('#carNums').html(input_text);
  break;
  case '完成':
    wbo('#wboKeyboard .keyboard').removeClass('number');
    switchKey(carNs);
    wbo('#wboKeyboard').hide();
  break;
  default:
    input_text=input_text+click;
    if(input_text.length<=8){
      wbo('#inCarNum').val(input_text);
      wbo('#carNums').text(input_text);
      wbo('#inCarNum').focus();
    }
    if(!wbo('#wboKeyboard .keyboard').hasClass('number')){
      wbo('#wboKeyboard .keyboard').addClass('number');
      console.log('keyboard: number');
      switchKey(carNn);
    }
  }
});

//}
})})(jQuery);
