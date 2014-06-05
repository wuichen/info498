var myData = [
	{
		key: "Beer Price",
		values:
			[
				{x: "Phoenix - AZ" , y:7.64},
				{x: "Los Angeles - CA", y: 9.16},
				{x: "New York - NY", y: 10.29},
				{x: "Chicago - IL", y: 13.39},
				{x: "Houston - TX", y: 8.69},
				{x: "Philadelphia - PA", y: 8.04},
				{x: "San Antonio - TX", y: 8.45},
				{x: "San Diego - CA", y: 9.16},
				{x: "Dallas - TX", y: 9.17},
				{x: "San Jose - CA", y: 9.61},
				{x: "Jacksonville - FL", y: 8.19},
				{x: "Indianapolis - IN", y: 8.14},
				{x: "Austin - TX", y: 8.48},
				{x: "San Francisco - CA", y: 8.93},
				{x: "Columbus - OH", y: 7.99},
				{x: "Fort Worth - TX", y: 8.79},
				{x: "Charlotte - NC", y: 8.49},
				{x: "Detroit - MI", y: 8.45},
				{x: "El Paso - TX", y: 8.89},
				{x: "Memphis - TN", y: 7.54},
				{x: "Boston - MA", y: 8.59},
				{x: "Seattle - WA", y: 9.39},
				{x: "Denver - CO", y: 7.54},
				{x: "Baltimore - MD", y:8.49},
				{x: "Washington - DC", y: 7.99},
				{x: "Honolulu - HI", y: 9.09},
			]
	},
		{
		key: "Hourly Wage",
		values:
			[
				{x: "Phoenix - AZ" , y:12.69},
				{x: "Los Angeles - CA", y: 14.7},
				{x: "New York - NY", y: 16.36},
				{x: "Chicago - IL", y: 14.55},
				{x: "Houston - TX", y: 13.98},
				{x: "Philadelphia - PA", y: 11.29},
				{x: "San Antonio - TX", y: 11.63},
				{x: "San Diego - CA", y: 17.26},
				{x: "Dallas - TX", y: 14.19},
				{x: "San Jose - CA", y: 17.59},
				{x: "Jacksonville - FL", y: 13.39},
				{x: "Indianapolis - IN", y: 12.72},
				{x: "Austin - TX", y: 16.23},
				{x: "San Francisco - CA", y: 24.36},
				{x: "Columbus - OH", y: 12.3},
				{x: "Fort Worth - TX", y: 12.64},
				{x: "Charlotte - NC", y: 16.49},
				{x: "Detroit - MI", y: 7.95},
				{x: "El Paso - TX", y: 9.78},
				{x: "Memphis - TN", y: 11.14},
				{x: "Boston - MA", y: 17.27},
				{x: "Seattle - WA", y: 21.72},
				{x: "Denver - CO", y: 16.69},
				{x: "Baltimore - MD", y:12.42},
				{x: "Washington - DC", y: 22.91},
				{x: "Honolulu - HI", y: 15.77},
			]
	},
	
	
];
	

	nv.addGraph(function() {
		var chart = nv.models.multiBarChart()
		  .transitionDuration(350)
		  .margin({bottom: 150})
		  .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
		  .rotateLabels(-45)      //Angle to rotate x-axis labels.
		  .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
		  .groupSpacing(0.2)    //Distance between each group of bars.
		;


		chart.yAxis
			.tickFormat(d3.format(',.1f'));

		d3.select('#chart svg')
			.datum(myData)
			.transition().duration(500)
			.call(chart)
			;

		nv.utils.windowResize(chart.update);

		return chart;
	});