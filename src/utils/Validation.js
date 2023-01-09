/* eslint-disable no-useless-escape */
const Validation = {
  emailValidation: function (email) {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  },
  urlValidation: function (url) {
    // eslint-disable-next-line no-useless-escape
    if (
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        url
      )
    ) {
      return true;
    }
    return false;
  },
  passwordValidation: function (password) {
    // eslint-disable-next-line no-useless-escape
    if (
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,}$/.test(
        password
      )
    ) {
      // if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{6,8}$/.test(password)) {
      return true;
    }
    return false;
  },
  mobileValidation: function (mobileNo) {
    if (mobileNo.trim().length > 9) {
      return true;
    }
    return false;
  },
};
export default Validation;
