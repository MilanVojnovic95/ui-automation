// 
// choose payment method page
// choose_payment_method_page.js
// 


const BasePage = require('./base_page')
const { strictEqual } = require('assert')


class ChoosePaymentMethodPage extends BasePage {

    //Selectors
    get finalStep_Checkmark() { return $('//span[@class="sc-gtfDJT gHcaOJ"]') }
    get cardNumber_Field() { return $('//input[@id="credit-card-number"]') }
    get frame() { return $('//iframe[@id="braintree-hosted-field-number"]') }
    get expiryDate_Field() { return $('//input[@id="expiration"]') }
    get securityCode_Field() { return $('//input[@id="cvv"]') }
    get postalCode_Field() { return $('//input[@class="postalCode"]') }
    get nameOnCard_Field() { return $('//input[@class="cardholderName"]') }
    get billingCountry_Dropdown() { return $('//select[@autocomplete="country-name"]') }
    get serbia_DropdownOption() { return $('//option[@value="rs"]') }
    get submitPayment_Button() { return $('//button[@type="submit"]') }
    
     
    // Methods

    enterCardInfo(cardNumber, expiryDate, securityCode, nameOnCard, postalCode) { 
        strictEqual(this.getText(this.finalStep_Checkmark), '3')
        let numberFrame= browser.$('#braintree-hosted-field-number');
        browser.switchToFrame(numberFrame);
        this.setValue(this.cardNumber_Field, cardNumber)
        browser.switchToParentFrame()
        let expiryFrame= browser.$('#braintree-hosted-field-expirationDate');
        browser.switchToFrame(expiryFrame);
        this.setValue(this.expiryDate_Field, expiryDate)
        browser.switchToParentFrame()
        let cvvFrame= browser.$('#braintree-hosted-field-cvv');
        browser.switchToFrame(cvvFrame);
        this.setValue(this.securityCode_Field, securityCode)
        browser.switchToParentFrame()
        let nameFrame= browser.$('#braintree-hosted-field-cardholderName');
        browser.switchToFrame(nameFrame);
        this.setValue(this.nameOnCard_Field, nameOnCard)
        browser.switchToParentFrame()
        let postalFrame= browser.$('#braintree-hosted-field-postalCode');
        browser.switchToFrame(postalFrame);
        this.setValue(this.postalCode_Field, postalCode)
        browser.switchToParentFrame()
    }

    submitPayment() { 
        this.click(this.submitPayment_Button)
    }

    
    

}

module.exports = new ChoosePaymentMethodPage()