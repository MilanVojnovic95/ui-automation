// 
// Exports data
// cardData.js
// 

require('dotenv').config()

module.exports = {

    cardNumber: '4111 1111 1111 1111',
    expiryDate: process.env.expDate,
    securityCode: process.env.cvv,
    nameOnCard: 'Milan Vojnovic',
    postalCode: '21235'
}  