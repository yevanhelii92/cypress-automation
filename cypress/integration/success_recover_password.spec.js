import Header from '../pages/main/header.page';
import SignIn from '../pages/login/signin.page';
import ForgotPassword from '../pages/login/forgotPass.page'
import SuccessModal from '../pages/login/successModal.page'
import "cypress-localstorage-commands"

const popUpText = [
    {
        locator: SuccessModal.successTitle,
        shouldBe: 'Rozetka.travel',
    },
    {
        locator: SuccessModal.contentText,
        shouldBe: 'Новий пароль відправлено вам на пошту!',
    },
    {
        locator: SuccessModal.successBtn,
        shouldBe: "ОК",
    },
];


describe('Check forgot password modal window', () => {

    before(() => {
        cy.setLocalStorage("discountModalShown", "true");
        cy.visit('http://localhost:8091')
            .get(Header.headerLoginDD)
            .click()
            .get(ForgotPassword.forgotPasswordBtn)
            .click()
            .get(SignIn.usernameInput)
            .type('a.yevanhelii@qa2.ua')
            .get(ForgotPassword.forgotPassSubmitBtn)
            .click()
            .get(SuccessModal.modalWindow)
            .should('visible')
    });

    popUpText.forEach(function (checkModalText) {
        it(` - text in ${checkModalText.locator} correspond requirements`, function () {

            cy.get(checkModalText.locator)
                .contains(checkModalText.shouldBe)
                .should('visible')
        });
    });
});
