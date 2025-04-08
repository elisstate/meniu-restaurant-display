import * as React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItemDisplay from "./MenuItemDisplay";
import { frozenIngredients } from "../service/menuData";

const PRODUS_CONGELAT = "Produs congelat";
export default function MenuSection(props) {
  const isFrozenIngredientPresent = (entries) => {
    return !!entries.find((entry) =>
      entry.ingredients.find((ing) => frozenIngredients.includes(ing))
    );
  };

  return (
    <Paper
      elevation={4}
      outlined
      square={false}
      style={{
        marginBottom: 20,
        textAlign: "left",
      }}
    >
      <Typography variant="h3" paddingY={4} style={{textAlign: 'center'}}>
        {props.category}
      </Typography>

      {props?.entries.map((elem) => (
        <MenuItemDisplay {...elem} />
      ))}
      {isFrozenIngredientPresent(props.entries) && (
        <div style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 20}}>
          <sup>*</sup>
          {PRODUS_CONGELAT}
        </div>
      )}
    </Paper>
  );
}
