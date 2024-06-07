// 预计进度数据
var expectedData = [
  100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81,
  80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
  59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39,
  38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18,
  17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
];
  
// 实际进度数据
var actualData = [
  100, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 85, 83, 82, 81, 80, 79, 78,
  77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57,
  56, 55, 54, 53, 52, 51, 50, 49, 48, 48, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 37,
  37, 37, 37, 36, 35, 34, 33, 32, 32, 31, 31, 30, 29, 28, 27, 27, 27, 26, 25, 24, 23,
  21, 20, 19, 18, 17, 16, 15, 15, 13, 11, 9, 7, 5, 3, 0, 0
];

var dateData = [
  "02-29", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09",
  "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19",
  "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29",
  "03-30", "03-31", "04-01", "04-02", "04-03", "04-04", "04-05", "04-06", "04-07", "04-08",
  "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18",
  "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26", "04-27", "04-28",
  "04-29", "04-30", "05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08",
  "05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15", "05-16", "05-17", "05-18",
  "05-19", "05-20", "05-21", "05-22", "05-23", "05-24", "05-25", "05-26", "05-27", "05-28",
  "05-29", "05-30", "05-31", "06-01", "06-02", "06-03", "06-04", "06-05", "06-06", "06-07",
  "06-08"
];

var changeData = actualData.map((value, index) => {
  return index === 0 ? 0 : Math.abs(value - actualData[index - 1]);
});

var myChart2 = echarts.init(document.getElementById('line2'));

var option2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    },
    formatter: function (params) {
      var res = params[0].axisValue; 
      var expected = params[0].value; 
      var actual = params[1].value; 
      var diff = expected - actual;
      // 找到对应的changeData值
      var dailyChangeIndex = params[0].dataIndex;
      var changeValue = changeData[dailyChangeIndex];
  
      return res + '<br/>' +
             '预计剩余: ' + expected + '篇<br/>' +
             '实际剩余: ' + actual + '篇<br/>' +
             '当天阅读篇数: ' + (changeValue !== undefined ? changeValue : 0) + '篇<br/>'+
             '目前'+(diff >= 0 ? '提前 ' + diff + ' 篇' : '落后 ' + -diff + ' 篇') + '<br/>';
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: dateData
  },
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: false 
      }
    },
    {
      type: 'value',
      position: 'right',
      splitLine: {
        show: true, 
        lineStyle: {
          width: 0.5, 
          type: 'solid' 
        }
      }
    }
  ],
  series: [
    {
        name: '预计进度',
        type: 'line',
        smooth: true, 
        lineStyle: {
            type: 'dashed', 
            width: 3,       
            color: '#ecbc41' 
        },
        data: expectedData
    },
    {
        type: 'line',
        data: actualData,
        yAxisIndex: 0,
        itemStyle: {
            color: '#2966cf'
        }
    },
    {
        name: '实际进度',
        type: 'bar',
        stack: 'total',
        data: actualData,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#aed0ee' },
                { offset: 1, color: '#f6f9e4' }
            ])
        }
    },
    {
      name: '每日学习变化',
      type: 'line',
      yAxisIndex: 1,
      data: changeData,
      lineStyle: {
        color: '#FFCCD9', 
        width: 0.9, 
        type: 'dashed', 
        shadowColor: 'rgba(0,0,0,0)', 
        shadowBlur: 0 
      }
    },
    {
      name: '每日学习变化',
      type: 'scatter',
      yAxisIndex: 1,
      data: changeData,
      symbolSize: '3.5',
      itemStyle: {
        color: '#CC2C6C', 
        borderColor: '#FFCEBF',
      },
      emphasis: {
        itemStyle: {
          color: '#FF89AD', 
          borderColor: '#FEB0C6', 
        }
      }
    }
  ],
  dataZoom: [
      {
          show: true,
          start: 0,
          end: 100
      },
      {
          type: 'inside',
          start: 0,
          end: 100
      }
  ],
};

// 使用配置项和数据显示图表
myChart2.setOption(option2);

window.addEventListener('resize', function() {
  myChart2.resize();
});