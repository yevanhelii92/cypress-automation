class SignIn {
  // visit() {
  //   cy.visit('/signin');
  // }
  //
  // loginMethods(email, password) {
  //   this.usernameInput.type(email)
  //   this.passwordInput.moveTo()
  //   this.passwordInput.type(password)
  //   this.submitBtn.click()
  //
  //   return this;
  // }

  waitAndSetValue(value) {
    this.usernameInput.clear()
    this.usernameInput.type(value)
  }

  get modalLogo() {
    return '.auth-modal__info .auth-modal__info-logo'
  }

  get modalPicture() {
    return '.auth-modal__info .auth-modal__info-image'
  }

  get modalCloseBtn() {
    return '.j-modal__content .j-modal__close'
  }

  get signInSocialTitle() {
    return '[data-qaid=signInSocialTitle]'
  }

  get facebookBtn() {
    return '._qa-facebook_btn'
  }

  get googleBtn() {
    return '._qa-google_btn'
  }

  get usernameInput() {
    return '[data-qaid="textInput_email"]'
  }

  get passwordInput() {
    return '[data-qaid="textInput_password"]'
  }

  get validateEmail() {
    return '[data-qaid="validateError_email"]'
  }

  get validatePassword() {
    return '[data-qaid="validateError_password"]'
  }

  get rememberMeCheckBox() {
    return '#remember'
  }

  get forgotPasswordBtn() {
    return '[data-qaid="forgotPasswordBtn"]'
  }

  get submitBtn() {
    return '.button > span'
  }

  get loginError() {
    return '[data-qaid="loginError"]'
  }

  get registrationBtn() {
    return '[data-qaid="registrationBtn"]'
  }
}

export default new SignIn();
