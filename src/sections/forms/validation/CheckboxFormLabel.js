import * as React from 'react';
import { FormControl, Grid, FormControlLabel, Radio, RadioGroup } from '@mui/material';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
import MainCard from 'components/MainCard';

export default function CheckboxLabels() {
  return (
    <MainCard title="Roles">
      <form>
        <Grid container>
          <Grid item>
            <FormControl title="okay" component="roles">
              <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group" row>
                <FormControlLabel value="submit" control={<Radio />} label="Submitter" />
                <FormControlLabel value="auth" control={<Radio />} label="Authorizer" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
}
