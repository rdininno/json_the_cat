const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(" ERROR: ", error);
  }

  let data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log("Description: ", data[0].description);
  } else {
    console.log("Breed not found");
  }
});