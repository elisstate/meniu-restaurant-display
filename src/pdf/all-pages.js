import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Typography, Box, CircularProgress } from "@mui/material";
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  const loadingComp = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh',
            justifyContent: 'center',  flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{paddingBottom: 10}}>Se incarca meniul!</Typography>
            <CircularProgress />
        </Box>
    )
  }

  return (
    <Document
        file={pdf}
        options={{ workerSrc: "pdf.worker.js" }}
        loading={loadingComp()}
        onLoadSuccess={onDocumentLoadSuccess}
        noData={loadingComp()}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} loading={loadingComp()}
        fillWidth={true}/>
      ))}
    </Document>
  );
}
