// material-ui
import { Grid } from '@mui/material';

// project imports
import CheckboxFormsLabel from 'sections/forms/validation/CheckboxFormLabel';
// import LoginForms from 'sections/forms/validation/LoginForms';
// import InstantFeedback from 'sections/forms/validation/InstantFeedback';
// import RadioGroupForms from 'sections/forms/validation/RadioGroupForms';
// import CheckboxForms from 'sections/forms/validation/CheckboxForms';
// import SelectForms from 'sections/forms/validation/SelectForms';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const FormsValidation = () => (
  <Grid container spacing={2.5}>
    <Grid item xs={12} md={12}>
      <h1>profile component</h1>
    </Grid>
    <Grid item xs={12} md={12}>
      <CheckboxFormsLabel name="testing" />
    </Grid>
  </Grid>
);

export default FormsValidation;
