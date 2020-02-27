class ForgotPassword {

  get forgotPasswordBtn() {
    return '[data-qaid="forgotPasswordBtn"]'
  }

  validateError() {
    return '[data-qaid="validateError_email"]'
  }

  get forgotPassError() {
    return '[data-qaid="forgotPassError"]'
  }

  get forgotPassSubmitBtn() {
    return '[data-qaid="forgotPassSubmitBtn"]'
  }
}




export default new ForgotPassword();
