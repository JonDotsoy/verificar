import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default ({
  width = 150,
  height = 150,
  margin = 1,
  data = [4, 4, 4, 4],
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  function loadGraph(elm: SVGSVGElement) {
    var radius = Math.min(width, height) / 2 - margin;

    const svgParent = d3.select(elm)
      .attr('width', width)
      .attr('height', height);

    const svg = svgParent
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const color = d3.scaleOrdinal<string>()
      .domain(data.map(e => e.toString()))
      .range(["rgb(252,255,13)", "rgb(34,255,6)", "rgb(176,176,176)", "rgb(251,0,6)"])


    // @ts-ignore
    global.color = color;

    const data_ready = d3.pie()(data);

    const path = svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path');


    path
      .attr('d',
        // @ts-ignore
        d3.arc()
          .innerRadius(0)
          .outerRadius(radius),
      );

    path
      .attr('fill', d => color((d.index + 1).toString()))
      .attr("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", 0.7)

    svgParent.append('g')
      .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")")
      .append('circle')
      .attr('r', '55')
      .style("stroke-width", "1px")
      .attr("stroke", "black")
      .attr('fill', 'white');

    svgParent.append('text')
      .text('Presupuestos')
      .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")")
      .attr('font-size', '15px')
      .attr('x', '-30%')

    svgParent.append('text')
      .text('77 vehiculos')
      .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")")
      .attr('font-size', '15px')
      .attr('x', '-30%')
      .attr('y', '20px');
  }

  useEffect(() => {
    if (svgRef.current) {
      loadGraph(svgRef.current);
    }
  }, [svgRef.current]);

  return <svg ref={svgRef}></svg>;
}
