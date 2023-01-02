// validations of name for login/registration page
const validateName = (name) => {
    if (/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name)) {
      return (true)
    }
  
    return (false)
  }
  // validations of mail for login/registration page
  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
  
    return (false)
  }
  // validations of password textarea for login/registration page
  const checkPassword = (inputtxt) => {
    var passw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,}$)/;
    if (inputtxt.match(passw)) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = { validateName, validateEmail, checkPassword };