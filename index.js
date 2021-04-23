const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    let keyword = req.query.keyword;

    let url = 'https://svcs.ebay.com/services/search/FindingService/v1'
    url += '?OPERATION-NAME=findItemsByKeywords'
    url += '&SERVICE-VERSION=1.0.0'
    url += '&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e'
    url += '&keywords=' + keyword
    url += '&RESPONSE-DATA-FORMAT=JSON'

    fetch(url)
        .then(response => response.json())
        .then(myJsonresponse => res.send(myJsonresponse))
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});