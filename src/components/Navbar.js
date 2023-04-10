import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          className={classes.title}
        >
          Landing Page
        </Typography>
        <nav>
          <Link
            component={RouterLink}
            to="/view1"
            color="inherit"
            className={classes.link}
          >
            View 1
          </Link>
          <Link
            component={RouterLink}
            to="/view2"
            color="inherit"
            className={classes.link}
          >
            View 2
          </Link>
          <Link
            component={RouterLink}
            to="/view3"
            color="inherit"
            className={classes.link}
          >
            View 3
          </Link>
          <Link
            component={RouterLink}
            to="/view4"
            color="inherit"
            className={classes.link}
          >
            View 4
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
