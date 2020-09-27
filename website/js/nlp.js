const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const cors = require("cors")
// const JSON = require("json")
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

const port = 5000
//http://localhost:4000/api/nlp
app.get('/api/nlp', (req, res) => {
// run your nlp here from 
// variable from front end 
 var text = req.query.test;
var response = quickstart(text)
  console.log(req.query)
  console.log(text)
// send back to client 
res.send(JSON.stringify({data:response}))//text sent back 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


console.log("HI")
//quickstart();
function quickstart(text) {
/**
 * TODO(developer): Uncomment the following line to run this code.
 */
//const text = 'apples are yummy and bananas are tasty and food is good and i like pears and fruits and oranges and pineapples and grapes and watermelon and melons!';

// Prepares a document, representing the provided text
// var document = 

// Classifies text in the document
async function googleAnalyze(document) {
  
const [classification] = await client.classifyText({document});
console.log('Categories:');
classification.categories.forEach(category => {
  console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
});
return classification.categories
}
document = {
  content: text,
  type: 'PLAIN_TEXT',
}
googleAnalyze(document) .then(data => console.log(data))
.catch(reason => console.log(reason.message))


}


