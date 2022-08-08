// material-ui
import { Grid } from '@mui/material';

// project imports
import CheckboxFormsLabel from 'sections/forms/validation/CheckboxFormLabel';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const FormsValidation = () => (
  <Grid container spacing={2.5}>
    <Grid item xs={12} md={12}>
      <CheckboxFormsLabel name="testing" />
    </Grid>
  </Grid>
);

export default FormsValidation;
