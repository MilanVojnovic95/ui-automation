// 
// Fishingbooker booking cinfirmation page
// fishingbooker_booking_cinfirmation_page.js
// 


const BasePage = require('./base_page')
const HelpersPage = require('./helpers_page')


class BookingCOnfirmationPage extends BasePage {

    //Selectors
    get bookingID_Number() { return $('(//div[@class="media-body"])[3]') }


    // Methods

    checkIfBookingIsConfirmed() { 
        this.isDisplayed(this.bookingID_Number)
    }

    getBookingId() {
        HelpersPage.writeToFile("bookingID.txt", this.getText(this.bookingID_Number))
    }


}

module.exports = new BookingCOnfirmationPage()