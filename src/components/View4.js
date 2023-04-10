import React, { useRef, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as d3 from "d3";

const view4Data = [
  {
    year: 2010,
    sales: 13894163,
    capex: 764435.7498,
    profits: -6576872.37,
    market_cap: 14001791.78,
  },
  {
    year: 2010,
    sales: 15710758,
    capex: 892720.585,
    profits: 1702982.03,
    market_cap: 0,
  },
  {
    year: 2010,
    sales: 16854413,
    capex: 1109092.789,
    profits: 1549539.65,
    market_cap: 0,
  },
  {
    year: 2010,
    sales: 16723019,
    capex: 1087703.811,
    profits: 1555429.22,
    market_cap: 0,
  },
  {
    year: 2010,
    sales: 17972595,
    capex: 1131195.571,
    profits: 1735387.21,
    market_cap: 0,
  },
  {
    year: 2010,
    sales: 17686790,
    capex: 1127502.322,
    profits: 1518669.57,
    market_cap: 0,
  },
  {
    year: 2010,
    sales: 17910320,
    capex: 1167878.202,
    profits: 1671173.01,
    market_cap: 23081916.37,
  },
  {
    year: 2010,
    sales: 18448033,
    capex: 1151303.479,
    profits: 1909324.19,
    market_cap: 24538463.37,
  },
  {
    year: 2010,
    sales: 20351620,
    capex: 1317342.829,
    profits: 2275661.44,
    market_cap: 27163043.76,
  },
  {
    year: 2010,
    sales: 21018395,
    capex: 1404746.798,
    profits: 2077564.89,
    market_cap: 27269822.28,
  },
  {
    year: 2010,
    sales: 18952091,
    capex: 1293241.058,
    profits: 1553985.01,
    market_cap: 33855136.24,
  },
];

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));
const margin = { top: 20, right: 30, bottom: 30, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

export default function View4() {
  const classes = useStyles();
  const heatmapRef = useRef();

  useEffect(() => {
    // Create the SVG container for the heatmap
    const svg = d3
      .select(heatmapRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define the color scale for the heatmap
    const colorScale = d3
      .scaleLinear()
      .domain(d3.extent(view4Data, (d) => d.sales))
      .range(["white", "red"]);

    // Define the x and y scales for the heatmap
    const xScale = d3
      .scaleBand()
      .domain(view4Data.map((d) => d.year))
      .range([0, width]);
    const yScale = d3
      .scaleBand()
      .domain(["sales", "capex", "profits", "market_cap"])
      .range([height, 0]);

    // Create the heatmap rectangles
    svg
      .selectAll("rect")
      .data(view4Data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale("sales"))
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .attr("fill", (d) => colorScale(d.sales));

    // Add the x axis to the heatmap
    const xAxis = d3.axisBottom(xScale);
    svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

    // Add the y axis to the heatmap
    const yAxis = d3.axisLeft(yScale);
    svg.append("g").call(yAxis);
  }, []);

  return (
    <Paper className={classes.card}>
      <Typography variant="h4">View 4</Typography>
      <Typography variant="body1">View 4</Typography>
      <Container>
        <svg width={width} height={height} ref={heatmapRef}></svg>
      </Container>
    </Paper>
  );
}
