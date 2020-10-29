import { validateFirstName,validateLastName,validateMobileNumber } from '../../utils/validation';
import { successToast, errorToast } from '../../utils/toast';

// Validate Function for redux form
export const validate = (values) => {
  let error;
  const errors = {};

  error = validateFirstName(values.firstName);
  if (error) {
    errors.firstName = error;
    }
    
  error = validateLastName(values.lastName);
  if (error) {
    errors.lastName = error;
  }

  error = validateMobileNumber(values.mobileNumber);
  if (error) {
    errors.mobileNumber = error;
  }

  return errors;
};

export const renderToast = (status, err) => {
  if (status === 'success') {
    successToast('User succesfully updated');
  } else if (status === 'failed') {
    errorToast(err.message);
  }
};