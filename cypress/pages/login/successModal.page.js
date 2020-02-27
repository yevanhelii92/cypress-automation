class SuccessModal {

  get modalWindow() {
    return ('.j-modal__content.j-modal__confirm.success')
  }

  get successTitle() {
    return ('[data-qaid="successModalTitle"]')
  }

  get successText() {
    return ('[data-qaid="successModalText"]')
  }

  get contentText() {
    return ('[data-qaid="successContentText"]')
  }

  get successBtn() {
    return ('[data-qaid="successModalBtn"]')
  }
}

export default new SuccessModal();
