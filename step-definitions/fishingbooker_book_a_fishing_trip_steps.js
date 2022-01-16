// 
// Fishingbooker book a fishing trip steps
// fishingbooker_book_a_fishing_trip_steps.js
// 


const { Given, When, Then } = require('@wdio/cucumber-framework');

const BrowserPage = require('../pageobjects/fishingbooker_browser_page');
const userData = require('../config/data/userData')
const cardData = require('../config/data/cardData')
const messageForCaptainData = require('../config/data/messageForCaptainData')
const ChartersPage = require('../pageobjects/fishingbooker_charters_page');
const DetailsPage = require('../pageobjects/fishingbooker_details_page.js');
const PaymentPage = require('../pageobjects/fishingbooker_choose_payment_method_page');
const ConfirmationPage= require('../pageobjects/fishingbooker_booking_cinfirmation_page');


Given(/^I am on Pike Predator Tour charter page$/, function () {
    BrowserPage.openFishingbooker();
    ChartersPage.checkIfYouAreOnPikePredatorTourPage();
});

When(/^I book Single Fisherman Special$/, function() {
    ChartersPage.determineTrip();
    ChartersPage.instantBook();
    DetailsPage.enterUserData(userData.firstName, userData.lastName, userData.email, userData.phoneNumber);
    DetailsPage.messageToCaptain(messageForCaptainData.message);
    DetailsPage.continue();
    PaymentPage.enterCardInfo(cardData.cardNumber, cardData.expiryDate, cardData.securityCode, cardData.nameOnCard, cardData.postalCode)
    PaymentPage.submitPayment();
});

Then(/^I should see notification that my booking is confirmed$/, function () {
    ConfirmationPage.checkIfBookingIsConfirmed();
});

Then(/^I should get booking number$/, function () {
    ConfirmationPage.getBookingId();
});

