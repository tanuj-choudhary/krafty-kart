import { validateFirstName,validateLastName } from '../../utils/validation';

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

  return errors;
};
