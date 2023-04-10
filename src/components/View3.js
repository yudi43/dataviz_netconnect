import React, { useRef, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as d3 from "d3";

const View3Data = [
  { sector: "Aerospace & Defence", profits: 387409.19 },
  { sector: "Alternative Energy", profits: 7448.61 },
  { sector: "Automobiles & Parts", profits: 1272000.78 },
  { sector: "Banks", profits: 734744.65 },
  { sector: "Beverages", profits: 270453.22 },
  { sector: "Biotechnology", profits: -192361.37 },
  { sector: "Chemicals", profits: 831481.68 },
  { sector: "Commercial Vehicles & Trucks", profits: 176.12 },
  { sector: "Computer Hardware", profits: 278.72 },
  { sector: "Computer Services", profits: 186.04 },
  { sector: "Construction & Materials", profits: 547897.81 },
  { sector: "Electrical equipment", profits: -6388536.47 },
  { sector: "Electricity", profits: 375453.87 },
  { sector: "Electronic & Electrical equipment", profits: 87839.7 },
  { sector: "Electronic Equipment", profits: 881345 },
  { sector: "Equity Investment Instruments", profits: 501.16 },
  { sector: "Financial Services", profits: 121156.6 },
  { sector: "Fixed Line Telecommunications", profits: 634079.03 },
  { sector: "Food & Drug Retailers", profits: 34696.08 },
  { sector: "Food Producers", profits: 520213.44 },
  { sector: "Forestry & Paper", profits: 44341.52 },
  { sector: "Gas & Water", profits: 148021.42 },
  { sector: "General Industrials", profits: 492844.22 },
  { sector: "General Retailers", profits: 96992.93 },
  { sector: "Health care equipment & services", profits: 349139.78 },
  { sector: "Household Goods & Home Construction", profits: 312967.42 },
  { sector: "Industrial Machinery", profits: 474.68 },
  { sector: "Industrial Metals & Mining", profits: 204347.11 },
  { sector: "Industrial Transportation", profits: 47529.18 },
  { sector: "Internet", profits: 330.98 },
  { sector: "Leisure goods", profits: 169787.6 },
  { sector: "Life Insurance", profits: -101948.58 },
  { sector: "Media", profits: 69243.33 },
  { sector: "Mining", profits: 348291.4 },
  { sector: "Mobile Telecommunications", profits: 74370.11 },
  { sector: "Nonequity Investment Instruments", profits: 381.3 },
  { sector: "Nonlife Insurance", profits: 854.51 },
  { sector: "Oil & Gas Producers", profits: 2234612.27 },
  { sector: "Oil Equipment, Services & Distribution", profits: 189720.33 },
  { sector: "Other Financials", profits: 5651.47 },
  { sector: "Personal & Household Goods", profits: 708 },
  { sector: "Personal Goods", profits: 311169.28 },
  { sector: "Pharmaceuticals", profits: 1407476.6 },
  { sector: "Real Estate Investment & Services", profits: 55731.2 },
  { sector: "Semiconductors", profits: 1333.28 },
  { sector: "Software & Computer Services", profits: 1381336.74 },
  { sector: "Support Services", profits: 125623.88 },
  { sector: "Technology Hardware & Equipment", profits: 1704326.66 },
  { sector: "Telecommunications", profits: 73.86 },
  { sector: "Telecommunications equipment", profits: -78.41 },
  { sector: "Tobacco", profits: 296930.9 },
  { sector: "Toys", profits: 105.49 },
  { sector: "Travel & Leisure", profits: 162434.04 },
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

export default function View3() {
  const classes = useStyles();
  const chartRef = useRef(null);

  useEffect(() => {
    // Set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // Create chart group element
    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // X axis
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(View3Data.map((d) => d.sector))
      .padding(0.2);
    chart
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Y axis
    const y = d3
      .scaleLinear()
      .domain([
        d3.min(View3Data, (d) => d.profits),
        d3.max(View3Data, (d) => d.profits),
      ])
      .range([height, 0]);
    chart.append("g").call(d3.axisLeft(y));

    // Bars
    chart
      .selectAll(".bar")
      .data(View3Data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.sector))
      .attr("y", (d) => y(d.profits))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.profits))
      .attr("fill", "#69b3a2");
  }, []);

  return (
    <Paper className={classes.card}>
      <Typography variant="h4">View 3</Typography>
      <Typography variant="body1">View 3</Typography>
      <Container>
        <svg width={width} height={height} ref={chartRef}></svg>
      </Container>
    </Paper>
  );
}
