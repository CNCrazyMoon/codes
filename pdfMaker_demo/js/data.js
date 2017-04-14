window.onload = function () {

	// 图形1
	var myChart = echarts.init(document.getElementById('graph1'));
	// 指定图表的配置项和数据
	option = {
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
	myChart.setOption(option);

	// 图形2
	var myChart2 = echarts.init(document.getElementById('graph2'));

	var data = [29, 14, 20, 26, 15, 31];
	var yMax = 35;
	var dataShadow = [];

	for (var i = 0; i < data.length; i++) {
		dataShadow.push(yMax);
	}

	option = {
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
	myChart2.setOption(option);

}