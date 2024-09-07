describe("Проверка авторизации", function() {

it("1: Проверка на позитивный кейс авторизации", function() {
  cy.visit("https://login.qa.studio/"); // Зашли на сайт
  cy.get('#mail') .type('german@dolnikov.ru') // Ввели верный логин
  cy.get('#pass') .type('iLoveqastudio1') // Ввели верный пароль
  cy.get('#loginButton').click(); // Нажал ввойти
  cy.get('#messageHeader').contains("Авторизация прошла успешно"); // Проверяю что после авторизации вижу текст
  cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден
  })

it("2: Проверка логики восстановления пароля", function() {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get('#forgotEmailButton').click() // Нажал на забыли пароль
    cy.get('#mailForgot').type('german@dolnikov.ru') // Ввел логин для восстановления
    cy.get('#restoreEmailButton').click() // Нажал на отправить код
    cy.get('#messageHeader').contains("Успешно отправили пароль на e-mail"); // После авторизации вижу текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден


})
it("3: Проверка на негативный кейс авторизации", function() {
    cy.visit("https://login.qa.studio/"); // Зашли на сайт
    cy.get('#mail') .type('german@dolnikov.ru') // Ввели верный логин
    cy.get('#pass') .type('agag124') // Ввели нверный пароль
    cy.get('#loginButton').click(); // Нажал ввойти
    cy.get('#messageHeader').contains("Такого логина или пароля нет"); // Проверяю что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден
    })
    it("4: Проверка на негативный кейс авторизации", function() {
        cy.visit("https://login.qa.studio/"); // Зашли на сайт
        cy.get('#mail') .type('german4234@dolnikov.ru') // Ввели неверный логин
        cy.get('#pass') .type('iLoveqastudi4') // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал ввойти
        cy.get('#messageHeader').contains("Такого логина или пароля нет"); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден
        })

        it("5: Проверка на негативный кейс валидации", function() {
            cy.visit("https://login.qa.studio/"); // Зашли на сайт
            cy.get('#mail') .type('german4234dolnikov.ru') // Ввели невалидный логин
            cy.get('#pass') .type('iLoveqastudi4') // Ввели верный пароль
            cy.get('#loginButton').click(); // Нажал ввойти
            cy.get('#messageHeader').contains("Нужно исправить проблему валидации"); // Проверяю что после авторизации вижу текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден
            })

            it("6: Проверка на приведение к строчным буквам ", function() {
                cy.visit("https://login.qa.studio/"); // Зашли на сайт
                cy.get('#mail') .type('GerMan@Dolnikov.ru') // Ввели логин
                cy.get('#pass') .type('iLoveqastudio1') // Ввели верный пароль
                cy.get('#loginButton').click(); // Нажал ввойти
                cy.get('#messageHeader').contains("Авторизация прошла успешно"); // Проверяю что после авторизации вижу текст
                cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден
                })



})
