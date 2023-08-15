import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Review() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Thank you for completing the new patient registration forms. 
      </Typography>
      
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardName"
            label="Sign to Acknowledge"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="I've completed all forms accurately to the best of my knowledge."
          />
        </Grid>


    </React.Fragment>

  );
}