const AuthLoginValidator = function(data) {
  let valid = true;
  if (!data.uid) {
    valid = false;
  } else if (!data.password || data.password.length < 8) {
    valid = false;
  }
  return valid;
};

export default AuthLoginValidator;
