const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) => {
  console.log(destination, content);
  // readFromFile]
  // convert with json.parse
  // use req.body to append that data
  // writeAsync to write the data from the request (+ original data)

}
// fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//   err ? console.error(err) : console.info(`\nData written to ${destination}`)
// );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  readFromFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = [].concat(JSON.parse(data));
      parsedData.push((content))
      console.log(parsedData);
      writeAsync(file, JSON.stringify(parsedData));

    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };