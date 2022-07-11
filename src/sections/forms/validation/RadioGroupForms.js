import { useDispatch } from 'store';
import * as React from 'react';

// material-ui
import {
  Stack,
  InputLabel,
  TextareaAutosize,
  Grid,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  FormLabel
} from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
// import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'store/reducers/snackbar';

// third-party
// import { setNestedObjectValues, useFormik } from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup';

/**
 * 'Select your favorite color'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  color: yup.string().required('Color selection is required')
});

// ==============================|| FORM VALIDATION - RADIO GROUP FORMIK  ||============================== //

const RadioGroupForms = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      color: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('select form submit - ', values);
      dispatch(
        openSnackbar({
          open: true,
          message: 'Radio - Submit Success',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );
    }
  });
  const [value, setValue] = React.useState('femaile');
  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log('you have changed this');
    // console.log(event.target.value);
  };

  return (
    <MainCard>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">{props.name}</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              {value == 'yes' && (
                <Grid item xs={12}>
                  <Stack spacing={2}>
                    <InputLabel></InputLabel>
                    <TextareaAutosize aria-label="input your answer here" minRows={5} placeholder="answer" style={{ width: '100%' }} />
                  </Stack>
                </Grid>
              )}
            </FormControl>
            {formik.errors.color && (
              <FormHelperText error id="standard-weight-helper-text-email-login">
                {' '}
                {formik.errors.color}{' '}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default RadioGroupForms;
