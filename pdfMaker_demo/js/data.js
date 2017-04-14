window.onload = function () {

	// 图形1
	var myChart = echarts.init(document.getElementById('graph1'));
	// 指定图表的配置项和数据
	var option1 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [
			{
				name: '截止到2017年3月22日',
				type: 'pie',
				radius: '40%',
				center: ['50%', '30%'],
				data: [
					{ value: 8, name: '实用新型' },
					{ value: 23, name: '发明专利' }
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		],
		color: ['rgb(209,67,63)', 'rgb(57,113,181)']
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option1);
	//TODO

var myChart3 = echarts.init(document.getElementById('graph3'));
myChart3.setOption(option1);
var myChart4 = echarts.init(document.getElementById('graph4'));
myChart4.setOption( {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
});
var myChart5 = echarts.init(document.getElementById('graph5'));
myChart5.setOption({
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		series: [
			{
				name: '截止到2017年3月22日',
				type: 'pie',
				radius: '40%',
				center: ['50%', '30%'],
				data: [
					{ value: 8, name: '实用新型' },
					{ value: 23, name: '发明专利' }
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		],
		color: ['rgb(209,67,63)', 'rgb(57,113,181)']
	});
	// 图形2
	var myChart2 = echarts.init(document.getElementById('graph2'));

	var data = [29, 14, 20, 26, 15, 31];
	var yMax = 35;
	var dataShadow = [];

	for (var i = 0; i < data.length; i++) {
		dataShadow.push(yMax);
	}

	var option2 = {
		xAxis: [
			{
				type: 'category',
				data: ['2016年10月', '2016年11月', '2016年12月', '2017年1月', '2017年2月', '2017年3月'],
				axisTick: {
					alignWithLabel: true
				}
			}
		],
		yAxis: {
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#999'
				}
			}
		},
		dataZoom: [
			{
				type: 'inside'
			}
		],
		series: [
			{ // For shadow
				type: 'bar',
				itemStyle: {
					normal: { color: 'rgba(0,0,0,0.05)' }
				},
				label: {
					normal: {
						show: true
					}
				},
				barGap: '-100%',
				barCategoryGap: '65%',
				data: [29, 14, 20, 26, 15, 31],
				animation: false
			},
			{
				type: 'bar',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
								{ offset: 0, color: '#83bff6' },
								{ offset: 0.5, color: '#188df0' },
								{ offset: 1, color: '#188df0' }
							]
						)
					},

					emphasis: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
								{ offset: 0, color: '#2378f7' },
								{ offset: 0.7, color: '#2378f7' },
								{ offset: 1, color: '#83bff6' }
							]
						)
					}
				},
				data: data
			}
		]
	};

	// Enable data zoom when user click bar.
	var zoomSize = 6;
	myChart2.on('click', function (params) {
		console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
		myChart2.dispatchAction({
			type: 'dataZoom',
			startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
			endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
		});
	});
	// 使用刚指定的配置项和数据显示图表。
	myChart2.setOption(option2);

	//echarts	3

}