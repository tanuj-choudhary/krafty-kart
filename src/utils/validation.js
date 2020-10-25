const isValidEmail = (email) => {
  const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (validEmailRegex.test(email)) {
    return true;
  }
  return false;
};

const isValidPassword = (password) => {
  const validPasswordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (validPasswordRegex.test(password)) {
    return true;
  }
  return false;
};

const isValidNumber = (number) => {
  const phoneno = /^\d{10}$/;
  
  if (number.match(phoneno)) {
    return true;
  }

  return false;
};

const isValidPincode = pincode => {
  const pincodeRegex = /^\d{6}$/;

  if (pincode.match(pincodeRegex)) {
    return true;
  }

  return false;
};

// Validate email
export const validateEmail = (email) => {
  let error = null;

  if (!email) {
    error = 'required';
  } else if (!isValidEmail(email)) {
    error = 'Please enter a valid email';
  }

  return error;
};

// Validate Password
export const validatePassword = (password) => {
  let error = null;

  if (!password) {
    error = 'required';
  } else if (!isValidPassword(password)) {
    error = 'Password must contain one Uppercase,lowercase letter & length>8';
  }

  return error;
};

// Validate Firstname
export const validateFirstName = (firstname) => {
  let error = null;

  if (!firstname) {
    error = 'required';
  } else if (firstname.length > 15) {
    error = 'firstname should be less than 15 characters';
  }

  return error;
};

// Validate Last name
export const validateLastName = (lastname) => {
  let error = null;

  if (!lastname) {
    error = 'required';
  } else if (lastname.length > 15) {
    error = 'lastname should be less than 15 characters';
  }

  return error;
};

// Validate Confirm Password
export const validateConfirmPassword = (password, confirmpassword) => {
  let error = null;

  if (!confirmpassword) {
    error = 'required';
  } else if (confirmpassword !== password) {
    error = 'Password and confirm password should match';
  }

  return error;
};

// Validate email
export const validateMobileNumber = (number) => {
  let error = null;

  if (!number) {
    error = 'required';
  } else if (!isValidNumber(number)) {
    error = 'Please enter a valid number';
  }

  return error;
};

// Validate address
export const validateAddress = (address) => {
  let error = null;

  if (!address) {
    error = 'Required';
  }

  return error;
};

// Validate pincode
export const validatePincode = (pincode) => {
  let error = null;

  if (!pincode) {
    error = 'Required';
  } else if (!isValidPincode(pincode)) {
    error = 'Invalid pincode';
  }

  return error;
};

// Validate type
export const validateAddressType = (addressType) => {
  let error = null;

  if (!addressType) {
    error = 'Required';
  } else if (addressType !== 'work' && addressType !== 'home') {
    error = 'type can be home or work';
  }

  return error;
};