import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Container, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const View2Data = [
  { year: 2010, sales: 13894163 },
  { year: 2011, sales: 15710758 },
  { year: 2012, sales: 16854413 },
  { year: 2013, sales: 16723019 },
  { year: 2014, sales: 17972595 },
  { year: 2015, sales: 17686790 },
  { year: 2016, sales: 17910320 },
  { year: 2017, sales: 18448033 },
  { year: 2018, sales: 20351620 },
  { year: 2019, sales: 21018395 },
  { year: 2020, sales: 18952091 },
];

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

export default function View2() {
  const classes = useStyles();
  const chartRef = useRef(null);
  const data = View2Data;
  useEffect(() => {
    const svg = d3.select(chartRef.current);

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.sales)])
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .tickValues(
            d3.range(
              d3.min(data, (d) => d.year),
              d3.max(data, (d) => d.year) + 1,
              1
            )
          )
          .tickFormat(d3.format("d"))
      );

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(null, "s"));

    const line = d3
      .line()
      .x((d) => x(d.year))
      .y((d) => y(d.sales));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#1976d2")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg.append("g").call(xAxis);

    svg.append("g").call(yAxis);
  }, []);

  return (
    <Paper className={classes.card}>
      <Typography variant="h4">View 2</Typography>
      <Typography variant="body1">View 2</Typography>
      <Container>
        <svg width={width} height={height} ref={chartRef}></svg>
      </Container>
    </Paper>
  );
}
