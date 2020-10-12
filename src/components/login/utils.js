import { validateEmail } from '../../utils/validation';
import { errorToast } from '../../utils/toast';

// Validate Function for redux form
export const validate = (values) => {
  let error;
  const errors = {};

  error = validateEmail(values.email);
  if (error) {
    errors.email = error;
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
