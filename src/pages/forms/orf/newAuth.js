// material-ui
import { Grid } from '@mui/material';

// project imports
import CheckboxForms from 'sections/forms/validation/CheckboxForms';
import CheckboxFormsLabel from 'sections/forms/validation/CheckboxFormLabel';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const FormsValidation = () => (
  <Grid container spacing={2.5}>
    <Grid item xs={12} md={12}>
      <CheckboxForms />
      <CheckboxFormsLabel name="testing" />
    </Grid>
  </Grid>
);

export default FormsValidation;
