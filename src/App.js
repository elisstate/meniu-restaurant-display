import React from 'react';
// import { Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
import './App.css';
import AllPagesPDFViewer from "./pdf/all-pages";
import MeniuBlueRiverPDF from "./Meniu_Blue_River.pdf";

// const categories = [
//   'Gustarti calde',
//   'Gustari reci',
//   'Preparate din paste',
//   'Ciorbe',
//   'Preparate din peste',
//   'Preparate din carne de vita',
//   'Preparate din carne de pui',
//   'Preparate din carne de porc',
//   'Preparate la gratar',
//   'Garnituri',
//   'Salate',
//   'Desert',
//   'Bauturi'
// ]

// const Item = styled(Paper)(() => ({
//   textAlign: 'center',
//   height: 60,
//   fontSize: 40,
//   lineHeight: '60px',
//   cursor: 'pointer'
// }));

function App() {
  // const [expanded, setExpanded] = useState([])

  // const addExpand = cat => {
  //   setExpanded(prev => {
  //     const prevExapnded = [...prev]
  //     if (prevExapnded.findIndex(c => c === cat) !== -1) {
  //       prevExapnded.splice(prevExapnded.findIndex(c => c === cat), 1)
  //     } else {
  //       prevExapnded.push(cat)
  //     }

  //     return prevExapnded
  //   })
  // }

  // function displayItem(cat) {
  //   if (expanded.findIndex(v => v === cat) !== -1) {
  //     return (
  //       <React.Fragment>
  //         <Item key={cat} square={true} variant="outlined" onClick={() => addExpand(cat)}>
  //           {cat}
  //         </Item>
  //         <div> yooo</div>
  //       </React.Fragment>
  //     )
  //   } else {
  //     return (
  //       <Item key={cat} square={true} variant="outlined" onClick={() => addExpand(cat)}>
  //         {cat}
  //       </Item>
  //     )
  //   }
  // }

  return (
    <div className="App">
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={MeniuBlueRiverPDF} />
      </div>
    </div>
  );
}

export default App;
