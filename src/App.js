import React from "react";
import "./App.css";
import AllPagesPDFViewer from "./pdf/all-pages";
import MeniuBlueRiverPDF from "./Meniu_Blue_River.pdf";
import MenuSection from "./menu/MenuSection";
import { foodEntries } from "./service/menuData";
import { Typography } from "@mui/material";


function App() {

  return (
    <div className="App">
      <div className="all-page-container">
        {/* <AllPagesPDFViewer pdf={MeniuBlueRiverPDF} /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Typography variant="h2" padding={4} style={{color: 'darkblue', fontWeight: 700}}>
          Restaurant Blue River
        </Typography>
        <Typography variant="h3" padding={4}>
          Meniu cu Valori nutritionale
        </Typography>
        {foodEntries.map(entry => <MenuSection {...entry} />)}
      </div>
    </div>
  );
}

export default App;
