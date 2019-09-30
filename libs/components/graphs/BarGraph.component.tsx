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
    const data = [10, 20, 30, 40, 50, 100, 60, 70, 4, 26, 170, 130, 123];

    const svg = d3
      .select(elm)
      .attr("width", "620px")
      .attr("height", "300px")
      .append("g")
      .attr("transform", "translate(10,10)");

    svg
      .append("text")
      .text("Presupuestos")
      .attr("x", 0)
      .attr("y", 17)
      .attr("font-size", 17);

    svg
      .append("g")
      .attr("transform", `translate(0, 40)`)
      .selectAll("text")
      .data([13, 12, 10, 9, 8, 5, 4, 3, 1])
      .data(Array(13).fill(null).map((_, i) => i + 1).reverse())
      .enter()
      .append("text")
      .attr("transform", (d, i) => `translate(0, ${i * 18})`)
      .attr("font-size", 17)
      .text(d => d);

    svg
      .append("g")
      .attr("transform", `translate(30, 280)`)
      .selectAll("text")
      .data(
        [
          ...Array(13).fill(null).map((_, i) => i + 1),
          'Días'
        ]
      )
      .enter()
      .append("text")
      .attr("transform", (d, i) => `translate(${i * 40}, 0)`)
      .attr("font-size", 17)
      .text(d => d);
    
    const h = 1.3;
    svg
      .append("g")
      .attr("transform", "translate(30, 30)")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .style("fill", (d, i) => i < 10 ? 'rgb(34, 255, 6)' : 'rgb(251, 0, 6)')
      .attr("y", d => 227 - (d * h))
      .attr("height", d => d * h)
      .attr("width", 24)
      .attr("transform", (d, i) => `translate(${i * 40}, 0)`);

    svg
      .append('rect')
      .attr('fill', 'black')
      .attr('width', 1)
      .attr('height', 230)
      .attr("transform", `translate(420, 30)`);
  }

  useEffect(() => {
    if (svgRef.current) {
      loadGraph(svgRef.current);
    }
  }, [svgRef.current]);

  return <svg ref={svgRef}></svg>;
}
