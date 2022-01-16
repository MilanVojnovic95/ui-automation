// 
// Fishingbooker browser page 
// fishingbooker_browser_page.js
// 

const urls = require('../config/url')
const ENV = process.env.ENV

class BrowserFishingbooker {

    openFishingbooker() {

        if (ENV == 'qaHiringDev') {
            browser.url(urls.qaHiringDev)   
    }

    
    }
    
}

module.exports = new BrowserFishingbooker()