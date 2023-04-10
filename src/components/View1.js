import React, { useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Paper } from "@mui/material";
import * as d3 from "d3";

const margin = { top: 20, right: 30, bottom: 30, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const useStyles = makeStyles((theme) => ({
  chart: {
    height: 400,
    width: "100%",
    margin: "auto",
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const View1Data = [
  { country: "Argentina", sales: 0 },
  { country: "Australia", sales: 854851 },
  { country: "Austria", sales: 611130 },
  { country: "Belgium", sales: 1072679 },
  { country: "Bermuda", sales: 99667 },
  { country: "Brazil", sales: 1517841 },
  { country: "Canada", sales: 999279 },
  { country: "Cayman Islands", sales: 147565 },
  { country: "China", sales: 23413203 },
  { country: "Colombia", sales: 38921 },
  { country: "Czech Republic", sales: 33460 },
  { country: "Denmark", sales: 863142 },
  { country: "Finland", sales: 1149026 },
  { country: "France", sales: 11726498 },
  { country: "Germany", sales: 18413130 },
  { country: "Greece", sales: 17878 },
  { country: "Hong Kong", sales: 270611 },
  { country: "Hungary", sales: 14561 },
  { country: "Iceland", sales: 9904 },
  { country: "India", sales: 2339311 },
  { country: "Iraq", sales: 5.0e15 },
  { country: "Ireland", sales: 1592270 },
  { country: "Israel", sales: 436401 },
  { country: "Italy", sales: 3727633 },
  { country: "Japan", sales: 31601001 },
  { country: "Liechtenstein", sales: 42036 },
  { country: "Luxembourg", sales: 816736 },
  { country: "Malaysia", sales: 297552 },
  { country: "Malta", sales: 5183 },
  { country: "Mexico", sales: 123692 },
  { country: "Netherlands", sales: 4278455 },
  { country: "New Zealand", sales: 125569 },
  { country: "Norway", sales: 1224368 },
  { country: "Poland", sales: 2201 },
  { country: "Portugal", sales: 193891 },
  { country: "Russia", sales: 1331979 },
  { country: "Saudi Arabia", sales: 1177240 },
  { country: "Singapore", sales: 146377 },
  { country: "Slovenia", sales: 14833 },
  { country: "South Africa", sales: 143317 },
  { country: "South Korea", sales: 9108190 },
  { country: "Spain", sales: 2708606 },
  { country: "Sweden", sales: 2116491 },
  { country: "Switzerland", sales: 3966512 },
  { country: "Taiwan", sales: 5125375 },
  { country: "Thailand", sales: 8535 },
  { country: "Turkey", sales: 429871 },
  { country: "UK", sales: 13637030 },
  { country: "Ukraine", sales: 2461 },
  { country: "United Arab Emirates", sales: 59761 },
  { country: "USA", sales: 46973283 },
  { country: "Venezuela", sales: 504837 },
];
export default function View1() {
  const dt = View1Data;
  const classes = useStyles();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!dt) return;

    const svg = d3.select(chartRef.current);

    // Define chart dimensions and margins
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    // Define scales for x and y axes
    const x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(dt.map((d) => d.country));

    const y = d3
      .scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(dt, (d) => d.sales)]);

    // Define chart container
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create x axis
    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Create y axis
    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "s"))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Sales (€million)");

    // Create bars
    const bars = g
      .selectAll(".bar")
      .data(dt)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.country))
      .attr("y", (d) => y(d.sales))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.sales));

    // Add animation
    bars
      .transition()
      .duration(750)
      .delay((d, i) => i * 50)
      .attr("y", (d) => y(d.sales))
      .attr("height", (d) => height - y(d.sales));
  }, [dt]);

  return (
    <Paper className={classes.card}>
      <Typography variant="h4">View 1</Typography>
      <Typography variant="body1">View 1</Typography>
      <Container>
        <svg width={width} height={height} ref={chartRef}></svg>
      </Container>
    </Paper>
  );
}
