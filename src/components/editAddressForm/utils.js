import { validateFirstName,validateMobileNumber,validateAddress,validateAddressType,validatePincode } from '../../utils/validation';

// Validate Function for redux form
export const validate = (values) => {
  let error;
  const errors = {};

  error = validateFirstName(values.name);
  if (error) {
    errors.name = error;
    }

    
  error = validateMobileNumber(values.mobileNumber);
  if (error) {
    errors.mobileNumber = error;
    }
    

    error = validateAddress(values.address);
  if (error) {
    errors.address = error;
    }

    error = validatePincode(values.pincode);
  if (error) {
    errors.pincode = error;
    }

    error = validateAddressType(values.type);
  if (error) {
    errors.type = error;
    }
  

  return errors;
};
