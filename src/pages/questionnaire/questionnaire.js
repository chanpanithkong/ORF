// material-ui
import { Button, CardContent, CardActions, Divider, Grid, InputLabel, TextareaAutosize, Stack } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import RadioGroupForms from 'sections/forms/validation/RadioGroupForms';
// assets

// ==============================|| LAYOUTS - STICKY ACTIONBAR ||============================== //

function questionnaire() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="" content={false} sx={{ overflow: 'visible' }}>
          <CardContent>
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
          </CardContent>
          <Divider />
          <CardActions>
            <Stack direction="row" spacing={1} justifyContent="center" sx={{ width: 1, px: 1.5, py: 0.75 }}>
              <Button color="error" size="small">
                Cancel
              </Button>
              <Button variant="contained" size="small">
                Submit
              </Button>
            </Stack>
          </CardActions>
        </MainCard>
      </Grid>
    </Grid>
  );
}

export default questionnaire;
