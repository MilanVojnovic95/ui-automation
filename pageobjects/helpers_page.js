//
// Helpers page
// Helpers_page.js
//

const BasePage = require('./base_page');
const fs = require("fs");


class HelpersPage extends BasePage {

  writeToFile(file, data) {
    fs.writeFile("./config/helpersText/" + file, data, (err) => {
      console.log("Error: ", err);
    });
  }
 
}

module.exports = new HelpersPage();
