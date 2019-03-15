var request = require("request");
const { Given, When, Then } = require("cucumber");
const assert = require("assert");
var country;

When("user wants to get information about Europe", function(callback) {
  request(
    "https://restcountries.eu/rest/v2/region/europe",
    (err, response, body) => {
      if (err) {
        callback(err);
      } else {
        country = JSON.parse(body);
        callback();
      }
    }
  );
});

Then("the response data is returned on JSON format", function(callback) {
  console.log(country);
  callback();
  return country;
});
