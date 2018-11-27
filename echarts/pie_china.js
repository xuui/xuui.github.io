var myChart=echarts.init(document.getElementById('main'));
var pieimg0=document.getElementById('pieimg0');
var pieimg1=document.getElementById('pieimg1');
var pieimg2=document.getElementById('pieimg2');
var pieimg3=document.getElementById('pieimg3');

option={
  tooltip:{trigger:'item',formatter:"{a} <br/>{b}: {c} ({d}%)"},
  legend:{
    x:'left',
    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series:[{
    name:'访问来源',
    type:'pie',
    radius:['50%','70%'],
    avoidLabelOverlap:false,
    label:{normal:{show:false,position:'center'},emphasis:{show:true,textStyle:{fontSize:'21',fontWeight:'bold'},borderWidth:10,}},
    labelLine:{normal:{show:false}},
    itemStyle:{borderColor:'#fff',borderWidth:1,},
    data:[
      {value:335,name:'直接访问',itemStyle:{color:{image:pieimg0,repeat:'no-repeat'}}},
      {value:310,name:'邮件营销',itemStyle:{color:{image:pieimg1,repeat:'no-repeat'}}},
      {value:234,name:'联盟广告',itemStyle:{color:{image:pieimg2,repeat:'no-repeat'}}},
      {value:135,name:'视频广告',itemStyle:{color:{image:pieimg3,repeat:'no-repeat'}}}
    ]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
var app={currentIndex:-1};
setInterval(function(){
  var dataLen=option.series[0].data.length;
  myChart.dispatchAction({type:'downplay',seriesIndex:0,dataIndex:app.currentIndex});
  app.currentIndex=(app.currentIndex+1)%dataLen;
  myChart.dispatchAction({type:'highlight',seriesIndex:0,dataIndex:app.currentIndex});
},1600);
