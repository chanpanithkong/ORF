import React, { Component } from 'react';
// material-ui
import { Divider, Grid, InputLabel, Stack, TextareaAutosize, CardActions, Button } from '@mui/material';
// project imports
// import MainCard from 'components/MainCard';
import RadioGroupForms from 'sections/forms/validation/RadioGroupForms';
import DateSelection from 'sections/forms/wizard/basic-wizard/DateSelection';
import { FormattedMessage } from 'react-intl';
// import moment from 'moment';
// assets
class questionnaire extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputLabel>
            <FormattedMessage id="profile" />
          </InputLabel>
          <TextareaAutosize aria-label="input your answer here" minRows={2} placeholder="answer" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel>
            <FormattedMessage id="rep-mon" />
          </InputLabel>
          <DateSelection></DateSelection>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <InputLabel></InputLabel>
              <RadioGroupForms name="01. Issue in FCUBS" />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <InputLabel></InputLabel>
              <RadioGroupForms name="02. Issues in BI" />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <InputLabel></InputLabel>
              <RadioGroupForms name="02. Issues in BI" />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <InputLabel></InputLabel>
              <RadioGroupForms name="02. Issues in BI" />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <InputLabel>questionnaire 5</InputLabel>
              <TextareaAutosize aria-label="input your answer here" minRows={5} placeholder="answer" style={{ width: '100%' }} />
            </Stack>
          </Grid>
          <Divider />
          <CardActions>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ width: 1, px: 1.5, py: 0.75 }}>
              <Button color="error" size="small">
                Cancel
              </Button>
              <Button variant="contained" size="small">
                Submit
              </Button>
            </Stack>
          </CardActions>
        </Grid>
      </Grid>
    );
  }
}

export default questionnaire;
