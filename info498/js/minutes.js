var margin = {top: 40, right: 20, bottom: 170, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var formatPercent = d3.format("g");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

d3.csv("data/minutesBuy.csv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.city; }));
  y.domain([0, d3.max(data, function(d) { return d.minutes; })]);

  var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>minutes:</strong> <span style='color:red'>" + d.minutes + "</span><br/><strong>city:</strong> <span style='color:red'>" + d.city + "</span>";
  })

var svg = d3.select("#minutes").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
                return "rotate(-65)"
                });;

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("minutes");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.city); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.minutes); })
      .attr("height", function(d) { return height - y(d.minutes); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

});

function type(d) {
  d.minutes = +d.minutes;
  return d;
}