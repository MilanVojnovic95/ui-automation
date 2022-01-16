// 
// iam login page
// iam_login_page.js
// 


const BasePage = require('./base_page')
const { strictEqual } = require('assert')


class Charters extends BasePage {

    //Selectors
    get operatorName_Text() { return $('//h1[@class="headline"]') }
    get requestToBook_Button() { return $('//div/a[@id="bookbtn-main-cta"]') }
    get checkAvailability_Button() { return $('//button[@id="check-availability-btn"]')}
    get instantBook_Button() { return $('//button[1][@value="87269"]')}
    //Availability
    //Date
    //TODO :add selectors for date
    //Days
    get days_Dropdown() { return $('//select[@id="booking_days"]') }
    get oneDay_DropdownOption() { return $('//select[@id="booking_days"]/option[1]') }
    //Group size
    get groupSize_Option() { return $('//div[2][@class="search-form-persons"]') }
    //Adult
    get adults_Number() { return $('//div[@class="packages-outer-container without-date"]//strong[@class="adults-number"]') }
    get deductAdult_Button() { return $('//div[@class="packages-outer-container without-date"]//button[@class="fbkr-button white adults-children-btn adults-minus"]') }
    get addAdult_Button() { return $('//div[@class="packages-outer-container without-date"]//button[@class="fbkr-button white adults-children-btn adults-plus"]') }
    //Children
    get children_Number() { return $('//div[@class="packages-outer-container without-date"]//strong[@class="children-number"]') }
    get deductChildren_Button() { return $('//div[@class="packages-outer-container without-date"]//button[@class="fbkr-button white adults-children-btn children-minus"]') }
    get addChildren_Button() { return $('//div[@class="packages-outer-container without-date"]//button[@class="fbkr-button white adults-children-btn children-plus"]') }
    //Date
    get date_Dropdown() { return $('(//input[@placeholder="Trip Date"])[2]') }
    get date() { return $('(//td[@class="day"])[1]') }
    get nextArrow_Button() { return $('(//th[@class="next"])[1]') }


    // Methods

    determineTrip(){
        this.setNumberOfDays();
        this.setAdultNumber();
        this.setChildrenNumber();
        this.setDate();
        this.checkAvailability();
    }

    checkIfYouAreOnPikePredatorTourPage() {
        strictEqual(this.getText(this.operatorName_Text), 'Pike Predator Tour')
    }

    setAdultNumber() { 
        this.click(this.groupSize_Option)
        const adultNumber = this.getText(this.adults_Number)
        if (adultNumber === '2')  {
            this.click(this.deductAdult_Button)
        }
        else if (adultNumber === '0' ) {
            this.click(this.addAdult_Button)
        }
    }

    setChildrenNumber() { 
        const childrenNumber = this.getText(this.children_Number)
        if (childrenNumber === '0') {
            this.click(this.addChildren_Button)
        }
    }
    
    setDate() {
        this.click(this.date_Dropdown)
        while(!this.date.isDisplayed()) {
            this.click(this.nextArrow_Button)
        }
        this.click(this.date)
    }

    setNumberOfDays() {
        this.click(this.days_Dropdown)
        this.click(this.oneDay_DropdownOption)
    }

    checkAvailability() {
        this.click(this.checkAvailability_Button)
    }

    instantBook(){
        this.click(this.instantBook_Button)
    }
}

module.exports = new Charters()
