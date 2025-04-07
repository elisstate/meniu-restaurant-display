import * as React from 'react';
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';
import MenuItemDisplay from "./MenuItemDisplay";

const PRODUS_CONGELAT = "Produs congelat"
export default function MenuSection(props) {

    return <Paper elevation={4} outlined square={false} style={{marginBottom: 20, textAlign: 'left', paddingLeft: 40, paddingRight: 40}}>
        <Typography variant="h3" paddingY={4}>
            {props.category}
        </Typography>

        {props?.entries.map(elem =>  <MenuItemDisplay {...elem} />)}
        <div>
        <sup>*</sup>{PRODUS_CONGELAT}
        </div>
    </Paper>
}