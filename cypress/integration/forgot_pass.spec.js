import Header from '../pages/main/header.page';
import SignIn from '../pages/login/signin.page';
import ForgotPassword from '../pages/login/forgotPass.page'
import "cypress-localstorage-commands"

const differentEmail = [
    {
        email: 'yevanheliismartweb.com',
        shouldBe: 'Помилково введений e-mail',
    },
    {
        email: 'yevanhelii@smart',
        shouldBe: 'Помилково введений e-mail',
    },
    {
        email: 'yevanhelii',
        shouldBe: 'Помилково введений e-mail',
    },
    {
        email: ' ',
        shouldBe: "Обов'язкове поле",
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
    });

    it('correspond requirements ', () => {
        cy.get(SignIn.modalLogo)
            .should('visible')
            .get(SignIn.modalPicture)
            .should('visible')
            .get(SignIn.modalCloseBtn)
            .should('visible')
            .get(SignIn.usernameInput)
            .should('have.attr', 'placeholder', 'address@email.com')
            .get(ForgotPassword.forgotPassSubmitBtn)
            .should('contain', 'Відновити')
    });

    differentEmail.forEach(function(checkEmail) {
        it(` - check validation on input field using incorrect email: ${checkEmail.email}`, function() {
            cy.get(SignIn.usernameInput)
                .as('userNameInput')
                .type(checkEmail.email)
                .blur()
                .get(ForgotPassword.validateError)
                .contains(checkEmail.shouldBe)
                .get('@userNameInput')
                .clear()
        });
    });

    it(' - must show an error message with invalid credentials', () => {
        cy.get(SignIn.usernameInput)
            .as('userNameInput')
            .type("123@123.com")
            .get(ForgotPassword.forgotPassSubmitBtn)
            .click()
            .get(ForgotPassword.forgotPassError)
            .contains('Користувача не знайдено')
    });
});
