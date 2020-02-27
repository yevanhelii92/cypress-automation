import Page from '../page'

class SignUp extends Page  {
  registrationMethods(email, firstName, lastName, password) {
    this.emailInput.waitAndSetValue(email)
    this.firstNameInput.waitAndSetValue(firstName)
    this.lastNameInput.waitAndSetValue(lastName)
    this.passwordInput.waitAndSetValue(password)
    this.passwordConfirmInput.waitAndSetValue(password)
    this.registerBtn.click()

    return this;
  }

  get signInSocialTitle() {
    return $('[data-qaid=signInSocialTitle]')
  }

  get facebookBtn() {
    return $('._qa-facebook_btn')
  }

  get googleBtn() {
    return $('._qa-google_btn')
  }

  get emailInput() {
    return $('#email')
  }

  get emailError() {
    return $('[data-qaid="signup_email_error"]')
  }

  get firstNameInput() {
    return $('#first_name')
  }

  get firstNameError() {
    return $('[data-qaid="signup_first_name_error"]')
  }

  get lastNameInput() {
    return $('#last_name')
  }

  get lastNameError() {
    return $('[data-qaid="signup_last_name_error"]')
  }

  get passwordInput() {
    return $('#password');
  }

  get passwordError() {
    return $('[data-qaid="signup_password_error"]')
  }

  get passwordConfirmInput() {
    return $('#passwordConfirm');
  }

  get passwordConfirmError() {
    return $('[data-qaid="signup_passwordConfirm_error"]')
  }

  get registerCheckBox() {
    return $('[data-qaid="registerCheckBox"]')
  }

  get registerText() {
    return $('[data-qaid="registerText"]')
  }

  get registerBtn() {
    return $('[data-qaid="registerBtn"]')
  }

  get registerLoginBtn() {
    return $('[data-qaid="registerLoginBtn"]')
  }
}

export default new SignUp();
