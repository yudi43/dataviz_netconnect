import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";
import View4 from "./View4";
import theme from "../themes/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  title: {
    flexGrow: 1,
  },
  view: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    backgroundColor: theme.palette.primary.main,
  },
  view2: {
    backgroundColor: theme.palette.primary.dark,
  },
  view3: {
    backgroundColor: theme.palette.primary.light,
  },
  view4: {
    backgroundColor: theme.palette.primary.contrastText,
  },
  activeButton: {
    backgroundColor: theme.palette.primary.dark + " !important",
    color: theme.palette.primary.contrastText + " !important",
    "&:hover": {
      backgroundColor: theme.palette.primary.light + " !important",
    },
  },
  viewSelectButton: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "1.2em",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const [selectedView, setSelectedView] = useState("View 1");

  const handleViewClick = (view) => {
    setSelectedView(view);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => handleViewClick("View 1")}
            disabled={selectedView === "View 1"}
            className={selectedView === "View 1" ? classes.activeButton : ""}
          >
            <Typography className={classes.viewSelectButton}>View 1</Typography>
          </Button>
          <Button
            color="inherit"
            onClick={() => handleViewClick("View 2")}
            disabled={selectedView === "View 2"}
            className={selectedView === "View 2" ? classes.activeButton : ""}
          >
            <Typography className={classes.viewSelectButton}>View 2</Typography>
          </Button>
          <Button
            color="inherit"
            onClick={() => handleViewClick("View 3")}
            disabled={selectedView === "View 3"}
            className={selectedView === "View 3" ? classes.activeButton : ""}
          >
            <Typography className={classes.viewSelectButton}>View 3</Typography>
          </Button>
          <Button
            color="inherit"
            onClick={() => handleViewClick("View 4")}
            disabled={selectedView === "View 4"}
            className={selectedView === "View 4" ? classes.activeButton : ""}
          >
            <Typography className={classes.viewSelectButton}>View 4</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      {selectedView === "View 1" && (
        <div className={`${classes.view} ${classes.view1}`}>
          <Typography variant="h3" component="h1">
            <View1 />
          </Typography>
        </div>
      )}
      {selectedView === "View 2" && (
        <div className={`${classes.view} ${classes.view2}`}>
          <Typography variant="h3" component="h1">
            <View2 />
          </Typography>
        </div>
      )}
      {selectedView === "View 3" && (
        <div className={`${classes.view} ${classes.view3}`}>
          <Typography variant="h3" component="h1">
            <View3 />
          </Typography>
        </div>
      )}
      {selectedView === "View 4" && (
        <div className={`${classes.view} ${classes.view4}`}>
          <Typography variant="h3" component="h1">
            <View4 />
          </Typography>
        </div>
      )}
    </div>
  );
}
