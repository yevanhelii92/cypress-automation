class ContactBlock {
  get block() {
    return $('[data-qaid="contactsBlock"]')
  }

  get closeBtn() {
    return $('.select-dropdown__content .select-dropdown__close-button')
  }

  get contactTitle() {
    return $('[data-qaid="title"]')
  }

  get subtitle() {
    return $('[data-qaid="subtitle"]')
  }

  get phonesList() {
    return $('[data-qaid="phonesList"]')
  }

  get workingHoursTitle() {
    return $('[data-qaid="workingHoursTitle"]')
  }

  get workingHours() {
    return $('[data-qaid="workingHours"]')
  }

  get orderCallbackTitle() {
    return $('[data-qaid="orderCallbackTitle"]')
  }

  get callbackInput() {
    return $('[data-qaid="callbackInput"] .input')
  }

  get callbackError() {
    return $('[data-qaid="callbackInput"] .form-control__error')
  }

  get callbackSubmitBtn() {
    return $('[data-qaid="callbackSubmitBtn"]')
  }
}

export default new ContactBlock();
