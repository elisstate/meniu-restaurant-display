import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { frozenIngredients } from '../service/menuData';

export default function MenuItemDisplay(props) {
  const displayIngredient = (ingredient, index) => {
    const addComma = index !== props.ingredients.length - 1;

    if (frozenIngredients.includes(ingredient)) {
      return <React.Fragment>{ingredient}<sup>*</sup>{addComma && <React.Fragment>, </React.Fragment>}
      </React.Fragment>
    }
    return <React.Fragment>{ingredient}{addComma && <React.Fragment>, </React.Fragment>}
    </React.Fragment>
  }

  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon>expand_more</Icon>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" style={{wordBreak: 'break-word'}}>{props.name}</Typography>
          <Typography variant="h6" style={{display: 'flex', alignItems: 'end', wordWrap: 'break-word'}}>{props.weight}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{paddingLeft: 24}}>
          Ingrediente: {props.ingredients.map((ing, index) => displayIngredient(ing, index))}
        </AccordionDetails>
        <AccordionDetails style={{paddingLeft: 24}}>
          Declaratie Nutritionala: {props.nutrients}
        </AccordionDetails>
        {props.allergens && !!props.allergens.length &&
          <AccordionDetails style={{paddingLeft: 24}}>
            Alergeni: {props.allergens.join(", ")}
          </AccordionDetails>
        }
      </Accordion>
  );
}
