var myChart = echarts.init(document.getElementById('main'));

$.getJSON('resources/data-1491887968120-rJODPy9ae.json', function(data) {

  data = data.filter(function(dataItem) {
      return dataItem[2] > 0;
  }).map(function(dataItem) {
      return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
  });


  // var airSections = airports.slice(1000, 3000);
  var airDatas = [];
  // for (var i = 0; i < airSections.length; i += 2) {
  //     airDatas.push([
  //         [airSections[i][3], airSections[i][4]],
  //         [airSections[i + 1][3], airSections[i + 1][4]]
  //     ])
  // }
  for (let i = 0; i < 60; i++) {
      airDatas = airDatas.concat(rodamData())
  }

  function rodamData() {
      let name = '随机点' + Math.random().toFixed(5) * 100000
      // let longitude = Math.random() * 62 + 73
      let longitude = Math.random() * 360
      let longitude2 = Math.random() * 360 - 180
      // let latitude = Math.random() * 50 + 3.52
      let latitude = Math.random() * 360
      let latitude2 = Math.random() * 180 - 90
      return {
          coords: [
              [longitude2, latitude2],
              [longitude, latitude]
          ],
          value: (Math.random() * 3000).toFixed(2)
      }
  }
  series = [];
  series.push({
      type: 'scatter3D',
      coordinateSystem: 'globe',
      blendMode: 'lighter',
      symbolSize: 2,
      silent: true,
      itemStyle: {
          color: '#0276f3',
          opacity: 1
      },
      data: data
  });
  /*},{
      type: "lines3D",
      effect: { //是否显示尾迹特效，默认不显示。
          show: true,
          period: 2,
          trailWidth: 3,
          trailLength: 0.5,
          trailOpacity: 1,
          trailColor: "#fb06c3"
      },
      lineStyle: {
          width: 2,
          color: "#a82cf5",
          opacity: 0.2
      },
      blendMode: "lighter",
      data: airDatas
  });
  */
  myChart.setOption({
      // backgroundColor:'#000',
      visualMap: {
          show: false,
          min: 0,
          max: 60,
          inRange: {
              symbolSize: [1.0, 10.0]
          }
      },
      globe: {
          baseTexture: "resources/data-1491837049070-rJZtl7Y6x.jpg",
          heightTexture: "resources/data-1491889019097-rJQYikcpl.jpg",
          displacementScale: 0.04,
          // shading: 'color',
          environment: 'resources/data-1491837999815-H1_44Qtal.jpg',
          realisticMaterial: {
              roughness: 0.9
          },
          postEffect: {
              enable: true
          },
          viewControl: {
              //autoRotate: true,
              autoRotate: false,
              distance: 96,
              alpha:32,
              beta:194,
              //targetCoord: [106.50, 30.00]
          },

          // light: {
          // main: {
          //     intensity: 5,
          //     shadow: false
          // },
          // ambient: {
          // intensity: 2
          // },
          // ambientCubemap: {
          //     texture: 'data-gl/asset/pisa.hdr',
          //     diffuseIntensity: 5
          // }
          // }
          light: {
              ambient: {
                  intensity: 0.4
              },
              main: {
                  intensity: 0.4
              }
          },
      },
      series: series

  });
  
});
