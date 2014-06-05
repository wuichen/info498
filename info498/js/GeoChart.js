     google.load('visualization', '1', {'packages': ['geochart']});
     google.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['City',   'Minutes of Work'],
        ['Phoenix',      36.12],
        ['Los Angeles',     37.39],
        ['New York',    37.73],
        ['Chicago',     55.21],
        ['Houston',   37.29],
        ['Philadelphia',     42.74],
        ['San Antonio',   43.59],
        ['San Diego',  31.85],
        ['Dallas', 38.76],
        ['San Jose',     32.78],
        ['Jacksonville',  36.69],
        ['Indianapolis',  38.38],
        ['Austin',  31.34],
        ['San Francisco',  21.99],
        ['Columbus',  38.97],
        ['Fort Worth',  41.72],
        ['Charlotte',  30.89],
        ['Detroit',  63.79],
        ['El Paso',  54.53],
        ['Memphis',  40.59],
        ['Boston',  29.84],
        ['Seattle',  25.94],
        ['Denver',  27.1],
        ['Baltimore',  41],
        ['Washington',  20.92],
        ['Honolulu',  34.6],
      ]);

      var options = {
        region: 'US',
        displayMode: 'markers',
        colorAxis: {colors: ['#4CC6EF', 'orange']},
        resolution: 'provinces',
        sizeAxis: {minSize: 0,  maxSize: 25},
		backgroundColor: '#eee'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('GeoChart'));
      chart.draw(data, options);
    };