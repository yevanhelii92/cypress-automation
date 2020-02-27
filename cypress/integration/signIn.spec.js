import Header from '../pages/main/header.page';
import SignIn from '../pages/login/signin.page';
import "cypress-localstorage-commands"

const emptyField = (locator) => {
    cy.get(locator).click().blur()
}

const emailField = (locator, text) => {
    cy.get(locator).clear().type(text).blur()
}

const login = (username, password) => {
    cy.get(SignIn.usernameInput).clear().type(username)
        .get(SignIn.passwordInput).clear().type(password)
        .get(SignIn.submitBtn).click()
}

const placeholdersData = [
    {
        name: 'email',
        locator: ':nth-child(1) > .col > .form-control > .form-control__input-box > .input',
        shouldBe: 'address@email.com',
    },
    {
        name: 'password',
        locator: ':nth-child(2) > .col > .form-control > .form-control__input-box > .input',
        shouldBe: 'Пароль',
    },
];

const buttonsData = [
    {
        name:'facebookBtn',
        locator: SignIn.facebookBtn,
        shouldBe: 'Facebook',
    },
    {
        name:'googleBtn',
        locator: SignIn.googleBtn,
        shouldBe: 'Google',
    },
    {
        name:'forgotPasswordBtn',
        locator: SignIn.forgotPasswordBtn,
        shouldBe: 'Забули пароль?',
    },
    {
        name:'registrationBtn',
        locator: SignIn.submitBtn,
        shouldBe: 'Увійти',
    },
    {
        name:'registrationBtn',
        locator: SignIn.registrationBtn,
        shouldBe: 'Зареєструватись',
    },
    {
        name:'signInSocialTitle',
        locator: SignIn.signInSocialTitle,
        shouldBe: 'Увійти через соціальні мережі',
    },
];

const emptyFieldsData = [
    {
        name:'empty email',
        inputLocator: SignIn.usernameInput,
        locator: SignIn.validateEmail,
        shouldBe: "Обов'язкове поле",
    },
    {
        name:'empty password',
        inputLocator: SignIn.passwordInput,
        locator: SignIn.validatePassword,
        shouldBe: "Обов'язкове поле",
    },

]
const emailFieldData = [
{
    name:'email without "@"',
    inputLocator: SignIn.usernameInput,
    email: 'a.yevanheliismartweb.com.ua',
    locator: SignIn.validateEmail,
    shouldBe: 'Помилково введений e-mail',
},
{
    name:'email without "dot com"',
    inputLocator: SignIn.usernameInput,
    email: 'a.yevanhelii@smartweb',
    locator: SignIn.validateEmail,
    shouldBe: 'Помилково введений e-mail',
},
]

const credentialsData = [
    {
        name:'not register user',
        email: '123@123.com',
        password: '123456',
        locator: SignIn.loginError,
        shouldBe: 'Користувача не знайдено',
    },
    {
        name:'wrong password',
        email: 'a.yevanhelii@qa1.ua',
        password: '12345678',
        locator: SignIn.loginError,
        shouldBe: 'Невірний email або пароль',
    },
];

describe('Check sign in pop up window', () => {
    before(() => {
        cy.setLocalStorage("discountModalShown", "true");
        cy.visit('http://localhost:8091')
            .get(Header.headerLoginDD)
            .click()
    });

    it(' - check modal buttons and elements', () => {
        cy.get(SignIn.modalLogo)
            .should('visible')
            .get(SignIn.modalPicture)
            .should('visible')
            .get(SignIn.modalCloseBtn)
            .should('visible')
            .get(SignIn.facebookBtn)
            .should('visible')
            .get(SignIn.googleBtn)
            .should('visible')
            .get(SignIn.rememberMeCheckBox)
            .should('visible')
    });

    placeholdersData.forEach(function(checkPlaceholders) {
        it(` - ${checkPlaceholders.name} placeholder correspond requirements`, function() {
            cy.get(checkPlaceholders.locator)
                .should('have.attr', 'placeholder', checkPlaceholders.shouldBe)
        });
    });

    buttonsData.forEach(function(checkButtons) {
        it(` -${checkButtons.name} button correspond requirements`, function() {
            cy.get(checkButtons.locator)
                .contains(checkButtons.shouldBe)
                .should('be.exist')
        });
    });

    emptyFieldsData.forEach(function(checkEmptyFields) {
        it(` - check validation on input field using - ${checkEmptyFields.name}`, function() {
            emptyField(checkEmptyFields.inputLocator)

            cy.get(checkEmptyFields.locator)
                .contains(checkEmptyFields.shouldBe)
                .should('be.visible')
        });
    });

    emailFieldData.forEach(function(checkEmailFields) {
        it(` - check validation on input field using - ${checkEmailFields.name}`, function() {
            emailField(checkEmailFields.inputLocator, checkEmailFields.email)

            cy.get(checkEmailFields.locator)
                .contains(checkEmailFields.shouldBe)
                .should('be.visible')
        });
    });

    credentialsData.forEach(function(checkValidation) {
        it(` - check validation on input field using - ${checkValidation.name}`, function() {
            login(checkValidation.email, checkValidation.password)

            cy.get(checkValidation.locator)
                .contains(checkValidation.shouldBe)
                .should('be.visible')
        });
    });

    it(` - user must logged in to my account`, () => {
        login("a.yevanhelii@qa1.ua", "123456")
        cy.get(Header.headerLoginDD)
            .contains('a.yevanhelii@qa1.ua')
            .should('be.visible')
        });

})
