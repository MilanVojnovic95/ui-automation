// 
// details page
// details_page.js
// 


const BasePage = require('./base_page')


class DetailsPage extends BasePage {

    //Selectors
    get firstName_Field() { return $('//input[@placeholder="Enter your first name"]') }
    get lastName_Field() { return $('//input[@placeholder="Enter your last name"]') }
    get email_Field() { return $('//input[@type="email"]') }
    get phoneNumber_Field() { return $('//input[@type="tel"]') }
    get messageToCaptain_Field() { return $('//textarea[@data-testid="special-requests-textarea"]') }
    get continue_Button() { return $('//button[@type="submit"]') }
    get country_Dropdown() { return $('//div[@class="selected-flag"]') }
    get countrySerbia_Dropdown() { return $('//li[@data-country-code="rs"]') }


    // Methods
    
    enterUserData(firstName, lastName, email, phoneNumber) {
        this.setValue(this.firstName_Field, firstName)
        this.setValue(this.lastName_Field, lastName)
        this.setValue(this.email_Field, email)
        this.click(this.country_Dropdown)
        this.click(this.countrySerbia_Dropdown)
        this.addValue(this.phoneNumber_Field, phoneNumber)
    }

    messageToCaptain(message) {
        this.click(this.messageToCaptain_Field)
        this.addValue(this.messageToCaptain_Field, message)
    }

    continue() {
        this.click(this.continue_Button)
    }
    

}

module.exports = new DetailsPage()