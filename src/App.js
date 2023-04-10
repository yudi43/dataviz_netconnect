import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./App.css";
import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import View1 from "./components/View1";
import View2 from "./components/View2";
import View3 from "./components/View3";
import View4 from "./components/View4";

function App() {
  console.log("In the app.js component");
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/view1" element={<View1 />} />
            <Route path="/view2" element={<View2 />} />
            <Route path="/view3" element={<View3 />} />
            <Route path="/view4" element={<View4 />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
