// Generate a dynamic line graph using D3.js

let graphOn = 0

const graphBtn = document.getElementById('graph');
const logwrap = document.getElementById('logwrap');
const statswrap = document.getElementById('statswrap');
let sliderData = document.querySelectorAll('output'), i;

const sliderHide = () => {
  for (i = 0; i < sliderData.length; ++i) {
    sliderData[i].style.display = 'none';
  }
}

const sliderShow = () => {
  for (i = 0; i < sliderData.length; ++i) {
    sliderData[i].style.display = 'block';
  }
}

logwrap.style.display = 'none';
statswrap.style.display = 'none';
sliderHide();

graphBtn.onclick = () => {
  if (graphOn == 0) {
    logwrap.style.display = 'block';
    statswrap.style.display = 'block';
    sliderShow();
    graphOn += 1;
  } else {
    logwrap.style.display = 'none';
    statswrap.style.display = 'none';
    sliderHide();
    graphOn -= 1;
  }
}

let n = 40,
  random = d3.randomNormal(0.0, 0.0),
  data = d3.range(n).map(random);

let svg = d3.select('svg'),
  margin = { top: 10, right: 10, bottom: 10, left: 30 },
  width = +svg.attr('width') - margin.left - margin.right,
  height = +svg.attr('height') - margin.top - margin.bottom,
  graph = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

let x = d3
  .scaleLinear()
  .domain([0, n - 1])
  .range([0, width]);

let y = d3.scaleLinear().domain([-1.0, 1.0]).range([height, 0]);

let line = d3
  .line()
  .x(function (d, i) {
    return x(i)
  })
  .y(function (d, i) {
    return y(d)
  });

graph
  .append('defs')
  .append('clipPath')
  .attr('id', 'clip')
  .append('rect')
  .attr('width', width)
  .attr('height', height);

graph
  .append('g')
  .attr('class', 'axis axis--x')
  .attr('transform', 'translate(0,' + y(0) + ')')
  .call(d3.axisBottom(x).tickFormat(''));

svg
  .append('text')
  .attr('class', 'axis axis--x')
  .attr('text-anchor', 'end')
  .attr('x', width + 6)
  .attr('y', height - 6)
  .text('Time ➡');

graph.append('g').attr('class', 'axis axis--y').call(d3.axisLeft(y));

graph
  .append('g')
  .attr('clip-path', 'url(#clip)')
  .append('path')
  .datum(data)
  .attr('class', 'line')
  .transition()
  .duration(500)
  .ease(d3.easeLinear)
  .on('start', tick);

function tick() {
  data.push(avgVel());

  d3.select(this).attr('d', line).attr('transform', null);

  d3.active(this)
    .attr('transform', 'translate(' + x(-1) + ',0)')
    .transition()
    .on('start', tick);

  data.shift();
}
