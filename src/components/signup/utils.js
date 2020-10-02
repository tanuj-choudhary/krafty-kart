import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../../utils/validation';

import { successToast, errorToast } from '../../utils/toast';

// Validate Function for redux form
export const validate = (values) => {
  let error;
  const errors = {};

  error = validateFirstName(values.firstname);
  if (error) {
    errors.firstname = error;
  }

  error = validateLastName(values.lastname);
  if (error) {
    errors.lastname = error;
  }

  error = validateEmail(values.email);
  if (error) {
    errors.email = error;
  }

  error = validatePassword(values.password);
  if (error) {
    errors.password = error;
  }

  error = validateConfirmPassword(values.password, values.confirmPassword);
  if (error) {
    errors.confirmPassword = error;
  }
  return errors;
};

export const renderToast = (status, err) => {
  if (status === 'success') {
    successToast('You have succesfully signed up');
  } else if (status === 'failed') {
    errorToast(err.message);
  }
};

export const formBlockText = {
  heading: 'Already have an account?',
  para: `Lorem ipsum dolor sit amet elit. Mollitia ab quasi eos sequi, adipisci
  deserunt asperiores veritatis dolore at repudiandae.`,
  link: '/login',
  linkText: 'login',
};
