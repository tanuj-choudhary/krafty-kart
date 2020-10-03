import { validateEmail, validatePassword } from '../../utils/validation';
import { successToast, errorToast } from '../../utils/toast';

// Validate Function for redux form
export const validate = (values) => {
  let error;
  const errors = {};

  error = validateEmail(values.email);
  if (error) {
    errors.email = error;
  }

  error = validatePassword(values.password);
  if (error) {
    errors.password = error;
  }

  return errors;
};

export const renderToast = (status, err) => {
  if (status === 'failed') {
    errorToast(err.message);
  }
};

export const formBlockText = {
  heading: 'Not have an account?',
  para: `Lorem ipsum dolor sit amet elit. Mollitia ab quasi eos sequi, adipisci
  deserunt asperiores veritatis dolore at repudiandae.`,
  link: '/signup',
  linkText: 'signup',
};
